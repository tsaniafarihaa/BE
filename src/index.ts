import express from "express";
import cookieParser from "cookie-parser";
import { AuthRouter } from "./router/auth.router";
import { UserRouter } from "./router/user.router";
import { PromotorRouter } from "./router/promotor.router";
import { eventRouter } from "./router/createevent.router";
import { eventDetailRouter } from "./router/detail.router";
import paymentRouter from "./router/payment.router";
import { editEventRouter } from "./router/edit.router";
import { PromotorEventsRouter } from "./router/promotorevent.router";
import cors from "cors";
import "dotenv/config";
import { OrderRouter } from "./router/order.router";
import { reviewRouter } from "./router/review.router";

const PORT: number = 8000;
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: `${base_url_fe}`,
    credentials: true,
  })
);

// Initialize routers
const authRouter = new AuthRouter();
const userRouter = new UserRouter();
const promotorRouter = new PromotorRouter();
const orderRouter = new OrderRouter();
const promotorEventsRouter = new PromotorEventsRouter();

// Register routes
app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/promotors", promotorRouter.getRouter());
app.use("/api/events", eventDetailRouter.getRouter());
app.use("/api/events", eventRouter.getRouter());
app.use("/api/events/edit", editEventRouter.getRouter());
app.use("/api/promotors/events", promotorEventsRouter.getRouter());
app.use("/api/orders", orderRouter.getRouter());
app.use("/api/reviews", reviewRouter.getRouter());
app.use("/api/payment", paymentRouter);

// Base route
app.get("/api", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on -> http://localhost:${PORT}/api`);
});
