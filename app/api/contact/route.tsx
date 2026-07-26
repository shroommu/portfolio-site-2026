import { NextRequest } from "next/server";

import nodemailer from "nodemailer";

export async function POST(req: NextRequest, context: Record<string, any>) {
  try {
    const { email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `New Portfolio Contact Message: ${subject}`,
      text: `${message} \n\nFrom: ${email}`,
      replyTo: email,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 },
    );
  }
}
