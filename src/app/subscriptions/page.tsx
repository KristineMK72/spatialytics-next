import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

const PLANS = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description:
      "Perfect for single-location shops and independent retailers scouting new spots.",
    features: [
      "Site Selection Scorer",
      "Customer CSV Upload & Clustering",
      "Basic Demographics Layer",
      "Standard Map Support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/month",
    description:
      "Ideal for mobile fleets, multi-location operators, and growing service teams.",
    features: [
      "Everything in Starter",
      "Field Service Route Optimizer",
      "Sales & Franchise Territory Planner",
      "White Space Opportunity Finder",
      "Executive PDF Pitch Deck Export",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description:
      "For small franchisors, community orgs, and regional multi-unit operators.",
    features: [
      "Everything in Growth",
      "Multi-User Collaboration Seats",
      "Custom GIS Data Layer Ingestion",
      "Priority AI Copilot Processing",
      "Dedicated Support",
    ],
    highlight: false,
  },
];

const TOOLS = [
  {
    title: "Spatialytics OS",
    tag: "Command Center",
    desc: "Geospatial command center for SMBs, franchises, and community organizations — site selection, territory planning, customer clustering, route optimization, and more. Built on Next.js + MapLibre + PostGIS.",
    href: "https://github.com/KristineMK72/spatialytics-os",
    status: "Subscriptions live",
  },
  {
    title: "Grant Match",
    tag: "Nonprofits",
    desc: "Map-first grant discovery for Greater Minnesota nonprofits. Match funding to place + mission, not just keywords — with spatial eligibility and a simple pipeline.",
    href: "https://github.com/KristineMK72/spatialytics-grant-match",
    status: "MVP",
  },
  {
    title: "Groundwater Screen",
    tag: "Minnesota",
    desc: "Drop a pin and get a screening read from live public layers: County Well Index wells, water-table vulnerability, and a plain-language site score.",
    href: "https://github.com/KristineMK72/spatialytics-groundwater",
    status: "Live demo",
  },
  {
    title: "Impact Wrangler",
    tag: "Data tool",
    desc: "Zero-friction geographic data wrangling: drag-and-drop messy CSVs, coordinate lists, or property records → validated, reprojected, clean GeoJSON/Shapefile in seconds.",
    href: "https://github.com/KristineMK72/gh-impact-wrangler",
    status: "MVP",
  },
  {
    title: "HyperLocal Insights",
    tag: "Market intel",
    desc: "Lightweight hyper-local market & community intelligence. Drop a pin for zoning context, demographics, and competitor density — without enterprise GIS.",
    href: "https://github.com/KristineMK72/hyperlocal-insights",
    status: "Live demo",
  },
  {
    title: "Spatialytics Website (Astro)",
    tag: "Platform",
    desc: "Modern cinematic rebuild focused on spatial intelligence, POD SaaS, and business tools for Greater Minnesota.",
    href: "https://github.com/KristineMK72/spatialytics-astro",
    status: "In progress",
  },
];

export default function SubscriptionsPage() {
  return (
    <main>
      <Container className="pt-14 md:pt-16">
        <FadeIn>
          <div className="glass hero-panel rounded-[2.25rem] p-10 md:p-16 overflow-hidden relative">
            <div className="kicker">Spatialytics tools</div>
            <h1 className="h1 mt-4">Subscriptions & latest tools</h1>
            <p className="p mt-6 max-w-2xl prose">
              Enterprise-grade location intelligence without the enterprise price
              tag. Subscribe to Spatialytics OS for ongoing access, or explore
              the latest focused tools built for Greater Minnesota and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <Button href="/contact">Talk about a plan</Button>
              <Button href="/project-intake" variant="ghost">
                Start a project
              </Button>
              <Button href="/services" variant="ghost">
                Services
              </Button>
            </div>
          </div>
        </FadeIn>

        <Section>
          <FadeIn>
            <div className="kicker">Spatialytics OS</div>
            <h2 className="h2 mt-2">Simple, transparent pricing</h2>
            <p className="p mt-2 max-w-2xl prose">
              Choose a plan that matches your footprint. All plans include the
              core command-center experience; higher tiers unlock route
              optimization, territory tools, multi-user seats, and priority
              support.
            </p>
          </FadeIn>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PLANS.map((plan) => (
              <FadeIn key={plan.name}>
                <Card
                  className="p-6 h-full flex flex-col"
                  style={{
                    border: plan.highlight
                      ? "1px solid rgba(56,189,248,0.45)"
                      : undefined,
                    boxShadow: plan.highlight
                      ? "0 18px 50px rgba(56,189,248,0.12)"
                      : undefined,
                  }}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="h3" style={{ fontWeight: 900 }}>
                      {plan.name}
                    </div>
                    {plan.highlight ? (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          padding: "4px 10px",
                          borderRadius: 999,
                          background: "rgba(56,189,248,0.16)",
                          border: "1px solid rgba(56,189,248,0.28)",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}
                      >
                        Popular
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-3" style={{ fontWeight: 950, fontSize: 28 }}>
                    {plan.price}
                    <span
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "rgba(230,240,255,0.55)",
                        marginLeft: 4,
                      }}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p className="p mt-2 text-sm">{plan.description}</p>
                  <ul className="mt-4 space-y-2 text-sm" style={{ color: "rgba(230,240,255,0.75)" }}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span style={{ color: "#38bdf8" }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-2">
                    <Button href="/contact">
                      Choose {plan.name}
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          <p className="p mt-6 text-sm text-center" style={{ color: "rgba(230,240,255,0.55)" }}>
            Checkout is handled securely via Stripe inside Spatialytics OS.
            Prefer a custom scope or grant-funded build? Contact us for a quote.
          </p>
        </Section>

        <Section>
          <FadeIn>
            <div className="kicker">Latest tools</div>
            <h2 className="h2 mt-2">What we've been shipping</h2>
            <p className="p mt-2 max-w-2xl prose">
              Focused products and micro-tools that sit alongside the
              subscription platform — ready to use, extend, or embed in your
              workflows.
            </p>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {TOOLS.map((t) => (
              <FadeIn key={t.title}>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-center justify-between gap-2">
                      <div className="kicker">{t.tag}</div>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(230,240,255,0.8)",
                        }}
                      >
                        {t.status}
                      </span>
                    </div>
                    <div className="h3 mt-2" style={{ fontWeight: 900 }}>
                      {t.title}
                    </div>
                    <p className="p mt-2 text-sm">{t.desc}</p>
                    <div
                      className="mt-4"
                      style={{
                        fontWeight: 800,
                        color: "rgba(234,242,255,0.9)",
                      }}
                    >
                      View on GitHub →
                    </div>
                  </Card>
                </a>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">Next step</div>
              <h2 className="h2 mt-2">Ready to subscribe or pilot a tool?</h2>
              <p className="p mt-3 max-w-2xl prose">
                Tell us about your locations, data, and decisions. We'll
                recommend the right plan or a focused build that fits your
                timeline and budget.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Button href="/contact">Contact</Button>
                <Button href="/project-intake" variant="ghost">
                  Project intake
                </Button>
                <Button href="/services" variant="ghost">
                  Services & packages
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Section>
      </Container>
    </main>
  );
}
