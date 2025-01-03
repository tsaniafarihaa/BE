import { Router } from "express";
import { PromotorController } from "../controller/promotor.controller";
import { verifyTokenPromotor } from "../middleware/verify.promotor";
import { uploader } from "../services/uploader";

export class PromotorRouter {
  private promotorController: PromotorController;
  private router: Router;

  constructor() {
    this.promotorController = new PromotorController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Public Routes
    this.router.get("/", this.promotorController.getPromotor);
    this.router.post("/", this.promotorController.createPromotor);

    // Protected Routes
    this.router.get(
      "/profile",
      verifyTokenPromotor,
      this.promotorController.getPromotorProfile
    );

    //Ganti avatar promotor
    this.router.patch(
      "/avatar-cloud",
      verifyTokenPromotor,
      uploader("memoryStorage", "avatar").single("file"),
      this.promotorController.editAvatarPromotor
    );
    
    this.router.patch(
      "/:id",
      verifyTokenPromotor,
      this.promotorController.editPromotor
    );
    this.router.delete(
      "/:id",
      verifyTokenPromotor,
      this.promotorController.deletePromotor
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
