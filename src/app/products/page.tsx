import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

const PRODUCTS = [
  {
    title: "LocalPress",
    tagline: "Print & POD for independent shops",
    desc: "Modern print-on-demand storefronts, production workflows, inventory, and map-based delivery zones — so local shops keep the work and the margin.",
    href: "/products/localpress",
    status: "In development",
  },
  {
    title: "ShiftSprout",
    tagline: "Workforce OS for rural & mid-market",
    desc: "Scheduling, timekeeping, PTO, and manager-first tools built so operators can keep overhead low and put more into paychecks.",
    href: "https://shiftsprout.vercel.app",
    status: "Live",
    external: true,
  },
  {
    title: "Spatial Intelligence",
    tagline: "Maps, 3D explorers, location tools",
    desc: "Interactive maps, Web GIS, 3D habitat explorers, and pin-drop tools for tourism, municipal, natural resources, and advocacy partners.",
    href: "/projects",
    status: "Live demos",
  },
  {
    title: "Spatialytics OS",
    tagline: "Focused SaaS for SMBs & community orgs",
    desc: "A growing family of subscription tools designed for place-based operators who need modern software without enterprise overhead.",
    href: "/contact",
    status: "Coming soon",
  },
] as const;

export default function ProductsPage() {
  return (
    <main>
      <Container className="pt-10 pb-16">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="kicker">Products</div>
            <h1 className="h1 mt-2">Tools built for Greater Minnesota operators</h1>
            <p className="p mt-4">
              Subscription products and platforms that cut overhead, keep production local, and put modern software in
              the hands of print shops, workforce managers, municipalities, and community organizations.
            </p>
          </div>
        </FadeIn>

        <Section>
          <div className="grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p) => (
              <FadeIn key={p.title}>
                <Card className="p-6 md:p-8 h-full flex flex-col">
                  <div className="text-xs uppercase tracking-wider text-cyan-400/90">{p.status}</div>
                  <h2 className="text-xl font-bold mt-2">{p.title}</h2>
                  <div className="text-slate-300 font-medium mt-1">{p.tagline}</div>
                  <p className="p mt-3 text-sm flex-1">{p.desc}</p>
                  <div className="mt-6">
                    <Button href={p.href} variant="ghost" target={"external" in p && p.external ? "_blank" : undefined}>
                      {"external" in p && p.external ? "Open ↗" : "Learn more →"}
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section>
          <FadeIn>
            <Card className="p-8 text-center">
              <h2 className="h2">Need something custom?</h2>
              <p className="p mt-3 max-w-xl mx-auto">
                We also build focused web apps, dashboards, and spatial tools for local operators. Tell us the problem
                and we’ll propose a fast path to a production MVP.
              </p>
              <div className="mt-6">
                <Button href="/contact">Start a conversation</Button>
              </div>
            </Card>
          </FadeIn>
        </Section>
      </Container>
    </main>
  );
}
