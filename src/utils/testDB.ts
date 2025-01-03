import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DIRECT_URL,
    },
  },
});

async function testConnection() {
  try {
    console.log("Testing database connection...");
    await prisma.$connect();
    console.log("Database connection successful!");

    const count = await prisma.user.count();
    console.log("Connection works! User count:", count);
  } catch (error) {
    console.error("Database connection failed:", error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
