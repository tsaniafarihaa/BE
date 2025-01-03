"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = exports.CreateEventRouter = void 0;
const express_1 = require("express");
const create_controller_1 = require("../controller/create.controller");
const eventval_1 = require("../middleware/eventval");
const verify_promotor_1 = require("../middleware/verify.promotor");
const uploader_1 = require("../services/uploader");
const asyncHandler_1 = require("../utils/asyncHandler");
const prisma_1 = __importDefault(require("../prisma"));
class CreateEventRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.createEventController = new create_controller_1.CreateEventController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/create", verify_promotor_1.verifyTokenPromotor, (0, uploader_1.uploader)("memoryStorage", "event-").single("banner"), (req, res, next) => {
            console.log("Raw request body:", req.body);
            if (req.body.tickets && typeof req.body.tickets === "string") {
                try {
                    req.body.tickets = JSON.parse(req.body.tickets);
                    console.log("Parsed tickets:", req.body.tickets);
                    next();
                }
                catch (error) {
                    console.error("Error parsing tickets:", error);
                    res.status(400).json({
                        message: "Invalid tickets format",
                        error: "Tickets must be a valid JSON array",
                    });
                }
            }
            else {
                next();
            }
        }, eventval_1.validateCreateEvent, (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            yield this.createEventController.createEvent(req, res);
        })));
        this.router.get("/", (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const events = yield prisma_1.default.event.findMany({
                include: {
                    tickets: true,
                },
                orderBy: {
                    date: "asc",
                },
            });
            console.log("Fetched events:", events);
            res.json(events);
        })));
        this.router.get("/:id", (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const event = yield prisma_1.default.event.findUnique({
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
        })));
    }
    getRouter() {
        return this.router;
    }
}
exports.CreateEventRouter = CreateEventRouter;
exports.eventRouter = new CreateEventRouter();
