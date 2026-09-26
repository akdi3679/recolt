import { NextResponse } from "next/server";

// Mock API route for visual demo.
// Replace this with real backend logic (email sending, validation, rate limiting) later.
export async function POST() {
  // Simulate a small network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(
    { success: true, message: "Message received" },
    { status: 200 }
  );
}