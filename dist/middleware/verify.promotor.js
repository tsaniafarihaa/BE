"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenPromotor = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyTokenPromotor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Get token from cookies
        const token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
        if (!token) {
            throw { message: "Unauthorized!" };
        }
        // Verify the token
        const verifiedPromotor = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        req.promotor = verifiedPromotor;
        next();
    }
    catch (err) {
        console.error("Token verification error:", err);
        res.status(401).json({ message: "Unauthorized!", error: err });
    }
});
exports.verifyTokenPromotor = verifyTokenPromotor;
