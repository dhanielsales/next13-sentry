import { NextRequest, NextResponse } from "next/server";

export async function GET(_resquest: NextRequest) {
  // throw new Error("Sentry Example API Route Error");
  return NextResponse.json({ name: "John Doe" });
}
