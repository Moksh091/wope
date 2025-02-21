/*
  Warnings:

  - You are about to drop the column `expires_at` on the `Session` table. All the data in the column will be lost.
  - The `emailVerified` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `expires` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" DROP COLUMN "expires_at",
ADD COLUMN     "expires" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVerified",
ADD COLUMN     "emailVerified" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
