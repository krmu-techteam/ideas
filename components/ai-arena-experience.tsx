"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "20",
    label: "AI-enthusiast canopies",
  },
  {
    value: "2",
    label: "days of innovation",
  },
  {
    value: "∞",
    label: "Robotics • AI • Immersive tech",
  },
];

export default function AiArenaExperience() {
  return (
    <section className="py-16 sm:py-24 bg-[#060D17] text-white relative overflow-hidden">
      {/* Background Tech Glow & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00ACE9]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#00529B]/20 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Main Grid: Left Content & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FF5C00] uppercase">
                THE EXPERIENCE
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-[1.1] mb-6 font-sans">
              WHAT IS <br />
              <span className="text-white">AI ARENA?</span>
            </h2>

            {/* Description */}
            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              AI Arena is an immersive AI, robotics, innovation and future-tech
              experience zone within IDEAS 4.0. It brings emerging technology
              out of the abstract and into a space you can see, explore and
              experience firsthand.
            </p>

            {/* CTA Button */}
            <div className="mb-4">
              <Button
                asChild
                className="bg-gradient-to-r from-[#00E5FF] to-blue-600 hover:from-[#6ff5f0] hover:to-blue-500 text-slate-950 font-bold text-sm sm:text-base px-7 py-5 rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200 group/btn"
              >
                <Link href="/ai-arena" className="inline-flex items-center gap-2">
                  <span>Explore AI Arena</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
              <Image
                src="/Futuristic-Robots-Face-Off.png"
                alt="AI Arena - Human Curiosity x Machine Possibility"
                fill
                className="object-contain object-center select-none"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom 3 Stat Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-14"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#0B1528]/85 border border-cyan-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm relative group hover:border-cyan-400/50 hover:bg-[#0E1D36] transition-all duration-300"
            >
              {/* Stat Value */}
              <div className="text-4xl sm:text-5xl font-extrabold text-[#00E5FF] font-sans tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                {stat.value}
              </div>

              {/* Stat Description */}
              <p className="text-slate-300 font-sans text-sm sm:text-base font-normal">
                {stat.label}
              </p>

              {/* Bottom Card Hover Glow Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
