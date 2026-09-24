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
} from "lucide-react";
import { Button } from "@/components/ui/button";

const eventCategories = [
  {
    num: "01",
    title: "Spotlight Activities",
    badge: "Flagship",
    description:
      "20+ tech-driven hackathons, coding sprints, AI challenges and competitive developer tracks.",
    icon: Sparkles,
    href: "/spotlight",
    badgeColor: "bg-[#EF6321]",
  },
  {
    num: "02",
    title: "Cultural Events",
    badge: "Stage & Arts",
    description:
      "Electrifying dance face-offs, live battle of bands, fashion showcases and dramatic theatricals.",
    icon: Music,
    href: "/cultural",
    badgeColor: "bg-[#7c3aed]",
  },
  {
    num: "03",
    title: "Innovation Track",
    badge: "Disruption",
    description:
      "Cutting-edge startup pitches, deep-tech research demonstrations and prototype expositions.",
    icon: Rocket,
    href: "/ideas/innovation",
    badgeColor: "bg-[#0f766e]",
  },
  {
    num: "04",
    title: "Skill-Based Track",
    badge: "Hands-on",
    description:
      "Hands-on masterclasses, industry-certified bootcamps, workshops and live technical sprints.",
    icon: Target,
    href: "/ideas/skill-based",
    badgeColor: "bg-[#EF6321]",
  },
  {
    num: "05",
    title: "Extension Track",
    badge: "Community",
    description:
      "High-impact social outreach, sustainability initiatives, and community-driven field projects.",
    icon: Globe2,
    href: "/ideas/extension",
    badgeColor: "bg-[#0284c7]",
  },
];

export default function ExploreEvents() {
  return (
    <section className="py-16 bg-[#F4F9FD] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="mb-3">
            <div className="inline-flex font-mono items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.14em] text-[#0062A2] bg-blue-50 border border-blue-200">
              <Compass className="w-3.5 h-3.5 text-[#0062A2]" />
              <span>Discover IDEAS 4.0</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0B256B] tracking-tight mb-3 leading-tight">
            Explore Events &amp; Tracks
          </h2>
          <p className="text-[15px] sm:text-[16px] font-sans leading-[1.6] text-slate-600 max-w-2xl mx-auto">
            Discover 19 flagship competitions across 10 categories, events, and
            interdisciplinary tracks designed to ignite innovation and
            creativity.
          </p>
        </motion.div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Link
                  href={""}
                  // href={category.href}
                  className="group relative flex flex-col justify-between h-full p-6 rounded-xl bg-white border border-blue-100 hover:border-[#0062A2] transition-colors duration-200 antialiased [backface-visibility:hidden]"
                >
                  <div>
                    {/* Top row: Number/Icon Badge & Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062A2] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-blue-50 text-[#0062A2] border border-blue-100">
                        {category.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-serif font-bold text-[17px] sm:text-[18px] text-[#0B256B] group-hover:text-[#0062A2] transition-colors duration-200 mb-2 leading-snug">
                      {category.title}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-slate-600 mb-6 flex-grow">
                      {category.description}
                    </p>
                  </div>

                  {/* Card bottom action */}
                  {/* <div className="pt-3.5 border-t border-blue-50 flex items-center justify-between mt-auto">
                    <span className="text-[13px] font-semibold text-[#0062A2] group-hover:text-[#0B256B] inline-flex items-center gap-1.5 transition-colors duration-200">
                      Explore Track
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200 text-[#0062A2]" />
                    </span>
                  </div> */}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#0B256B] to-[#0062A2] hover:from-[#081B4B] hover:to-[#004B87] text-white font-semibold text-sm sm:text-base px-8 py-5 rounded-xl transition-colors duration-200 group"
          >
            <Link href="/all-events" className="inline-flex items-center gap-2">
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
