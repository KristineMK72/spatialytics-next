import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const SERVICES = [
  {
    icon: "🗺️",
    title: "GIS Web Applications",
    desc:
      "Interactive maps, story maps, and spatial tools built with modern web GIS workflows. Ideal for public dashboards, community storytelling, planning tools, and decision-support applications.",
    href: "/projects#gis-apps",
    cta: "View examples",
  },
  {
    icon: "💻",
    title: "Custom Websites",
    desc:
      "Modern websites for businesses, nonprofits, and mission-driven projects. Built for performance, mobile responsiveness, clean design, and clear calls to action.",
    href: "/projects#web-dev",
    cta: "View examples",
  },
  {
    icon: "📊",
    title: "Dashboards & Data Visualization",
    desc:
      "Custom dashboards and visual reporting tools that turn raw data into something people can actually understand and use.",
    href: "/projects#dashboards",
    cta: "View examples",
  },
  {
    icon: "⚙️",
    title: "Data Automation",
    desc:
      "Automate workflows with Python, SQL, APIs, and repeatable reporting pipelines. Great for teams that need cleaner, faster, and more reliable data processes.",
    href: "/projects#data-auto",
    cta: "View examples",
  },
];

const PACKAGES = [
  {
    name: "Starter Website",
    price: "from $49/month",
    blurb:
      "A low-barrier option for small businesses that need a polished web presence without a big upfront cost.",
    bullets: [
      "Simple modern website",
      "Mobile-friendly design",
      "Hosting included",
      "Light content updates",
      "Great for salons, local services, and startups",
    ],
  },
  {
    name: "Professional Website",
    price: "$1,500+",
    blurb:
      "A custom website build for organizations that need more pages, stronger branding, and a more tailored experience.",
    bullets: [
      "Custom design and layout",
      "SEO-ready structure",
      "Contact forms and lead capture",
      "Service / portfolio / about pages",
      "Optional ongoing support",
    ],
    highlight: true,
  },
  {
    name: "Spatial Intelligence Project",
    price: "$2,500+",
    blurb:
      "A higher-value build that combines websites, maps, dashboards, or data storytelling into one powerful experience.",
    bullets: [
      "Interactive maps or dashboards",
      "Spatial data visualization",
      "GIS-focused workflows",
      "Storytelling and public-facing tools",
      "Best for nonprofits, communities, research, and planning",
    ],
  },
  {
    name: "Ongoing Support",
    price: "$39–$199/month",
    blurb:
      "Support plans for clients who want help keeping their site, dashboard, or mapping tools current and polished.",
    bullets: [
      "Hosting and monitoring",
      "Small content updates",
      "Priority support options",
      "Technical maintenance",
      "Ideal after launch",
    ],
  },
];

const EXAMPLES = [
  {
    title: "Interactive maps",
    text:
      "Public-facing map experiences, story maps, and tools that help people explore place-based information.",
    href: "/projects#gis-apps",
  },
  {
    title: "Business websites",
    text:
      "Clean, modern websites built to help organizations communicate clearly and convert visitors into inquiries.",
    href: "/projects#web-dev",
  },
  {
    title: "Dashboards",
    text:
      "Visual tools that make data easier to understand for leadership, community members, or stakeholders.",
    href: "/projects#dashboards",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <Section className="hero">
        <Container>
          <div style={{ maxWidth: 940 }}>
            <div className="kicker">Spatialytics</div>

            <h1 className="h1" style={{ marginTop: 10 }}>
              Services, Packages & Project Paths
            </h1>

            <p className="p" style={{ marginTop: 10, maxWidth: 860 }}>
              Spatialytics combines web design, GIS, dashboards, and data
              storytelling to build tools that are clear, useful, and
              mission-aligned. Whether you need a modern website, an
              interactive map, or a more advanced spatial project, there’s a
              path that fits.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                marginTop: 18,
              }}
            >
              <Button href="/project-intake">Start a project</Button>
              <Button href="/projects" variant="ghost">
                View examples
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
              Most strong projects combine design, mapping, engineering, and
              data. You can start with one lane — or build across several.
            </p>
          </div>

          <div className="grid" style={{ marginTop: 22 }}>
            {SERVICES.map((s) => (
              <Card key={s.title} style={{ padding: 18 }}>
                <div
                  style={{ display: "flex", gap: 12, alignItems: "flex-start" }}
                >
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
                    <div style={{ fontWeight: 900, fontSize: 18 }}>
                      {s.title}
                    </div>
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
          </div>
        </Container>
      </Section>

      {/* PACKAGES */}
      <Section>
        <Container>
          <div style={{ textAlign: "center" }}>
            <h2 className="h2">Packages</h2>
            <p className="p" style={{ maxWidth: 860, margin: "10px auto 0" }}>
              These package ranges are designed to help you understand the most
              common ways clients work with Spatialytics.
            </p>
          </div>

          <div className="grid" style={{ marginTop: 22 }}>
            {PACKAGES.map((p) => (
              <Card
                key={p.name}
                style={{
                  padding: 18,
                  borderRadius: 22,
                  border: p.highlight
                    ? "1px solid rgba(99,102,241,0.35)"
                    : undefined,
                  boxShadow: p.highlight
                    ? "0 18px 50px rgba(99,102,241,0.12)"
                    : undefined,
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

                <div style={{ fontWeight: 950, fontSize: 22, marginTop: 10 }}>
                  {p.price}
                </div>

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

                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <Button href="/project-intake">Get quote</Button>
                  <Button href="/projects" variant="ghost">
                    See examples
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="muted" style={{ marginTop: 16, textAlign: "center" }}>
            Need something in between? I can scope around your goals, data,
            budget, timeline, or grant cycle.
          </div>
        </Container>
      </Section>

      {/* EXAMPLES */}
      <Section>
        <Container>
          <div style={{ textAlign: "center" }}>
            <h2 className="h2">Examples by type</h2>
            <p className="p" style={{ maxWidth: 860, margin: "10px auto 0" }}>
              Not sure where your idea fits? Start by browsing examples.
            </p>
          </div>

          <div className="grid" style={{ marginTop: 22 }}>
            {EXAMPLES.map((ex) => (
              <Card key={ex.title} style={{ padding: 18 }}>
                <div style={{ fontWeight: 900, fontSize: 18 }}>{ex.title}</div>
                <p className="p" style={{ marginTop: 8 }}>
                  {ex.text}
                </p>
                <div style={{ marginTop: 12 }}>
                  <Button href={ex.href} variant="ghost">
                    View examples
                  </Button>
                </div>
              </Card>
            ))}
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
                  Ready to build something clear, useful, and strategic?
                </div>
                <p className="p" style={{ marginTop: 8 }}>
                  Tell me what you’re trying to create — website, dashboard,
                  interactive map, or data workflow — and I’ll help you find
                  the best-fit path.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Button href="/project-intake">Get started</Button>
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
