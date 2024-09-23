// app/api/contacts/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma client

export async function POST(req: Request) {
  try {
    const {
      brandName,
      contactName,
      contactEmail,
      contactPhone,
      brandWebsite,
      existingLoyalty,
    } = await req.json();

    // Create a new contact in MongoDB using Prisma
    const contact = await prisma.brandContact.create({
      data: {
        brandName,
        contactName,
        contactEmail,
        contactPhone,
        brandWebsite,
        existingLoyalty,
      },
    });

    return NextResponse.json({
      message: "Contact saved successfully",
      contact,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { message: "Failed to save contact" },
      { status: 500 }
    );
  }
}
