"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    value: "20",
    label: "AI Canopies",
    sublabel: "Interactive stalls",
  },
  {
    value: "2",
    label: "Days",
    sublabel: "Of innovation",
  },
  {
    value: "∞",
    label: "Robotics & AI",
    sublabel: "Immersive tech",
  },
];

export default function AiArenaExperience() {
  return (
    <section className="pt-16 sm:pt-20 bg-[#081B4B] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        {/* Main Grid: Left Content & Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Description & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-poppins text-xs sm:text-sm font-semibold tracking-wide text-[#00D2FF] uppercase">
                THE EXPERIENCE
              </span>
            </div>

            {/* Title with Home Font & Theme */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white uppercase leading-[1.08] mb-6">
              WHAT IS <br />
              AI ARENA?
            </h2>

            {/* Description */}
            <p className="text-blue-100 font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              AI Arena is an immersive AI, robotics, innovation and future-tech
              experience zone within IDEAS 4.0. It brings emerging technology
              out of the abstract and into a space you can see, explore and
              experience firsthand.
            </p>

            {/* CTA Button matching RegisterCTA from home */}
            <div>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#FF6600] to-[#E51937] hover:from-[#FF5500] hover:to-[#CC112D] text-white font-bold text-base px-8 py-5 rounded-[8px]   group/btn cursor-pointer"
              >
                <Link
                  href="/ai-arena"
                  className="inline-flex items-center gap-2"
                >
                  <span>Explore AI Arena</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Clean Transparent Robot Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex items-center justify-center"
          >
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full max-w-[620px]">
              <Image
                src="/ideas/hero/robo.png"
                alt="AI Arena - Human Curiosity x Machine Possibility"
                fill
                className="object-contain object-center select-none"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Counter Bar matching Home Theme */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-18 rounded-[16px] bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] p-6 sm:p-8 overflow-hidden relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="py-4 md:py-2 px-4 sm:px-8 flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 leading-none font-serif text-[#00D2FF]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-poppins font-semibold uppercase tracking-widest text-white">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-[11px] font-poppins text-blue-100/90 tracking-wider uppercase mt-1">
                    {stat.sublabel}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section Divider Line */}
        <div className="w-full pt-16 sm:pt-20">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D2FF] to-transparent opacity-80 shadow-[0_0_12px_rgba(0,210,255,0.4)]" />
        </div>
      </div>
    </section>
  );
}
