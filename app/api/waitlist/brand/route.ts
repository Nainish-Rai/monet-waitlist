import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma client
import { sendBrandEmail } from "@/lib/email";

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

    console.log("contactPhone: ", contactPhone);
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

    await sendBrandEmail(contactName, brandName, contactEmail);

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
