"use client";

import { useState, useEffect, useRef } from "react";
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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 },
    );

    const section =
      sectionRef.current || document.querySelector(".about-krmu-section");
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
    <section
      ref={sectionRef}
      className="py-16   bg-[#AEDBFD] relative overflow-hidden about-krmu-section"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4 tracking-tight">
            About K.R. Mangalam University (KRMU)
          </h2>
          <div className="max-w-5xl mx-auto text-gray-900 font-poppins space-y-4 text-[15px] sm:text-[16px] leading-relaxed">
            <p>
              K.R. Mangalam University (KRMU) was established in 2013 in
              Gurugram, Haryana. It is a NAAC-accredited (Grade A)
              forward-looking institution dedicated to excellence in education,
              research, and innovation. The university envisions shaping future
              leaders, innovators, and changemakers who can contribute
              meaningfully to society and the nation.
            </p>
            <p>
              KRMU places strong emphasis on interdisciplinary learning,
              hands-on pedagogy, and industry-academia collaboration. The
              university nurtures a vibrant ecosystem that promotes creativity,
              entrepreneurship, and problem-solving — enabling students to go
              beyond classrooms and apply knowledge in real-world contexts.
            </p>
            <p>
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
              <Card className="h-full bg-[#F7FBFE]  transition-all duration-300 border-2 border-[#18639B]/80 rounded-[12px] hover:-translate-y-1 hover:border-[#18639B] group ">
                <CardContent className="p-6 text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-royal-50 text-[#16212C] border-2 border-[#18639B] group-hover:bg-[#fff] group-hover:text-[#18639B] group-hover:scale-105 transition-all duration-300 mb-4 shadow-xs">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#16212C] group-hover:text-[#16212C] transition-colors mb-3">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-900 leading-relaxed font-poppins text-[14px]">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#213C87] via-[#0062A2] to-[#00ACE9] text-white rounded-[6px] p-8 sm:p-10 max-w-4xl mx-auto  border-2 border-[#0062A2]/80">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-white">
              Proud Organizer of IDEAS 4.0
            </h3>
            <p className="text-base sm:text-lg text-white leading-relaxed max-w-3xl mx-auto">
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
