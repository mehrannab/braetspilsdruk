import { NextApiRequest, NextApiResponse } from "next";
import mailgun from "mailgun-js";

require("dotenv").config();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mailgunClient = mailgun({
    apiKey: process.env.API_KEY_MAILGUN as string,
    domain: process.env.DOMAIN_MAILGUN as string,
  });

  if (req.method === "POST") {
    const { data } = req.body;

    const emailData = {
      from: `abu abuili braetspilsdruk@${process.env.DOMAIN_MAILGUN}`,
      to: data as string,
      subject: "Ordrer bekræftelse #9525",
      text: "Tak for dit køb, kom igen",
    };

    mailgunClient.messages().send(emailData, (error, body) => {
      if (error) {
        console.error("Mailgun error:", error);
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ succes: true, message: "Success" });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
