import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

const FEATURED = [
  {
    title: "Echoes of the Land",
    desc: "Interactive map of Indigenous trails, cultures, and living history.",
    href: "https://kristinemk72.github.io/echoes-of-the-land/",
    tag: "Story map",
  },
  {
    title: "Missions & Mental Health",
    desc: "A storymap exploring the intersection of faith and mental wellness.",
    href: "https://kristinemk72.github.io/missions-and-mental-health/",
    tag: "Storytelling",
  },
  {
    title: "Wind Turbine Work",
    desc: "Automation + geospatial planning for turbine inspection and field ops.",
    href: "https://kristinemk72.github.io/WindTurbineWork/",
    tag: "Automation",
  },
  {
    title: "Native Nations History Map",
    desc: "Interactive map of tribal nations, treaties, and historic boundaries.",
    href: "https://kristinemk72.github.io/Native-Nations-History-Map/",
    tag: "Web GIS",
  },
];

const SKILLS = [
  { title: "ArcGIS & QGIS", desc: "Analysis, cartography, editing workflows, field data." },
  { title: "Python & SQL", desc: "Pipelines, ETL, APIs, automation, reproducible analysis." },
  { title: "AWS & Azure", desc: "Cloud hosting, data services, integration patterns." },
  { title: "Web Development", desc: "Next.js, Leaflet, dashboards, modern UI systems." },
];

export default function AboutPage() {
  return (
    <main>
      <Container className="pt-14 md:pt-16">
        {/* HERO */}
        <FadeIn>
          <div className="glass hero-panel rounded-[2.25rem] p-10 md:p-16 overflow-hidden relative">
            <div className="kicker">About</div>
            <h1 className="h1 mt-4">Meet Kristine Kahler</h1>
            <p className="p mt-6 max-w-2xl prose">
              I’m a GIS professional with 10+ years of experience building geospatial tools and modern web experiences.
              I blend mapping, automation, and clean design to turn complex data into clarity people can use.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <Button href="/contact">Work with me</Button>
              <Button href="/projects" variant="ghost">
                View projects
              </Button>
              <Button href="https://kristinemk72.github.io/Kristine-Kahler/" variant="ghost">
                View more work
              </Button>
            </div>

            {/* Avatar + mini highlights */}
            <div className="mt-10 grid gap-4 md:grid-cols-[180px_1fr] items-start">
              <div className="glass rounded-2xl p-4 text-center">
                <img
                  src="https://github.com/user-attachments/assets/32fb6218-0c1a-4ee4-9016-192c3c01f648"
                  alt="Kristine Kahler"
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: 999,
                    objectFit: "cover",
                    border: "3px solid rgba(255,255,255,0.25)",
                    margin: "0 auto",
                    display: "block",
                  }}
                />
                <div className="mt-4 text-sm text-white/80" style={{ fontWeight: 800 }}>
                  Founder · Spatialytics Solutions
                </div>
                <div className="mt-1 text-xs text-white/60">Minnesota, USA</div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { t: "Web GIS + mapping", d: "Interactive maps that feel like products—not portals." },
                  { t: "Data automation", d: "Pipelines that keep dashboards fresh and reliable." },
                  { t: "Storytelling UX", d: "Narratives + layers + guided exploration, done clean." },
                  { t: "Decision support", d: "Make patterns obvious so people act faster." },
                ].map((x) => (
                  <Card key={x.t} className="p-6">
                    <div style={{ fontWeight: 800 }}>{x.t}</div>
                    <p className="p mt-2 text-sm prose">{x.d}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* STORY */}
        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">My story</div>
              <h2 className="h2 mt-2">From geospatial to full-stack</h2>

              <div className="mt-4 stack prose">
                <p className="p">
                  With a Master’s in Geospatial Technology, I specialize in ArcGIS, QGIS, Python, SQL, and cloud
                  platforms. I build dashboards, story maps, and custom applications that make complex systems easier
                  to understand.
                </p>
                <p className="p">
                  My passion for geospatial storytelling shows up in projects like <em>Echoes of the Land</em> (an
                  interactive map of Indigenous trails) and web experiences that combine mapping with real-time data.
                </p>
                <p className="p">
                  I bring corporate experience from roles at companies like HDR Inc. and National Grid, and pair it
                  with freelance creativity—so your project gets both structure and imagination.
                </p>
              </div>
            </Card>
          </FadeIn>
        </Section>

        {/* SKILLS */}
        <Section>
          <FadeIn>
            <div className="text-center">
              <div className="kicker">Skills & technologies</div>
              <h2 className="h2 mt-2">The tools I build with</h2>
              <p className="p mt-3 max-w-2xl mx-auto prose">
                I choose stacks that ship fast, scale cleanly, and stay maintainable.
              </p>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {SKILLS.map((s) => (
              <FadeIn key={s.title}>
                <Card className="p-6">
                  <div style={{ fontWeight: 900 }}>{s.title}</div>
                  <p className="p mt-2 text-sm prose">{s.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* FEATURED PROJECT SLIDER */}
        <Section>
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="kicker">Featured projects</div>
                <h2 className="h2 mt-2">Work I’m proud of</h2>
                <p className="p mt-2 max-w-2xl prose">
                  A few highlights that show how I blend data, UX, and storytelling.
                </p>
              </div>
              <Button href="/projects" variant="ghost">
                See all
              </Button>
            </div>
          </FadeIn>

          <div
            className="mt-6"
            style={{
              display: "flex",
              gap: 16,
              overflowX: "auto",
              paddingBottom: 10,
              scrollSnapType: "x mandatory",
            }}
          >
            {FEATURED.map((p) => (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit", flex: "0 0 auto", scrollSnapAlign: "start" }}
              >
                <Card className="p-6" style={{ width: 320 }}>
                  <div className="kicker">{p.tag}</div>
                  <div className="h3 mt-2" style={{ fontWeight: 900 }}>
                    {p.title}
                  </div>
                  <p className="p mt-2 text-sm prose">{p.desc}</p>
                  <div className="mt-4" style={{ fontWeight: 800, color: "rgba(234,242,255,0.9)" }}>
                    View project →
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">Let’s build</div>
              <h2 className="h2 mt-2">Have a map idea or data mess?</h2>
              <p className="p mt-3 max-w-2xl prose">
                Tell me the audience and the decision you want them to make. I’ll help you build the interactive
                system that gets them there.
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
