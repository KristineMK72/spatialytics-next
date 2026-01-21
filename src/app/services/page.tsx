import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const SERVICES = [
  {
    icon: "🗺️",
    title: "GIS Web Applications",
    desc:
      "Interactive maps and geospatial tools using ArcGIS, QGIS, and Leaflet/MapLibre. Great for public dashboards, story maps, and decision-support tools.",
    href: "/projects#gis-apps",
    cta: "View examples",
  },
  {
    icon: "💻",
    title: "Custom Web Development",
    desc:
      "Responsive websites and apps with modern UI/UX. Ideal for portfolio sites, platforms, landing pages, and tools that need clean design and performance.",
    href: "/projects#web-dev",
    cta: "View examples",
  },
  {
    icon: "⚙️",
    title: "Data Automation",
    desc:
      "Automate data processing with Python/SQL and integrations. Perfect for repeatable reporting, ETL pipelines, QA workflows, and API-powered dashboards.",
    href: "/projects#data-auto",
    cta: "View examples",
  },
];

const PACKAGES = [
  {
    name: "Basic",
    price: "$1,500 – $3,000",
    blurb: "Simple GIS map or website",
    bullets: ["Single-page site or simple map", "Basic styling + mobile friendly", "Light data prep"],
  },
  {
    name: "Standard",
    price: "$3,000 – $7,000",
    blurb: "Interactive map or custom app",
    bullets: ["Interactive layers + popups", "Reusable components", "Deployed + documented"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$7,000 – $15,000",
    blurb: "Complex app with APIs or automation",
    bullets: ["APIs / pipelines / automations", "User flows + admin tooling", "Ongoing support option"],
  },
];

function Grid3({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: 18,
        marginTop: 22,
      }}
    >
      {children}
      <style jsx>{`
        @media (max-width: 900px) {
          div {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <Section className="hero">
        <Container>
          <div style={{ maxWidth: 920 }}>
            <div className="kicker">Spatialytics</div>

            <h1 className="h1" style={{ marginTop: 10 }}>
              Services & Packages
            </h1>

            <p className="p" style={{ marginTop: 10, maxWidth: 820 }}>
              Geospatial, web, and data solutions designed to be clear, usable, and mission-aligned —
              from quick wins to full builds.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
              <Button href="/contact">Request a quote</Button>
              <Button href="#packages" variant="ghost">
                View packages
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section>
        <Container>
          <div style={{ textAlign: "center" }}>
            <h2 className="h2">What I do</h2>
            <p className="p" style={{ maxWidth: 860, margin: "10px auto 0" }}>
              Pick a lane or combine them — most strong projects blend mapping, engineering, and data.
            </p>
          </div>

          <Grid3>
            {SERVICES.map((s) => (
              <Card key={s.title} style={{ padding: 18 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div
                    aria-hidden="true"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      display: "grid",
                      placeItems: "center",
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(0,0,0,0.06)",
                      fontSize: 22,
                      flex: "0 0 auto",
                    }}
                  >
                    {s.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 900, fontSize: 18 }}>{s.title}</div>
                    <p className="p" style={{ marginTop: 8 }}>
                      {s.desc}
                    </p>

                    <div style={{ marginTop: 12 }}>
                      <Button href={s.href} variant="ghost">
                        {s.cta}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </Grid3>
        </Container>
      </Section>

      {/* PACKAGES */}
      <Section>
        <Container>
          <div id="packages" style={{ textAlign: "center", scrollMarginTop: 90 }}>
            <h2 className="h2">Service packages</h2>
            <p className="p" style={{ maxWidth: 860, margin: "10px auto 0" }}>
              These ranges are a starting point. Final pricing depends on data readiness, integrations, and timeline.
            </p>
          </div>

          <Grid3>
            {PACKAGES.map((p) => (
              <Card
                key={p.name}
                style={{
                  padding: 18,
                  borderRadius: 22,
                  border: p.highlight ? "1px solid rgba(99,102,241,0.35)" : undefined,
                  boxShadow: p.highlight ? "0 18px 50px rgba(99,102,241,0.12)" : undefined,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div style={{ fontWeight: 950, fontSize: 18 }}>{p.name}</div>

                  {p.highlight ? (
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 900,
                        padding: "6px 10px",
                        borderRadius: 999,
                        background: "rgba(99,102,241,0.14)",
                        border: "1px solid rgba(99,102,241,0.22)",
                      }}
                    >
                      Most common
                    </span>
                  ) : null}
                </div>

                <div style={{ fontWeight: 950, fontSize: 22, marginTop: 10 }}>{p.price}</div>
                <div className="muted" style={{ marginTop: 6 }}>
                  {p.blurb}
                </div>

                <ul style={{ marginTop: 14, paddingLeft: 18 }}>
                  {p.bullets.map((b) => (
                    <li key={b} className="muted" style={{ marginBottom: 6 }}>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 14, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Button href="/contact">Get quote</Button>
                  <Button href="/projects" variant="ghost">
                    See examples
                  </Button>
                </div>
              </Card>
            ))}
          </Grid3>

          <div className="muted" style={{ marginTop: 14, textAlign: "center" }}>
            Tip: if you have a grant cycle or public timeline, I can scope around fixed milestones.
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="cta">
        <Container>
          <Card style={{ padding: 20 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <div style={{ maxWidth: 760 }}>
                <div className="kicker">Free consult</div>
                <div style={{ fontWeight: 950, fontSize: 20, marginTop: 6 }}>
                  Ready to transform your data?
                </div>
                <p className="p" style={{ marginTop: 8 }}>
                  Tell me what you’re trying to build (or fix). I’ll suggest the fastest path and a realistic scope.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button href="/contact">Get started</Button>
                <Button href="/projects" variant="ghost">
                  Browse projects
                </Button>
              </div>
            </div>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
