import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

const FEATURED = [
  {
    title: "Grit & Grace Store",
    desc: "Faith-driven apparel + patriotic designs on a custom e-commerce platform.",
    href: "https://www.gritandgrace.buzz/",
    tag: "E-commerce",
  },
  {
    title: "South Dakota Rainfall Explorer",
    desc: "Interactive rainfall dashboard with county trends, charts, and climate insights.",
    href: "https://sd-rainfall-viz.vercel.app",
    tag: "Dashboard",
  },
  {
    title: "The Resilient Voice",
    desc: "Mission-driven platform amplifying stories of faith, freedom, and resilience.",
    href: "https://theresilientvoice.com",
    tag: "Platform",
  },
];

const COMMUNITY = [
  {
    title: "Medical Fundraiser Template",
    desc: "Customizable, anonymous GoFundMe-style fundraiser page.",
    href: "https://kristinemk72.github.io/Fundraiser/",
    tag: "Template",
  },
  {
    title: "Campaign Fundraiser Template",
    desc: "Neutral, non-candidate donation page template.",
    href: "https://kristinemk72.github.io/PoliticalFundraiser/",
    tag: "Template",
  },
];

const LEGACY = [
  {
    title: "Native Nations History Map",
    desc: "Interactive map highlighting Native Nations, lands, and cultures.",
    href: "https://kristinemk72.github.io/Native-Nations-History-Map/",
    tag: "Web GIS",
  },
  {
    title: "Missions & Mental Health",
    desc: "Story map connecting missionary journeys and mental resilience.",
    href: "https://kristinemk72.github.io/missions-and-mental-health/",
    tag: "Story map",
  },
  {
    title: "August E. Winter",
    desc: "Historic journeys visualized through geospatial storytelling.",
    href: "https://kristinemk72.github.io/August-E-Winter/",
    tag: "Story map",
  },
  {
    title: "Wind Turbine Work",
    desc: "Renewable energy planning and operations documentation.",
    href: "https://kristinemk72.github.io/WindTurbineWork/",
    tag: "GIS",
  },
  {
    title: "Halloween History",
    desc: "Interactive story map exploring cultural roots of Halloween.",
    href: "https://kristinemk72.github.io/Halloween-History/",
    tag: "Story map",
  },
];

function Grid({
  items,
}: {
  items: { title: string; desc: string; href: string; tag: string }[];
}) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <FadeIn key={p.title}>
          <a href={p.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <Card className="p-6">
              <div className="kicker">{p.tag}</div>
              <div className="h3 mt-2" style={{ fontWeight: 900 }}>
                {p.title}
              </div>
              <p className="p mt-2 text-sm prose">{p.desc}</p>
              <div className="mt-4" style={{ fontWeight: 800, color: "rgba(234,242,255,0.9)" }}>
                View →
              </div>
            </Card>
          </a>
        </FadeIn>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <Container className="pt-14 md:pt-16">
        <FadeIn>
          <div className="glass hero-panel rounded-[2.25rem] p-10 md:p-16 overflow-hidden relative">
            <div className="kicker">Projects</div>
            <h1 className="h1 mt-4">Portfolio</h1>
            <p className="p mt-6 max-w-2xl prose">
              Geospatial Intelligence · Web Development · Data Automation · Brand Ecosystems
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <Button href="/contact">Start a project</Button>
              <Button href="/services" variant="ghost">
                Services
              </Button>
              <Button href="/about" variant="ghost">
                About
              </Button>
            </div>
          </div>
        </FadeIn>

        <Section>
          <FadeIn>
            <div className="kicker">Featured work</div>
            <h2 className="h2 mt-2">Highlighted builds</h2>
            <p className="p mt-2 max-w-2xl prose">
              A mix of mapping, product design, and full-stack builds.
            </p>
          </FadeIn>
          <Grid items={FEATURED} />
        </Section>

        <Section>
          <FadeIn>
            <div className="kicker">Community & fundraising</div>
            <h2 className="h2 mt-2">Templates with impact</h2>
            <p className="p mt-2 max-w-2xl prose">
              Useful, deployable tools for people doing real work in the real world.
            </p>
          </FadeIn>
          <Grid items={COMMUNITY} />
        </Section>

        <Section>
          <FadeIn>
            <div className="kicker">Legacy GIS</div>
            <h2 className="h2 mt-2">Story maps + history</h2>
            <p className="p mt-2 max-w-2xl prose">
              Older projects that still show what I care about: narrative, culture, and clarity.
            </p>
          </FadeIn>
          <Grid items={LEGACY} />
        </Section>

        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">Next</div>
              <h2 className="h2 mt-2">Want one of these for your org?</h2>
              <p className="p mt-3 max-w-2xl prose">
                Tell me the audience, the decision, and the data source. I’ll propose a clean build plan and a fast MVP.
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                <Button href="/contact">Contact</Button>
                <Button href="/services" variant="ghost">
                  Services
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Section>
      </Container>
    </main>
  );
}
