import Container from "@/components/Container";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Button from "@/components/Button";

const SERVICES = [
  {
    icon: "🗺️",
    title: "GIS Web Applications",
    desc:
      "Interactive maps and geospatial tools using ArcGIS, QGIS, and Leaflet or MapLibre. Ideal for public dashboards, story maps, and decision support tools.",
    href: "/projects#gis-apps",
  },
  {
    icon: "💻",
    title: "Custom Web Development",
    desc:
      "Responsive, modern websites and applications built for clarity, performance, and long-term maintainability.",
    href: "/projects#web-dev",
  },
  {
    icon: "⚙️",
    title: "Data Automation",
    desc:
      "Python, SQL, and API-based automation for repeatable reporting, ETL pipelines, and operational workflows.",
    href: "/projects#data-auto",
  },
];

const PACKAGES = [
  {
    name: "Basic",
    price: "$1,500 – $3,000",
    desc: "Simple GIS map or website",
  },
  {
    name: "Standard",
    price: "$3,000 – $7,000",
    desc: "Interactive map or custom application",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$7,000 – $15,000",
    desc: "Complex build with APIs or automation",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <Section>
        <Container>
          <div className="hero-panel glass p-8 md:p-12">
            <div className="kicker">Spatialytics</div>
            <h1 className="h1 mt-3">Services & Pricing</h1>
            <p className="p max-w-3xl mt-4">
              Geospatial, web, and data solutions designed to be clear, durable, and mission-aligned.
            </p>
            <div className="flex gap-3 flex-wrap mt-6">
              <Button href="/contact">Request a quote</Button>
              <Button href="#pricing" variant="ghost">
                View pricing
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section>
        <Container>
          <h2 className="h2 text-center mb-8">What I do</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <Card key={s.title} className="p-6">
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="h3 mb-2">{s.title}</h3>
                <p className="p mb-4">{s.desc}</p>
                <Button href={s.href} variant="ghost">
                  View examples
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* PRICING */}
      <Section>
        <Container>
          <div id="pricing" className="text-center mb-8 scroll-mt-24">
            <h2 className="h2">Service packages</h2>
            <p className="p max-w-3xl mx-auto mt-3">
              These ranges are a planning guide. Final pricing depends on data readiness, integrations, and scope.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGES.map((p) => (
              <Card
                key={p.name}
                className={`p-6 ${p.highlight ? "ring-2 ring-accent" : ""}`}
              >
                <h3 className="h3 mb-2">{p.name}</h3>
                <div className="text-2xl font-extrabold mb-1">{p.price}</div>
                <p className="p mb-5">{p.desc}</p>
                <Button href="/contact">Get quote</Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <Card className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="kicker">Free consult</div>
              <h3 className="h3 mt-2">Ready to transform your data?</h3>
              <p className="p mt-2 max-w-xl">
                Tell me what you’re trying to build — I’ll suggest the fastest path and a realistic scope.
              </p>
            </div>
            <Button href="/contact">Get started</Button>
          </Card>
        </Container>
      </Section>
    </main>
  );
}
