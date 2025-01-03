/*
  Warnings:

  - You are about to drop the column `userCouponId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userCouponId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userCouponId";

-- AlterTable
ALTER TABLE "UserCoupon" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "UserCoupon" ADD CONSTRAINT "UserCoupon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
