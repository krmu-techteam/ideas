"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="relative w-full min-h-screen lg:min-h-[880px] xl:min-h-[940px] flex items-center justify-center overflow-hidden text-white pt-[76px] sm:pt-[84px] lg:pt-[70px] pb-12 lg:pb-10 bg-[#080404]"
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/ideas/hero/herobg2.png"
          alt=""
          fill
          priority
          quality={95}
          className="object-cover object-center brightness-[1.18] contrast-[1.08]"
        />
        {/* Stadium Blue Light Spotlight - brings vibrant luminous depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 55% 42%, rgba(0, 114, 255, 0.30) 0%, rgba(0, 52, 155, 0.16) 45%, transparent 75%)",
          }}
        />
        {/* Soft Ambient Gradient Overlay - lightened to let background shine through */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(284.58deg, rgba(8, 4, 4, 0.26) 10.54%, rgba(0, 24, 85, 0.32) 58%, rgba(15, 16, 18, 0.28) 88.96%)",
          }}
        />
      </div>

      {/* Main Container - 1440px Layout */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: 5 Columns out of 12 */}
          <div className="lg:col-span-5 pt-2 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Main Headline */}
              <h1 className="text-[40px] font-poppins sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[70px] font-black tracking-tight text-white leading-[1.03] mb-6">
                The
                <br />
                Innovation
                <br />
                Carnival
                <br />
                2026
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base md:text-[17px] text-white max-w-xl leading-relaxed mb-8 font-normal">
                IDEAS 4.0 is KRMU’s flagship annual mega-fest celebrating
                innovation, academics, hands-on learning, and culture.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
                {/* Register Now with transparent background and warm gradient border */}
                <Link
                  href="/register/selection"
                  className="group relative inline-flex items-center justify-center px-7 py-[10px] rounded-[6px] text-[15px] font-medium text-white transition-all duration-300 hover:bg-white/5"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-[6px] p-[2px] pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, #F59E0B 0%, #EF4444 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                  <span>Register Now</span>
                </Link>

                {/* Download Brochure with download icon */}
                <Link
                  href="/IDEAS_Brochure_4.0.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] font-normal text-white hover:text-white transition-colors group py-2"
                >
                  <Download className="w-4 h-4 text-white group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Brochure</span>
                </Link>
              </div>

              {/* Meet the Powerhouse Line-Up */}
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-white mb-4 tracking-wide">
                  Meet the Powerhouse Line-Up
                </h3>

                <div className="flex items-end gap-6 sm:gap-8 lg:gap-10">
                  {/* Manika Vishwakarma */}
                  <div className="flex flex-col items-center group w-[145px] sm:w-[160px]">
                    <div className="relative w-full h-[135px] sm:h-[150px] flex items-end justify-center">
                      <Image
                        src="/ideas/hero/girl1.png"
                        alt="Manika Vishwakarma"
                        width={147}
                        height={187}
                        className="w-auto h-full object-contain object-bottom"
                      />
                    </div>
                    {/* Golden Underline */}
                    <div className="w-full h-[5px] bg-[#E7C268]" />
                    <p className="mt-2 text-[12px] sm:text-[13.5px] font-normal text-[#E7C268] text-center tracking-wide whitespace-nowrap">
                      Manika Vishwakarma
                    </p>
                  </div>

                  {/* Ayushman Pandita */}
                  <div className="flex flex-col items-center group w-[145px] sm:w-[160px]">
                    <div className="relative w-full h-[135px] sm:h-[150px] flex items-end justify-center">
                      <Image
                        src="/ideas/hero/men1.png"
                        alt="Ayushman Pandita"
                        width={181}
                        height={187}
                        className="w-auto h-full object-contain object-bottom"
                      />
                    </div>
                    {/* Golden Underline */}
                    <div className="w-full h-[5px] bg-[#E7C268]" />
                    <p className="mt-2 text-[12px] sm:text-[13.5px] font-normal text-[#E7C268] text-center tracking-wide whitespace-nowrap">
                      Ayushman Pandita
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 7 Columns out of 12 */}
          <div className="lg:col-span-7 flex items-center justify-center lg:justify-end relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative z-10 w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[760px] xl:max-w-[820px] flex justify-center lg:justify-end"
            >
              <Image
                src="/ideas/hero/robots.png"
                alt="IDEAS 4.0 Humanoid Robots - Unitree & Robot 01 | October 27–28, 2026 | 120+ Canopies"
                width={1023}
                height={889}
                priority
                className="w-full h-auto max-h-[889px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                style={{
                  aspectRatio: "1023 / 889",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
