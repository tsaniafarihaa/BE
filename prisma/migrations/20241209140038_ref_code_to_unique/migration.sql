/*
  Warnings:

  - A unique constraint covering the columns `[refCode]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_refCode_key" ON "User"("refCode");
