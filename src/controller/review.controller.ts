// src/controller/review.controller.ts
import { Request, Response } from "express";
import prisma from "../prisma";

interface ReviewBody {
  eventId: number;
  rating: number;
  comment: string;
}

interface ReviewParams {
  reviewId?: string;
  eventId?: string;
}

interface CustomRequest extends Request {
  user?: { id: string };
  promotor?: { id: string };
}

export class ReviewController {
  // Modified createReview function in review.controller.ts
  async createReview(
    req: Request<{}, {}, ReviewBody>,
    res: Response
  ): Promise<void> {
    try {
      const { eventId, rating, comment } = req.body;
      const userId = (req as CustomRequest).user?.id;

      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      // Check for existing review
      const existingReview = await prisma.reviews.findFirst({
        where: {
          userId,
          eventId,
        },
      });

      if (existingReview) {
        res.status(400).json({
          message: "You have already reviewed this event",
        });
        return;
      }

      const event = await prisma.event.findUnique({
        where: { id: eventId },
      });

      if (!event) {
        res.status(404).json({ message: "Event not found" });
        return;
      }

      const eventDate = new Date(event.date);
      const now = new Date();

      if (eventDate > now) {
        res.status(400).json({
          message: "Cannot review an event that hasn't finished yet",
        });
        return;
      }

      const userOrder = await prisma.order.findFirst({
        where: {
          userId,
          eventId,
          status: "PAID",
        },
      });

      if (!userOrder) {
        res.status(400).json({
          message: "You can only review events you have attended",
        });
        return;
      }

      const review = await prisma.reviews.create({
        data: {
          rating,
          comment,
          user: {
            connect: { id: userId },
          },
          event: {
            connect: { id: eventId },
          },
        },
        include: {
          user: {
            select: {
              username: true,
              avatar: true,
            },
          },
        },
      });

      res.status(201).json({
        message: "Review created successfully",
        review,
      });
    } catch (error) {
      console.error("Create review error:", error);
      res.status(500).json({
        message: "Failed to create review",
      });
    }
  }

  async getEventReviews(
    req: Request<ReviewParams>,
    res: Response
  ): Promise<void> {
    try {
      const { eventId } = req.params;

      if (!eventId) {
        res.status(400).json({ message: "Event ID is required" });
        return;
      }

      const reviews = await prisma.reviews.findMany({
        where: {
          eventId: Number(eventId),
        },
        include: {
          user: {
            select: {
              username: true,
              avatar: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      res.status(200).json(reviews);
    } catch (error) {
      console.error("Get reviews error:", error);
      res.status(500).json({
        message: "Failed to fetch reviews",
      });
    }
  }

  async getPromotorEvents(req: Request, res: Response): Promise<void> {
    try {
      const promotorId = (req as CustomRequest).promotor?.id;

      if (!promotorId) {
        res.status(401).json({ message: "Unauthorized" });
        return;
      }

      const events = await prisma.event.findMany({
        where: {
          promotorId,
        },
        include: {
          reviews: {
            include: {
              user: {
                select: {
                  username: true,
                  avatar: true,
                },
              },
            },
          },
          tickets: true,
        },
        orderBy: {
          date: "desc",
        },
      });

      const eventsWithStats = events.map((event) => {
        const reviews = event.reviews || [];
        const totalRating = reviews.reduce(
          (sum, review) => sum + review.rating,
          0
        );
        const averageRating =
          reviews.length > 0 ? totalRating / reviews.length : 0;

        return {
          ...event,
          stats: {
            totalReviews: reviews.length,
            averageRating: Number(averageRating.toFixed(1)),
          },
        };
      });

      res.status(200).json(eventsWithStats);
    } catch (error) {
      console.error("Get promotor events error:", error);
      res.status(500).json({
        message: "Failed to fetch events",
      });
    }
  }
}
