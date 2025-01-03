/*
  Warnings:

  - You are about to drop the column `desc` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `seats` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "desc",
DROP COLUMN "seats";
