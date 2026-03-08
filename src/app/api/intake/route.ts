import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INTAKE_TO_EMAIL;
    const from = process.env.INTAKE_FROM_EMAIL;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (!to) {
      console.error("Missing INTAKE_TO_EMAIL");
      return NextResponse.json(
        { error: "Missing INTAKE_TO_EMAIL" },
        { status: 500 }
      );
    }

    if (!from) {
      console.error("Missing INTAKE_FROM_EMAIL");
      return NextResponse.json(
        { error: "Missing INTAKE_FROM_EMAIL" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { projectType, organization, timeline, name, email, notes } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
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

    console.log("Resend result:", result);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Intake route error:", error);
    return NextResponse.json(
      {
        error: "Failed to send intake email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
