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

    // checl existing email
    const existingEmail = await prisma.brandContact.findUnique({
      where: { contactEmail },
    });

    if (existingEmail) {
      console.log("Email already exists");
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 400 }
      );
    }

    // Check existing brand name using contactEmail as the unique field
    const existingBrandName = await prisma.brandContact.findUnique({
      where: { brandName },
    });

    if (existingBrandName) {
      console.log("Brand name already exists");
      return NextResponse.json(
        { message: "Brand name already exists" },
        { status: 400 }
      );
    }

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
