import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "../controller/user.controller";
import { verifyTokenUser } from "../middleware/verify.user";
import { uploader } from "../services/uploader";

export class UserRouter {
  private userController: UserController;
  private router: Router;

  constructor() {
    this.userController = new UserController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.userController.getUser);
    // this.router.post("/", this.userController.createUser);

    this.router.patch(
      "/avatar-cloud",
      verifyTokenUser,
      uploader("memoryStorage", "avatar").single("file"),
      this.userController.editAvatarUser
    );

    this.router.get(
      "/profile",
      verifyTokenUser,
      this.userController.getUserProfile
    );
    this.router.get(
      "/coupons",
      verifyTokenUser,
      this.userController.getUserCoupons
    );

    this.router.patch("/:id", this.userController.editUser);
    this.router.delete("/:id", this.userController.deleteUser);
  }

  getRouter(): Router {
    return this.router;
  }
}
