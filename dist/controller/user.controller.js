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
exports.UserController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("../services/cloudinary");
class UserController {
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.user);
                const { search, page = 1 } = req.query;
                const limit = 10;
                const filter = {};
                if (search) {
                    filter.OR = [
                        { username: { contains: search, mode: "insensitive" } },
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const countUser = yield prisma_1.default.user.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(countUser._count._all / +limit);
                const users = yield prisma_1.default.user.findMany({
                    where: filter,
                    orderBy: { createdAt: "asc" },
                    take: limit,
                    skip: limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, users });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getUserProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                console.log("User  ID from Request:", userId);
                if (!userId) {
                    res.status(400).json({ message: "User ID is missing" });
                    return;
                }
                const users = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    select: {
                        id: true,
                        username: true,
                        email: true,
                        avatar: true,
                        createdAt: true,
                        updatedAt: true,
                        isVerify: true,
                        percentage: true,
                        usercoupon: {
                            select: {
                                expiredAt: true,
                            },
                        },
                    },
                });
                if (!users) {
                    res.status(404).json({ message: "User not found" });
                    return;
                }
                res.status(200).json(users);
            }
            catch (err) {
                console.error("Error fetching users profile:", err);
                res.status(500).json({ message: "Internal server error", error: err });
            }
        });
    }
    editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const updatedUser = yield prisma_1.default.user.update({
                    where: { id: id || "" },
                    data: req.body,
                });
                res.status(200).send("User Updated");
            }
            catch (err) {
                console.error("Error updating user:", err);
                res.status(400).send("Error updating user");
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.user.delete({ where: { id } });
                res.status(200).send("User Deleted");
            }
            catch (err) {
                console.log(err);
                res.send(400).send(err);
            }
        });
    }
    editAvatarUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "file empty" };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "user_profile");
                yield prisma_1.default.user.update({
                    data: { avatar: secure_url },
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
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
exports.UserController = UserController;
