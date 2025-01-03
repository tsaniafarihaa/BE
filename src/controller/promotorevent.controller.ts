// src/controller/promotor.events.controller.ts
import { Request, Response } from "express";
import { PromotorEventService } from "../services/promotorevent.service";

interface CustomRequest extends Request {
  promotor?: { id: string };
}

export class PromotorEventsController {
  private promotorEventService: PromotorEventService;

  constructor() {
    this.promotorEventService = new PromotorEventService();
  }

  async getPromotorEvents(req: CustomRequest, res: Response) {
    try {
      const promotorId = req.promotor?.id;

      if (!promotorId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      console.log("Fetching events for promotor:", promotorId); // Debug log

      const events = await this.promotorEventService.getPromotorEvents(
        promotorId
      );
      res.status(200).json(events);
    } catch (error) {
      console.error("Get promotor events error:", error);
      res.status(500).json({
        message: "Failed to fetch events",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  async getUpcomingEvents(req: CustomRequest, res: Response) {
    try {
      const promotorId = req.promotor?.id;

      if (!promotorId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const events = await this.promotorEventService.getUpcomingEvents(
        promotorId
      );
      res.status(200).json(events);
    } catch (error) {
      console.error("Get upcoming events error:", error);
      res.status(500).json({
        message: "Failed to fetch upcoming events",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  async getPastEvents(req: CustomRequest, res: Response) {
    try {
      const promotorId = req.promotor?.id;

      if (!promotorId) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const events = await this.promotorEventService.getPastEvents(promotorId);
      res.status(200).json(events);
    } catch (error) {
      console.error("Get past events error:", error);
      res.status(500).json({
        message: "Failed to fetch past events",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
