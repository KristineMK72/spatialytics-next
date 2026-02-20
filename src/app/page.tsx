// src/app/page.tsx
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";
import WowDemo from "@/components/WowDemo";
import { site } from "@/lib/site";

const PROOF = [
  {
    title: "Values-forward, evidence-based advocacy",
    desc: "Clear, defensible insights that support better public outcomes — without losing the human story.",
  },
  {
    title: "Planning + GIS + product-grade web",
    desc: "Modern Web GIS, dashboards, and explainers that feel like real products — built for decision-makers.",
  },
  {
    title: "Reliable data + sustainable workflows",
    desc: "Automation, documentation, and reproducible pipelines so your work stays current and trustworthy.",
  },
] as const;

type FeaturedBuild = {
  title: string;
  desc: string;
  href: string;
  tag: string;
};

const FEATURED_BUILDS: FeaturedBuild[] = [
  {
    title: "3D Bear Habitat Demo",
    desc: "Live WebGL terrain + overlays — a teaser build with more layers coming.",
    href: "https://bear-habitat-3d.vercel.app/",
    tag: "WebGL · MapLibre",
  },
  {
    title: "371 / EIA Concept Demo",
    desc: "A public-facing explainer with visuals designed for clarity and buy-in.",
    href: "https://371-eia.vercel.app/",
    tag: "Civic · Explainer",
  },
  {
    title: "Passport to Adventure",
    desc: "A travel landing experience built for quick browsing and conversion.",
    href: "https://kris-passport-to-adventure.vercel.app/",
    tag: "Web · Landing",
  },
  {
    title: "Political Fundraiser Site",
    desc: "Simple, effective static fundraising page optimized for sharing.",
    href: "https://kristinemk72.github.io/PoliticalFundraiser/",
    tag: "Campaign · Static",
  },
  {
    title: "Grit & Grace Store",
    desc: "Production e-commerce storefront with Stripe checkout and product UX.",
    href: "https://www.gritandgrace.buzz/",
    tag: "E-commerce · Stripe",
  },
];

export default function HomePage() {
  return (
    <main>
      <Container className="pt-10">
        {/* HERO */}
        <FadeIn>
          <div className="glass rounded-[2.25rem] p-8 md:p-14 overflow-hidden relative">
            {/* glow blobs (keep, but calmer) */}
            <div className="absolute inset-0 pointer-events-none opacity-80">
              <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="absolute top-10 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-28 left-1/3 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
            </div>

            <div className="relative">
              <div className="kicker">
                Advocacy · Social sustainability · GIS + data + technology
              </div>

              <h1 className="h1 mt-4">
                <span className="opacity-95">Advocacy Through</span>
                <br />
                <span className="opacity-95">Spatial Intelligence</span>
              </h1>

              <p className="p mt-6 max-w-2xl">
                We partner with agencies and mission-aligned organizations to integrate GIS, environmental planning,
                and data-driven technology in service of social sustainability — strengthening the systems that support
                stable, resilient communities.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Partner with Spatialytics</Button>
                <Button href="/projects" variant="ghost">
                  Explore projects
                </Button>
                <Button href="/services" variant="ghost">
                  How we collaborate
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
                {site.name} · Built to collaborate, ship responsibly, and measure impact.
              </div>
            </div>
          </div>
        </FadeIn>

        {/* INTRO */}
        <Section>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <div className="kicker">Our approach</div>
              <h2 className="h2 mt-2">Mission-first systems built for real decisions</h2>
              <p className="p mt-3">
                Spatial intelligence only matters when it leads to action. We help partners understand what’s happening,
                where it’s happening, and what to do next — through accessible mapping, clear data storytelling, and
                product-grade tools designed for public-facing clarity and internal decision-making.
              </p>

              <div className="mt-6 flex gap-3 justify-center flex-wrap">
                <Button href="/services" variant="ghost">
                  Partnership model
                </Button>
                <Button href="/contact">Start a collaboration</Button>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* FEATURED BUILDS */}
        <Section>
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="kicker">Featured work</div>
                <h2 className="h2 mt-2">Public demos & shipped products</h2>
                <p className="p mt-2 max-w-2xl">
                  A quick tour of interactive work — WebGL demos, civic explainers, dashboards, landing experiences,
                  and production sites.
                </p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Button href="/projects" variant="ghost">
                  View all projects
                </Button>
              </div>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_BUILDS.map((b) => (
              <FadeIn key={b.title}>
                <Card className="p-6">
                  <div className="text-xs text-white/60">{b.tag}</div>
                  <div className="text-lg font-semibold mt-1">{b.title}</div>
                  <p className="p mt-2 text-sm">{b.desc}</p>

                  <div className="mt-4">
                    <Button href={b.href} variant="ghost" target="_blank">
                      Open →
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">Collaborate with Spatialytics</div>
              <h2 className="h2 mt-2">Want data that supports action — and values?</h2>
              <p className="p mt-3 max-w-2xl">
                If you can define the audience, the decision, and the outcome you’re aiming for, we can build the
                mapping, analytics, and web experience that gets you there — clear, modern, and ready to use.
              </p>

              <div className="mt-6 flex gap-3 flex-wrap">
                <Button href="/contact">Contact</Button>
                <Button href="/services" variant="ghost">
                  See how we work
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Section>

        {/* FOOTER */}
        <footer className="mt-10 mb-10">
          <div className="glass rounded-2xl p-6 text-center">
            <div className="text-sm text-white/70">© {new Date().getFullYear()} Spatialytics</div>
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
