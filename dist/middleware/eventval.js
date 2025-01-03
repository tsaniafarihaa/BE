"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateEvent = void 0;
const joi_1 = __importDefault(require("joi"));
const validateCreateEvent = (req, res, next) => {
    const schema = joi_1.default.object({
        title: joi_1.default.string().required(),
        category: joi_1.default.string()
            .valid("Music", "Orchestra", "Opera", "Other")
            .required(),
        location: joi_1.default.string()
            .valid("Bandung", "Bali", "Surabaya", "Jakarta")
            .required(),
        venue: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        date: joi_1.default.string().required(),
        time: joi_1.default.string()
            .regex(/^([01]\d|2[0-3]):([0-5]\d)$/)
            .required(),
        eventType: joi_1.default.string().valid("free", "paid").required(),
        tickets: joi_1.default.array()
            .items(joi_1.default.object({
            category: joi_1.default.string().required(),
            price: joi_1.default.number().min(0).required(),
            quantity: joi_1.default.number().min(1).required(),
        }))
            .custom((value, helpers) => {
            const eventType = req.body.eventType;
            if (eventType === "free") {
                if (value.length !== 1 ||
                    value[0].price !== 0 ||
                    value[0].category !== "Free") {
                    return helpers.error("any.invalid");
                }
            }
            return value;
        })
            .required(),
    });
    console.log("Received request body:", JSON.stringify(req.body, null, 2));
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        console.log("Validation error:", error.details);
        res.status(400).json({
            message: "Validation error",
            errors: error.details.map((detail) => {
                var _a;
                return ({
                    field: (_a = detail.context) === null || _a === void 0 ? void 0 : _a.key,
                    message: detail.message,
                });
            }),
        });
        return;
    }
    next();
};
exports.validateCreateEvent = validateCreateEvent;
