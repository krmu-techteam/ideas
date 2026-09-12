"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Lightbulb, Building2, Globe } from "lucide-react";

const krmuHighlights = [
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Quality Education",
    description:
      "Rigorous academic programmes built on interdisciplinary, outcome-based frameworks.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Research & Innovation",
    description:
      "Fostering original research and applied innovation across disciplines.",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Industry Collaboration",
    description:
      "Strong partnerships with corporates, startups, and policy bodies.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
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
    <section className="py-16 !bg-white about-krmu-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-royal-900 mb-4">
            About{" "}
            <span className="text-crimson-500">
              K.R. Mangalam University (KRMU)
            </span>
          </h2>
          <div className="max-w-4xl mx-auto text-royal-700 space-y-4">
            <p className="text-lg">
              K.R. Mangalam University (KRMU) was established in 2013 in
              Gurugram, Haryana. It is a NAAC-accredited (Grade A)
              forward-looking institution dedicated to excellence in education,
              research, and innovation. The university envisions shaping future
              leaders, innovators, and changemakers who can contribute
              meaningfully to society and the nation.
            </p>
            <p className="text-lg">
              KRMU places strong emphasis on interdisciplinary learning,
              hands-on pedagogy, and industry-academia collaboration. The
              university nurtures a vibrant ecosystem that promotes creativity,
              entrepreneurship, and problem-solving — enabling students to go
              beyond classrooms and apply knowledge in real-world contexts.
            </p>
            <p className="text-lg">
              As the proud organiser of IDEAS 4.0, KRMU continues its mission of
              inspiring innovation, celebrating creativity, and empowering the
              next generation to transform ideas into impactful outcomes. IDEAS
              4.0 is the fourth edition of this flagship annual event.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {krmuHighlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full !bg-white hover:shadow-xl transition-all duration-300 border border-slate-200/80 border-l-4 !border-l-crimson-500 hover:!border-l-gold-500 group shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-crimson-500 group-hover:text-gold-500 mb-4 flex justify-center transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold !text-royal-900 mb-3">
                    {highlight.title}
                  </h3>
                  <p className="!text-royal-600 leading-relaxed text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-royal-900 to-crimson-600 text-white rounded-lg p-8 max-w-4xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">
              Proud Organizer of IDEAS 4.0
            </h3>
            <p className="text-xl text-royal-100">
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
