/*
  Warnings:

  - You are about to drop the `_UserCoupons` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserCoupons" DROP CONSTRAINT "_UserCoupons_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserCoupons" DROP CONSTRAINT "_UserCoupons_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userCouponId" INTEGER;

-- DropTable
DROP TABLE "_UserCoupons";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userCouponId_fkey" FOREIGN KEY ("userCouponId") REFERENCES "UserCoupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
