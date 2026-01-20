// src/app/page.tsx
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import WowDemo from "@/components/WowDemo";
import { site } from "@/lib/site";
import { projects } from "@/content/projects";

const PROOF = [
  {
    title: "Modern Web GIS",
    desc: "Next.js + Leaflet/MapLibre patterns that feel premium — not portal-y.",
  },
  {
    title: "Storytelling UX",
    desc: "Guided exploration that keeps layers + narrative clear and focused.",
  },
  {
    title: "Automation & Pipelines",
    desc: "Fresh data, scheduled updates, and reproducible workflows you can trust.",
  },
] as const;

const BUILDS = [
  {
    title: "3D Bear Habitat Explorer",
    desc: "WebGL terrain + habitat overlays (MapLibre). Teaser build with more MN layers coming.",
    href: "https://bear-habitat-3d.vercel.app/",
    tag: "3D / WebGL",
  },
  {
    title: "Hwy 371 / 210 EIA Tool",
    desc: "A simple, clear project page for a real-world infrastructure decision story.",
    href: "https://371-eia.vercel.app/",
    tag: "Civic / Infra",
  },
  {
    title: "Passport to Adventure",
    desc: "Travel site build — structured pages, clean UX, and conversion-friendly layout.",
    href: "https://kris-passport-to-adventure.vercel.app/",
    tag: "Web / Brand",
  },
  {
    title: "Political Fundraiser Page",
    desc: "Lightweight public info page built for clarity and fast publishing.",
    href: "https://kristinemk72.github.io/PoliticalFundraiser/",
    tag: "Web / Landing",
  },
] as const;

function BuildCard({
  title,
  desc,
  href,
  tag,
}: {
  title: string;
  desc: string;
  href: string;
  tag?: string;
}) {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold">{title}</div>
          {tag ? <div className="mt-1 text-xs text-white/60">{tag}</div> : null}
        </div>
        <span className="text-white/45" aria-hidden>
          ↗
        </span>
      </div>

      <p className="p mt-3 text-sm">{desc}</p>

      <div className="mt-4 flex gap-2 flex-wrap">
        <Button href={href} target="_blank" rel="noreferrer">
          Open →
        </Button>
        <Button href="/contact" variant="ghost">
          Build something like this
        </Button>
      </div>
    </Card>
  );
}

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      <Container className="pt-10">
        {/* HERO */}
        <FadeIn>
          <div className="glass rounded-[2.25rem] p-8 md:p-14 overflow-hidden relative">
            {/* glow blobs */}
            <div className="absolute inset-0 pointer-events-none opacity-90">
              <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-purple-500/25 blur-3xl" />
              <div className="absolute top-10 -right-20 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl" />
              <div className="absolute -bottom-28 left-1/3 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
            </div>

            <div className="relative">
              <div className="kicker">Geospatial intelligence · Web development · Data automation</div>

              <h1 className="h1 mt-4">
                Spatialytics Solutions
                <br />
                <span className="opacity-90">Geospatial & web innovation.</span>
              </h1>

              <p className="p mt-6 max-w-2xl">
                I build interactive mapping + web experiences that feel like real products — dashboards, story maps,
                data tools, and full-stack builds that turn complex information into clear decisions.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Contact Kris</Button>
                <Button href="/projects" variant="ghost">
                  View projects
                </Button>
                <Button href="/services" variant="ghost">
                  Services
                </Button>
              </div>

              {/* Proof strip */}
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {PROOF.map((x) => (
                  <Card key={x.title} className="p-5">
                    <div className="font-semibold">{x.title}</div>
                    <p className="p mt-2 text-sm">{x.desc}</p>
                  </Card>
                ))}
              </div>

              {/* WOW DEMO */}
              <div className="mt-10">
                <WowDemo />
              </div>

              <div className="mt-6 text-xs text-white/55">
                {site.name} · Built to ship quickly, iterate safely, and look good doing it.
              </div>
            </div>
          </div>
        </FadeIn>

        {/* INTRO */}
        <Section>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="kicker">Transforming data into usable tools</div>
              <h2 className="h2 mt-2">From maps to moments</h2>
              <p className="p mt-3">
                Spatial intelligence is only useful when people can act on it — and sometimes the best “map” is a clean
                web page. I build fast, modern experiences that help people understand what’s happening and what to do
                next.
              </p>

              <div className="mt-6 flex gap-3 justify-center flex-wrap">
                <Button href="/services" variant="ghost">
                  Explore services
                </Button>
                <Button href="/contact">Start a project</Button>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* FEATURED BUILDS (NEW) */}
        <Section>
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="kicker">Featured builds</div>
                <h2 className="h2 mt-2">Live demos & shipped pages</h2>
                <p className="p mt-2 max-w-2xl">
                  A mix of geospatial prototypes and web-first projects — published fast, designed clean, and built to
                  iterate.
                </p>
              </div>

              <Button href="/contact" variant="ghost">
                Request a demo
              </Button>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {BUILDS.map((b) => (
              <FadeIn key={b.href}>
                <BuildCard title={b.title} desc={b.desc} href={b.href} tag={b.tag} />
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* FEATURED WORK (your existing case studies, kept) */}
        <Section>
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="kicker">Selected GIS work</div>
                <h2 className="h2 mt-2">Case studies with real outcomes</h2>
                <p className="p mt-2 max-w-2xl">
                  Deeper dives into GIS projects — the problem, approach, stack, and what changed because of it.
                </p>
              </div>

              <Button href="/projects" variant="ghost">
                View all
              </Button>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featured.map((p) => (
              <FadeIn key={p.slug}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">Let’s build something sharp</div>
              <h2 className="h2 mt-2">Want your data to look like a product?</h2>
              <p className="p mt-3 max-w-2xl">
                If you can define the audience and the decision you want them to make, I can build the interactive
                system that gets them there — fast, clean, and ready to ship.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <Button href="/contact">Contact</Button>
                <Button href="/services" variant="ghost">
                  See services
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Section>

        {/* FOOTER */}
        <footer className="mt-10 mb-10">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-sm text-white/70">© {new Date().getFullYear()} Spatialytics Solutions</div>
            <div className="mt-2 text-sm">
              <span className="text-white/60">Contact:</span>{" "}
              <a className="underline underline-offset-4" href="mailto:kris.spatialytics@gritandgrace.buzz">
                kris.spatialytics@gritandgrace.buzz
              </a>
            </div>
          </div>
        </footer>
      </Container>
    </main>
  );
}
