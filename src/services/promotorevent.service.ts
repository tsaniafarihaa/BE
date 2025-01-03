// src/services/promotor.events.service.ts
import prisma from "../prisma";

export class PromotorEventService {
  async getPromotorEvents(promotorId: string) {
    try {
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

      // Add stats for each event
      return events.map((event) => {
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
    } catch (error) {
      console.error("Error in getPromotorEvents service:", error);
      throw error;
    }
  }

  async getUpcomingEvents(promotorId: string) {
    try {
      const now = new Date();
      return await prisma.event.findMany({
        where: {
          promotorId,
          date: {
            gt: now,
          },
        },
        include: {
          tickets: true,
        },
        orderBy: {
          date: "asc",
        },
      });
    } catch (error) {
      console.error("Error in getUpcomingEvents service:", error);
      throw error;
    }
  }

  async getPastEvents(promotorId: string) {
    try {
      const now = new Date();
      const events = await prisma.event.findMany({
        where: {
          promotorId,
          date: {
            lte: now,
          },
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

      return events.map((event) => {
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
    } catch (error) {
      console.error("Error in getPastEvents service:", error);
      throw error;
    }
  }
}
