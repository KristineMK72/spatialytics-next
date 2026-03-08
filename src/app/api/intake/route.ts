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

    /* EMAIL TO YOU (lead notification) */
    const adminEmail = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New Spatialytics Project — ${name}`,
      html: `
        <h2>New Spatialytics Intake</h2>

        <p><strong>Project type:</strong> ${projectType || "Not provided"}</p>
        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>
        <p><strong>Timeline:</strong> ${timeline || "Not provided"}</p>

        <hr/>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Notes</h3>
        <p>${notes || "No notes provided"}</p>
      `,
    });

    /* CONFIRMATION EMAIL TO CLIENT */
    const clientEmail = await resend.emails.send({
      from,
      to: email,
      subject: "Your Spatialytics project request was received",
      html: `
        <h2>Thanks for contacting Spatialytics</h2>

        <p>Hi ${name},</p>

        <p>Thanks for reaching out about your project.</p>

        <p>I received your request and will review the details shortly.</p>

        <p><strong>Your submission summary:</strong></p>
        <ul>
          <li>Project type: ${projectType || "Not provided"}</li>
          <li>Organization: ${organization || "Not provided"}</li>
          <li>Timeline: ${timeline || "Not provided"}</li>
        </ul>

        <p>If you'd like to add more details, simply reply to this email.</p>

        <p>— Kris<br/>
        Spatialytics<br/>
        https://spatialytics.space</p>
      `,
    });

    console.log("Admin email:", adminEmail);
    console.log("Client email:", clientEmail);

    return NextResponse.json({
      success: true,
      adminEmail,
      clientEmail,
    });
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
