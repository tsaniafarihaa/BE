import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { PromotorPayload } from "../custom";

export const verifyTokenPromotor = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ message: "No authorization header found" });
      return;
    }

    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      res.status(401).json({ message: "Invalid token format" });
      return;
    }

    try {
      const verifiedPromotor = verify(token, process.env.JWT_KEY!);
      req.promotor = verifiedPromotor as PromotorPayload;
      next();
    } catch (verifyError) {
      res.status(401).json({ message: "Invalid token" });
      return;
    }
  } catch (err) {
    console.error("Token verification error:", err);
    res
      .status(500)
      .json({ message: "Internal server error during authentication" });
  }
};
