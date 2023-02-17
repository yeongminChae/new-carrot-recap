import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { IResponseType } from "@/libs/server/withHandler";
import client from "@/libs/server/client";
import twilio from "twilio";
import mail from "@sendgrid/mail";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_KEY!);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponseType>
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  if (phone) {
    // const message = await twilioClient.messages.create({
    //   messagingServiceSid: process.env.TWILIO_MSID,
    //   to: process.env.MY_PHONE!,
    //   body: `Your login token is ${payload} `,
    // });
    // console.log(message);
  } else if (email) {
    // const email = await mail.send({
    //   from: "codudals98@naver.com",
    //   to: "codudals98@naver.com",
    //   subject: "Your carror market verification Email",
    //   text: `Your token is ${payload}`,
    //   html: `<strong>Your token is ${payload}</strong>`,
    // });
  }
  return res.json({
    ok: true,
  });
}

export default withHandler("POST", handler);
