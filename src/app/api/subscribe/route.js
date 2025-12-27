import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return Response.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; line-height:1.6;">
        <h2 style="margin-bottom: 8px;">📩 New Newsletter Subscription</h2>

        <p><strong>Email:</strong> ${escapeHtml(email)}</p>

        <hr style="margin:16px 0;" />

        <p style="font-size:14px;color:#444;">
          This user has subscribed to receive:
        </p>
        <ul style="font-size:14px;color:#444;">
          <li>Wrap & branding tips</li>
          <li>Monthly promotions & discounts</li>
          <li>New project highlights</li>
          <li>Care & maintenance guides</li>
        </ul>

        <p style="font-size:13px;color:#666;">
          Source: Website footer newsletter form<br/>
          Date: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Limitless Graphics" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_TO || process.env.GMAIL_USER,
      replyTo: email,
      subject: "New Newsletter Subscriber — Limitless Graphics",
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { error: "Failed to subscribe", detail: err?.message },
      { status: 500 }
    );
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
