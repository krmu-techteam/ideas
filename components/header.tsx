"use client";

import { useState, useEffect } from "react";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIdeasDropdownOpen, setIsIdeasDropdownOpen] = useState(false);
  const pathname = usePathname();

  // The navbar should be solid if we've scrolled, OR if we're not on the homepage.
  const isSolid = isScrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSolid
          ? "bg-white/95 shadow-lg backdrop-blur-sm py-2"
          : "bg-gradient-to-r from-royal-900/90 to-royal-800/90 backdrop-blur-sm py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-w-0 flex-shrink">
          <Image
            src="/images/university-logo.png"
            alt="K.R. Mangalam University"
            width={64}
            height={64}
            className="h-10 w-10 sm:h-12 sm:w-12 bg-white/90 p-1 rounded flex-shrink-0"
            loading="eager"
            priority
          />
          <div className="hidden sm:block min-w-0">
            {isSolid ? (
              <div className="flex items-center gap-2">
                <Image
                  src="/IDEAS_LOGO2.png"
                  alt="IDEAS Logo"
                  width={160}
                  height={48}
                  className="h-8 sm:h-10 w-auto opacity-90"
                  style={{
                    filter: "brightness(1.1) contrast(0.9)",
                    borderRadius: "4px",
                    padding: "2px",
                  }}
                  loading="eager"
                />
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-700 border border-amber-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  BETA
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg sm:text-xl transition-colors text-white">
                  IDEAS <span className="text-gold-400">4.0</span>
                </h1>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  BETA
                </span>
              </div>
            )}
            <p
              className={cn(
                "text-xs transition-colors",
                isSolid ? "text-royal-600" : "text-royal-200",
              )}
            >
              K.R. Mangalam University
            </p>
          </div>
          {/* Mobile logo / text */}
          <div className="sm:hidden min-w-0 flex items-center">
            {isSolid ? (
              <div className="flex items-center gap-1.5">
                <Image
                  src="/IDEAS_LOGO2.png"
                  alt="IDEAS Logo"
                  width={140}
                  height={40}
                  className="h-8 w-auto opacity-90"
                  style={{ filter: "brightness(1.05) contrast(0.95)" }}
                  priority
                  loading="eager"
                />
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-amber-500/15 text-amber-700 border border-amber-500/30">
                  <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                  BETA
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <h1
                  className={cn(
                    "font-bold text-base transition-colors",
                    isSolid ? "text-royal-900" : "text-white",
                  )}
                >
                  IDEAS <span className="text-gold-400">4.0</span>
                </h1>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  <span className="w-1 h-1 rounded-full bg-amber-400 animate-pulse" />
                  BETA
                </span>
              </div>
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-gold-500 transition-colors",
              isSolid ? "text-royal-900" : "text-white",
            )}
          >
            Home
          </Link>

          {/* IDEAS Dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1 text-sm font-medium hover:text-gold-500 transition-colors",
                isSolid ? "text-royal-900" : "text-white",
              )}
              onMouseEnter={() => setIsIdeasDropdownOpen(true)}
              onMouseLeave={() => setIsIdeasDropdownOpen(false)}
              suppressHydrationWarning
            >
              IDEAS
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-200",
                  isIdeasDropdownOpen ? "rotate-180" : "",
                )}
              />
            </button>

            <div
              className={cn(
                "absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-sm shadow-2xl rounded-xl border border-gray-100 transition-all duration-300 z-50",
                isIdeasDropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2",
              )}
              onMouseEnter={() => setIsIdeasDropdownOpen(true)}
              onMouseLeave={() => setIsIdeasDropdownOpen(false)}
            >
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-lg font-bold text-royal-900 mb-1">
                  IDEAS Framework
                </h3>
                <p className="text-sm text-gray-600">
                  Innovation, Distinctiveness, Extension, Achievements &amp;
                  Skill-Based Learning
                </p>
              </div>
              <div className="p-2">
                {ideasDropdownItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/ideas/${item.slug}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group/item"
                    onClick={() => setIsIdeasDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {item.letter}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-royal-900 group-hover/item:text-blue-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/spotlight"
            className={cn(
              "text-sm font-medium hover:text-gold-500 transition-colors",
              isSolid ? "text-royal-900" : "text-white",
            )}
          >
            Spotlight Activities
          </Link>

          {/* Hide All Events tab as requested */}
          {/* <Link
            href="/all-events"
            className={cn(
              "text-sm font-medium hover:text-gold-500 transition-colors",
              isSolid ? "text-royal-900" : "text-white",
            )}
          >
            All Events
          </Link> */}

          <Link
            href="/cultural"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isSolid ? "text-deepBlue-dark" : "text-white",
            )}
            suppressHydrationWarning
          >
            Cultural Events
          </Link>
          {/* <Link
            href="/live-performances"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isSolid ? "text-deepBlue-dark" : "text-white",
            )}
            suppressHydrationWarning
          >
            Live Performances
          </Link> */}
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isSolid ? "text-deepBlue-dark" : "text-white",
            )}
            suppressHydrationWarning
          >
            Contact Us
          </Link>
          <Link
            href="/#faq"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              isSolid ? "text-deepBlue-dark" : "text-white",
            )}
            suppressHydrationWarning
          >
            FAQ
          </Link>
          <Link
            href="/register/selection"
            className="text-sm font-semibold text-white"
          >
            <Button
              size="sm"
              className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white shadow-lg hover:shadow-rose-400/30 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500 min-h-[44px] px-6"
              suppressHydrationWarning
            >
              Register Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden p-3 rounded-lg hover:bg-white/20 transition-all duration-300 flex-shrink-0 touch-manipulation",
            isSolid ? "text-royal-900" : "text-white",
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          suppressHydrationWarning
        >
          <div className="relative w-6 h-6">
            <span
              className={cn(
                "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                isMobileMenuOpen ? "rotate-45 top-3" : "top-1",
              )}
            />
            <span
              className={cn(
                "absolute block h-0.5 w-6 bg-current transform transition-all duration-300 top-3",
                isMobileMenuOpen ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                isMobileMenuOpen ? "-rotate-45 top-3" : "top-5",
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-2xl absolute top-full left-0 right-0 p-4 sm:p-6 flex flex-col gap-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300 max-h-[80vh] overflow-y-auto overflow-x-hidden">
          <Link
            href="/"
            className="text-deepBlue-dark hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:translate-x-1 touch-manipulation break-words"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile IDEAS Section */}
          <div className="space-y-2">
            <div className="text-deepBlue-dark font-semibold py-2 px-4 text-sm">
              IDEAS Framework
            </div>
            {ideasDropdownItems.map((item) => (
              <Link
                key={item.slug}
                href={`/ideas/${item.slug}`}
                className="flex items-center gap-3 py-2 px-6 text-gray-700 hover:text-primary hover:bg-blue-50 rounded-lg transition-all duration-300 touch-manipulation"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {item.letter}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="text-xs text-gray-600">
                    {item.description.split(" ").slice(0, 4).join(" ")}...
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/spotlight"
            className="text-deepBlue-dark hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 touch-manipulation break-words"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Spotlight Activities
          </Link>

          {/* Hide All Events tab in mobile as requested */}
          {/* <Link
            href="/all-events"
            className="text-deepBlue-dark hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 touch-manipulation break-words"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All Events
          </Link> */}

          <Link
            href="/cultural"
            className="text-deepBlue-dark hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
            suppressHydrationWarning
          >
            Cultural Events
          </Link>
          <Link
            href="/live-performances"
            className="text-deepBlue-dark hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
            suppressHydrationWarning
          >
            Live Performances
          </Link>
          <Link
            href="/contact"
            className="text-deepBlue-dark hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
            suppressHydrationWarning
          >
            Contact Us
          </Link>
          <Link
            href="/#faq"
            className="text-deepBlue-dark hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300 touch-manipulation"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/register/selection"
            className="w-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button
              className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold shadow-md hover:shadow-lg min-h-[48px] text-base tracking-wide"
              suppressHydrationWarning
            >
              Register Now
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
