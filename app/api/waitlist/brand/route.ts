import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma client
import { sendBrandEmail } from "@/lib/email";
import { BrandContact } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const {
      brandName,
      contactName,
      contactEmail,
      contactCode,
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

    // Check for existing phone number (if provided)
    if (contactPhone && contactPhone !== "") {
      const existingPhone = await prisma.brandContact.findUnique({
        where: { contactPhone },
      });

      if (existingPhone) {
        console.log("Phone number already exists");
        return NextResponse.json(
          {
            message: "Phone number already exists",
          },
          {
            status: 400,
          }
        );
      }
    }

    // Create a new contact in MongoDB using Prisma
    const contact = await prisma.brandContact.create({
      data: {
        brandName,
        contactName,
        contactEmail,
        contactPhone: contactPhone && contactPhone !== "" ? contactPhone : null,
        brandWebsite,
        existingLoyalty,
        contactCode
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
