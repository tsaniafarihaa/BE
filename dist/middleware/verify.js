"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    var _a, _b;
    const token = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) || ((_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1]);
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    try {
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        if (decoded.type === "user") {
            req.user = { id: decoded.id };
        }
        else if (decoded.type === "promotor") {
            req.promotor = { id: decoded.id };
        }
        else {
            return res.status(403).json({ message: "Forbidden: Invalid token type" });
        }
        next();
    }
    catch (err) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
exports.verifyToken = verifyToken;
