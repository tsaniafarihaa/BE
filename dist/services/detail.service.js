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
exports.EventDetailService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class EventDetailService {
    getEventBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = yield prisma_1.default.event.findFirst({
                    where: {
                        slug: slug,
                    },
                    include: {
                        tickets: true,
                        promotor: {
                            select: {
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                });
                if (!event) {
                    throw new Error("Event not found");
                }
                return event;
            }
            catch (error) {
                console.error("Error in getEventBySlug:", error);
                throw error;
            }
        });
    }
    getAllEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma_1.default.event.findMany({
                    include: {
                        tickets: true,
                        promotor: {
                            select: {
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                    orderBy: {
                        date: "asc",
                    },
                });
            }
            catch (error) {
                console.error("Error in getAllEvents:", error);
                throw error;
            }
        });
    }
    getEventById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const event = yield prisma_1.default.event.findUnique({
                    where: {
                        id: Number(id),
                    },
                    include: {
                        tickets: true,
                        promotor: {
                            select: {
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                });
                if (!event) {
                    throw new Error("Event not found");
                }
                return event;
            }
            catch (error) {
                console.error("Error in getEventById:", error);
                throw error;
            }
        });
    }
}
exports.EventDetailService = EventDetailService;
