// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { firstName, lastName, phoneNumber, email, message } = req.body;
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "manoirrocklandmanor@gmail.com",
      pass: "tpcugxofoxwufovi",
    },
    secure: true,
  });

  const mailData = {
    from: "manoirrocklandmanor@gmail.com",
    to: "corneausebastien09@gmail.com",
    subject: `New Message From Website - ${firstName} ${lastName}`,
    text: message,
    html: `<div>${message}</div><p>Sent By: ${
      firstName + " " + lastName
    }<br/>Email: ${email}<br/>Phone: ${phoneNumber}</p>`,
  };

  transporter.sendMail(mailData, function (err: any, info: any) {
    if (err) console.log(err);
    else console.log(info);
  });
  return res.status(200).json({ status: "OK" });
}
