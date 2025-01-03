import { Router } from "express";
import { AuthController } from "../controller/auth.controller";

export class AuthRouter {
  private authController: AuthController;
  private router: Router;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //FOR USER // Nanti buatlagi /protected untuk route pembayaran pakai verifyToken
   this.router.post("/login", this.authController.loginUser)
   this.router.post("/register", this.authController.registerUser)

   //FOR PROMOTOR
   this.router.post("/promotorRegister", this.authController.registerPromotor)
   this.router.post("/promotorLogin", this.authController.loginPromotor)

   //Untuk Session sugan bisa, bisa mantap
   this.router.get("/session", this.authController.getSession)

   //Untuk Verify
   this.router.post("/verifypromotor/:token", this.authController.verifyPromotor)
   this.router.patch("/verifypromotor/:token", this.authController.verifyPromotor)

   this.router.patch("/verifyuser/:token", this.authController.verifyUser)
   this.router.post("/verifyuser/:token", this.authController.verifyUser)

  }

  public getRouter(): Router {
    return this.router;
  }
}
