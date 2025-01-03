// src/router/promotor.events.router.ts
import { Router } from "express";
import { Request, Response } from "express";
import { PromotorEventsController } from "../controller/promotorevent.controller";
import { verifyTokenPromotor } from "../middleware/verify.promotor";

export class PromotorEventsRouter {
  private router: Router;
  private controller: PromotorEventsController;

  constructor() {
    this.router = Router();
    this.controller = new PromotorEventsController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Get all events
    this.router.get("/", verifyTokenPromotor, (req: Request, res: Response) => {
      this.controller.getPromotorEvents(req, res);
    });

    // Get upcoming events
    this.router.get(
      "/upcoming",
      verifyTokenPromotor,
      (req: Request, res: Response) => {
        this.controller.getUpcomingEvents(req, res);
      }
    );

    // Get past events
    this.router.get(
      "/past",
      verifyTokenPromotor,
      (req: Request, res: Response) => {
        this.controller.getPastEvents(req, res);
      }
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
