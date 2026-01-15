"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Layers, Database, Cpu, ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Grand Casino Spatial Intelligence",
    description: "Real-time operational dashboard delivering location-based insights for tribal gaming enterprises.",
    url: "https://grand-casino-spatial-intelligence.vercel.app/",
    icon: Cpu,
    gradient: "from-sky-500/30 to-violet-600/30",
  },
  {
    title: "Native Nations History Map",
    description: "Interactive cultural & historical mapping platform preserving and sharing indigenous knowledge.",
    url: "https://native-nations-history-map.vercel.app/",
    icon: MapPin,
    gradient: "from-emerald-500/30 to-teal-600/30",
  },
  {
    title: "Everkind Memorials",
    description: "Digital legacy spaces with spatial memory mapping and emotional storytelling.",
    url: "https://everkind-memorials.vercel.app/",
    icon: Layers,
    gradient: "from-purple-500/30 to-pink-600/30",
  },
  {
    title: "Resilient Meal Plan Guide",
    description: "Location-aware nutrition & resilience planning tool for sustainable living.",
    url: "https://resilient-meal-plan-guide.vercel.app/",
    icon: Database,
    gradient: "from-amber-500/30 to-orange-600/30",
  },
  {
    title: "Grit & Grace",
    description: "Inspirational content platform with clean, modern spatial-inspired design.",
    url: "https://www.gritandgrace.buzz/",
    icon: ArrowRight,
    gradient: "from-sky-500/30 to-indigo-600/30",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0b12] to-[#10152a]">
      {/* Hero - Big, Immersive, Glowy */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.12),transparent_60%)] pointer-events-none" />

        <div className="container relative z-10 text-center">
          <div className="kicker mb-6">Spatial Solutions</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 bg-gradient-to-r from-sky-400 via-violet-500 to-sky-400 bg-clip-text text-transparent animate-gradient-x">
            We Build Intelligence Into Location
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            From tribal heritage preservation to casino operations, resilient planning to emotional legacy spaces — we create spatial systems that matter.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" asChild className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500">
              <Link href="/contact">Start a Project →</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-sky-400/50 text-sky-400 hover:bg-sky-950/30">
              See Our Work ↓
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects - The Star of the Show */}
      <section className="py-24 bg-black/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Real Projects. Real Impact.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="glass overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_30px_80px_-20px_rgba(56,189,248,0.3)] group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="h-20 w-20 text-white/30 group-hover:text-white/60 transition-colors" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <Button asChild variant="ghost" className="text-sky-400 hover:text-sky-300 p-0">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      View Live Project <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16">What We Create</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "GIS & Spatial Web Apps" },
              { icon: Database, title: "Data Automation & Pipelines" },
              { icon: Cpu, title: "Custom Dashboards & Visualization" },
              { icon: Rocket, title: "Full Spatial Consulting & Builds" },
            ].map((service) => (
              <Card key={service.title} className="glass p-8 text-center hover:border-sky-400/50 transition-all">
                <service.icon className="h-12 w-12 mx-auto mb-6 text-sky-400" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-b from-transparent to-black/50 text-center">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Map Something Extraordinary?</h2>
          <Button size="lg" asChild className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500 text-lg px-12 py-7">
            <Link href="/contact">Let’s Build Together</Link>
          </Button>
        </div>
      </section>

      {/* Tech Stack Footer */}
      <footer className="py-16 text-center text-white/50 text-sm border-t border-white/10">
        Built with Next.js 15 · Tailwind CSS v4 · shadcn/ui · PostGIS · Mapbox/Leaflet · Vercel Deployment
      </footer>
    </main>
  );
}
