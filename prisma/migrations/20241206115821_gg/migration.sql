/*
  Warnings:

  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderDetail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Promotor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reviews` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserCoupon` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPoint` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserCoupons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_promotorId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "OrderDetail" DROP CONSTRAINT "OrderDetail_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Reviews" DROP CONSTRAINT "Reviews_userId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_orderDetailId_fkey";

-- DropForeignKey
ALTER TABLE "UserPoint" DROP CONSTRAINT "UserPoint_userId_fkey";

-- DropForeignKey
ALTER TABLE "_UserCoupons" DROP CONSTRAINT "_UserCoupons_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserCoupons" DROP CONSTRAINT "_UserCoupons_B_fkey";

-- DropTable
DROP TABLE "Event";

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderDetail";

-- DropTable
DROP TABLE "Promotor";

-- DropTable
DROP TABLE "Reviews";

-- DropTable
DROP TABLE "Ticket";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserCoupon";

-- DropTable
DROP TABLE "UserPoint";

-- DropTable
DROP TABLE "_UserCoupons";

-- DropEnum
DROP TYPE "Category";

-- DropEnum
DROP TYPE "Location";

-- DropEnum
DROP TYPE "Status";

-- CreateTable
CREATE TABLE "Test" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
