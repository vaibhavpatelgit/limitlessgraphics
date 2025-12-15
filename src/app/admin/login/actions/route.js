import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  const form = await req.formData();

  const username = (form.get("username") ?? "").toString().trim();
  const password = (form.get("password") ?? "").toString().trim();

  // (optional) if you want username case-insensitive:
  // const username = (form.get("username") ?? "").toString().trim().toLowerCase();

  if (username === "limitless" && password === "limit") {
    const fifteenDays = 60 * 60 * 24 * 15;
    const isProd = process.env.NODE_ENV === "production";

    // Next 15+ safe usage (works on older too)
    const cookieStore = await cookies();
    cookieStore.set("lg_admin", "ok", {
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
