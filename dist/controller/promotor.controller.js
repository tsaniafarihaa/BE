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
exports.PromotorController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("../services/cloudinary");
class PromotorController {
    getPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.promotor);
                const { search, page = 1 } = req.query;
                const limit = 10;
                const filter = {};
                if (search) {
                    filter.OR = [
                        { name: { contains: search, mode: "insensitive" } },
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const countPromotor = yield prisma_1.default.promotor.aggregate({
                    _count: { _all: true },
                });
                const total_page = Math.ceil(countPromotor._count._all / +limit);
                const promotor = yield prisma_1.default.promotor.findMany({
                    where: filter,
                    orderBy: { createdAt: "asc" },
                    take: limit,
                    skip: limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, promotor });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getPromotorProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const promotorId = (_a = req.promotor) === null || _a === void 0 ? void 0 : _a.id;
                console.log("Promotor ID from Request:", promotorId);
                if (!promotorId) {
                    res.status(400).json({ message: "Promotor ID is missing" });
                    return;
                }
                const promotor = yield prisma_1.default.promotor.findUnique({
                    where: { id: promotorId },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true,
                        createdAt: true,
                        updatedAt: true,
                        isVerify: true,
                    },
                });
                if (!promotor) {
                    res.status(404).json({ message: "Promotor not found" });
                    return; // Ensure no further code is executed
                }
                res.status(200).json(promotor);
            }
            catch (err) {
                console.error("Error fetching promotor profile:", err);
                res.status(500).json({ message: "Internal server error", error: err });
            }
        });
    }
    createPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPromotor = yield prisma_1.default.promotor.create({
                    data: req.body,
                });
                res.status(201).send("Promotor Created");
            }
            catch (err) {
                console.error("Error creating user:", err);
                res.status(400).send(err);
            }
        });
    }
    editPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatePromotor = yield prisma_1.default.promotor.update({
                    where: { id: id || "" },
                    data: req.body,
                });
                res.status(200).send("Promotor Updated");
            }
            catch (err) {
                console.error("Error updating promotor:", err);
                res.status(400).send("Error updating promotor");
            }
        });
    }
    deletePromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.promotor.delete({ where: { id } });
                res.status(200).send("User Deleted");
            }
            catch (err) {
                console.log(err);
                res.send(400).send(err);
            }
        });
    }
    editAvatarPromotor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "file empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "promotor_profile");
                yield prisma_1.default.promotor.update({
                    data: { avatar: secure_url },
                    where: { id: (_a = req.promotor) === null || _a === void 0 ? void 0 : _a.id },
                });
                res.status(200).send({ message: "avatar edited !" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.PromotorController = PromotorController;
