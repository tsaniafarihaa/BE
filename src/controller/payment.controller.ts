// src/controller/payment.controller.ts
import { Request, Response } from "express";
import prisma from "../prisma";
import { midtransService } from "../services/midtrans";

export class PaymentController {
  async createPayment(req: Request, res: Response) {
    try {
      const { orderId } = req.body;
      const userId = req.user?.id;

      // Validate required fields
      if (!orderId || !userId) {
        console.log("Missing fields - orderId:", orderId, "userId:", userId);
        return res.status(400).json({ message: "Missing required fields" });
      }

      // Find the order
      const order = await prisma.order.findFirst({
        where: {
          id: Number(orderId),
          userId,
          status: "PENDING",
        },
        include: {
          user: true,
          event: true,
          details: {
            include: { tickets: true },
          },
        },
      });

      // Validate order exists
      if (!order || !order.event || !order.user) {
        return res
          .status(404)
          .json({ message: "Order not found or incomplete" });
      }

      const orderDetails = order.details[0];
      const ticket = orderDetails?.tickets[0];

      if (!orderDetails || !ticket) {
        return res.status(404).json({ message: "Ticket details not found" });
      }

      // Create transaction
      const transaction = await midtransService.createTransaction({
        orderId: `ORDER-${order.id}`,
        amount: order.finalPrice,
        itemDetails: [
          {
            id: ticket.id.toString(),
            price: ticket.price,
            quantity: orderDetails.quantity,
            name: `${order.event.title} - ${ticket.category}`,
          },
        ],
        customerDetails: {
          firstName: order.user.username,
          email: order.user.email,
        },
        callbacks: {
          finish: `${process.env.NEXT_PUBLIC_BASE_URL_FE}/payment/success?order_id=ORDER-${order.id}`,
          error: `${process.env.NEXT_PUBLIC_BASE_URL_FE}/payment/failed?order_id=ORDER-${order.id}`,
        },
      });

      // Update order with payment URL
      await prisma.order.update({
        where: { id: order.id },
        data: {
          paymentProof: transaction.redirect_url,
        },
      });

      return res.status(200).json({
        message: "Payment initiated",
        data: {
          paymentUrl: transaction.redirect_url,
          token: transaction.token,
        },
      });
    } catch (error) {
      console.error("Payment creation error:", error);
      return res.status(500).json({
        message: "Failed to create payment",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  async handleNotification(req: Request, res: Response) {
    try {
      console.log("RAW Notification:", req.body);

      const notification = await midtransService.handleNotification(req.body);
      console.log("Processed notification:", notification);

      // Perbaikan logic status handling
      const orderId = notification.order_id.replace("ORDER-", "");
      const transactionStatus = notification.transaction_status;

      let status: "PENDING" | "PAID" | "CANCELED" = "PENDING";

      // Update logic pengecekan status
      if (
        transactionStatus === "settlement" ||
        transactionStatus === "capture" ||
        transactionStatus === "success"
      ) {
        status = "PAID";
      } else if (
        transactionStatus === "deny" ||
        transactionStatus === "cancel" ||
        transactionStatus === "expire" ||
        transactionStatus === "failure"
      ) {
        status = "CANCELED";
      }

      console.log("Status will be updated to:", status);

      const updatedOrder = await prisma.order.update({
        where: { id: Number(orderId) },
        data: { status },
      });

      console.log("Order updated:", updatedOrder);

      return res.status(200).json({
        message: "Notification processed",
        orderId,
        status,
        transactionStatus,
      });
    } catch (error) {
      console.error("Notification error:", error);
      return res.status(500).json({ message: "Failed to handle notification" });
    }
  }

  async getOrderStatus(req: Request, res: Response) {
    try {
      const { orderId } = req.params;
      const userId = req.user?.id;

      if (!orderId || !userId) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const order = await prisma.order.findFirst({
        where: {
          id: Number(orderId),
          userId,
        },
        include: {
          event: true,
          details: {
            include: {
              tickets: true,
            },
          },
        },
      });

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      const midtransStatus = await midtransService.getStatus(
        `ORDER-${orderId}`
      );

      return res.status(200).json({
        order,
        paymentStatus: midtransStatus,
      });
    } catch (error) {
      console.error("Get order status error:", error);
      return res.status(500).json({
        message: "Failed to get payment status",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  async updateOrderStatus(req: Request, res: Response) {
    try {
      const { orderId, status } = req.body;

      if (!orderId || !status) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const updatedOrder = await prisma.order.update({
        where: { id: Number(orderId) },
        data: {
          status: status as "PENDING" | "PAID" | "CANCELED",
        },
      });

      return res.status(200).json({
        message: "Order status updated",
        order: updatedOrder,
      });
    } catch (error) {
      console.error("Update order status error:", error);
      return res.status(500).json({ message: "Failed to update order status" });
    }
  }
}
