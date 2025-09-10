import { NextResponse } from "next/server";

export function middleware(request) {
  // Handle CORS for API routes
  const response = NextResponse.next();

  // Set CORS headers
  response.headers.set(
    "Access-Control-Allow-Origin",
    "https://cms.thebase11.com",
  );
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With",
  );
  response.headers.set("Access-Control-Allow-Credentials", "true");

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: response.headers });
  }

  return response;
}

export const config = {
  matcher: ["/api/:path*"],
};
