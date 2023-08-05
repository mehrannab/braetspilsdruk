-- CreateTable
CREATE TABLE "Item" (
    "id" TEXT NOT NULL,
    "ordreId" TEXT NOT NULL,
    "questions" TEXT[],

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ordre" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "shipping" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Ordre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Item_ordreId_key" ON "Item"("ordreId");

-- CreateIndex
CREATE UNIQUE INDEX "Ordre_userId_key" ON "Ordre"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_ordreId_fkey" FOREIGN KEY ("ordreId") REFERENCES "Ordre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ordre" ADD CONSTRAINT "Ordre_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
