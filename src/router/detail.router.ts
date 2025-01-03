import { Router } from "express";
import { EventDetailController } from "../controller/detail.controller";
import { asyncHandler } from "../utils/asyncHandler";

export class EventDetailRouter {
  public router: Router;
  private eventDetailController: EventDetailController;

  constructor() {
    this.router = Router();
    this.eventDetailController = new EventDetailController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", asyncHandler(this.eventDetailController.getAllEvents));

    this.router.get(
      "/search",
      asyncHandler(this.eventDetailController.searchEvents)
    );

    this.router.get(
      "/slug/:slug",
      asyncHandler(this.eventDetailController.getEventBySlug)
    );

    // Tambahkan route untuk ticket SEBELUM /:id
    this.router.get(
      "/ticket/:id",
      asyncHandler(this.eventDetailController.getTicketById)
    );

    this.router.get(
      "/:id",
      asyncHandler(this.eventDetailController.getEventById)
    );

    this.router.get(
      "/ticket/:id",
      asyncHandler(this.eventDetailController.getTicketById)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

export const eventDetailRouter = new EventDetailRouter();
