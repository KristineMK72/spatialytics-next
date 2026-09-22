import Container from "@/components/Container";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import Card from "@/components/Card";
import Button from "@/components/Button";

export const metadata = {
  title: "LocalPress — Print & POD for Independent Shops | Spatialytics",
  description:
    "The local-first Print-on-Demand platform that helps independent print shops compete with Printful while keeping production, margin, and jobs local.",
};

export default function LocalPressPage() {
  return (
    <main>
      <Container className="pt-10 pb-16">
        <FadeIn>
          <div className="glass rounded-[2.25rem] p-8 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
            </div>
            <div className="relative">
              <div className="kicker">Product · Print & POD</div>
              <h1 className="h1 mt-3">LocalPress</h1>
              <p className="text-xl text-slate-300 mt-2 font-medium">
                The operating system for independent print shops
              </p>
              <p className="p mt-6 max-w-2xl">
                Modern print-on-demand storefronts, production workflows, inventory, and location-aware delivery —
                built so local shops keep the work and the margin.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact?product=localpress">Join early access</Button>
                <Button href="/products" variant="ghost">
                  All products
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>

        <Section>
          <FadeIn>
            <div className="kicker">Why LocalPress instead of Printful?</div>
            <h2 className="h2 mt-2">Built for shops that want to print it themselves</h2>
            <p className="p mt-3 max-w-3xl">
              Printful is excellent if you want a global fulfillment network. LocalPress is built for the shop that
              wants to print locally (or with regional partners) and still offer a polished online experience.
            </p>
          </FadeIn>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="border-b border-white/15 text-slate-300">
                  <th className="py-3 pr-4 font-medium">Capability</th>
                  <th className="py-3 pr-4 font-medium">Printful</th>
                  <th className="py-3 font-medium text-cyan-400">LocalPress</th>
                </tr>
              </thead>
              <tbody className="text-slate-400">
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-slate-200">Who prints</td>
                  <td className="py-3 pr-4">Their network</td>
                  <td className="py-3 text-slate-100">You / your local partners</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-slate-200">Platform economics</td>
                  <td className="py-3 pr-4">Higher take</td>
                  <td className="py-3 text-slate-100">Shop-first, lower overhead</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-slate-200">Delivery zones</td>
                  <td className="py-3 pr-4">Limited</td>
                  <td className="py-3 text-slate-100">Draw zones on a map, set rules</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-slate-200">Production control</td>
                  <td className="py-3 pr-4">Limited</td>
                  <td className="py-3 text-slate-100">Full pipeline + status history</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 pr-4 text-slate-200">Local marketing</td>
                  <td className="py-3 pr-4">Basic</td>
                  <td className="py-3 text-slate-100">Zone heatmaps & proximity tools</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-slate-200">Multi-shop networks</td>
                  <td className="py-3 pr-4">No</td>
                  <td className="py-3 text-slate-100">Yes — regional white-label ready</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section>
          <FadeIn>
            <div className="kicker">What you get</div>
            <h2 className="h2 mt-2">Everything an independent shop needs</h2>
          </FadeIn>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { title: "Branded storefront", desc: "Your logo, colors, domain or subdomain." },
              { title: "Product catalog + design upload", desc: "Print-ready files and mockups supported." },
              { title: "Order pipeline", desc: "Draft → Paid → In Production → Ready → Shipped / Pickup." },
              { title: "Spatial delivery zones", desc: "Draw polygons, set shipping prices and free-shipping thresholds." },
              { title: "Inventory basics", desc: "Track blanks and materials." },
              { title: "Stripe payments", desc: "Secure checkout, ready for Connect payouts later." },
            ].map((f) => (
              <FadeIn key={f.title}>
                <Card className="p-5">
                  <div className="font-semibold">{f.title}</div>
                  <p className="p mt-1 text-sm mb-0">{f.desc}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Section>

        <Section>
          <FadeIn>
            <Card className="p-8 md:p-10 text-center">
              <h2 className="h2">Early access</h2>
              <p className="p mt-3 max-w-xl mx-auto">
                LocalPress is being built in the Brainerd Lakes area as part of the Spatialytics family of tools. Want
                to be one of the first shops on the platform?
              </p>
              <div className="mt-6 flex gap-3 justify-center flex-wrap">
                <Button href="/contact?product=localpress">Join the early access list</Button>
                <Button href="/contact" variant="ghost">
                  Start a conversation
                </Button>
              </div>
            </Card>
          </FadeIn>
        </Section>
      </Container>
    </main>
  );
}
