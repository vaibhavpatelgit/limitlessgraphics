import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req) {
  // delete the cookie
  cookies().set("lg_admin", "", { path: "/", maxAge: 0 });

  // redirect to the login page
  const url = new URL("/admin/login", req.url);
  return NextResponse.redirect(url);
}
