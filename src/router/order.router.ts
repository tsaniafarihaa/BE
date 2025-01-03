import { Router, Request, Response } from "express";
import { OrderController } from "../controller/order.controller";
import { verifyTokenUser } from "../middleware/verify.user";
import { OrderRequest } from "../custom";

export class OrderRouter {
  private router: Router;
  private orderController: OrderController;

  constructor() {
    this.router = Router();
    this.orderController = new OrderController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Update route handlers with proper Request typing
    this.router.post(
      "/", // ini akan menjadi /api/orders
      verifyTokenUser,
      async (req: Request<{}, {}, OrderRequest>, res: Response) => {
        await this.orderController.createOrder(req, res);
      }
    );

    this.router.get(
      "/:id",
      verifyTokenUser,
      async (req: Request, res: Response) => {
        await this.orderController.getOrder(req, res);
      }
    );

    this.router.get(
      "/history/user",
      verifyTokenUser,
      async (req: Request, res: Response) => {
        await this.orderController.getUserOrders(req, res);
      }
    );

    this.router.patch(
      "/:id/status",
      verifyTokenUser,
      async (req: Request, res: Response) => {
        await this.orderController.updateOrderStatus(req, res);
      }
    );

    this.router.get(
      "/coupon-count/:eventId",
      verifyTokenUser,
      async (req: Request, res: Response) => {
        await this.orderController.getCouponCount(req, res);
      }
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
