import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Import Prisma client

export async function POST(req: Request) {
  try {
    const { name, contactEmail, contactPhone, fromWhere } = await req.json();

    // Create a new customer contact in MongoDB using Prisma
    const customerContact = await prisma.customerContact.create({
      data: {
        name,
        contactEmail,
        contactPhone,
        fromWhere,
      },
    });

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
