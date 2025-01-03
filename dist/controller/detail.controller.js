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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDetailController = void 0;
const detail_service_1 = require("../services/detail.service");
class EventDetailController {
    constructor() {
        this.getAllEvents = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const events = yield this.eventDetailService.getAllEvents();
                res.json(events);
            }
            catch (error) {
                console.error("Get events error:", error);
                res.status(500).json({
                    message: "Failed to fetch events",
                    error: error instanceof Error ? error.message : "Unknown error",
                });
            }
        });
        this.getEventById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id);
                if (isNaN(id)) {
                    res.status(400).json({ message: "Invalid event ID" });
                    return;
                }
                const event = yield this.eventDetailService.getEventById(id);
                res.json(event);
            }
            catch (error) {
                console.error("Get event error:", error);
                res.status(500).json({
                    message: "Failed to fetch event",
                    error: error instanceof Error ? error.message : "Unknown error",
                });
            }
        });
        this.getEventBySlug = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const event = yield this.eventDetailService.getEventBySlug(req.params.slug);
                res.json(event);
            }
            catch (error) {
                console.error("Get event by slug error:", error);
                res.status(500).json({
                    message: "Failed to fetch event",
                    error: error instanceof Error ? error.message : "Unknown error",
                });
            }
        });
        this.eventDetailService = new detail_service_1.EventDetailService();
    }
}
exports.EventDetailController = EventDetailController;
