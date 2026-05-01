import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;

    // Try accessing DB
    const db = client.db("contactDB");

    // Ping DB
    await db.command({ ping: 1 });

    return NextResponse.json({ success: true, message: "DB connected ✅" });
  } catch (error: any) {
    console.error("FULL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
