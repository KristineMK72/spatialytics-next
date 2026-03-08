import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { projectType, organization, timeline, name, email, notes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: process.env.INTAKE_FROM_EMAIL!,
      to: process.env.INTAKE_TO_EMAIL!,
      replyTo: email,
      subject: `New Spatialytics Project — ${name}`,
      html: `
        <h2>New Spatialytics Intake</h2>

        <p><strong>Project type:</strong> ${projectType}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Notes</h3>
        <p>${notes || "No notes provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to send intake email" },
      { status: 500 }
    );
  }
}
