"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventDetailRouter = exports.EventDetailRouter = void 0;
const express_1 = require("express");
const detail_controller_1 = require("../controller/detail.controller");
const asyncHandler_1 = require("../utils/asyncHandler");
class EventDetailRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.eventDetailController = new detail_controller_1.EventDetailController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", (0, asyncHandler_1.asyncHandler)(this.eventDetailController.getAllEvents));
        this.router.get("/slug/:slug", (0, asyncHandler_1.asyncHandler)(this.eventDetailController.getEventBySlug));
        this.router.get("/:id", (0, asyncHandler_1.asyncHandler)(this.eventDetailController.getEventById));
    }
    getRouter() {
        return this.router;
    }
}
exports.EventDetailRouter = EventDetailRouter;
exports.eventDetailRouter = new EventDetailRouter();
