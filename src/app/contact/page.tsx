"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mrbrzqva", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main>
      <Container className="pt-14 md:pt-16">
        <FadeIn>
          <div className="glass hero-panel rounded-[2.25rem] p-10 md:p-16 overflow-hidden relative">
            <div className="kicker">Contact</div>
            <h1 className="h1 mt-4">Get in touch</h1>
            <p className="p mt-6 max-w-2xl prose">
              Let’s collaborate on your next project — mapping, dashboards, automation, or a full build.
            </p>
          </div>
        </FadeIn>

        <Section>
          <div className="grid gap-4 md:grid-cols-2">
            {/* Form */}
            <FadeIn>
              <Card className="p-8 md:p-10">
                <div className="kicker">Send a message</div>
                <h2 className="h2 mt-2">Tell me what you’re building</h2>

                <form className="mt-6 stack" onSubmit={onSubmit}>
                  <div className="stack">
                    <label className="text-sm text-white/80" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="glass"
                      style={{ padding: "12px 14px", borderRadius: 14, width: "100%", outline: "none" }}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="stack">
                    <label className="text-sm text-white/80" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="glass"
                      style={{ padding: "12px 14px", borderRadius: 14, width: "100%", outline: "none" }}
                      placeholder="you@email.com"
                    />
                  </div>

                  <div className="stack">
                    <label className="text-sm text-white/80" htmlFor="phone">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      className="glass"
                      style={{ padding: "12px 14px", borderRadius: 14, width: "100%", outline: "none" }}
                      placeholder="(###) ###-####"
                    />
                  </div>

                  <div className="stack">
                    <label className="text-sm text-white/80" htmlFor="project-type">
                      Project type
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      className="glass"
                      style={{ padding: "12px 14px", borderRadius: 14, width: "100%", outline: "none" }}
                      defaultValue=""
                    >
                      <option value="">Select a project type</option>
                      <option value="gis">GIS Web Application</option>
                      <option value="web">Custom Web Development</option>
                      <option value="data">Data Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="stack">
                    <label className="text-sm text-white/80" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="glass"
                      style={{ padding: "12px 14px", borderRadius: 14, width: "100%", outline: "none", resize: "vertical" }}
                      placeholder="What’s the goal, the audience, and the data source?"
                    />
                  </div>

                  <div className="mt-4 flex gap-3 flex-wrap items-center">
                    <Button href="#" asButton type="submit" disabled={status === "sending"}>
                      {status === "sending" ? "Sending..." : "Send message"}
                    </Button>

                    {status === "sent" && (
                      <span className="text-sm" style={{ color: "rgba(34,197,94,0.95)", fontWeight: 800 }}>
                        ✅ Message sent!
                      </span>
                    )}
                    {status === "error" && (
                      <span className="text-sm" style={{ color: "rgba(239,68,68,0.95)", fontWeight: 800 }}>
                        ❌ Something went wrong. Try again.
                      </span>
                    )}
                  </div>
                </form>
              </Card>
            </FadeIn>

            {/* Details */}
            <FadeIn>
              <Card className="p-8 md:p-10">
                <div className="kicker">Contact info</div>
                <h2 className="h2 mt-2">Reach me directly</h2>

                <div className="mt-6 stack prose">
                  <p className="p">
                    <span className="text-white/80" style={{ fontWeight: 900 }}>
                      Email:
                    </span>{" "}
                    <a className="underline underline-offset-4" href="mailto:kkahler190@gmail.com">
                      kkahler190@gmail.com
                    </a>
                  </p>
                  <p className="p">
                    <span className="text-white/80" style={{ fontWeight: 900 }}>
                      Location:
                    </span>{" "}
                    Minnesota, USA
                  </p>
                  <p className="p">
                    Prefer a quick consult call? Send a message with a few time windows and I’ll reply with options.
                  </p>
                </div>

                <div className="mt-8">
                  <Button href="/services" variant="ghost">
                    See services
                  </Button>
                </div>
              </Card>
            </FadeIn>
          </div>
        </Section>
      </Container>
    </main>
  );
}
