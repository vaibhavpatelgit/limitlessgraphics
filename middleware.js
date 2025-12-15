import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname, origin } = req.nextUrl;
  const token = req.cookies.get("lg_admin")?.value;

  const isAdmin = pathname.startsWith("/admin");
  const isLogin =
    pathname === "/admin/login" || pathname.startsWith("/admin/login/");

  if (isAdmin && !isLogin) {
    if (token !== "ok") {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("next", pathname); // optional “return to” after login
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
