// src/controller/edit.controller.ts
import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../services/cloudinary";

export class EditEventController {
  async getEventForEdit(req: Request, res: Response) {
    try {
      const eventId = parseInt(req.params.id);
      const promotorId = req.promotor?.id;

      if (!promotorId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const event = await prisma.event.findFirst({
        where: {
          id: eventId,
          promotorId,
        },
        include: {
          tickets: true,
        },
      });

      if (!event) {
        return res
          .status(404)
          .json({ message: "Event not found or unauthorized" });
      }

      return res.status(200).json(event);
    } catch (error) {
      console.error("Get event for edit error:", error);
      return res.status(500).json({
        message: "Failed to fetch event",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  async updateEvent(req: Request, res: Response) {
    try {
      const eventId = parseInt(req.params.id);
      const promotorId = req.promotor?.id;

      if (!promotorId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      // Check if event exists and belongs to promotor
      const existingEvent = await prisma.event.findFirst({
        where: {
          id: eventId,
          promotorId,
        },
      });

      if (!existingEvent) {
        return res
          .status(404)
          .json({ message: "Event not found or unauthorized" });
      }

      // Handle file upload if there's a new banner
      let thumbnailUrl = existingEvent.thumbnail;
      if (req.file) {
        const result = await cloudinaryUpload(req.file, "events");
        thumbnailUrl = result.secure_url;
      }

      // Parse date and time
      const eventDate = new Date(req.body.date);
      const [hours, minutes] = req.body.time.split(":");
      const eventTime = new Date(eventDate);
      eventTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      // Parse tickets data
      const tickets = JSON.parse(req.body.tickets);

      // Update event using transaction
      const updatedEvent = await prisma.$transaction(async (prisma) => {
        // Update main event details
        const event = await prisma.event.update({
          where: { id: eventId },
          data: {
            title: req.body.title,
            category: req.body.category,
            location: req.body.location,
            venue: req.body.venue,
            description: req.body.description,
            date: eventDate,
            time: eventTime,
            thumbnail: thumbnailUrl,
          },
        });

        // Update tickets
        for (const ticket of tickets) {
          await prisma.ticket.update({
            where: { id: ticket.id },
            data: {
              category: ticket.category,
              price: ticket.price,
              quantity: ticket.quantity,
            },
          });
        }

        return event;
      });

      return res.status(200).json({
        message: "Event updated successfully",
        data: updatedEvent,
      });
    } catch (error) {
      console.error("Update event error:", error);
      return res.status(500).json({
        message: "Failed to update event",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
