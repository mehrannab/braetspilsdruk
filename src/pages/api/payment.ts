import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { data, totalPrice, ordres } = req.body;
    const shipping = 40.0;
    const shippingTotalPrice = totalPrice + shipping;

    try {
      await prisma.$transaction(async (tx) => {
        const resultUser = await tx.user.create({
          data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            street: data.address,
            city: data.city,
            postalCode: data.postalCode,
            createdAt: new Date(),
          },
        });

        const resultOrdre = await tx.ordre.create({
          data: {
            userId: resultUser.userId,
            quantity: ordres.length,
            totalPrice: shippingTotalPrice,
            shipping: shipping,
          },
        });

        const questionData = [];
        for (const ordre of ordres) {
          const createdItem = await tx.item.create({
            data: {
              name: ordre.name,
              price: ordre.price,
              description: ordre.description,
              ordreId: resultOrdre.ordreId,
            },
          });

          for (const question of ordre.questions) {
            questionData.push({
              fieldNumber: question.fieldNumber,
              content: question.content,
              itemId: createdItem.itemId,
            });
          }
        }

        await tx.question.createMany({
          data: questionData,
        });
      });

      res.status(200).json({ name: "Success" });
    } catch (error) {
      console.error("Error creating user and related data:", error);
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}
