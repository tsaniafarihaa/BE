"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromotorRouter = void 0;
const express_1 = require("express");
const promotor_controller_1 = require("../controller/promotor.controller");
const verify_promotor_1 = require("../middleware/verify.promotor");
const uploader_1 = require("../services/uploader");
class PromotorRouter {
    constructor() {
        this.promotorController = new promotor_controller_1.PromotorController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        // Public Routes
        this.router.get("/", this.promotorController.getPromotor);
        this.router.post("/", this.promotorController.createPromotor);
        // Protected Routes
        this.router.get("/profile", verify_promotor_1.verifyTokenPromotor, this.promotorController.getPromotorProfile);
        //Ganti avatar promotor
        this.router.patch("/avatar-cloud", verify_promotor_1.verifyTokenPromotor, (0, uploader_1.uploader)("memoryStorage", "avatar").single("file"), this.promotorController.editAvatarPromotor);
        this.router.patch("/:id", verify_promotor_1.verifyTokenPromotor, this.promotorController.editPromotor);
        this.router.delete("/:id", verify_promotor_1.verifyTokenPromotor, this.promotorController.deletePromotor);
    }
    getRouter() {
        return this.router;
    }
}
exports.PromotorRouter = PromotorRouter;
