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
  ArrowRight,
  Globe,
  Zap,
  BarChart3
} from "lucide-react";

const featuredProjects = [
  {
    title: "Grand Casino Spatial Intelligence",
    description: "Real-time operational dashboard delivering location-based insights for tribal gaming enterprises.",
    url: "https://grand-casino-spatial-intelligence.vercel.app/",
    icon: Cpu,
    gradient: "from-sky-600/40 via-violet-700/30 to-transparent",
  },
  {
    title: "Native Nations History Map",
    description: "Interactive cultural & historical mapping platform preserving and sharing indigenous knowledge.",
    url: "https://native-nations-history-map.vercel.app/",
    icon: Globe,
    gradient: "from-emerald-600/40 via-teal-700/30 to-transparent",
  },
  {
    title: "Everkind Memorials",
    description: "Digital legacy spaces with spatial memory mapping and emotional storytelling.",
    url: "https://everkind-memorials.vercel.app/",
    icon: Layers,
    gradient: "from-purple-600/40 via-pink-700/30 to-transparent",
  },
  {
    title: "Resilient Meal Plan Guide",
    description: "Location-aware nutrition & resilience planning tool for sustainable living.",
    url: "https://resilient-meal-plan-guide.vercel.app/",
    icon: Zap,
    gradient: "from-amber-600/40 via-orange-700/30 to-transparent",
  },
  {
    title: "Grit & Grace",
    description: "Inspirational content platform with clean, modern spatial-inspired design.",
    url: "https://www.gritandgrace.buzz/",
    icon: BarChart3,
    gradient: "from-sky-600/40 via-indigo-700/30 to-transparent",
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
      <section className="relative py-28 md:py-44 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(56,189,248,0.18),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(124,58,237,0.15),transparent_70%)]" />
        </div>

        <div className="container relative z-10 text-center">
          <div className="kicker mb-6 tracking-widest uppercase text-sky-400/80 text-sm md:text-base">
            Spatial Intelligence
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-sky-300 via-violet-400 to-sky-300 bg-clip-text text-transparent">
            Location Data That Works Harder
          </h1>
          <p className="text-lg md:text-2xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
            We design and build spatial systems that preserve culture, optimize operations, empower resilience, and tell meaningful stories.
          </p>

          <div className="flex flex-wrap justify-center gap-5 md:gap-8">
            <Button 
              size="lg" 
              asChild 
              className="min-w-[180px] bg-gradient-to-r from-sky-600 to-violet-700 hover:from-sky-500 hover:to-violet-600 shadow-xl shadow-sky-900/30 transition-all"
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[180px] border-sky-500/40 text-sky-300 hover:bg-sky-950/40 hover:border-sky-400/60 transition-all"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 bg-black/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Work That Shapes Reality
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.title}
                className="glass overflow-hidden transition-all duration-500 hover:scale-[1.04] hover:shadow-2xl hover:shadow-sky-600/25 group border border-white/5"
              >
                <div className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                  <project.icon className="h-24 w-24 text-white/30 group-hover:text-white/70 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-6" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/75 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <Button 
                    asChild 
                    variant="ghost" 
                    className="text-sky-400 hover:text-sky-300 p-0 group-hover:translate-x-2 transition-transform"
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
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Core Strengths
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card 
                key={service.title} 
                className="glass p-8 text-center transition-all duration-300 hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/15"
              >
                <service.icon className="h-14 w-14 mx-auto mb-6 text-sky-400" />
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-40 text-center relative">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_70%)]" />
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-10 bg-gradient-to-r from-sky-300 to-violet-400 bg-clip-text text-transparent">
            Ready to Shape Tomorrow?
          </h2>
          <Button 
            size="lg" 
            asChild 
            className="text-xl px-14 py-8 bg-gradient-to-r from-sky-600 to-violet-700 hover:from-sky-500 hover:to-violet-600 shadow-2xl shadow-sky-700/30 transition-all"
          >
            <Link href="/contact">Let’s Build Something Powerful</Link>
          </Button>
        </div>
      </section>

      {/* Tech Footer */}
      <footer className="py-16 text-center text-white/40 text-sm border-t border-white/5 bg-black/40">
        Built with Next.js 15 · Tailwind CSS v4 · shadcn/ui · PostGIS · Mapbox/Leaflet · Vercel
      </footer>
    </main>
  );
}
