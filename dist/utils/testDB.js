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
const client_1 = require("../../prisma/generated/client");
const prisma = new client_1.PrismaClient({
    datasources: {
        db: {
            url: process.env.DIRECT_URL,
        },
    },
});
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("Testing database connection...");
            yield prisma.$connect();
            console.log("Database connection successful!");
            const count = yield prisma.user.count();
            console.log("Connection works! User count:", count);
        }
        catch (error) {
            console.error("Database connection failed:", error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
testConnection();
