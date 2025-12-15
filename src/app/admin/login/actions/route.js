import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  const form = await req.formData();
  const username = String(form.get("username") || "");
  const password = String(form.get("password") || "");

  if (username === "limitless" && password === "limit") {
    // 15 days in seconds
    const fifteenDays = 60 * 60 * 24 * 15;

    // Secure only in production so it works on http://localhost
    const isProd = process.env.NODE_ENV === "production";

    cookies().set("lg_admin", "ok", {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: fifteenDays,
    });

    return new NextResponse("ok", { status: 200 });
  }

  return new NextResponse("Invalid username or password", { status: 401 });
}
