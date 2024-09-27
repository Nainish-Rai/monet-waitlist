import * as sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, contactEmail } = await req.json();
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const msg = {
    to: contactEmail, // Change to your recipient
    from: "communications@monet.work", // Change to your verified sender
    subject: "This is a simple message",
    text: ` Hello, ${name}! This is a simple text message.`,
    html: "<strong>and some html</strong>",
  };
  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({ message: "Email sent" });
}
