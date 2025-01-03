// src/router/edit.router.ts
import { Router, Request, Response, NextFunction } from "express";
import { EditEventController } from "../controller/edit.controller";
import { verifyTokenPromotor } from "../middleware/verify.promotor";
import { validateUpdateEvent } from "../middleware/eventval";
import { uploader } from "../services/uploader";
import { asyncHandler } from "../utils/asyncHandler";

export class EditEventRouter {
  private router: Router;
  private editEventController: EditEventController;

  constructor() {
    this.router = Router();
    this.editEventController = new EditEventController();
    this.initializeRoutes();
  }

  private validateTickets = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    if (req.body.tickets && typeof req.body.tickets === "string") {
      try {
        req.body.tickets = JSON.parse(req.body.tickets);
        next();
      } catch (error) {
        res.status(400).json({
          message: "Invalid tickets format",
          error: "Tickets must be a valid JSON array",
        });
        return;
      }
    } else {
      next();
    }
  };

  private initializeRoutes() {
    // Get event for editing
    this.router.get(
      "/:id",
      verifyTokenPromotor,
      asyncHandler(async (req: Request, res: Response) => {
        await this.editEventController.getEventForEdit(req, res);
      })
    );

    // Update event
    this.router.patch(
      "/:id",
      verifyTokenPromotor,
      uploader("memoryStorage", "event-").single("banner"),
      this.validateTickets,
      validateUpdateEvent,
      asyncHandler(async (req: Request, res: Response) => {
        await this.editEventController.updateEvent(req, res);
      })
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

export const editEventRouter = new EditEventRouter();
