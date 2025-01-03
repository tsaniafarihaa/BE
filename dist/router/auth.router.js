"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
class AuthRouter {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        //FOR USER // Nanti buatlagi /protected untuk route pembayaran pakai verifyToken
        this.router.post("/login", this.authController.loginUser);
        this.router.post("/register", this.authController.registerUser);
        //FOR PROMOTOR
        this.router.post("/promotorRegister", this.authController.registerPromotor);
        this.router.post("/promotorLogin", this.authController.loginPromotor);
        //Untuk Session sugan bisa, bisa mantap
        this.router.get("/session", this.authController.getSession);
        //Untuk Verify
        this.router.post("/verifypromotor/:token", this.authController.verifyPromotor);
        this.router.patch("/verifypromotor/:token", this.authController.verifyPromotor);
        this.router.patch("/verifyuser/:token", this.authController.verifyUser);
        this.router.post("/verifyuser/:token", this.authController.verifyUser);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
