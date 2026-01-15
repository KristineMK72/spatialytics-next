"use client";

import { useState } from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrbrzqva", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";
  const isSuccess = status === "sent";
  const isError = status === "error";

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
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* Left: Contact Form */}
            <FadeIn>
              <Card className="p-8 md:p-10">
                <div className="kicker">Send a message</div>
                <h2 className="h2 mt-2">Tell me what you’re building</h2>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm text-white/80 font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSending}
                      className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-400/50 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm text-white/80 font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSending}
                      className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-400/50 transition"
                      placeholder="you@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm text-white/80 font-medium">
                      Phone (optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      disabled={isSending}
                      className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-400/50 transition"
                      placeholder="(###) ###-####"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project-type" className="block text-sm text-white/80 font-medium">
                      Project type
                    </label>
                    <select
                      id="project-type"
                      name="project-type"
                      disabled={isSending}
                      className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-400/50 transition bg-transparent"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a project type</option>
                      <option value="gis">GIS Web Application</option>
                      <option value="web">Custom Web Development</option>
                      <option value="data">Data Automation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm text-white/80 font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={isSending}
                      className="glass w-full px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-sky-400/50 transition resize-y min-h-[120px]"
                      placeholder="What’s the goal, the audience, and the data source?"
                    />
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Button
                      type="submit"
                      disabled={isSending}
                      className={isSending ? "opacity-70 cursor-not-allowed" : ""}
                    >
                      {isSending ? "Sending..." : "Send message"}
                    </Button>

                    {isSuccess && (
                      <span className="text-green-400 font-semibold flex items-center gap-2">
                        <span>✅ Message sent!</span>
                      </span>
                    )}

                    {isError && (
                      <span className="text-red-400 font-semibold flex items-center gap-2">
                        <span>❌ Something went wrong. Please try again.</span>
                      </span>
                    )}
                  </div>
                </form>
              </Card>
            </FadeIn>

            {/* Right: Contact Info */}
            <FadeIn>
              <Card className="p-8 md:p-10 h-full">
                <div className="kicker">Contact info</div>
                <h2 className="h2 mt-2">Reach me directly</h2>

                <div className="mt-8 space-y-6 prose">
                  <p>
                    <strong className="text-white/90">Email:</strong>{" "}
                    <a
                      href="mailto:kkahler190@gmail.com"
                      className="text-sky-400 hover:text-sky-300 underline underline-offset-4 transition"
                    >
                      kkahler190@gmail.com
                    </a>
                  </p>

                  <p>
                    <strong className="text-white/90">Location:</strong> Minnesota, USA
                  </p>

                  <p className="text-white/80">
                    Prefer a quick consult call? Send a message with a few time windows and I’ll reply with options.
                  </p>
                </div>

                <div className="mt-10">
                  <Button href="/services" variant="ghost">
                    See services →
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
