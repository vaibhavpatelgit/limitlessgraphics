import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME, createAdminSessionToken } from "@/lib/adminSession";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const form = await req.formData();

    const username = (form.get("username") ?? "").toString().trim();
    const password = (form.get("password") ?? "").toString();

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminUsername || !adminPassword) {
      console.error("Admin credentials are not configured.");

      return new NextResponse("Login is temporarily unavailable.", {
        status: 500,
      });
    }

    if (username !== adminUsername || password !== adminPassword) {
      return new NextResponse("Invalid username or password.", {
        status: 401,
      });
    }

    const sessionToken = await createAdminSessionToken();

    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 15,
    });

    return new NextResponse("ok", {
      status: 200,
    });
  } catch (error) {
    console.error("Admin login error:", error);

    return new NextResponse("Unable to sign in.", {
      status: 500,
    });
  }
}
