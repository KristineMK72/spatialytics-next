"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  MapPin, 
  Layers, 
  Database, 
  Cpu, 
  Rocket, 
  ArrowRightCircle,
  Globe,
  BarChart3,
  Zap
} from "lucide-react";

const featuredProjects = [
  {
    title: "Grand Casino Spatial Intelligence",
    description: "Real-time operational dashboard delivering location-based insights for tribal gaming enterprises.",
    url: "https://grand-casino-spatial-intelligence.vercel.app/",
    icon: Cpu,
    gradient: "from-sky-500/30 via-violet-600/20 to-transparent",
  },
  {
    title: "Native Nations History Map",
    description: "Interactive cultural & historical mapping platform preserving and sharing indigenous knowledge.",
    url: "https://native-nations-history-map.vercel.app/",
    icon: Globe,
    gradient: "from-emerald-500/30 via-teal-600/20 to-transparent",
  },
  {
    title: "Everkind Memorials",
    description: "Digital legacy spaces with spatial memory mapping and emotional storytelling.",
    url: "https://everkind-memorials.vercel.app/",
    icon: Layers,
    gradient: "from-purple-500/30 via-pink-600/20 to-transparent",
  },
  {
    title: "Resilient Meal Plan Guide",
    description: "Location-aware nutrition & resilience planning tool for sustainable living.",
    url: "https://resilient-meal-plan-guide.vercel.app/",
    icon: Zap,
    gradient: "from-amber-500/30 via-orange-600/20 to-transparent",
  },
  {
    title: "Grit & Grace",
    description: "Inspirational content platform with clean, modern spatial-inspired design.",
    url: "https://www.gritandgrace.buzz/",
    icon: ArrowRightCircle,
    gradient: "from-sky-500/30 via-indigo-600/20 to-transparent",
  },
];

const services = [
  { icon: MapPin, title: "GIS & Spatial Web Applications" },
  { icon: Database, title: "Data Automation & Pipelines" },
  { icon: BarChart3, title: "Custom Dashboards & Visualization" },
  { icon: Rocket, title: "Full Spatial Consulting & Builds" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0b12] to-[#10152a]">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.18),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.15),transparent_60%)]" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="kicker mb-6 tracking-wider">Spatial Solutions</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 bg-gradient-to-r from-sky-400 via-violet-500 to-sky-400 bg-clip-text text-transparent">
            Intelligence Built Into Every Location
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transforming complex spatial data into clarity, impact, and real-world value — from cultural preservation to operational excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              asChild 
              className="bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500 shadow-lg shadow-sky-500/20"
            >
              <Link href="/contact">Start Your Project →</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-sky-400/40 text-sky-300 hover:bg-sky-950/30 hover:text-sky-200"
            >
              Explore Our Work ↓
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 bg-black/40">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Projects That Move the World
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="glass overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-sky-500/20 group border border-white/10"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <project.icon className="h-20 w-20 text-white/40 group-hover:text-white/70 transition-all duration-500 transform group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="text-sky-400 hover:text-sky-300 p-0 group-hover:translate-x-1 transition-transform"
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2"
                    >
                      View Live <ArrowRight className="h-4 w-4" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Core Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className="glass p-8 text-center transition-all hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <service.icon className="h-14 w-14 mx-auto mb-6 text-sky-400" />
                <h3 className="text-xl font-bold">{service.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_70%)]" />
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-transparent">
            Ready to Build Something Extraordinary?
          </h2>
          <Button 
            size="lg" 
            asChild 
            className="text-lg px-12 py-7 bg-gradient-to-r from-sky-500 to-violet-600 hover:from-sky-400 hover:to-violet-500 shadow-xl shadow-sky-500/30"
          >
            <Link href="/contact">Let’s Create Together</Link>
          </Button>
        </div>
      </section>

      {/* Tech Footer */}
      <footer className="py-16 text-center text-white/40 text-sm border-t border-white/5">
        Built with Next.js 15 · Tailwind CSS v4 · shadcn/ui · PostGIS · Mapbox/Leaflet · Vercel
      </footer>
    </main>
  );
}
