/*
  Warnings:

  - Added the required column `quantity` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "quantity" INTEGER NOT NULL;
