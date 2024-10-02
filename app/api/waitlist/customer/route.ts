import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma client
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { name, contactEmail, contactPhone, fromWhere, contactCode } = await req.json();

    // Check for existing email
    const existingEmail = await prisma.customerContact.findUnique({
      where: { contactEmail },
    });

    console.log("contactPhone: ", contactPhone);

    if (existingEmail) {
      console.log("Email already exists");
      return NextResponse.json(
        { message: "Email already exists" },
        {
          status: 400,
        }
      );
    }

    // Check for existing phone number (if provided)
    if (contactPhone && contactPhone !== "") {
      const existingPhone = await prisma.customerContact.findUnique({
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

    // Create a new customer contact in MongoDB using Prisma
    const customerContact = await prisma.customerContact.create({
      data: {
        name,
        contactEmail,
        contactPhone: contactPhone && contactPhone !== "" ? contactPhone : null,
        contactCode,
        fromWhere,
      },
    });

    await sendEmail(name, contactEmail);

    return NextResponse.json({
      message: "Customer contact saved successfully",
      customerContact,
    });
  } catch (error) {
    console.error("Error saving customer contact:", error);
    return NextResponse.json(
      { message: "Failed to save customer contact" },
      { status: 500 }
    );
  }
}
