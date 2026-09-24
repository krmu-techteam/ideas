"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Sparkles,
  Globe,
  Trophy,
  Wrench,
  Users,
  Award,
  Handshake,
  TrendingUp,
  ArrowRight,
  ArrowUpRight,
  Compass,
} from "lucide-react";

const engagementPoints = [
  {
    num: "01",
    title: "Enhanced Engagement",
    description:
      "Connecting school students, universities, and startups through collaborative opportunities.",
    icon: Users,
  },
  {
    num: "02",
    title: "Talent Recognition",
    description:
      "Celebrating student brilliance via competitions, projects, and impactful showcases.",
    icon: Award,
  },
  {
    num: "03",
    title: "Collaboration",
    description:
      "Expanding academia-corporate partnerships and hands-on mentorship ecosystems.",
    icon: Handshake,
  },
  {
    num: "04",
    title: "Long-term Impact",
    description:
      "Establishing IDEAS as an annual, memorable, and transformative innovation milestone.",
    icon: TrendingUp,
  },
];

const ideasCards = [
  {
    letter: "I",
    title: "Innovation",
    badge: "Disruption & Tech",
    description:
      "Creative, sustainable, and technology-driven solutions. Focus on disruption, prototyping, and emerging-tech applications.",
    icon: Lightbulb,
    badgeBg: "bg-[#EF6321] text-white",
    slug: "innovation",
  },
  {
    letter: "D",
    title: "Distinctiveness",
    badge: "Original Models",
    description:
      "Original models, methodologies, and practices. Celebrating what sets participants apart from the ordinary.",
    icon: Sparkles,
    badgeBg: "bg-[#16212C] text-white",
    slug: "distinctiveness",
  },
  {
    letter: "E",
    title: "Extension",
    badge: "Community & Impact",
    description:
      "Connecting academia with community and industry. Bridging the gap between classroom learning and real-world impact.",
    icon: Globe,
    badgeBg: "bg-[#0f766e] text-white",
    slug: "extension",
  },
  {
    letter: "A",
    title: "Achievements",
    badge: "Milestones",
    description:
      "Highlighting excellence and breakthroughs. Recognising student projects, research, and milestones.",
    icon: Trophy,
    badgeBg: "bg-[#d97706] text-white",
    slug: "achievements",
  },
  {
    letter: "S",
    title: "Skill-Based",
    badge: "Hands-on Sprints",
    description:
      "Hands-on interdisciplinary learning powered by strong industry and sponsor partnerships. Practical over theoretical.",
    icon: Wrench,
    badgeBg: "bg-[#EF6321] text-white",
    slug: "skill-based",
  },
];

export default function IdeasGlance() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="mb-3">
            <div className="inline-flex font-mono items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] text-[#00D2FF] bg-white/10 border border-white/20">
              <Compass className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Core Pillars &amp; Tracks</span>
            </div>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              IDEAS 4.0 Glance
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] text-blue-100 leading-relaxed max-w-2xl mx-auto">
            IDEAS 4.0 is KRMU&apos;s flagship mega fest that celebrates
            innovation, academics, hands-on pedagogy, and cultural vibrancy. The
            fest brings together over 20,000+ participants from NCR schools,
            pan-India universities, and startups.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-14">
          {engagementPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white/10  rounded-2xl border border-white/20 hover:border-white/50 hover:bg-white/15 p-6 transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#00D2FF]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-blue-100/90 text-[13px] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 5-Column IDEAS Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {ideasCards.map((card, index) => {
            return (
              <motion.div
                key={card.letter}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                className="h-full"
              >
                <Link
                  href={""}
                  // href={`/ideas/${card.slug}`}
                  className="group relative flex flex-col justify-between h-full p-6 rounded-2xl bg-white/10  border border-white/20 hover:border-white/50 hover:bg-white/15 transition-colors duration-200 antialiased [backface-visibility:hidden]"
                >
                  <div>
                    {/* Badge & Title */}
                    <div className="mb-2">
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/15 text-[#00D2FF] border border-white/20">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-2 leading-snug">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-blue-100/90 text-[13px] leading-relaxed mb-6 flex-grow">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Bottom Action */}
                  {/* <div className="pt-3.5 border-t border-white/15 flex items-center justify-between mt-auto">
                    <span className="text-[13px] font-semibold text-[#00D2FF] group-hover:text-white inline-flex items-center gap-1.5 transition-colors duration-200">
                      Explore Track
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 text-[#00D2FF] group-hover:translate-x-1" />
                    </span>
                  </div> */}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
