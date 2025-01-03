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
exports.CreateEventController = void 0;
const create_service_1 = require("../services/create.service");
class CreateEventController {
    constructor() {
        this.createEvent = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const promotorId = (_a = req.promotor) === null || _a === void 0 ? void 0 : _a.id;
                if (!promotorId) {
                    res.status(401).json({ message: "Unauthorized" });
                    return;
                }
                const event = yield this.createEventService.createEvent(req.body, req.file, promotorId);
                res.status(201).json({
                    message: "Event created successfully",
                    data: event,
                });
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
                console.error("Create event error:", errorMessage);
                res.status(500).json({
                    message: "Failed to create event",
                    error: errorMessage,
                });
            }
        });
        this.createEventService = new create_service_1.CreateEventService();
    }
}
exports.CreateEventController = CreateEventController;
