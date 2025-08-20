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

  return NextResponse.json(items, { status: 200 });
}
