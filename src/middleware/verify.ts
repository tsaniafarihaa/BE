// src/middleware/verify.ts
import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  try {
    const decoded = verify(token, process.env.JWT_KEY!) as {
      id: string;
      type: string;
    };

    if (decoded.type === "user") {
      req.user = { id: decoded.id };
    } else if (decoded.type === "promotor") {
      req.promotor = { id: decoded.id };
    } else {
      res.status(403).json({ message: "Forbidden: Invalid token type" });
      return;
    }

    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
    return;
  }
};
