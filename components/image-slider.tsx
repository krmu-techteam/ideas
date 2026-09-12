"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/4.0.jpeg",
    alt: "IDEAS 4.0 The Innovation Carnival 2026",
  },
  {
    src: "/3.0.jpeg",
    alt: "IDEAS 3.0 Innovation Fest Memories",
  },
  {
    src: "/images/IMG_2787.webp",
    alt: "IDEAS Event Photo 1",
  },
  {
    src: "/images/IMG_2791.webp",
    alt: "IDEAS Event Photo 2",
  },
  {
    src: "/images/IMG_2825.webp",
    alt: "IDEAS Event Photo 3",
  },
  {
    src: "/images/IMG_3009.webp",
    alt: "IDEAS Event Photo 4",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check for reduced motion preference on client side only
  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (prefersReducedMotion) return;
    if (isAutoPlaying && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, currentIndex, prefersReducedMotion]);

  // Start auto-playing immediately when component mounts
  useEffect(() => {
    const id = requestAnimationFrame(() => setIsAutoPlaying(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-[1px] overflow-hidden group mx-auto"
      style={{
        borderRadius: "1px",
        clipPath: "inset(0 round 1px)",
      }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={() => setIsAutoPlaying(false)}
      onTouchEnd={() => setTimeout(() => setIsAutoPlaying(true), 3000)}
    >
      {/* Main image container */}
      <div
        className="relative w-full h-full rounded-[1px] overflow-hidden"
        style={{ borderRadius: "1px", clipPath: "inset(0 round 1px)" }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={false}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-[1px] overflow-hidden"
            style={{ borderRadius: "1px", clipPath: "inset(0 round 1px)" }}
          >
            {/*
              CSS-based Skeleton Loader:
              This div acts as a container. It has the skeleton styling.
              The Image component below has a transparent background and will cover this div once it loads.
              This is more robust than JS-based state tracking.
            */}
            <div
              className="absolute inset-0 bg-slate-800 animate-pulse rounded-[1px]"
              style={{ borderRadius: "1px" }}
            />

            {/*
              PERFORMANCE OPTIMIZATION:
              - `priority={index === 0}`: Tells Next.js to prioritize loading the first image.
              - `loading={index === 0 ? "eager" : "lazy"}`: Loads the first image eagerly, others lazily.
            */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-[1px]"
              style={{ borderRadius: "1px" }}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              quality={75}
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 450px, 500px"
            />
          </motion.div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2">
          <button
            onClick={handlePrevious}
            className="p-2 bg-[#E11E44] rounded-[2px] text-white/70 hover:text-white hover:bg-[#E11E44] transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="p-2 bg-[#E11E44] rounded-[2px] text-white/70 hover:text-white hover:bg-[#E11E44] transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Elegant dots navigation */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 bg-black/40 rounded-full px-3 sm:px-4 py-2 z-10">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`relative rounded-full transition-all duration-700 ${
                index === currentIndex
                  ? "bg-white scale-110 sm:scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
              style={{
                width: "8px",
                height: "8px",
                minWidth: "8px",
                minHeight: "8px",
              }}
            >
              {index === currentIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-amber-400"
                  layoutId="activeIndicator"
                  transition={{
                    type: "spring",
                    bounce: 0.15,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
