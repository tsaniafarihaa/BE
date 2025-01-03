import { Router, Request, Response, NextFunction } from "express";
import { CreateEventController } from "../controller/create.controller";
import { validateCreateEvent } from "../middleware/eventval";
import { verifyTokenPromotor } from "../middleware/verify.promotor";
import { uploader } from "../services/uploader";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../prisma";

export class CreateEventRouter {
  public router: Router;
  private createEventController: CreateEventController;

  constructor() {
    this.router = Router();
    this.createEventController = new CreateEventController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/create",
      verifyTokenPromotor,
      uploader("memoryStorage", "event-").single("banner"),
      (req: Request, res: Response, next: NextFunction): void => {
        console.log("Raw request body:", req.body);

        if (req.body.tickets && typeof req.body.tickets === "string") {
          try {
            req.body.tickets = JSON.parse(req.body.tickets);
            console.log("Parsed tickets:", req.body.tickets);
            next();
          } catch (error) {
            console.error("Error parsing tickets:", error);
            res.status(400).json({
              message: "Invalid tickets format",
              error: "Tickets must be a valid JSON array",
            });
          }
        } else {
          next();
        }
      },
      validateCreateEvent,
      asyncHandler(async (req: Request, res: Response): Promise<void> => {
        await this.createEventController.createEvent(req, res);
      })
    );

    this.router.get(
      "/",
      asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const events = await prisma.event.findMany({
          include: {
            tickets: true,
          },
          orderBy: {
            date: "asc",
          },
        });
        console.log("Fetched events:", events);
        res.json(events);
      })
    );

    this.router.get(
      "/:id",
      asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params;
        const event = await prisma.event.findUnique({
          where: { id: parseInt(id) },
          include: {
            tickets: true,
          },
        });

        if (!event) {
          res.status(404).json({ message: "Event not found" });
          return;
        }

        res.json(event);
      })
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}

export const eventRouter = new CreateEventRouter();
