import { NextRequest, NextResponse } from "next/server";

// This is the logout route. It sets the token cookie to expire immediately.

export async function POST(req: NextRequest) {
  // This sets the cookie to expire immediately, effectively "deleting" it.
  const response = NextResponse.redirect(new URL("/", req.url));
  response.cookies.set("token", "", { expires: new Date(0) });
  return response;
}
