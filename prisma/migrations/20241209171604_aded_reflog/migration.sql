/*
  Warnings:

  - You are about to drop the `PointLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PointLog" DROP CONSTRAINT "PointLog_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "refLogId" INTEGER;

-- DropTable
DROP TABLE "PointLog";

-- CreateTable
CREATE TABLE "RefLog" (
    "id" SERIAL NOT NULL,
    "pointGet" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "isUsed" BOOLEAN NOT NULL,

    CONSTRAINT "RefLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_refLogId_fkey" FOREIGN KEY ("refLogId") REFERENCES "RefLog"("id") ON DELETE SET NULL ON UPDATE CASCADE;
