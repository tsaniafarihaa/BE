// src/router/payment.router.ts
import { Router } from "express";
import { PaymentController } from "../controller/payment.controller";
import { verifyToken } from "../middleware/verify";
import { Request, Response } from "express";

const router = Router();
const paymentController = new PaymentController();

router.post("/create", verifyToken, (req: Request, res: Response): void => {
  paymentController.createPayment(req, res);
});

router.post("/notification", (req: Request, res: Response): void => {
  console.log("Received notification:", req.body);
  paymentController.handleNotification(req, res);
});

router.post(
  "/update-status",
  verifyToken,
  (req: Request, res: Response): void => {
    paymentController.updateOrderStatus(req, res);
  }
);

router.get(
  "/order/:orderId",
  verifyToken,
  (req: Request, res: Response): void => {
    paymentController.getOrderStatus(req, res);
  }
);

export default router;
