"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Sparkles, 
  Music, 
  Rocket, 
  Target, 
  Globe2, 
  ArrowRight, 
  Compass,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const eventCategories = [
  {
    title: "Spotlight Activities",
    badge: "Flagship",
    description: "20+ tech-driven hackathons, coding sprints and creative challenges",
    icon: Sparkles,
    href: "/spotlight",
    gradient: "from-rose-500 to-red-600",
    bgLight: "bg-rose-50",
    textColor: "text-rose-600",
    borderColor: "hover:border-rose-300",
    shadowHover: "hover:shadow-rose-500/10",
  },
  {
    title: "Cultural Events",
    badge: "Stage & Arts",
    description: "Electrifying dance, music, theater & artistic performances",
    icon: Music,
    href: "/cultural",
    gradient: "from-purple-500 to-indigo-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "hover:border-purple-300",
    shadowHover: "hover:shadow-purple-500/10",
  },
  {
    title: "Innovation Track",
    badge: "Disruption",
    description: "Cutting-edge tech solutions, AI prototyping & startup pitches",
    icon: Rocket,
    href: "/ideas/innovation",
    gradient: "from-blue-600 to-cyan-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "hover:border-blue-300",
    shadowHover: "hover:shadow-blue-500/10",
  },
  {
    title: "Skill-Based Track",
    badge: "Hands-on",
    description: "Hands-on expertise, technical masterclasses & industry training",
    icon: Target,
    href: "/ideas/skill-based",
    gradient: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "hover:border-amber-300",
    shadowHover: "hover:shadow-amber-500/10",
  },
  {
    title: "Extension Track",
    badge: "Community",
    description: "Impactful social outreach & experiential learning beyond classrooms",
    icon: Globe2,
    href: "/ideas/extension",
    gradient: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "hover:border-emerald-300",
    shadowHover: "hover:shadow-emerald-500/10",
  },
];

export default function ExploreEvents() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/60 relative overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-royal-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-royal-50 text-royal-700 border border-royal-200/80 mb-4 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-royal-600" />
            <span>Discover IDEAS 4.0</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-royal-950 tracking-tight mb-4">
            Explore Events &amp; Tracks
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Discover 23+ flagship events, competitions, and interdisciplinary tracks designed to ignite innovation and creativity.
          </p>
        </motion.div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={category.href}
                  className={cn(
                    "group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden",
                    category.borderColor,
                    category.shadowHover
                  )}
                >
                  {/* Hover ambient blur glow */}
                  <div
                    className={cn(
                      "absolute -right-10 -top-10 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-500 bg-gradient-to-br pointer-events-none",
                      category.gradient
                    )}
                  />

                  <div>
                    {/* Top row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300",
                          category.gradient
                        )}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-slate-200/80 transition-colors">
                        {category.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-bold text-lg text-slate-900 group-hover:text-royal-900 transition-colors mb-2">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>

                  {/* Card bottom action */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span
                      className={cn(
                        "text-xs font-bold inline-flex items-center gap-1.5 transition-colors",
                        category.textColor
                      )}
                    >
                      Explore Track
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0",
                        category.bgLight,
                        category.textColor
                      )}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-royal-900 hover:bg-royal-800 text-white font-semibold px-8 py-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <Link href="/all-events" className="inline-flex items-center gap-2">
              <span>View All 23+ Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
