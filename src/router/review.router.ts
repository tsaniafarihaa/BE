// src/router/review.router.ts
import { Router } from "express";
import { ReviewController } from "../controller/review.controller";
import { verifyTokenUser } from "../middleware/verify.user";
import { verifyTokenPromotor } from "../middleware/verify.promotor";

export class ReviewRouter {
  private reviewController: ReviewController;
  private router: Router;

  constructor() {
    this.reviewController = new ReviewController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Create a review (requires user authentication)
    this.router.post(
      "/create",
      verifyTokenUser,
      this.reviewController.createReview
    );

    // Get reviews for a specific event (public route)
    this.router.get("/event/:eventId", this.reviewController.getEventReviews);

    // Get all events with reviews for a promotor (requires promotor authentication)
    this.router.get(
      "/promotor/events",
      verifyTokenPromotor,
      this.reviewController.getPromotorEvents
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

export const reviewRouter = new ReviewRouter();
