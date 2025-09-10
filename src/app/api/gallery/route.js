import { NextResponse } from "next/server";

export async function GET() {
  // In real-world usage, fetch from DB or external API here.
  // Using existing public assets as sample items.
  const base = "/img/acc";
  const items = [1, 2, 3, 4, 5, 6].map((n) => ({
    src: `${base}/${n}.png`,
    thumb: `${base}/${n}.png`,
    caption: `Image ${n}`,
  }));

  const response = NextResponse.json(items, { status: 200 });

  // Add CORS headers
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

  return response;
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "https://cms.thebase11.com",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-Requested-With",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}
