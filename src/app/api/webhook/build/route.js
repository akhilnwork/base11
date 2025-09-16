import { NextResponse } from 'next/server';

export async function POST(request) {
  const { secret } = await request.json();

  if (!secret || secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // In a real application, you would trigger a build here.
  // For now, we'll just return a success message.
  return NextResponse.json({ message: 'Build triggered successfully' });
}
