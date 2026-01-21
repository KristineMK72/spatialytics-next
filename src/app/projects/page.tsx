import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

const FEATURED = [
  {
    title: "Grit & Grace Store",
    desc: "Faith-driven apparel and patriotic designs built on a custom, fully owned e-commerce platform.",
    href: "https://www.gritandgrace.buzz/",
    tag: "E-commerce",
  },
  {
    title: "South Dakota Rainfall Explorer",
    desc: "An interactive climate dashboard exploring rainfall trends, county-level patterns, and long-term variability.",
    href: "https://sd-rainfall-viz.vercel.app",
    tag: "Climate dashboard",
  },
  {
    title: "The Resilient Voice",
    desc: "A mission-driven platform amplifying stories of faith, freedom, resilience, and civic engagement.",
    href: "https://theresilientvoice.com",
    tag: "Platform",
  },
];

const COMMUNITY = [
  {
    title: "Medical Fundraiser Template",
    desc: "An open, customizable fundraising template designed for privacy, dignity, and ease of use.",
    href: "https://kristinemk72.github.io/Fundraiser/",
    tag: "Community template",
  },
  {
    title: "Campaign Fundraiser Template",
    desc: "A neutral donation page template suitable for civic initiatives and non-candidate efforts.",
    href: "https://kristinemk72.github.io/PoliticalFundraiser/",
    tag: "Civic template",
  },
];

const LEGACY = [
  {
    title: "Native Nations History Map",
    desc: "An interactive map highlighting Native Nations, ancestral lands, and cultural geography.",
    href: "https://kristinemk72.github.io/Native-Nations-History-Map/",
    tag: "Web GIS",
  },
  {
    title: "Missions & Mental Health Hub",
    desc: "A dashboard-style resource center organizing partners, planning tools, and wellness resources.",
    href: "https://kristinemk72.github.io/missions-and-mental-health/",
    tag: "Program dashboard",
  },
  {
    title: "August E. Winter",
    desc: "Historic journeys visualized through geospatial storytelling and archival research.",
    href: "https://kristinemk72.github.io/August-E-Winter/",
    tag: "Story map",
  },
  {
    title: "Wind Turbine Work",
    desc: "Documentation and spatial analysis supporting renewable energy planning and operations.",
    href: "https://kristinemk72.github.io/WindTurbineWork/",
    tag: "GIS",
  },
  {
    title: "Halloween History",
    desc: "A narrative map exploring the cultural and historical roots of Halloween traditions.",
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
          <a
            href={p.href}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card className="p-6">
              <div className="kicker">{p.tag}</div>
              <div className="h3 mt-2" style={{ fontWeight: 900 }}>
                {p.title}
              </div>
              <p className="p mt-2 text-sm prose">{p.desc}</p>
              <div
                className="mt-4"
                style={{ fontWeight: 800, color: "rgba(234,242,255,0.9)" }}
              >
                View project →
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
            <div className="kicker">Selected work</div>
            <h1 className="h1 mt-4">Projects</h1>
            <p className="p mt-6 max-w-2xl prose">
              This page highlights a curated selection of projects spanning
              geospatial intelligence, web development, data visualization,
              and mission-driven digital platforms.  
              It is not an exhaustive archive, but a snapshot of how I work.
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
            <div className="kicker">Featured</div>
            <h2 className="h2 mt-2">Recent & highlighted builds</h2>
            <p className="p mt-2 max-w-2xl prose">
              A selection of recent production work, live platforms,
              and exploratory builds currently in use.
            </p>
          </FadeIn>
          <Grid items={FEATURED} />
        </Section>

        <Section>
          <FadeIn>
            <div className="kicker">Community</div>
            <h2 className="h2 mt-2">Templates & public tools</h2>
            <p className="p mt-2 max-w-2xl prose">
              Open and adaptable tools created alongside ongoing client
              and community-focused work.
            </p>
          </FadeIn>
          <Grid items={COMMUNITY} />
        </Section>

        <Section>
          <FadeIn>
            <div className="kicker">Foundations</div>
            <h2 className="h2 mt-2">Story maps & archival work</h2>
            <p className="p mt-2 max-w-2xl prose">
              Earlier and archival projects that continue to shape how I
              approach narrative, culture, and spatial clarity.
            </p>
          </FadeIn>
          <Grid items={LEGACY} />
        </Section>

        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">What’s next</div>
              <h2 className="h2 mt-2">Have a project in mind?</h2>
              <p className="p mt-3 max-w-2xl prose">
                These examples represent only a portion of my work.  
                If you have an audience, a decision to support, or data that
                needs clarity, I’ll propose a focused build plan and a fast,
                production-ready MVP.
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
