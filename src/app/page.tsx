// src/app/page.tsx — Integrated Astro positioning + LocalPress
import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";
import WowDemo from "@/components/WowDemo";
import { site } from "@/lib/site";

const VALUE_PROPS = [
  {
    emoji: "🗺️",
    title: "Spatial Intelligence",
    desc: "Web GIS, interactive maps, 3D explorers, and location intelligence for tourism, municipal, natural resources, and advocacy partners.",
  },
  {
    emoji: "🖨️",
    title: "LocalPress — Print & POD",
    desc: "SaaS tools that help local print shops offer modern print-on-demand services, reduce overhead, and compete with larger platforms — without giving up margin.",
  },
  {
    emoji: "⚡",
    title: "Business Efficiency Apps",
    desc: "Custom web applications for Greater Minnesota businesses that cut administrative costs and support better wages through smarter operations.",
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
    title: "3D Bear Habitat Explorer",
    desc: "Live WebGL terrain + habitat overlays (MapLibre). Minnesota layers expanding.",
    href: "https://bear-habitat-3d.vercel.app/",
    tag: "WebGL · MapLibre",
  },
  {
    title: "371 / EIA Concept Demo",
    desc: "Public-facing explainer with visuals designed for clarity and buy-in.",
    href: "https://371-eia.vercel.app/",
    tag: "Civic · Explainer",
  },
  {
    title: "Passport to Adventure",
    desc: "Travel landing experience built for quick browsing and conversion.",
    href: "https://kris-passport-to-adventure.vercel.app/",
    tag: "Web · Landing",
  },
  {
    title: "Grit & Grace Store",
    desc: "Production e-commerce storefront with Stripe checkout and product UX.",
    href: "https://www.gritandgrace.buzz/",
    tag: "E-commerce · Stripe",
  },
  {
    title: "Political Fundraiser Site",
    desc: "Simple, effective static fundraising page optimized for sharing.",
    href: "https://kristinemk72.github.io/PoliticalFundraiser/",
    tag: "Campaign · Static",
  },
];

