import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const metric = await request.json();
    // Replace this with a datastore/observability sink if needed.
    console.log("[web-vitals]", metric);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
