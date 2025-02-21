/*
  Warnings:

  - You are about to drop the column `userid` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `userid` on the `Session` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userid_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userid_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userid",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userid",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
