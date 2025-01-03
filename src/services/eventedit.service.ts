// src/services/edit.service.ts
import prisma from "../prisma";
import { cloudinaryUpload } from "./cloudinary";
import { Prisma } from "../../prisma/generated/client";

export class EditEventService {
  async validateEventOwnership(eventId: number, promotorId: string) {
    const event = await prisma.event.findFirst({
      where: {
        id: eventId,
        promotorId,
      },
    });
    return event !== null;
  }

  async updateEvent(
    eventId: number,
    data: any,
    file?: Express.Multer.File,
    promotorId?: string
  ) {
    try {
      // Verify event ownership
      const isOwner = await this.validateEventOwnership(eventId, promotorId!);
      if (!isOwner) {
        throw new Error("Unauthorized to edit this event");
      }

      let thumbnailUrl: string | undefined;
      if (file) {
        const result = await cloudinaryUpload(file, "events");
        thumbnailUrl = result.secure_url;
      }

      const eventDate = new Date(data.date);
      const [hours, minutes] = data.time.split(":");
      const eventTime = new Date(eventDate);
      eventTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      // Start a transaction
      const updatedEvent = await prisma.$transaction(async (prisma) => {
        // Update main event details
        const event = await prisma.event.update({
          where: { id: eventId },
          data: {
            title: data.title,
            category: data.category,
            location: data.location,
            venue: data.venue,
            description: data.description,
            date: eventDate,
            time: eventTime,
            ...(thumbnailUrl && { thumbnail: thumbnailUrl }),
          },
        });

        // Update tickets
        if (data.tickets && Array.isArray(data.tickets)) {
          for (const ticket of data.tickets) {
            await prisma.ticket.update({
              where: { id: ticket.id },
              data: {
                category: ticket.category,
                price: ticket.price,
                quantity: ticket.quantity,
              },
            });
          }
        }

        return event;
      });

      // Fetch the complete updated event with tickets
      const completeEvent = await prisma.event.findUnique({
        where: { id: eventId },
        include: {
          tickets: true,
          promotor: {
            select: {
              name: true,
              avatar: true,
            },
          },
        },
      });

      return completeEvent;
    } catch (error) {
      console.error("Error in updateEvent service:", error);
      throw error;
    }
  }

  async getEventForEdit(eventId: number, promotorId: string) {
    try {
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
        throw new Error("Event not found or unauthorized");
      }

      return event;
    } catch (error) {
      console.error("Error in getEventForEdit service:", error);
      throw error;
    }
  }
}
