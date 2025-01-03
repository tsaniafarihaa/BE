/*
  Warnings:

  - You are about to drop the column `userId` on the `UserCoupon` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserCoupon" DROP CONSTRAINT "UserCoupon_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "percentage" DOUBLE PRECISION,
ADD COLUMN     "userCouponId" INTEGER;

-- AlterTable
ALTER TABLE "UserCoupon" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userCouponId_fkey" FOREIGN KEY ("userCouponId") REFERENCES "UserCoupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
