/*
  Warnings:

  - The primary key for the `Item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Item` table. All the data in the column will be lost.
  - The primary key for the `Ordre` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `Ordre` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Ordre` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Ordre` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Ordre` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - Added the required column `description` to the `Item` table without a default value. This is not possible if the table is not empty.
  - The required column `itemId` was added to the `Item` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Item` table without a default value. This is not possible if the table is not empty.
  - The required column `ordreId` was added to the `Ordre` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `totalPrice` to the `Ordre` table without a default value. This is not possible if the table is not empty.
  - The required column `userId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_ordreId_fkey";

-- DropForeignKey
ALTER TABLE "Ordre" DROP CONSTRAINT "Ordre_userId_fkey";

-- DropIndex
DROP INDEX "Item_ordreId_key";

-- AlterTable
ALTER TABLE "Item" DROP CONSTRAINT "Item_pkey",
DROP COLUMN "id",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "itemId" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId");

-- AlterTable
ALTER TABLE "Ordre" DROP CONSTRAINT "Ordre_pkey",
DROP COLUMN "description",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "price",
ADD COLUMN     "ordreId" TEXT NOT NULL,
ADD COLUMN     "totalPrice" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "Ordre_pkey" PRIMARY KEY ("ordreId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_ordreId_fkey" FOREIGN KEY ("ordreId") REFERENCES "Ordre"("ordreId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordre" ADD CONSTRAINT "Ordre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
