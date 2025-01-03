"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const verify_user_1 = require("../middleware/verify.user");
const uploader_1 = require("../services/uploader");
class UserRouter {
    constructor() {
        this.userController = new user_controller_1.UserController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.userController.getUser);
        // this.router.post("/", this.userController.createUser);
        this.router.patch("/avatar-cloud", verify_user_1.verifyTokenUser, (0, uploader_1.uploader)("memoryStorage", "avatar").single("file"), this.userController.editAvatarUser);
        this.router.get("/profile", verify_user_1.verifyTokenUser, this.userController.getUserProfile);
        this.router.patch("/:id", this.userController.editUser);
        this.router.delete("/:id", this.userController.deleteUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
