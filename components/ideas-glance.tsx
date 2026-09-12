"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ideasCards = [
  {
    letter: "I",
    title: "Innovation",
    description:
      "Creative, sustainable, and technology-driven solutions. Focus on disruption, prototyping, and emerging-tech applications.",
    icon: "💡",
    color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    buttonClass: "bg-blue-600 hover:bg-blue-700",
    slug: "innovation",
  },
  {
    letter: "D",
    title: "Distinctiveness",
    description:
      "Original models, methodologies, and practices. Celebrating what sets participants apart from the ordinary.",
    icon: "🔍",
    color: "bg-gradient-to-r from-purple-500 to-violet-600",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    buttonClass: "bg-purple-600 hover:bg-purple-700",
    slug: "distinctiveness",
  },
  {
    letter: "E",
    title: "Extension",
    description:
      "Connecting academia with community and industry. Bridging the gap between classroom learning and real-world impact.",
    icon: "🌱",
    color: "bg-gradient-to-r from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    buttonClass: "bg-emerald-600 hover:bg-emerald-700",
    slug: "extension",
  },
  {
    letter: "A",
    title: "Achievements",
    description:
      "Highlighting excellence and breakthroughs. Recognising student projects, research, and milestones.",
    icon: "🏆",
    color: "bg-gradient-to-r from-amber-500 to-orange-600",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-700",
    buttonClass: "bg-amber-600 hover:bg-amber-700",
    slug: "achievements",
  },
  {
    letter: "S",
    title: "Skill-Based",
    description:
      "Hands-on interdisciplinary learning powered by strong industry and sponsor partnerships. Practical over theoretical.",
    icon: "🛠️",
    color: "bg-gradient-to-r from-rose-500 to-red-600",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    buttonClass: "bg-rose-600 hover:bg-rose-700",
    slug: "skill-based",
  },
];

export default function IdeasGlance() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            IDEAS @ Glance
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            IDEAS 4.0 is KRMU's flagship mega fest that celebrates innovation,
            academics, hands-on pedagogy, and cultural vibrancy. The fest brings
            together over 18,000 participants from NCR schools, pan-India
            universities, and startups—making it a hub of creativity,
            collaboration, and impactful learning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <div className="text-center p-6 rounded-[2px] border-[1px] border-gray-100 bg-white hover:shadow-xl transition-all duration-300 transform">
              <div className="text-2xl font-serif sm:text-3xl font-bold text-gray-900 mb-2">
                Enhanced Engagement
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
                Connecting school students, universities, and startups through
                collaborative opportunities.
              </p>
            </div>
            <div className="text-center p-6 rounded-[2px] border-[1px] border-gray-100 bg-white  hover:shadow-xl transition-all duration-300 transform ">
              <div className="text-2xl font-serif sm:text-3xl font-bold text-gray-900 mb-2">
                Talent Recognition
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
                Celebrating student brilliance via competitions, projects, and
                impactful showcases.
              </p>
            </div>
            <div className="text-center p-6 rounded-[2px] border-[1px] border-gray-100 bg-white  hover:shadow-xl transition-all duration-300 transform ">
              <div className="text-2xl font-serif sm:text-3xl font-bold text-gray-900 mb-2">
                Collaboration
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
                Expanding academia-corporate partnerships.
              </p>
            </div>
            <div className="text-center p-6 rounded-[2px] border-[1px] border-gray-100 bg-white  hover:shadow-xl transition-all duration-300 transform ">
              <div className="text-2xl font-serif sm:text-3xl font-bold text-gray-900 mb-2">
                Long-term Impact
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px]">
                Establishing IDEAS as an annual, memorable, and transformative
                experience.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {ideasCards.map((card, index) => (
            <motion.div
              key={card.letter}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <Link href={`/ideas/${card.slug}`} className="block group h-full">
                <Card className="relative min-h-[420px] h-full rounded-[2px] overflow-hidden transition-all duration-300 transform border border-slate-200/90 !bg-white text-slate-900 flex flex-col justify-between">
                  {/* Top accent border */}
                  <div className={`h-2 w-full ${card.color}`} />

                  <CardContent className="p-7 h-full flex flex-col items-center text-center relative z-10 flex-1">
                    {/* Top row: Letter badge */}
                    <div className="w-full flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-[2px] ${card.badgeBg} ${card.badgeText} flex items-center justify-center font-black text-xl font-serif border border-black/5`}
                      >
                        {card.letter}
                      </div>
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {card.icon}
                      </span>
                    </div>

                    {/* Title with enhanced styling */}
                    <h3 className="text-2xl font-serif font-bold mb-3 text-slate-900   transition-colors tracking-tight">
                      {card.title}
                    </h3>

                    {/* Description with better readability */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium flex-1">
                      {card.description}
                    </p>

                    {/* Explore button */}
                    <div className="w-full mt-auto">
                      <Button
                        className={`w-full ${card.buttonClass} text-white font-medium py-2.5 rounded-[2px] transition-all duration-300 flex items-center justify-center gap-2 `}
                      >
                        <span>Explore Track</span>
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
