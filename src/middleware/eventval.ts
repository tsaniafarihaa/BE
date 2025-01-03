// src/middleware/eventval.ts
import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const ticketSchema = Joi.object({
  category: Joi.string().required(),
  price: Joi.number().min(0).required(),
  quantity: Joi.number().min(1).required(),
});

const updateTicketSchema = ticketSchema.keys({
  id: Joi.number().required(),
});

const baseEventSchema = {
  title: Joi.string().required(),
  category: Joi.string()
    .valid("Music", "Orchestra", "Opera", "Other")
    .required(),
  location: Joi.string()
    .valid("Bandung", "Bali", "Surabaya", "Jakarta")
    .required(),
  venue: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().required(),
  time: Joi.string()
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
    .required(),
  eventType: Joi.string().valid("free", "paid").required(),
};

const createEventSchema = Joi.object({
  ...baseEventSchema,
  tickets: Joi.alternatives().conditional("eventType", {
    is: "paid",
    then: Joi.array().items(ticketSchema).min(1).required(),
    otherwise: Joi.array().items(ticketSchema).max(1),
  }),
});

const updateEventSchema = Joi.object({
  ...baseEventSchema,
  tickets: Joi.alternatives().conditional("eventType", {
    is: "paid",
    then: Joi.array().items(updateTicketSchema).min(1).required(),
    otherwise: Joi.array().items(updateTicketSchema).max(1),
  }),
});

const validateSchema = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (typeof req.body.tickets === "string") {
        req.body.tickets = JSON.parse(req.body.tickets);
      }

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
    } catch (error) {
      res.status(400).json({
        message: "Invalid request format",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
};

export const validateCreateEvent = validateSchema(createEventSchema);
export const validateUpdateEvent = validateSchema(updateEventSchema);
