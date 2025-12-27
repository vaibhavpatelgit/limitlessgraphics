import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, contact, email, message } = await req.json();

    if (!name || !contact || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const user = process.env.GMAIL_USER;
    const pass = process.env.GMAIL_APP_PASSWORD;
    const to = process.env.GMAIL_TO || user;

    if (!user || !pass) {
      return Response.json(
        { error: "Email server not configured (missing env vars)." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Limitless Graphics" <${user}>`,
      to,
      replyTo: email,
      subject: `New Quote Request — ${name}`,
      text: `Name: ${name}\nContact: ${contact}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json(
      { error: "Server error sending email.", detail: String(e?.message || e) },
      { status: 500 }
    );
  }
}
