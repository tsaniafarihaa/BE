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
exports.CreateEventService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("./cloudinary");
class CreateEventService {
    generateSlug(title) {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
    createEvent(data, file, promotorId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let thumbnailUrl;
                if (file) {
                    const result = yield (0, cloudinary_1.cloudinaryUpload)(file, "events");
                    thumbnailUrl = result.secure_url;
                }
                const eventDate = new Date(data.date);
                const [hours, minutes] = data.time.split(":");
                const eventTime = new Date();
                eventTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);
                const baseSlug = this.generateSlug(data.title);
                let finalSlug = baseSlug;
                let counter = 1;
                while (yield this.isSlugExists(finalSlug)) {
                    finalSlug = `${baseSlug}-${counter}`;
                    counter++;
                }
                const eventData = {
                    title: data.title,
                    slug: finalSlug,
                    thumbnail: thumbnailUrl,
                    category: data.category,
                    location: data.location,
                    venue: data.venue,
                    description: data.description,
                    date: eventDate,
                    time: eventTime,
                    promotor: promotorId
                        ? {
                            connect: { id: promotorId },
                        }
                        : undefined,
                    tickets: {
                        create: data.tickets.map((ticket) => ({
                            category: ticket.category,
                            price: ticket.price,
                            quantity: ticket.quantity,
                        })),
                    },
                };
                const event = yield prisma_1.default.event.create({
                    data: eventData,
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
                return event;
            }
            catch (error) {
                console.error("Detailed error in CreateEventService:", error);
                throw error;
            }
        });
    }
    isSlugExists(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingEvent = yield prisma_1.default.event.findFirst({
                where: { slug },
            });
            return !!existingEvent;
        });
    }
    getAllEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.event.findMany({
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
        });
    }
    getEventById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.event.findUnique({
                where: { id },
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
        });
    }
    getEventBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.event.findFirst({
                where: { slug },
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
        });
    }
}
exports.CreateEventService = CreateEventService;
