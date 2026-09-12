"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import ImageSlider from "@/components/image-slider";

// Static pre-generated particle positions (lighter than computing inside component every render)
const PARTICLES = (() => {
  const m = 2 ** 31 - 1;
  const a = 1103515245;
  const c = 12345;
  let state = 20250309 & 0x7fffffff;
  const rand = () => {
    state = (a * state + c) % m;
    return state / m;
  };
  // Even fewer for faster first paint (12)
  return Array.from({ length: 12 }, () => {
    const top = rand() * 100;
    const left = rand() * 100;
    const size = rand() * 12 + 6;
    const delay = rand() * 4;
    const duration = rand() * 8 + 12;
    return {
      top: `${top.toFixed(2)}%`,
      left: `${left.toFixed(2)}%`,
      size: `${size.toFixed(1)}px`,
      delay: `${delay.toFixed(2)}s`,
      duration: `${duration.toFixed(2)}s`,
    };
  });
})();

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSlider, setShowSlider] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  // Mount slider only when hero enters viewport (improves initial JS load)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSlider(true);
          // defer particles slightly after slider reveal to avoid main thread spike
          requestAnimationFrame(() => setShowParticles(true));
          obs.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden text-white"
    >
      {/* Layered background: base gradient + radial glow + subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,215,128,0.12), transparent 60%), radial-gradient(circle at 75% 65%, rgba(255,215,128,0.08), transparent 55%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {showParticles &&
          PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gold-400/20 z-0 will-change-transform"
              style={{
                top: p.top,
                left: p.left,
                width: p.size,
                height: p.size,
                animation: `float ${p.duration} infinite`,
                animationDelay: p.delay,
              }}
            />
          ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-32 sm:pt-36 pb-8 relative z-10">
        {/* Grid for Left content and Right slider */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
          {/* Left Block */}
          <div className="order-1 col-span-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="inline-block mb-5 px-4 py-2 rounded-full bg-transparent text-xs sm:text-sm font-semibold border-2 border-gold-400/70 tracking-wide">
                October 27–28, 2026
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-3 leading-[1.05] tracking-tight">
                IDEAS <span className="text-gold-400">4.0</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-royal-100 mb-6 leading-tight">
                The Innovation Carnival 2026
              </h2>
              <p className="text-base sm:text-lg text-royal-200 mb-8 max-w-2xl leading-relaxed">
                IDEAS 4.0 is KRMU's flagship annual mega-fest that celebrates
                innovation, academics, hands-on pedagogy, and cultural vibrancy.
                Running for its fourth consecutive year, it has established
                itself as one of the largest student-led innovation festivals in
                the Delhi-NCR region.
              </p>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="gradient-border-badge flex items-center gap-2 text-xs sm:text-sm bg-transparent rounded-full px-4 py-2 text-white">
                  <Calendar size={16} className="text-gold-400" />
                  <span>October 27–28, 2026</span>
                </div>
                <div className="gradient-border-badge flex items-center gap-2 text-xs sm:text-sm bg-transparent rounded-full px-4 py-2 text-white">
                  <Users size={16} className="text-gold-400" />
                  <span>120 Canopies</span>
                </div>
                <div className="gradient-border-badge flex items-center gap-2 text-xs sm:text-sm bg-transparent rounded-full px-4 py-2 text-white">
                  <MapPin size={16} className="text-gold-400" />
                  <span>K.R. Mangalam University</span>
                </div>
              </div>

              {/* Buttons Grid Layout for Desktop and Mobile */}
              <div className="mb-8 lg:mb-0">
                {/* Desktop: Row layout */}
                <div className="hidden lg:flex items-center gap-4 max-w-2xl">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold shadow-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500 min-h-[52px] text-base px-10 rounded-[2px] border-2 border-rose-600"
                  >
                    <Link href="/register/selection">Register Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group !bg-transparent border-2 border-gold-400/40 text-gold-100 hover:bg-gold-500/20 hover:border-gold-400 font-semibold shadow-none min-h-[52px] px-8 rounded-[2px]"
                  >
                    <Link
                      href="/all-events"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Explore Events</span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group !bg-transparent border-2 border-royal-400/40 text-royal-100 hover:bg-royal-600/30 hover:border-royal-300/60 hover:text-white font-semibold shadow-none min-h-[52px] px-8 rounded-[2px]"
                  >
                    <Link
                      href="https://ideas.krmangalam.edu.in/pdfs/IDEAS-Brochure-4.0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Brochure</span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </Button>
                </div>

                {/* Mobile: Grid layout with better spacing */}
                <div className="lg:hidden space-y-4 mb-8">
                  {/* Row 1: Two buttons side by side with proper spacing */}
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold shadow-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500 min-h-[52px] text-sm px-4 rounded-[2px] border-2 border-rose-600"
                    >
                      <Link href="/register/selection">Register Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group !bg-transparent border-2 border-gold-400/40 text-gold-100 hover:bg-gold-500/20 hover:border-gold-400 font-semibold shadow-none min-h-[52px] text-sm px-4 rounded-[2px]"
                    >
                      <Link
                        href="/all-events"
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Explore Events</span>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </Link>
                    </Button>
                  </div>

                  {/* Row 2: One full-width button with spacing */}
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group !bg-transparent border-2 border-royal-400/40 text-royal-100 hover:bg-royal-600/30 hover:border-royal-300/60 hover:text-white font-semibold shadow-none min-h-[52px] w-full text-sm px-6 rounded-[2px]"
                  >
                    <Link
                      href="https://ideas.krmangalam.edu.in/pdfs/IDEAS-Brochure-4.0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>View Brochure</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block - Desktop Slider */}
          <div className="order-2 lg:order-2 hidden lg:flex relative items-center justify-center px-4 sm:px-0 w-full">
            {showSlider && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[2px] shadow-none w-full"
              >
                <ImageSlider />
              </motion.div>
            )}
          </div>

          {/* Mobile Slider - Order 3 for mobile stacking */}
          <div className="order-3 lg:hidden col-span-full">
            {showSlider && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-full flex justify-center mb-8 rounded-[2px] shadow-none"
              >
                <ImageSlider />
              </motion.div>
            )}
          </div>
        </div>

        {/* Evolution of IDEAS - Inside container, after grid */}
        <div className="mt-8 pb-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-royal-400/50" />
              <h4 className="text-xs font-semibold uppercase tracking-widest text-royal-200">
                Evolution of IDEAS
              </h4>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-royal-400/50" />
            </div>

            <div
              className="w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 max-w-3xl overflow-x-auto pt-4 pb-3 px-3 scroll-smooth"
              aria-label="Evolution timeline"
            >
              {[
                {
                  ver: "IDEAS 1.0",
                  sub: "Foundation",
                  image: "/IDEAS 1.0.webp",
                },
                {
                  ver: "IDEAS 2.0",
                  sub: "Expansion",
                  image: "/IDEAS 2.0.webp",
                },
                {
                  ver: "IDEAS 3.0",
                  sub: "120 Canopies",
                  image: "/3.0.jpeg",
                },
                {
                  ver: "IDEAS 4.0",
                  sub: "Current • Mega Fest",
                  image: "/4.0.jpeg",
                  highlight: true,
                },
              ].map((item, idx, arr) => (
                <div key={item.ver} className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center overflow-hidden mb-2 ${
                        item.highlight
                          ? "border-gold-400 shadow-lg shadow-gold-400/30 scale-105"
                          : "border-royal-500/50 bg-royal-950/40"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.ver}
                        className="w-full h-full object-cover rounded-full"
                        loading="lazy"
                      />
                    </div>
                    <p
                      className={`text-xs font-semibold leading-tight ${
                        item.highlight ? "text-gold-400 font-bold" : "text-royal-100"
                      }`}
                    >
                      {item.ver}
                    </p>
                    <p
                      className={`text-[10px] mt-0.5 ${
                        item.highlight ? "text-gold-300" : "text-royal-300"
                      }`}
                    >
                      {item.sub}
                    </p>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="text-royal-400/40 mb-6 shrink-0" aria-hidden="true">
                      <ArrowRight size={14} className="text-gold-400/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
