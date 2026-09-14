"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Lightbulb, Building2, Globe } from "lucide-react";

const krmuHighlights = [
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "Quality Education",
    description:
      "Rigorous academic programmes built on interdisciplinary, outcome-based frameworks.",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    title: "Research & Innovation",
    description:
      "Fostering original research and applied innovation across disciplines.",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Industry Collaboration",
    description:
      "Strong partnerships with corporates, startups, and policy bodies.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Perspective",
    description:
      "International outlook integrated into curriculum and campus culture.",
  },
];

export default function AboutKrmu() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    const section = document.querySelector(".about-krmu-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-slate-50/60 about-krmu-section">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-royal-950 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-royal-800 via-royal-700 to-royal-900 bg-clip-text text-transparent">
              K.R. Mangalam University (KRMU)
            </span>
          </h2>
          <div className="max-w-4xl mx-auto text-slate-900 space-y-4">
            <p className="text-[15px] leading-relaxed">
              K.R. Mangalam University (KRMU) was established in 2013 in
              Gurugram, Haryana. It is a NAAC-accredited (Grade A)
              forward-looking institution dedicated to excellence in education,
              research, and innovation. The university envisions shaping future
              leaders, innovators, and changemakers who can contribute
              meaningfully to society and the nation.
            </p>
            <p className="text-[15px] leading-relaxed">
              KRMU places strong emphasis on interdisciplinary learning,
              hands-on pedagogy, and industry-academia collaboration. The
              university nurtures a vibrant ecosystem that promotes creativity,
              entrepreneurship, and problem-solving — enabling students to go
              beyond classrooms and apply knowledge in real-world contexts.
            </p>
            <p className="text-[15px] leading-relaxed">
              As the proud organiser of IDEAS 4.0, KRMU continues its mission of
              inspiring innovation, celebrating creativity, and empowering the
              next generation to transform ideas into impactful outcomes. IDEAS
              4.0 is the fourth edition of this flagship annual event.
            </p>
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {krmuHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border border-slate-200/90 rounded-2xl hover:-translate-y-1 hover:border-royal-300 group shadow-sm">
                <CardContent className="p-6 text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-royal-50 text-royal-800 border border-royal-100 group-hover:bg-royal-900 group-hover:text-gold-400 group-hover:scale-105 transition-all duration-300 mb-4 shadow-xs">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-royal-950 group-hover:text-royal-800 transition-colors mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-900 leading-relaxed text-[14px]">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner (Red Section replaced with Royal Blue & Gold) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-royal-950 via-royal-900 to-royal-800 text-white rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto shadow-2xl border border-royal-700/60">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gold-400">
              Proud Organizer of IDEAS 4.0
            </h3>
            <p className="text-base sm:text-lg text-royal-100 leading-relaxed max-w-3xl mx-auto">
              As the proud organiser of IDEAS 4.0, KRMU continues its mission of
              inspiring innovation, celebrating creativity, and empowering the
              next generation to transform ideas into impactful outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
