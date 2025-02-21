-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
