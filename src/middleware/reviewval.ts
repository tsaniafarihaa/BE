// src/middleware/reviewval.ts
import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const validateCreateReview = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const schema = Joi.object({
    eventId: Joi.number().required(),
    rating: Joi.number().min(1).max(5).required(),
    comment: Joi.string().min(10).max(500).required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400).json({
      message: "Validation error",
      errors: error.details.map((detail) => ({
        field: detail.context?.key,
        message: detail.message,
      })),
    });
    return;
  }

  next();
};
