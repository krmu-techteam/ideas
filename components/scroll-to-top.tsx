"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl  transition-all duration-300 transform touch-manipulation flex items-center justify-center",
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-4 opacity-0 scale-95 pointer-events-none",
      )}
      size="icon"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </Button>
  );
}
