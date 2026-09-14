"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ideasDropdownItems = [
  {
    letter: "I",
    title: "Innovation",
    description: "Creative, sustainable & tech-driven solutions",
    slug: "innovation",
  },
  {
    letter: "D",
    title: "Distinctiveness",
    description: "Original models & practices",
    slug: "distinctiveness",
  },
  {
    letter: "E",
    title: "Extension",
    description: "Connecting academia with community & industry",
    slug: "extension",
  },
  {
    letter: "A",
    title: "Achievements",
    description: "Recognizing and rewarding excellence",
    slug: "achievements",
  },
  {
    letter: "S",
    title: "Skill-Based Learning",
    description: "Hands-on interdisciplinary learning",
    slug: "skill-based",
  },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIdeasDropdownOpen, setIsIdeasDropdownOpen] = useState(false);
  const pathname = usePathname();

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  // Auto-close dropdown and mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsIdeasDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open for smooth mobile experience
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle Escape key and outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsIdeasDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownContainerRef.current &&
        !dropdownContainerRef.current.contains(e.target as Node)
      ) {
        setIsIdeasDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Dropdown hover with smooth forgiving debounce
  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsIdeasDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsIdeasDropdownOpen(false);
    }, 150);
  };

  // Smooth scroll for FAQ anchor when on homepage
  const handleFaqClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const faqEl = document.getElementById("faq");
      if (faqEl) {
        faqEl.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 text-white bg-[#16212C] border-none shadow-none py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            href="/"
            className="flex items-center min-w-0 flex-shrink-0 group focus:outline-hidden py-0.5"
          >
            <Image
              src="/ideas-logo.png"
              alt="IDEAS 4.0 - K.R. Mangalam University"
              width={356}
              height={40}
              className="h-9 sm:h-10 md:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            <Link
              href="/"
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200",
                pathname === "/"
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:text-white",
              )}
            >
              Home
            </Link>

            {/* IDEAS Dropdown with Forgiving Hover Bridge */}
            <div
              ref={dropdownContainerRef}
              className="relative"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                type="button"
                onClick={() => setIsIdeasDropdownOpen((prev) => !prev)}
                className={cn(
                  "flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer",
                  pathname.startsWith("/ideas")
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white",
                )}
                aria-expanded={isIdeasDropdownOpen}
                aria-haspopup="true"
              >
                <span>IDEAS</span>
                <ChevronDown
                  size={14}
                  className={cn(
                    "transition-transform duration-200",
                    isIdeasDropdownOpen ? "rotate-180" : "",
                  )}
                />
              </button>

              {/* Dropdown Card */}
              <div
                className={cn(
                  "absolute top-full left-0 pt-2 w-80 transition-all duration-200 ease-out z-50",
                  isIdeasDropdownOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-1.5 pointer-events-none",
                )}
              >
                <div className="bg-[#16212C] rounded-[4px] overflow-hidden text-white">
                  <div className="p-3.5 bg-[#101820]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-0.5 font-serif">
                      IDEAS Framework
                    </h3>
                    <p className="text-[11px] text-slate-300 leading-tight">
                      Innovation, Distinctiveness, Extension, Achievements &amp;
                      Skill-Based Learning
                    </p>
                  </div>
                  <div className="p-1.5 space-y-0.5">
                    {ideasDropdownItems.map((item) => {
                      const isItemActive = pathname === `/ideas/${item.slug}`;
                      return (
                        <Link
                          key={item.slug}
                          href={`/ideas/${item.slug}`}
                          className={cn(
                            "flex items-center gap-3 p-2.5 rounded-lg transition-all duration-150 group/item",
                            isItemActive
                              ? "bg-white/15 text-white font-semibold"
                              : "hover:bg-white/10 text-slate-200",
                          )}
                          onClick={() => setIsIdeasDropdownOpen(false)}
                        >
                          <div className="w-7 h-7 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs group-hover/item:scale-105 transition-transform">
                            {item.letter}
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-white  transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-white/80 line-clamp-1">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/spotlight"
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200",
                pathname.startsWith("/spotlight")
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:text-white",
              )}
            >
              Spotlight Activities
            </Link>

            <Link
              href="/cultural"
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200",
                pathname.startsWith("/cultural")
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:text-white",
              )}
            >
              Cultural Events
            </Link>

            <Link
              href="/contact"
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200",
                pathname === "/contact"
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:text-white",
              )}
            >
              Contact Us
            </Link>

            <Link
              href="/#faq"
              onClick={handleFaqClick}
              className="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 text-slate-300 hover:text-white"
            >
              FAQ
            </Link>

            {/* Red Register CTA Button */}
            <div className="pl-1.5">
              <Button
                asChild
                className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold text-[13px] h-9 px-4 rounded-[3px]  transition-all duration-200"
              >
                <Link href="/register/selection">Register Now</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0 touch-manipulation cursor-pointer focus:outline-hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="relative w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transform transition-all duration-200",
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "-translate-y-1",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-all duration-200",
                  isMobileMenuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transform transition-all duration-200",
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "translate-y-1",
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#16212C] border-none shadow-none absolute top-full left-0 right-0 p-4 sm:p-5 flex flex-col gap-1.5 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto rounded-b-2xl z-50 text-white">
            <Link
              href="/"
              className={cn(
                "font-medium py-2.5 px-3.5 rounded-lg transition-colors text-sm",
                pathname === "/"
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile IDEAS Section */}
            <div className="rounded-lg bg-[#101820]/90 p-2.5 border border-white/10">
              <div className="text-white font-bold px-2 py-1 text-xs uppercase tracking-wider font-serif">
                IDEAS Framework
              </div>
              <div className="space-y-1 mt-1">
                {ideasDropdownItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/ideas/${item.slug}`}
                    className={cn(
                      "flex items-center gap-2.5 py-2 px-2.5 rounded-md transition-colors text-xs",
                      pathname === `/ideas/${item.slug}`
                        ? "text-amber-400 font-semibold"
                        : "text-slate-300 hover:bg-white/10 hover:text-white",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="w-5 h-5 rounded bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 shadow-xs">
                      {item.letter}
                    </span>
                    <span className="font-medium">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/spotlight"
              className={cn(
                "font-medium py-2.5 px-3.5 rounded-lg transition-colors text-sm",
                pathname.startsWith("/spotlight")
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Spotlight Activities
            </Link>

            <Link
              href="/cultural"
              className={cn(
                "font-medium py-2.5 px-3.5 rounded-lg transition-colors text-sm",
                pathname.startsWith("/cultural")
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cultural Events
            </Link>

            <Link
              href="/contact"
              className={cn(
                "font-medium py-2.5 px-3.5 rounded-lg transition-colors text-sm",
                pathname === "/contact"
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:bg-white/10 hover:text-white",
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            <Link
              href="/#faq"
              onClick={handleFaqClick}
              className="text-slate-300 hover:bg-white/10 hover:text-white font-medium py-2.5 px-3.5 rounded-lg transition-colors text-sm"
            >
              FAQ
            </Link>

            <div className="pt-2">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm h-11 rounded-[2px] shadow-sm active:scale-[0.99] transition-all duration-150"
              >
                <Link
                  href="/register/selection"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
