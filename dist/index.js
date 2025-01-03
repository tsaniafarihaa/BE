"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const auth_router_1 = require("./router/auth.router");
const user_router_1 = require("./router/user.router");
const promotor_router_1 = require("./router/promotor.router");
const createevent_router_1 = require("./router/createevent.router");
const detail_router_1 = require("./router/detail.router");
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const PORT = 8000;
const base_url_fe = process.env.NEXT_PUBLIC_BASE_URL_FE;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: `${base_url_fe}`,
    credentials: true,
}));
const authRouter = new auth_router_1.AuthRouter();
const userRouter = new user_router_1.UserRouter();
const promotorRouter = new promotor_router_1.PromotorRouter();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());
app.use("/api/promotors", promotorRouter.getRouter());
app.use("/api/events", detail_router_1.eventDetailRouter.getRouter());
app.use("/api/events", createevent_router_1.eventRouter.getRouter());
app.get("/api", (req, res) => {
    res.send("Welcome to the API!");
});
app.listen(PORT, () => {
    console.log(`Server is running on -> http://localhost:${PORT}/api`);
});
