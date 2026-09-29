import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { COOKIE_NAME } from "@/lib/adminSession";

export async function POST(req) {
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  const loginUrl = new URL("/admin/login", req.url);

  return NextResponse.redirect(loginUrl, {
    status: 303,
  });
}
