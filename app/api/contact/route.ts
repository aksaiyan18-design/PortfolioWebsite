
import { NextResponse } from "next/server";
import { prisma } from "@/prisma/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "Bitte fülle alle Felder aus." },
        { status: 400 }
      );
    }

    const savedMessage = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
      },
    });

    return NextResponse.json(
      { success: true, id: savedMessage.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Kontaktformular-Fehler:", error);

    return NextResponse.json(
      { error: "Nachricht konnte nicht gespeichert werden." },
      { status: 500 }
    );
  }
}
