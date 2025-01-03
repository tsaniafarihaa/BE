/*
  Warnings:

  - You are about to drop the column `createdAt` on the `UserCoupon` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `UserCoupon` table. All the data in the column will be lost.
  - Added the required column `expiredAt` to the `UserCoupon` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderDetail" ADD COLUMN     "userCouponId" INTEGER;

-- AlterTable
ALTER TABLE "UserCoupon" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "expiredAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "percentage" SET DEFAULT 0.0,
ALTER COLUMN "percentage" SET DATA TYPE DOUBLE PRECISION;

-- AddForeignKey
ALTER TABLE "OrderDetail" ADD CONSTRAINT "OrderDetail_userCouponId_fkey" FOREIGN KEY ("userCouponId") REFERENCES "UserCoupon"("id") ON DELETE SET NULL ON UPDATE CASCADE;
