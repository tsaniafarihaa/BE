import { Request, Response } from "express";
import { EventDetailService } from "../services/detail.service";

export class EventDetailController {
  private eventDetailService: EventDetailService;

  constructor() {
    this.eventDetailService = new EventDetailService();
  }

  getAllEvents = async (req: Request, res: Response): Promise<void> => {
    try {
      const events = await this.eventDetailService.getAllEvents();
      res.status(200).json(events);
    } catch (error) {
      console.error("Error in getAllEvents:", error);
      res.status(500).json({ message: "Error fetching events" });
    }
  };

  getEventBySlug = async (req: Request, res: Response): Promise<void> => {
    try {
      const { slug } = req.params;
      const event = await this.eventDetailService.getEventBySlug(slug);
      res.status(200).json(event);
    } catch (error) {
      console.error("Error in getEventBySlug:", error);
      res.status(500).json({ message: "Error fetching event" });
    }
  };

  // src/controller/detail.controller.ts

  async getEventById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
        res.status(400).json({ message: "Invalid event ID" });
        return;
      }

      const event = await this.eventDetailService.getEventById(id);
      res.status(200).json(event);
    } catch (error) {
      console.error("Error in getEventById:", error);
      res.status(500).json({ message: "Error fetching event" });
    }
  }

  getTicketById = async (req: Request, res: Response): Promise<void> => {
    try {
      const ticketId = parseInt(req.params.id);
      const ticket = await this.eventDetailService.getTicketById(ticketId);

      if (!ticket) {
        res.status(404).json({ message: "Ticket not found" });
        return;
      }

      res.status(200).json(ticket);
    } catch (error) {
      console.error("Error in getTicketById:", error);
      res.status(500).json({ message: "Error fetching ticket" });
    }
  };

  searchEvents = async (req: Request, res: Response): Promise<void> => {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 9;
      const search = req.query.search as string;
      const category = req.query.category as string;
      const location = req.query.location as string;

      const result = await this.eventDetailService.getFilteredEvents(
        page,
        limit,
        search,
        category,
        location
      );

      res.status(200).json(result);
    } catch (error) {
      console.error("Error in searchEvents:", error);
      res.status(500).json({ message: "Error searching events" });
    }
  };
}
