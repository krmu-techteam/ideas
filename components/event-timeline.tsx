"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: 2023,
    title: "IDEAS 1.0",
    description:
      "The inaugural event featuring 80 canopies and 5,000+ participants",
    achievements: [
      "First inter-university innovation showcase",
      "20+ competitions across disciplines",
      "3 successful startup incubations",
    ],
    image: "/ideas-version/Ideas 1.0.png",
  },
  {
    year: 2024,
    title: "IDEAS 2.0",
    description:
      "Held on July 17, 2024 - A year of expansion and refinement with broader participation, new thematic tracks (Agritech, Sustainability, Robotics), and stronger industry-academia collaboration.",
    achievements: [
      "100+ canopy showcases across emerging domains",
      "Launch of sustainability & agritech focused clusters",
      "Robotics & drone arenas introduced",
      "Increased cross-university participation & mentorship engagements",
    ],
    image: "/ideas-version/Ideas 2.0.png",
  },
  {
    year: 2025,
    title: "IDEAS 3.0",
    description:
      "KRMU's flagship fest celebrating innovation, academics, hands-on pedagogy, and cultural vibrancy with 120 canopies, 28 competitions, and ₹10 lakh prize pool",
    achievements: [
      "18,000+ participants from NCR schools, pan-India universities, and startups",
      "Enhanced engagement connecting diverse educational institutions",
      "Talent recognition and collaboration opportunities",
      "Long-term memorable impact and experience",
    ],
    image: "/ideas-version/Ideas 3.0.png",
  },
  {
    year: 2026,
    title: "IDEAS 4.0",
    description:
      "KRMU's mega innovation fest returning bigger and bolder with expanded competitions, hackathons, and dynamic showcases celebrating creativity and excellence",
    achievements: [
      "20,000+ expected participants across schools and universities nationwide",
      "State-of-the-art innovation tracks, robotics & tech showcases",
      "Grand cultural performances and industry-academia networking",
      "Substantial prize pool and national recognition",
    ],
    image: "/ideas-version/Ideas 4.0.png",
    isCurrent: true,
  },
];

export default function EventTimeline() {
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
      sectionRef.current || document.querySelector(".timeline-section");
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
      className="py-16 bg-[#F8FCFF] text-white relative overflow-hidden timeline-section"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-serif font-bold gradient-title mb-4">
              Our Journey
            </h2>
            <div className="h-1 w-24 bg-gray-950 rounded-full mx-auto mb-5"></div>
          </div>
          <p className="text-gray-950 max-w-3xl mx-auto text-base sm:text-[18px] leading-relaxed">
            From IDEAS 1.0 to IDEAS 4.0, witness the remarkable evolution of
            KRMU&apos;s flagship innovation festival - transforming dreams into
            reality and fostering excellence in education, research, and
            innovation
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline line with gradient - visible on md screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#213C87] via-[#0062A2] to-[#00ACE9] rounded-full z-0 shadow-[0_0_12px_rgba(245,158,11,0.25)]"></div>

          {/* Timeline events */}
          <div className="relative z-10 space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  delay: index * 0.25,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:items-stretch relative items-center gap-6 md:gap-0`}
                suppressHydrationWarning
              >
                {/* Content Box (Left or Right) */}
                <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-8 flex">
                  <Card
                    className={`w-full h-full flex flex-col justify-between shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden backdrop-blur-md rounded-[10px] ${
                      event.isCurrent
                        ? "border-2 border-gold-400/80 bg-[#F8FCFF]"
                        : "bg-[#F8FCFF] text-gray-800 border border-slate-700/60 shadow-slate-950/50 hover:border-royal-500/40"
                    }`}
                  >
                    <CardContent className="p-6 sm:p-8 flex flex-col h-full justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                          <div
                            className={`text-lg sm:text-xl font-bold px-5 py-2 rounded-full shadow-lg ${
                              event.isCurrent
                                ? "bg-[#1042AE] text-white font-extrabold "
                                : "bg-gradient-to-r from-royal-600 to-royal-700 text-white shadow-royal-900/40 border border-royal-400/20"
                            }`}
                          >
                            {event.year}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">
                            {event.title}
                          </h3>
                          {event.isCurrent && (
                            <span className="px-3 py-1  text-[#1042AE] text-xs sm:text-sm font-bold rounded-full shadow-sm">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-950 mb-6 text-base sm:text-[16px] leading-relaxed">
                          {event.description}
                        </p>
                      </div>

                      <div className="space-y-3 pt-4 border-t border-slate-700/40 mt-auto">
                        <h4 className="font-semibold text-gray-950 text-sm sm:text-base tracking-wide uppercase">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2.5">
                          {event.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={
                                isInView
                                  ? { opacity: 1, x: 0 }
                                  : { opacity: 0, x: -10 }
                              }
                              transition={{
                                delay: index * 0.2 + i * 0.08,
                                duration: 0.4,
                              }}
                              className="flex items-start list-none"
                            >
                              <span className="text-gray-950 mr-2.5 text-base leading-tight mt-0.5 shrink-0">
                                ✦
                              </span>
                              <span className="text-gray-950 text-sm sm:text-base leading-relaxed">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Image Box (Right or Left - Equal in Height and Width to Content Box) */}
                <div className="w-full md:w-1/2 px-2 sm:px-4 md:px-8 flex">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.92 }
                    }
                    transition={{ delay: index * 0.25 + 0.15, duration: 0.7 }}
                    className="w-full h-full flex group relative"
                  >
                    <div className="w-full h-full flex items-center justify-center relative">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        className="w-full h-full max-h-[380px] md:max-h-[440px] object-contain object-center transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Enhanced Timeline Center Dot - Exactly centered on the vertical line */}
                <div
                  className="hidden md:flex absolute z-20 items-center justify-center pointer-events-none"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: index * 0.25 + 0.3,
                      duration: 0.5,
                      type: "spring",
                    }}
                    className={`w-8 h-8 rounded-full border-4 items-center justify-center flex transition-all duration-300 pointer-events-auto ${
                      event.isCurrent
                        ? "bg-[#1042AE] border-[#0d1620] scale-110"
                        : "bg-gradient-to-br from-[#1042AE] via-[#1042AE] to-[#1042AE] border-[#0d1620]  "
                    }`}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm ring-1 ring-[#1042AE]"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
