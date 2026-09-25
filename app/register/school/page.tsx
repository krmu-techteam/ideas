"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  GraduationCap,
  ArrowRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import Link from "next/link";

export default function SchoolRegistrationPage() {
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
    <div className="min-h-screen bg-[#F4F9FD] text-[#0B256B] selection:bg-[#00ACE9]/30 selection:text-[#081B4B]">
      {/* Hero Header Section - Brochure Color Combination */}
      <section className="bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white pt-28 pb-12 sm:pt-36 sm:pb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/10 text-[#00D2FF] text-xs font-mono font-semibold border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>SCHOOL REGISTRATION</span>
            </div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-white mb-4 tracking-[-0.02em]">
              Select Registration Type
            </h1>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Choose the appropriate category for school registration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Options Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* School (Principal/Coordinator) Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full bg-white border border-blue-100 rounded-2xl hover:shadow-xl hover:border-[#0062A2] transition-all duration-300 shadow-sm group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062A2] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <Building2 className="w-8 h-8 md:w-10 md:h-10 text-[#0062A2]" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B256B] mb-4">
                    School Registration
                  </h2>

                  <p className="text-slate-600 mb-6 flex-grow text-sm md:text-base leading-relaxed">
                    For school principals, coordinators, and administrators
                    registering their institution for IDEAS 4.0 participation.
                  </p>

                  <ul className="text-left text-slate-700 mb-8 space-y-2.5 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Register multiple students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Group registration benefits</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Access to all event categories</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Dedicated coordinator support</span>
                    </li>
                  </ul>

                  <Button
                    onClick={() =>
                      handleNavigation(
                        "/register/payment?type=school-institution",
                        "school-institution",
                      )
                    }
                    disabled={loadingType !== null}
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#0B256B] to-[#0062A2] hover:from-[#081B4B] hover:to-[#004B87] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-3.5 disabled:opacity-50"
                  >
                    {loadingType === "school-institution" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin text-[#00D2FF]" />
                        <span>Loading...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Register School</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Student Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-white border border-blue-100 rounded-2xl hover:shadow-xl hover:border-[#0062A2] transition-all duration-300 shadow-sm group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-blue-50 border border-blue-100 text-[#0062A2] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#0062A2]" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B256B] mb-4">
                    Student Registration
                  </h2>

                  <p className="text-slate-600 mb-6 flex-grow text-sm md:text-base leading-relaxed">
                    For individual school students participating in
                    competitions, cultural events, and showcasing their talents
                    at IDEAS 4.0.
                  </p>

                  <ul className="text-left text-slate-700 mb-8 space-y-2.5 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Individual registration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Access to 28 competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Cultural events participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#0062A2] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Certificate of participation</span>
                    </li>
                  </ul>

                  <Button
                    onClick={() =>
                      handleNavigation(
                        "/register/payment?type=school-student",
                        "school-student",
                      )
                    }
                    disabled={loadingType !== null}
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#0B256B] to-[#0062A2] hover:from-[#081B4B] hover:to-[#004B87] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-3.5 disabled:opacity-50"
                  >
                    {loadingType === "school-student" ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin text-[#00D2FF]" />
                        <span>Loading...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Register as Student</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="border border-blue-200 bg-white hover:bg-blue-50 hover:text-[#0062A2] text-[#0B256B] font-semibold shadow-xs rounded-xl transition-colors px-6 py-2.5"
            >
              <Link href="/register/selection">
                ← Back to Registration Types
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
