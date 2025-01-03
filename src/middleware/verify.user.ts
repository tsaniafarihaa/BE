import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserPayload } from "../custom";

export const verifyTokenUser = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;

    if (!token) {
      res.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const verifiedUser = verify(token, process.env.JWT_KEY!);
    req.user = verifiedUser as UserPayload;

    next();
  } catch (err) {
    console.error("Token verification error:", err);
    res
      .status(401)
      .json({ message: "Unauthorized: Invalid token", error: err });
  }
};
