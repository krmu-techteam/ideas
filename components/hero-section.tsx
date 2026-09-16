"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import ImageSlider from "@/components/image-slider";

// Static pre-generated particle positions grouped into 3 depth layers for slow multi-plane parallax
const generateLayerParticles = (
  count: number,
  minSize: number,
  maxSize: number,
  seed: number,
) => {
  const m = 2 ** 31 - 1;
  const a = 1103515245;
  const c = 12345;
  let state = seed & 0x7fffffff;
  const rand = () => {
    state = (a * state + c) % m;
    return state / m;
  };
  const colors = [
    "bg-[#e7c268]/30 shadow-[0_0_10px_rgba(251,191,36,0.35)]",
    "bg-sky-400/25 shadow-[0_0_10px_rgba(56,189,248,0.3)]",
    "bg-amber-300/25 shadow-[0_0_8px_rgba(252,211,77,0.25)]",
    "bg-cyan-400/20 shadow-[0_0_8px_rgba(45,212,191,0.25)]",
    "bg-blue-400/20 shadow-[0_0_8px_rgba(96,165,250,0.2)]",
  ];
  return Array.from({ length: count }, (_, i) => {
    const top = rand() * 100;
    const left = rand() * 100;
    const size = rand() * (maxSize - minSize) + minSize;
    const delay = rand() * 5;
    const duration = rand() * 8 + 12;
    const colorClass = colors[i % colors.length];
    return {
      top: `${top.toFixed(2)}%`,
      left: `${left.toFixed(2)}%`,
      size: `${size.toFixed(1)}px`,
      delay: `${delay.toFixed(2)}s`,
      duration: `${duration.toFixed(2)}s`,
      colorClass,
    };
  });
};

