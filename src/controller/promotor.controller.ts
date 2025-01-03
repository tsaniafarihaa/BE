import { Prisma } from "../../prisma/generated/client";
import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../services/cloudinary";

export class PromotorController {
  async getPromotor(req: Request, res: Response) {
    try {
      console.log(req.promotor);
      const { search, page = 1 } = req.query;
      const limit = 10;
      const filter: Prisma.PromotorWhereInput = {};
      if (search) {
        filter.OR = [
          { name: { contains: search as string, mode: "insensitive" } },
          { email: { contains: search as string, mode: "insensitive" } },
        ];
      }
      const countPromotor = await prisma.promotor.aggregate({
        _count: { _all: true },
      });
      const total_page = Math.ceil(countPromotor._count._all / +limit);
      const promotor = await prisma.promotor.findMany({
        where: filter,
        orderBy: { createdAt: "asc" },
        take: limit,
        skip: limit * (+page - 1),
      });
      res.status(200).send({ total_page, page, promotor });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getPromotorProfile(req: Request, res: Response): Promise<void> {
    try {
      const promotorId = req.promotor?.id;
      console.log("Promotor ID from Request:", promotorId);

      if (!promotorId) {
        res.status(400).json({ message: "Promotor ID is missing" });
        return;
      }

      const promotor = await prisma.promotor.findUnique({
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
    } catch (err) {
      console.error("Error fetching promotor profile:", err);
      res.status(500).json({ message: "Internal server error", error: err });
    }
  }

  async createPromotor(req: Request, res: Response) {
    try {
      const newPromotor = await prisma.promotor.create({
        data: req.body,
      });

      res.status(201).send("Promotor Created");
    } catch (err) {
      console.error("Error creating user:", err);
      res.status(400).send(err);
    }
  }

  async editPromotor(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const updatePromotor = await prisma.promotor.update({
        where: { id: id || "" },
        data: req.body,
      });

      res.status(200).send("Promotor Updated");
    } catch (err) {
      console.error("Error updating promotor:", err);
      res.status(400).send("Error updating promotor");
    }
  }

  async deletePromotor(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.promotor.delete({ where: { id } });
      res.status(200).send("User Deleted");
    } catch (err) {
      console.log(err);
      res.send(400).send(err);
    }
  }
  async editAvatarPromotor(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "file empty" };
      const { secure_url } = await cloudinaryUpload(
        req.file,
        "promotor_profile"
      );

      await prisma.promotor.update({
        data: { avatar: secure_url },
        where: { id: req.promotor?.id },
      });
      res.status(200).send({ message: "avatar edited !" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
