import { NextResponse } from "next/server";
import { COOKIE_NAME, verifyAdminSessionToken } from "@/lib/adminSession";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Login page/API must remain publicly accessible
  if (
    pathname === "/admin/login" ||
    pathname.startsWith("/admin/login/actions")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;

  const authenticated = await verifyAdminSessionToken(token);

  if (!authenticated) {
    const loginUrl = new URL("/admin/login", request.url);

    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