const LAYER1_PARTICLES = generateLayerParticles(10, 6, 12, 20250301); // Background small bubbles
const LAYER2_PARTICLES = generateLayerParticles(8, 12, 18, 20250302); // Midground medium bubbles
const LAYER3_PARTICLES = generateLayerParticles(6, 18, 28, 20250303); // Foreground glowing orbs

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSlider, setShowSlider] = useState(true);
  const [showParticles, setShowParticles] = useState(false);

  // Parallax layer refs for ultra-smooth 60-120fps motion
  const waveRef = useRef<HTMLDivElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);
  const layer3Ref = useRef<HTMLDivElement>(null);

  const targetOffsetRef = useRef({ x: 0, y: 0 });
  const currentOffsetRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number | null>(null);

  // Mount slider only when hero enters viewport (improves initial JS load)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSlider(true);
          requestAnimationFrame(() => setShowParticles(true));
          obs.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Gentle, slow-motion multi-layer cursor parallax ("hero me saare slow-slow move ho")
  useEffect(() => {
    const heroEl = heroRef.current;
    if (!heroEl) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      targetOffsetRef.current = {
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      };
    };

    const onMouseLeave = () => {
      targetOffsetRef.current = { x: 0, y: 0 };
    };

    heroEl.addEventListener("mousemove", onMouseMove, { passive: true });
    heroEl.addEventListener("mouseleave", onMouseLeave, { passive: true });

    let running = true;
    const animate = () => {
      if (!running) return;

      // Ultra-smooth slow damping (0.02) for graceful gentle drift
      const target = targetOffsetRef.current;
      const current = currentOffsetRef.current;
      current.x += (target.x - current.x) * 0.02;
      current.y += (target.y - current.y) * 0.02;

      const cx = current.x;
      const cy = current.y;

      if (layer1Ref.current) {
        layer1Ref.current.style.transform = `translate3d(${cx * 0.012}px, ${cy * 0.012}px, 0)`;
      }
      if (layer2Ref.current) {
        layer2Ref.current.style.transform = `translate3d(${cx * 0.024}px, ${cy * 0.024}px, 0)`;
      }
      if (layer3Ref.current) {
        layer3Ref.current.style.transform = `translate3d(${cx * 0.042}px, ${cy * 0.042}px, 0)`;
      }
      if (waveRef.current) {
        waveRef.current.style.transform = `translate3d(${cx * -0.016}px, ${cy * -0.01}px, 0)`;
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      heroEl.removeEventListener("mousemove", onMouseMove);
      heroEl.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden text-white"
    >
      {/* Layered background seamlessly matching #16212C header with sleek dark depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#16212C] via-[#162330] to-[#101923]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 25%, rgba(245, 158, 11, 0.05), transparent 50%), radial-gradient(circle at 80% 40%, rgba(37, 99, 235, 0.08), transparent 55%)",
        }}
      />
      {/* Subtle fine tech grid lines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Flowing animated ambient wave in background */}
      <div
        ref={waveRef}
        className="absolute inset-0 overflow-hidden pointer-events-none z-[1] will-change-transform opacity-75"
      >
        <svg
          className="absolute w-[200%] h-full -left-[50%] top-0 animate-hero-wave"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,220 C320,320 520,120 800,240 C1080,360 1260,160 1440,260 L1440,600 L0,600 Z"
            fill="url(#wave-gradient-1)"
          />
          <defs>
            <linearGradient
              id="wave-gradient-1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="80%"
            >
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.30" />
              <stop offset="45%" stopColor="#2563eb" stopOpacity="0.14" />
              <stop offset="85%" stopColor="#d97706" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#16212C" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <svg
          className="absolute w-[200%] h-full -left-[20%] top-0 animate-hero-wave-slow opacity-60"
          viewBox="0 0 1440 600"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,300 C380,160 640,360 940,220 C1200,320 1340,200 1440,280 L1440,600 L0,600 Z"
            fill="url(#wave-gradient-2)"
          />
          <defs>
            <linearGradient
              id="wave-gradient-2"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#1d4ed8" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.06" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Multi-depth parallax floating bubbles (all move slowly with cursor) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {showParticles && (
          <>
            {/* Layer 1: Background small bubbles */}
            <div
              ref={layer1Ref}
              className="absolute inset-0 will-change-transform"
            >
              {LAYER1_PARTICLES.map((p, i) => (
                <div
                  key={`l1-${i}`}
                  className={`absolute rounded-full ${p.colorClass}`}
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

            {/* Layer 2: Midground medium bubbles */}
            <div
              ref={layer2Ref}
              className="absolute inset-0 will-change-transform"
            >
              {LAYER2_PARTICLES.map((p, i) => (
                <div
                  key={`l2-${i}`}
                  className={`absolute rounded-full ${p.colorClass}`}
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

            {/* Layer 3: Foreground glowing orbs */}
            <div
              ref={layer3Ref}
              className="absolute inset-0 will-change-transform"
            >
              {LAYER3_PARTICLES.map((p, i) => (
                <div
                  key={`l3-${i}`}
                  className={`absolute rounded-full ${p.colorClass}`}
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
          </>
        )}
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
              <p className="inline-flex items-center gap-1.5 mb-5 px-3.5 py-1.5 rounded-full bg-[#e7c268]/10 text-xs sm:text-sm font-semibold text-[#e7c268] border border-[#e7c268]/30 tracking-wide">
                October 27–28, 2026
              </p>
              <h1 className="mb-4">
                <span className="sr-only">IDEAS 4.0</span>
                <Image
                  src="/ideas4.0.png"
                  alt="IDEAS 4.0"
                  width={3372}
                  height={1360}
                  priority
                  className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto max-w-[340px] sm:max-w-[420px] md:max-w-[480px] object-contain select-none"
                />
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-slate-100 mb-6 leading-tight">
                The Innovation Carnival 2026
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed">
                IDEAS 4.0 is KRMU&apos;s flagship annual mega-fest that
                celebrates innovation, academics, hands-on pedagogy, and
                cultural vibrancy. Running for its fourth consecutive year, it
                has established itself as one of the largest student-led
                innovation festivals in the Delhi-NCR region.
              </p>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
                <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full px-4 py-2 text-slate-200 backdrop-blur-xs">
                  <Calendar size={16} className="text-[#e7c268]" />
                  <span>October 27–28, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full px-4 py-2 text-slate-200 backdrop-blur-xs">
                  <Users size={16} className="text-[#e7c268]" />
                  <span>120 Canopies</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/10 rounded-full px-4 py-2 text-slate-200 backdrop-blur-xs">
                  <MapPin size={16} className="text-[#e7c268]" />
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
                    className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold min-h-[44px] text-[15px] px-7 rounded-[3px] shadow-lg shadow-rose-600/25 hover:shadow-rose-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    <Link href="/register/selection">Register Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group bg-white/5 hover:bg-white/10 border border-[#e7c268]/40 hover:border-[#e7c268] text-[#e7c268] hover:text-[#e7c268] font-medium min-h-[44px] px-6 rounded-[3px] backdrop-blur-xs transition-all duration-200"
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
                    className="group bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-slate-200 hover:text-white font-medium min-h-[44px] px-7 rounded-[3px] backdrop-blur-xs transition-all duration-200"
                  >
                    <Link
                      href="/IDEAS4.0-Brochure.pdf"
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
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold shadow-md shadow-rose-600/25 min-h-[50px] text-sm px-4 rounded-[3px] border-0 transition-all duration-200"
                    >
                      <Link href="/register/selection">Register Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group bg-white/5 hover:bg-white/10 border border-[#e7c268]/40 text-amber-300 font-semibold min-h-[50px] text-sm px-4 rounded-[3px] backdrop-blur-xs transition-all duration-200"
                    >
                      <Link
                        href="/all-events"
                        className="flex items-center justify-center gap-1.5"
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
                    className="group bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 hover:text-white font-semibold min-h-[50px] w-full text-sm px-6 rounded-[3px] backdrop-blur-xs transition-all duration-200"
                  >
                    <Link
                      href="/IDEAS4.0-Brochure.pdf"
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
              <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-white" />
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white">
                Evolution of IDEAS
              </h4>
              <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-white" />
            </div>

            <div
              className="w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 max-w-3xl overflow-x-auto pt-4 pb-3 px-3 scroll-smooth"
              aria-label="Evolution timeline"
            >
              {[
                {
                  ver: "IDEAS 1.0",
                  sub: "Foundation",
                  image: "/ideas-version/Ideas 1.0.png",
                },
                {
                  ver: "IDEAS 2.0",
                  sub: "Expansion",
                  image: "/ideas-version/Ideas 2.0.png",
                },
                {
                  ver: "IDEAS 3.0",
                  sub: "120 Canopies",
                  image: "/ideas-version/Ideas 3.0.png",
                },
                {
                  ver: "IDEAS 4.0",
                  sub: "Current • Mega Fest",
                  image: "/ideas-version/Ideas 4.0.png",
                  highlight: true,
                },
              ].map((item, idx, arr) => (
                <div
                  key={item.ver}
                  className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0"
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 flex items-center justify-center overflow-hidden mb-2 ${
                        item.highlight
                          ? "border-[#e7c268] shadow-lg shadow-[#e7c268]/30 scale-105"
                          : "border-white/70 bg-transparent"
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
                        item.highlight
                          ? "text-gold-400 font-bold"
                          : "text-white"
                      }`}
                    >
                      {item.ver}
                    </p>
                    <p
                      className={`text-[10px] mt-0.5 ${
                        item.highlight ? "text-gold-300" : "text-white/80"
                      }`}
                    >
                      {item.sub}
                    </p>
                  </div>
                  {idx < arr.length - 1 && (
                    <div
                      className="text-royal-400/40 mb-6 shrink-0"
                      aria-hidden="true"
                    >
                      <ArrowRight size={14} className="text-white/80" />
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
