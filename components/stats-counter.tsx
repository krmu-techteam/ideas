"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 10,
    label: "Prize Pool",
    display: "₹10 Lakh+",
  },
  {
    value: 28,
    label: "Competitions",
    sublabel: "events across 10 categories",
    display: "28",
  },
  {
    value: 120,
    label: "Exhibition Stalls",
    sublabel: "(Innoverse Zone)",
    display: "120+",
  },
  {
    value: 18000,
    label: "Expected Footfall",
    sublabel: "participants",
    display: "18,000+",
  },
];

export default function StatsCounter() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const intervals = stats.map((stat, index) => {
      // Calculate duration based on value (larger numbers take longer)
      const duration = Math.min(2000, Math.max(1000, stat.value / 10));
      const increment = stat.value / (duration / 16); // 60fps

      let currentCount = 0;

      return setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(intervals[index]);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(currentCount);
          return newCounts;
        });
      }, 16);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [isInView]);

  const formatDisplay = (index: number) => {
    const stat = stats[index];
    if (!isInView) return stat.display;
    const val = counts[index];
    if (index === 0) return `₹${val} Lakh+`;
    if (index === 1) return `${val}`;
    if (index === 2) return `${val}+`;
    if (index === 3) return `${val.toLocaleString()}+`;
    return stat.display;
  };

  return (
    <div
      ref={sectionRef}
      className="py-12 sm:py-16 bg-gradient-to-br from-royal-900 to-royal-800 text-white"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
              suppressHydrationWarning
            >
              <div
                className="text-2xl font-serif sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gold-400 mb-2 group-hover:text-gold-300 transition-colors duration-300 leading-tight"
                suppressHydrationWarning
              >
                {formatDisplay(index)}
              </div>
              <div className="text-sm font-serif sm:text-base lg:text-lg text-royal-200 group-hover:text-white transition-colors duration-300 font-semibold">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-xs capitalize sm:text-sm text-royal-300 group-hover:text-royal-100 transition-colors duration-300 mt-0.5">
                  {stat.sublabel}
                </div>
              )}
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 mx-auto mt-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
