"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IdeathonTwoDays() {
  return (
    <section className="py-14 sm:py-20 bg-[#060D17] text-white relative overflow-hidden">
      {/* Background Tech Glow & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 right-10 w-96 h-96 bg-[#00ACE9]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-[#FF5C00]/10 rounded-full blur-[140px]" />
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
        {/* Eyebrow & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#FF5C00] uppercase">
              THINK BEYOND
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-[1.15] font-sans">
            IDEATHON — <br />
            <span className="text-white">TWO DAYS. TWO MINDSHIFTS.</span>
          </h2>
        </motion.div>

        {/* Timeline Indicator Line above cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="hidden md:grid grid-cols-2 gap-6 sm:gap-8 mb-4 items-center"
        >
          {/* Day 01 Timeline Track (Cyan) */}
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 border-2 border-[#00E5FF] bg-[#00E5FF]/20 shadow-[0_0_10px_#00E5FF] rounded-[2px] flex-shrink-0" />
            <div className="h-[1.5px] w-full bg-gradient-to-r from-[#00E5FF] via-[#00E5FF]/60 to-[#00E5FF]/20" />
          </div>

          {/* Day 02 Timeline Track (Orange) */}
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 border-2 border-[#FF5C00] bg-[#FF5C00]/20 shadow-[0_0_10px_#FF5C00] rounded-[2px] flex-shrink-0" />
            <div className="h-[1.5px] w-full bg-gradient-to-r from-[#FF5C00] via-[#FF5C00]/60 to-[#FF5C00]/20" />
          </div>
        </motion.div>

        {/* 2-Day Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Day 01 - Tech */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0B1528]/85 border border-cyan-500/20 rounded-xl p-6 sm:p-10 backdrop-blur-sm relative group hover:border-cyan-400/50 hover:bg-[#0E1D36] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Mobile Timeline Node */}
              <div className="md:hidden flex items-center gap-2 mb-4">
                <div className="w-3 h-3 border-2 border-[#00E5FF] bg-[#00E5FF]/20 rounded-[2px]" />
                <div className="h-[1px] w-16 bg-[#00E5FF]/60" />
              </div>

              {/* Eyebrow */}
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#00E5FF] uppercase mb-4">
                DAY 01 • 27 OCT • TECH
              </p>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans tracking-tight">
                Make the impossible work.
              </h3>

              {/* Description */}
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                Build, prototype, solve with AI and engineering.
              </p>
            </div>

            {/* Registration Action */}
            <div className="mt-4 pt-4 border-t border-cyan-500/15">
              <Button
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-md shadow-cyan-500/20 transition-all duration-200"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfUrjM8hD7duKTkVo6GL9eltsg4b7gPSmf9UZ_oTzP88mrGWA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <span>Register for Day 1</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Card 2: Day 02 - Creative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
            className="bg-[#0B1528]/85 border border-orange-500/20 rounded-xl p-6 sm:p-10 backdrop-blur-sm relative group hover:border-orange-400/50 hover:bg-[#0E1D36] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Mobile Timeline Node */}
              <div className="md:hidden flex items-center gap-2 mb-4">
                <div className="w-3 h-3 border-2 border-[#FF5C00] bg-[#FF5C00]/20 rounded-[2px]" />
                <div className="h-[1px] w-16 bg-[#FF5C00]/60" />
              </div>

              {/* Eyebrow */}
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#FF5C00] uppercase mb-4">
                DAY 02 • 28 OCT • CREATIVE
              </p>

              {/* Heading */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans tracking-tight">
                Imagine what comes next.
              </h3>

              {/* Description */}
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-6">
                Imagination, design, storytelling and human-centred ideas.
              </p>
            </div>

            {/* Registration Action */}
            <div className="mt-4 pt-4 border-t border-orange-500/15">
              <Button
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF6600] to-[#E51937] hover:from-[#FF5500] hover:to-[#CC112D] text-white font-semibold text-sm px-6 py-2.5 rounded-lg shadow-md shadow-orange-500/20 transition-all duration-200"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSesHSMvrmW7L3z1FLxfJ9HWt7YfqV7L5p2AERdRT9fRAmhsUg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <span>Register for Day 2</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>

            {/* Bottom Glow Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
