"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, School, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";

export default function UniversityRegistrationPage() {
  const router = useRouter();
  const [loadingType, setLoadingType] = useState<string | null>(null);

  // Prefetch payment page on mount for faster navigation
  useEffect(() => {
    router.prefetch("/register/payment");
  }, [router]);

  const handleNavigation = (href: string, type: string) => {
    setLoadingType(type);
    // Navigate immediately without artificial delay
    router.push(href);
  };

  return (
    <div className="min-h-screen bg-[#fffefb] text-[#14100b] selection:bg-[#E11E45]/20 selection:text-[#E11E45]">
      {/* Hero Header Section */}
      <section className="bg-[#f4ede1] pt-28 pb-12 sm:pt-32 sm:pb-16 border-b border-[#e7ded1]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-[4px] bg-[#E11E45]/10 text-[#E11E45] text-xs font-mono font-semibold border border-[#E11E45]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#E11E45]" />
              <span>UNIVERSITY REGISTRATION</span>
            </div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#14100b] mb-4 tracking-[-0.02em]">
              Select Your Institution Type
            </h1>
            <p className="text-base sm:text-lg text-[#6b6357] max-w-2xl mx-auto leading-relaxed">
              Choose the appropriate category for your university registration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Options Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* KRMU Students Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Card className="h-full bg-white border border-[#e7ded1] rounded-2xl hover:shadow-xl hover:border-[#E11E45]/50 transition-all duration-300 shadow-xs group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#E11E45]/10 border border-[#E11E45]/20 text-[#E11E45] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <School className="w-8 h-8 md:w-10 md:h-10 text-[#E11E45]" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14100b] mb-4">
                    KRMU Students
                  </h2>

                  <p className="text-[#6b6357] mb-6 flex-grow text-sm md:text-base leading-relaxed">
                    For K.R. Mangalam University students participating in
                    student activities, competitions, and showcasing your
                    projects at IDEAS 4.0.
                  </p>

                  <ul className="text-left text-[#14100b] mb-8 space-y-2.5 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Special rates for KRMU students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Access to all student activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Participation in competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Certificates & recognition</span>
                    </li>
                  </ul>

                  <Button
                    size="lg"
                    disabled={loadingType !== null}
                    onClick={() =>
                      handleNavigation("/register/payment?type=krmu", "krmu")
                    }
                    className="w-full bg-[#E11E45] hover:bg-[#c2410c] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-3.5 disabled:opacity-50"
                  >
                    {loadingType === "krmu" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Loading...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Register as KRMU Student</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Other Universities Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Card className="h-full bg-white border border-[#e7ded1] rounded-2xl hover:shadow-xl hover:border-[#16212C]/40 transition-all duration-300 shadow-xs group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#16212C]/10 border border-[#16212C]/20 text-[#16212C] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[#16212C]" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14100b] mb-4">
                    Other Universities
                  </h2>

                  <p className="text-[#6b6357] mb-6 flex-grow text-sm md:text-base leading-relaxed">
                    For students from other universities, colleges, and higher
                    education institutions looking to participate in canopy
                    exhibitions and academic events.
                  </p>

                  <ul className="text-left text-[#14100b] mb-8 space-y-2.5 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Canopy exhibition space</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Research showcase opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Inter-university networking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Innovation & tech presentations</span>
                    </li>
                  </ul>

                  <Button
                    size="lg"
                    disabled={loadingType !== null}
                    onClick={() =>
                      handleNavigation(
                        "/register/payment?type=other-university",
                        "other-university",
                      )
                    }
                    className="w-full bg-[#16212C] hover:bg-[#233344] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-3.5 disabled:opacity-50"
                  >
                    {loadingType === "other-university" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Loading...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Register from Other University</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Card className="bg-white border border-[#e7ded1] rounded-2xl shadow-xs">
              <CardContent className="p-6">
                <p className="text-[#6b6357] mb-3 text-sm sm:text-base leading-relaxed">
                  <strong className="text-[#14100b]">Note:</strong> All
                  university registrations include access to workshops,
                  networking sessions, and cultural events at IDEAS 4.0.
                </p>
                <p className="text-sm text-[#8c8273]">
                  Need assistance? Contact us at{" "}
                  <a
                    href="mailto:ideas@krmangalam.edu.in"
                    className="text-[#E11E45] font-semibold hover:underline"
                  >
                    ideas@krmangalam.edu.in
                  </a>
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border border-[#e7ded1] bg-white hover:bg-[#FAF5EC] text-[#14100b] font-semibold shadow-xs rounded-xl transition-colors px-6 py-2.5"
            >
              <Link href="/register/selection">
                ← Back to Registration Options
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
