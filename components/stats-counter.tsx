"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 10,
    label: "Prize Pool",
    sublabel: "Across 19 events",
    display: "₹10 Lakh+",
    color: "text-[#E11E46]",
  },
  {
    value: 19,
    label: "Competitions",
    sublabel: "10 Categories",
    display: "19",
    color: "text-white",
  },
  {
    value: 120,
    label: "Exhibition Stalls",
    sublabel: "Innoverse Zone",
    display: "120+",
    color: "text-[#E11E46]",
  },
  {
    value: 25000,
    label: "Expected Footfall",
    sublabel: "Delhi-NCR & Beyond",
    display: "25,000+ ",
    color: "text-white",
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
      className="py-10 bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white relative overflow-hidden"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`py-4 px-3 sm:px-6 flex flex-col items-center justify-center text-center relative ${
                index % 2 === 0 ? "border-r border-white/15" : ""
              } ${
                index < 2
                  ? "border-b md:border-b-0 border-white/15 pb-6 md:pb-4"
                  : "pt-6 md:pt-4"
              } md:border-r md:last:border-r-0 md:border-white/15 group`}
              suppressHydrationWarning
            >
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-2 leading-none font-serif text-[#00D2FF]"
                suppressHydrationWarning
              >
                {formatDisplay(index)}
              </div>
              <div className="text-[11px] font-mono sm:text-xs font-semibold uppercase tracking-widest text-white">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-[10px] font-mono text-blue-100/90 tracking-wider uppercase mt-1">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
