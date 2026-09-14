"use client";

import { useState, useEffect } from "react";
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
    image: "/IDEAS 1.0.webp",
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
    image: "/IDEAS 2.0.webp",
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
    image: "/3.0.jpeg",
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
    image: "/4.0.jpeg",
    isCurrent: true,
  },
];

export default function EventTimeline() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    const section = document.querySelector(".timeline-section");
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
      className="py-20 bg-gradient-to-b from-slate-50 to-white timeline-section"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-royal-600 via-gold-500 to-accent-600 bg-clip-text text-transparent mb-4">
              Our Journey
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-royal-600 to-gold-500 rounded-full mx-auto mb-6"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            From IDEAS 1.0 to IDEAS 4.0, witness the remarkable evolution of
            KRMU's flagship innovation festival - transforming dreams into
            reality and fostering excellence in education, research, and
            innovation
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Timeline line with gradient */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-royal-400 via-gold-400 to-accent-400 rounded-full z-0"></div>

          {/* Timeline events */}
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                }
                transition={{
                  delay: index * 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className={`mb-16 flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                suppressHydrationWarning
              >
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <Card
                    className={`shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 ${
                      event.isCurrent
                        ? "border-2 border-gold-400 bg-gradient-to-br from-gold-50 to-white"
                        : "bg-gradient-to-br from-white to-slate-50 border border-slate-200"
                    } overflow-hidden`}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div
                          className={`text-xl font-bold px-6 py-3 rounded-full shadow-lg ${
                            event.isCurrent
                              ? "bg-gradient-to-r from-gold-500 to-accent-500 text-white shadow-gold-200"
                              : "bg-gradient-to-r from-royal-600 to-royal-800 text-white shadow-royal-200"
                          }`}
                        >
                          {event.year}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold ml-4 text-royal-900">
                          {event.title}
                        </h3>
                        {event.isCurrent && (
                          <span className="ml-3 px-3 py-1 bg-gradient-to-r from-amber-400 via-gold-400 to-amber-500 text-slate-950 text-xs sm:text-sm font-bold rounded-full shadow-sm">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {event.description}
                      </p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-royal-800 text-lg mb-3">
                          Key Achievements:
                        </h4>
                        {event.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={
                              isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -20 }
                            }
                            transition={{
                              delay: index * 0.3 + i * 0.1,
                              duration: 0.5,
                            }}
                            className="flex items-start list-none"
                          >
                            <span className="text-gold-500 mr-3 text-xl">
                              ✦
                            </span>
                            <span className="text-gray-700">{achievement}</span>
                          </motion.li>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:block w-1/2 px-4 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: index * 0.3 + 0.2, duration: 0.8 }}
                    className="relative group"
                  >
                    <div
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
                        event.isCurrent
                          ? "from-gold-400 to-accent-400"
                          : "from-royal-400 to-royal-600"
                      } opacity-20 group-hover:opacity-30 transition-opacity duration-300 transform rotate-3`}
                    ></div>
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className={`relative rounded-xl shadow-xl transform group-hover:scale-105 transition-all duration-500 ${
                        event.isCurrent
                          ? "border-4 border-gold-300"
                          : "border-2 border-royal-200"
                      }`}
                    />
                  </motion.div>
                </div>

                {/* Enhanced Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    delay: index * 0.3 + 0.4,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 shadow-lg ${
                    event.isCurrent
                      ? "bg-gradient-to-r from-gold-400 to-accent-400 border-white shadow-gold-200"
                      : "bg-gradient-to-r from-royal-500 to-royal-700 border-white shadow-royal-200"
                  }`}
                >
                  <div className="absolute inset-1 rounded-full bg-white opacity-30"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
