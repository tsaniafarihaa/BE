"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReferalCode = void 0;
const generateReferalCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};
exports.generateReferalCode = generateReferalCode;
