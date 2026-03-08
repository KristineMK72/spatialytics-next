import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INTAKE_TO_EMAIL;
    const from = process.env.INTAKE_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (!to || !from) {
      return NextResponse.json(
        { error: "Missing intake email environment variables" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();
    const { projectType, organization, timeline, name, email, notes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Spatialytics Project — ${name}`,
      html: `
        <h2>New Spatialytics Intake</h2>
        <p><strong>Project type:</strong> ${projectType || "Not provided"}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Notes</h3>
        <p>${notes || "No notes provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intake route error:", error);
    return NextResponse.json(
      { error: "Failed to send intake email" },
      { status: 500 }
    );
  }
}
