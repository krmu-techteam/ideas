"use client";

import { motion } from "framer-motion";

const zones = [
  {
    title: "4.1 AI Arena",
    description:
      "The AI Arena is the technology and competition hub of IDEAS 4.0. It hosts 25+ curated competitions spanning robotics, AI, coding, and skill-based challenges. It is the primary venue for power-packed, high-energy contests where participants compete for a share of the ₹10 Lakh+ prize pool.",
    details: [
      {
        label: "Number of Competitions",
        value: "25+ (across all AI Arena events)",
      },
      {
        label: "Focus Areas",
        value: "Robotics, AI/ML, Drone Tech, Coding, General Knowledge",
      },
      {
        label: "Flagship AI Arena Events",
        value:
          "Robo War, Drone Race, Robots Race, Drone Obstacle Crossing, Gaming Arena, One Day Hackathon",
      },
      {
        label: "Prize Opportunities",
        value: "Significant prizes per event; total pool ₹10 Lakh+",
      },
    ],
  },
  {
    title: "4.2 Innoverse",
    description:
      "Innoverse is the exhibition and showcase zone — a marketplace of ideas, startups, and innovation. It is the largest physical zone of the event, bringing together student projects, startup demonstrations, tech products, and talent displays under one roof.",
    details: [
      {
        label: "Exhibition Stalls",
        value: "120+ canopies",
      },
      {
        label: "Exhibitors",
        value:
          "Startups, tech companies, student project teams, and individual innovators",
      },
      {
        label: "Purpose",
        value:
          "Peer learning, networking, industry exposure, and startup discovery",
      },
    ],
  },
  {
    title: "4.3 Workshops & Masterclasses",
    description:
      "Expert-led sessions by industry thought leaders and domain specialists. These sessions provide direct learning opportunities beyond competitions — covering AI, entrepreneurship, emerging technology, sustainability, and more. Open to all registered participants.",
  },
  {
    title: "4.4 Prize Distribution Ceremony",
    description:
      "A formal closing ceremony that celebrates talent across all competition categories. Winners are publicly recognised and awarded cash prizes, trophies, certificates, and other accolades. The ceremony marks the culmination of both days of the event.",
  },
];

export default function ZonesHighlights() {
  return (
    <section
      id="zones-highlights"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#070d1e] via-[#0b1535] to-[#070e24] text-white border-t border-b border-royal-700/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-white">
            Zones &amp; Key Highlights
          </h2>
        </motion.div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {zones.map((zone, idx) => (
            <motion.div
              key={zone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-royal-700/60 bg-gradient-to-b from-[#0a1435]/90 to-[#070e28]/95 p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-gold-500/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-gold-400 mb-4">
                  {zone.title}
                </h3>

                <p className="text-royal-100/90 text-sm sm:text-base leading-relaxed mb-6">
                  {zone.description}
                </p>

                {zone.details && zone.details.length > 0 && (
                  <div className="space-y-3.5 pt-2 border-t border-royal-700/40">
                    {zone.details.map((item) => (
                      <div key={item.label} className="text-sm">
                        <span className="font-semibold text-royal-200 block sm:inline">
                          {item.label}:{" "}
                        </span>
                        <span className="text-royal-100/80">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
