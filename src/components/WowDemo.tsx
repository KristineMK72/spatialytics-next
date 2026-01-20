// src/components/WowDemo.tsx
import Card from "@/components/Card";
import Button from "@/components/Button";

const DEMO_URL = "https://bear-habitat-3d.vercel.app";
const CODE_URL = "https://github.com/KristineMK72/bear-habitat-3d";

export default function WowDemo() {
  return (
    <Card className="p-5 md:p-6">
      <div className="kicker mb-2">WOW DEMO</div>

      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="min-w-[260px]">
          <h3 className="text-xl font-semibold">3D Bear Habitat Explorer</h3>
          <p className="p mt-2 max-w-2xl">
            Live WebGL terrain + habitat overlays (Next.js + MapLibre). This is a teaser build — Minnesota layers and real
            bear data are coming next.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button href={DEMO_URL} target="_blank" rel="noreferrer">
            Open demo →
          </Button>
          <Button href={CODE_URL} variant="ghost" target="_blank" rel="noreferrer">
            View repo
          </Button>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/30">
        <iframe
          src={DEMO_URL}
          title="3D Bear Habitat Explorer"
          className="w-full h-[420px]"
          loading="lazy"
          style={{ border: "none" }}
          // these help some embeds behave better
          allow="fullscreen; geolocation *; clipboard-write *"
        />
      </div>

      <div className="mt-3 text-xs text-white/60">
        If the embed is blank, the demo may be blocking iframes. The “Open demo” button will always work.
      </div>
    </Card>
  );
}