export default function HomePage() {
  return (
    <main>
      <Container className="pt-10">
        {/* HERO — Astro-style Greater Minnesota positioning */}
        <FadeIn>
          <div className="glass rounded-[2.25rem] p-8 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-80">
              <div className="absolute -top-24 -left-16 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute top-10 -right-20 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />
              <div className="absolute -bottom-28 left-1/3 h-96 w-96 rounded-full bg-cyan-600/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="kicker">Spatialytics · Greater Minnesota</div>

              <h1 className="h1 mt-4">
                Precision tools for people,
                <br />
                places, and progress
              </h1>

              <p className="p mt-6 max-w-2xl">
                Location intelligence and software products built in the Brainerd Lakes area — so high-value tech work
                and modern tools stay in Greater Minnesota.
              </p>

              <ul className="mt-6 space-y-2 text-slate-300 text-sm md:text-base max-w-2xl">
                <li>• <strong className="text-slate-100">Spatial intelligence</strong> — interactive maps, 3D explorers, and pin-drop tools</li>
                <li>• <strong className="text-slate-100">LocalPress</strong> — Print & POD platform for independent shops</li>
                <li>• <strong className="text-slate-100">ShiftSprout</strong> — Workforce OS for rural and mid-market operators</li>
                <li>• <strong className="text-slate-100">Mission-driven builds</strong> — civic data, grant match, cause platforms</li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Start a Conversation</Button>
                <Button href="/products" variant="ghost">
                  View products
                </Button>
                <Button href="https://bear-habitat-3d.vercel.app/" variant="ghost">
                  Launch 3D Explorer ↗
                </Button>
              </div>

              <div className="mt-10">
                <WowDemo />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* THREE WAYS WE CREATE VALUE */}
        <Section>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="kicker">Three ways we create value</div>
              <h2 className="h2 mt-2">GIS expertise + modern web products + local economic impact</h2>
            </div>
          </FadeIn>

          <div className="grid gap-4 md:grid-cols-3">
            {VALUE_PROPS.map((v) => (
              <FadeIn key={v.title}>
                <Card className="p-6 h-full">
                  <div className="text-2xl mb-3">{v.emoji}</div>
                  <div className="text-lg font-semibold">{v.title}</div>
                  <p className="p mt-2 text-sm">{v.desc}</p>
                  {v.title.startsWith("LocalPress") && (
                    <div className="mt-4">
                      <Button href="/products/localpress" variant="ghost">
                        Learn more →
                      </Button>
                    </div>
                  )}
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        {/* WHY GREATER MINNESOTA */}
        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10">
              <div className="kicker">Why Greater Minnesota needs this</div>
              <h2 className="h2 mt-2">Closing the software & spatial industry gap</h2>
              <p className="p mt-3 max-w-3xl">
                The Brainerd Lakes area has a clear industry gap in software product development and spatial analytics
                companies. High-wage tech roles are underrepresented. Spatialytics exists to close that gap — creating
                year-round, high-value jobs while giving local businesses modern tools.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">~1.1%</div>
                  <div className="text-xs text-slate-400 mt-1">Computer & Math occupations<br />Northwest MN</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400">~3.5%</div>
                  <div className="text-xs text-slate-400 mt-1">Statewide average</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-400">Lower</div>
                  <div className="text-xs text-slate-400 mt-1">Cost of living vs Metro</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-amber-400">High</div>
                  <div className="text-xs text-slate-400 mt-1">Talent retention opportunity</div>
                </div>
              </div>

              <div className="mt-8">
                <Button href="/about" variant="ghost">
                  Learn more about the regional opportunity →
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Section>

        {/* FEATURED WORK */}
        <Section>
          <FadeIn>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <div className="kicker">Featured work</div>
                <h2 className="h2 mt-2">Public demos & shipped products</h2>
                <p className="p mt-2 max-w-2xl">
                  Interactive maps, civic explainers, e-commerce, and mission platforms.
                </p>
              </div>
              <Button href="/projects" variant="ghost">
                View all projects
              </Button>
            </div>
          </FadeIn>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_BUILDS.map((b) => (
              <FadeIn key={b.title}>
                <Card className="p-6 h-full flex flex-col">
                  <div className="text-xs text-white/60">{b.tag}</div>
                  <div className="text-lg font-semibold mt-1">{b.title}</div>
                  <p className="p mt-2 text-sm flex-1">{b.desc}</p>
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

        {/* FINAL CTA */}
        <Section>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="h2">Ready to build something that stays local?</h2>
              <p className="p mt-3">
                Whether you need a spatial platform, a LocalPress storefront for your print shop, a workforce tool, a
                quick website, or a site that raises awareness — let’s talk.
              </p>
              <div className="mt-8 flex gap-3 justify-center flex-wrap">
                <Button href="/contact">Start a Conversation</Button>
                <Button href="/products" variant="ghost">
                  Explore products
                </Button>
              </div>
            </div>
          </FadeIn>
        </Section>

        {/* FOOTER */}
        <footer className="mt-16 mb-12 border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="font-bold text-lg flex items-center gap-2 mb-2">
                <span className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-slate-950 text-xs font-black">
                  S
                </span>
                Spatialytics
              </div>
              <p className="text-sm text-slate-400 max-w-xs">
                Spatial intelligence, LocalPress, ShiftSprout, and software that keep value in Greater Minnesota.
              </p>
            </div>
            <div className="flex flex-wrap gap-12 text-sm text-slate-400">
              <div className="space-y-2">
                <div className="font-medium text-slate-200">Products</div>
                <a href="/products" className="block hover:text-cyan-400 transition">Overview</a>
                <a href="/products/localpress" className="block hover:text-cyan-400 transition">LocalPress</a>
                <a href="https://shiftsprout.vercel.app" target="_blank" rel="noopener" className="block hover:text-cyan-400 transition">ShiftSprout ↗</a>
              </div>
              <div className="space-y-2">
                <div className="font-medium text-slate-200">Company</div>
                <a href="/about" className="block hover:text-cyan-400 transition">About</a>
                <a href="/projects" className="block hover:text-cyan-400 transition">Work</a>
                <a href="/contact" className="block hover:text-cyan-400 transition">Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Spatialytics · Built in the Brainerd Lakes area
          </div>
        </footer>
      </Container>
    </main>
  );
}
