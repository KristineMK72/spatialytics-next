"use client";

import { useMemo, useState } from "react";

type FormData = {
  projectType?: string;
  organization?: string;
  timeline?: string;
  name?: string;
  email?: string;
  notes?: string;
};

const PROJECT_TYPES = [
  "Interactive Map",
  "Dashboard / Data Visualization",
  "GIS Analysis",
  "Story Map / Website",
] as const;

const ORGANIZATIONS = [
  "Business",
  "Local Government",
  "Nonprofit",
  "Community Project",
  "Research / Academic",
] as const;

const TIMELINES = [
  "ASAP",
  "Within a month",
  "1–3 months",
  "Just exploring",
] as const;

export default function ProjectIntakePage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<FormData>({});

  const progress = useMemo(() => {
    if (step >= 5) return 100;
    return (step / 4) * 100;
  }, [step]);

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    setStep((prev) => Math.min(prev + 1, 5));
  }

  function back() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  async function submit() {
    try {
      setIsSubmitting(true);

      await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setStep(5);
    } catch (error) {
      console.error("Failed to submit intake form:", error);
      alert("Something went wrong sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const canSubmit =
    !!data.name?.trim() && !!data.email?.trim() && !isSubmitting;

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(85,122,255,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,0.18),transparent_30%),linear-gradient(180deg,#07111f_0%,#0b1730_45%,#08101e_100%)]" />

      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {/* Eyebrow */}
          <div className="mb-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium tracking-[0.18em] text-cyan-100 uppercase">
            Spatialytics Intake
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Start Your Spatialytics Project
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
            Tell me a little about your mapping, GIS, dashboard, or data
            storytelling project and I’ll reach back out with next steps.
          </p>

          {/* Progress */}
          {step < 5 && (
            <div className="mt-8">
              <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-white/55">
                <span>Progress</span>
                <span>Step {Math.min(step, 4)} of 4</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Step content */}
          <div className="mt-8">
            {step === 1 && (
              <StepShell
                title="What do you need?"
                subtitle="Choose the option that best fits your project."
              >
                {PROJECT_TYPES.map((opt) => (
                  <ChoiceButton
                    key={opt}
                    label={opt}
                    selected={data.projectType === opt}
                    onClick={() => {
                      update("projectType", opt);
                      next();
                    }}
                  />
                ))}
              </StepShell>
            )}

            {step === 2 && (
              <StepShell
                title="Who is this project for?"
                subtitle="This helps shape the scope and recommendations."
              >
                {ORGANIZATIONS.map((opt) => (
                  <ChoiceButton
                    key={opt}
                    label={opt}
                    selected={data.organization === opt}
                    onClick={() => {
                      update("organization", opt);
                      next();
                    }}
                  />
                ))}

                <div className="mt-6">
                  <BackButton onClick={back} />
                </div>
              </StepShell>
            )}

            {step === 3 && (
              <StepShell
                title="What timeline are you on?"
                subtitle="Pick the pace that feels closest to your project."
              >
                {TIMELINES.map((opt) => (
                  <ChoiceButton
                    key={opt}
                    label={opt}
                    selected={data.timeline === opt}
                    onClick={() => {
                      update("timeline", opt);
                      next();
                    }}
                  />
                ))}

                <div className="mt-6">
                  <BackButton onClick={back} />
                </div>
              </StepShell>
            )}

            {step === 4 && (
              <StepShell
                title="Tell me where to reach you"
                subtitle="Add your contact info and a few project details."
              >
                <div className="space-y-4">
                  <FieldLabel label="Your name">
                    <input
                      type="text"
                      value={data.name ?? ""}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Kris Kahler"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-cyan-300/50 focus:bg-white/12"
                    />
                  </FieldLabel>

                  <FieldLabel label="Email">
                    <input
                      type="email"
                      value={data.email ?? ""}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-cyan-300/50 focus:bg-white/12"
                    />
                  </FieldLabel>

                  <FieldLabel label="Project notes">
                    <textarea
                      value={data.notes ?? ""}
                      onChange={(e) => update("notes", e.target.value)}
                      placeholder="Tell me about your goals, location, audience, data sources, timeline, or any ideas you already have."
                      rows={6}
                      className="w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-cyan-300/50 focus:bg-white/12"
                    />
                  </FieldLabel>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={submit}
                    disabled={!canSubmit}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Submit Project Request"}
                  </button>

                  <button
                    type="button"
                    onClick={back}
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/85 transition hover:bg-white/10"
                  >
                    Back
                  </button>
                </div>
              </StepShell>
            )}

            {step === 5 && (
              <div className="py-6 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/10 text-2xl">
                  ✓
                </div>

                <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                  Thanks — your request was sent.
                </h2>

                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-base">
                  I’ll review your project details and follow up soon about the
                  best next steps for your Spatialytics project.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-left text-sm text-white/70">
                  <div className="mb-2 font-medium text-white/90">
                    Submission summary
                  </div>
                  <ul className="space-y-1">
                    <li>
                      <span className="text-white/45">Project type:</span>{" "}
                      {data.projectType || "—"}
                    </li>
                    <li>
                      <span className="text-white/45">Organization:</span>{" "}
                      {data.organization || "—"}
                    </li>
                    <li>
                      <span className="text-white/45">Timeline:</span>{" "}
                      {data.timeline || "—"}
                    </li>
                    <li>
                      <span className="text-white/45">Name:</span>{" "}
                      {data.name || "—"}
                    </li>
                    <li>
                      <span className="text-white/45">Email:</span>{" "}
                      {data.email || "—"}
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function StepShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      {subtitle ? (
        <p className="mt-2 mb-6 text-sm leading-6 text-white/65">{subtitle}</p>
      ) : null}
      {children}
    </section>
  );
}

function ChoiceButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "mb-3 block w-full rounded-2xl border px-4 py-4 text-left transition",
        selected
          ? "border-cyan-300/45 bg-cyan-300/10 text-white shadow-lg shadow-cyan-500/10"
          : "border-white/12 bg-white/6 text-white/90 hover:bg-white/10",
      ].join(" ")}
    >
      <span className="font-medium">{label}</span>
    </button>
  );
}

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-sm font-medium text-white/60 transition hover:text-white"
    >
      ← Back
    </button>
  );
}

function FieldLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white/80">
        {label}
      </span>
      {children}
    </label>
  );
}
