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
    "bg-[#e7c268]/30",
    "bg-sky-400/25",
    "bg-amber-300/25",
    "bg-cyan-400/20",
    "bg-blue-400/20",
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#001A47] via-[#002E7B] to-[#014DAF]" />
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
      <div className="container mx-auto px-4 pt-32 sm:pt-28 pb-8 relative z-10">
        {/* Grid for Left content and Right slider */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Block */}
          <div className="order-1 col-span-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mb-4">
                <span className="sr-only">IDEAS 4.0</span>
                <Image
                  src="/ideas4.0.png"
                  alt="IDEAS 4.0"
                  width={3372}
                  height={1360}
                  priority
                  className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px] object-contain select-none"
                />
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-semibold text-slate-100 mb-6 leading-tight">
                The Innovation Carnival 2026
              </h2>
              <p className="text-[16px] text-slate-300 mb-6 max-w-2xl leading-relaxed">
                IDEAS 4.0 is KRMU’s flagship annual mega-fest celebrating
                innovation, academics, hands-on learning, and culture. This
                year’s AI theme features project exhibitions, hackathons,
                start-up pitches, and expert masterclasses. Now in its fourth
                year, it is one of Delhi-NCR’s largest student-run innovation
                fests.
              </p>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/15 rounded-full px-4 py-2 text-slate-200 backdrop-blur-xs">
                  <Calendar size={16} className="text-[#00D2FF]" />
                  <span>October 27–28, 2026</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/15 rounded-full px-4 py-2 text-slate-200 backdrop-blur-xs">
                  <Users size={16} className="text-[#00D2FF]" />
                  <span>120+ Canopies</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 border border-white/15 rounded-full px-4 py-2 text-slate-200 backdrop-blur-xs">
                  <MapPin size={16} className="text-[#00D2FF]" />
                  <span>K.R. Mangalam University</span>
                </div>
              </div>

              {/* Buttons Grid Layout for Desktop and Mobile */}
              <div>
                {/* Desktop: Row layout */}
                <div className="hidden lg:flex items-center gap-4 max-w-2xl">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#E11E45] border-2 border-[#E11E45] hover:bg-[#E11E45]/15 text-white font-bold min-h-[44px] text-[15px] px-7 rounded-xl transition-colors duration-300"
                  >
                    <Link href="/register/selection">Register Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="group bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-medium min-h-[44px] px-6 rounded-xl transition-colors duration-300"
                  >
                    <Link
                      href="/all-events"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Explore Events</span>
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform duration-300 text-[#00D2FF]"
                      />
                    </Link>
                  </Button>
                  <Link
                    href="/IDEAS_Brochure_4.0.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex text-[14px] items-center justify-center gap-2 whitespace-nowrap bg-white/5 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-medium min-h-[44px] px-6 rounded-xl transition-colors duration-300"
                  >
                    <span>View Brochure</span>
                    <ArrowRight size={15} className="text-[#00D2FF]" />
                  </Link>
                </div>

                {/* Mobile: Grid layout with better spacing */}
                <div className="lg:hidden space-y-3">
                  {/* Row 1: Two buttons side by side */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#E11E45] text-white font-bold min-h-[48px] text-sm px-4 rounded-xl border-0 transition-colors duration-300"
                    >
                      <Link href="/register/selection">Register Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group bg-white/5 hover:bg-white/15 border border-white/20 text-white font-semibold min-h-[48px] text-sm px-4 rounded-xl backdrop-blur-xs transition-colors duration-300"
                    >
                      <Link
                        href="/all-events"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <span>Explore Events</span>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300 text-[#00D2FF]"
                        />
                      </Link>
                    </Button>
                  </div>

                  {/* Row 2: One full-width button with gradient border */}
                  <Link
                    href="/IDEAS4.0-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center gap-2 rounded-full px-6 min-h-[46px] w-full text-xs font-mono font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-white/10"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full p-[1.5px] pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(90deg, #FFD000 0%, #FF6600 50%, #E51937 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "xor",
                        maskComposite: "exclude",
                      }}
                    />
                    <span>View Brochure</span>
                    <ArrowRight size={16} className="text-[#00D2FF]" />
                  </Link>
                </div>
              </div>

              {/* Meet the Powerhouse Line-Up with equal gap above (mt-6) and below (pt-6) */}
              <div className="w-full border-t border-white/15 mt-12 pt-8">
                <h3 className="text-base sm:text-[18px] font-semibold text-slate-100 mb-4 tracking-wide">
                  Meet the Powerhouse Line-Up
                </h3>
                <div className="flex flex-wrap items-center gap-6 sm:gap-10">
                  {/* Manika Vishwakarma */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0">
                      <Image
                        src="/home/hero-section/manika-vishwakarma.png"
                        alt="Manika Vishwakarma"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-sm sm:text-base font-medium text-slate-200 leading-snug">
                      <div>Manika</div>
                      <div>Vishwakarma</div>
                    </div>
                  </div>

                  {/* Ayushman Pandita */}
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 bg-gradient-to-br from-[#073B3E] via-[#0C6A6D] to-[#073B3E]">
                      <Image
                        src="/home/hero-section/ayushman-pandita.png"
                        alt="Ayushman Pandita"
                        fill
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-sm sm:text-base font-medium text-slate-200 leading-snug">
                      <div>Ayushman</div>
                      <div>Pandita</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Block - Desktop Slider */}
          <div className="order-2 lg:order-2 hidden lg:flex flex-col relative items-center justify-center px-4 sm:px-0 w-full">
            {showSlider && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-[2px] shadow-none w-full mb-6"
              >
                <ImageSlider />
              </motion.div>
            )}

            {/* Evolution of IDEAS */}
            <div className="w-full flex flex-col items-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-white/70" />
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-200">
                  EVOLUTION OF IDEAS
                </h4>
                <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-white/70" />
              </div>

              <div
                className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5 overflow-x-auto pt-1 pb-2 px-1 scroll-smooth"
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
                    sub: "Scale-Up",
                    image: "/ideas-version/Ideas 3.0.png",
                  },
                  {
                    ver: "IDEAS 4.0",
                    sub: "Mega Edition",
                    image: "/ideas-version/Ideas 4.0.png",
                    highlight: true,
                  },
                ].map((item, idx, arr) => (
                  <div
                    key={item.ver}
                    className="flex items-center gap-2 sm:gap-3 md:gap-5 shrink-0"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center overflow-hidden mb-1.5 ${
                          item.highlight
                            ? "border-[#00D2FF] ring-2 ring-[#00D2FF]/40"
                            : "border-white/50 bg-transparent"
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
                            ? "text-[#00D2FF] font-bold"
                            : "text-white"
                        }`}
                      >
                        {item.ver}
                      </p>
                      <p
                        className={`text-[10px] mt-0.5 ${
                          item.highlight
                            ? "text-[#00D2FF]/90 font-medium"
                            : "text-white/80"
                        }`}
                      >
                        {item.sub}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <div
                        className="text-white/40 mb-6 shrink-0"
                        aria-hidden="true"
                      >
                        <ArrowRight size={14} className="text-[#00D2FF]/80" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Slider - Order 3 for mobile stacking */}
          <div className="order-3 lg:hidden col-span-full">
            {showSlider && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative w-full flex justify-center mb-6 rounded-[2px] shadow-none"
              >
                <ImageSlider />
              </motion.div>
            )}

            {/* Evolution of IDEAS Mobile */}
            <div className="w-full flex flex-col items-center mt-4">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent to-white/70" />
                <h4 className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-slate-200">
                  EVOLUTION OF IDEAS
                </h4>
                <span className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent to-white/70" />
              </div>

              <div
                className="w-full flex items-center justify-center gap-2 sm:gap-3 md:gap-5 overflow-x-auto pt-1 pb-2 px-1 scroll-smooth"
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
                    sub: "Scale-Up",
                    image: "/ideas-version/Ideas 3.0.png",
                  },
                  {
                    ver: "IDEAS 4.0",
                    sub: "Mega Edition",
                    image: "/ideas-version/Ideas 4.0.png",
                    highlight: true,
                  },
                ].map((item, idx, arr) => (
                  <div
                    key={item.ver}
                    className="flex items-center gap-2 sm:gap-3 md:gap-5 shrink-0"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 flex items-center justify-center overflow-hidden mb-1.5 ${
                          item.highlight
                            ? "border-[#00D2FF] ring-2 ring-[#00D2FF]/40"
                            : "border-white/50 bg-transparent"
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
                            ? "text-[#00D2FF] font-bold"
                            : "text-white"
                        }`}
                      >
                        {item.ver}
                      </p>
                      <p
                        className={`text-[10px] mt-0.5 ${
                          item.highlight
                            ? "text-[#00D2FF]/90 font-medium"
                            : "text-white/80"
                        }`}
                      >
                        {item.sub}
                      </p>
                    </div>
                    {idx < arr.length - 1 && (
                      <div
                        className="text-white/40 mb-6 shrink-0"
                        aria-hidden="true"
                      >
                        <ArrowRight size={14} className="text-[#00D2FF]/80" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
