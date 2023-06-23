import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;

    const result = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        street: data.address,
        city: data.city,
        state: "",
        postalCode: data.postalCode,
        country: "",
        createdAt: new Date(),
      },
    });

    console.log(result);

    res.status(200).json({ name: "Succes" });
  }
}
