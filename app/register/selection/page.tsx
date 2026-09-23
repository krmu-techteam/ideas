"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RegistrationSelectionPage() {
  return (
    <div className="min-h-screen bg-[#F6FCFE] text-[#14100b] selection:bg-[#E11E45]/20 selection:text-[#E11E45]">
      {/* Hero Header Section */}
      <section className="bg-gradient-to-r from-[#213C87] via-[#0062A2] to-[#00ACE9] to-[#081c15] text-white pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-white/5 text-white text-xs font-poppins font-medium border border-white/20">
              <span>IDEAS 4.0 REGISTRATION</span>
            </div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-white mb-4 tracking-[-0.02em]">
              Choose Your Registration Type
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-poppins max-w-2xl mx-auto leading-relaxed">
              Select the appropriate registration category to get started with
              IDEAS 4.0
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Registration Options */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* School/Student Registration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full bg-transparent border border-[#213C87] rounded-[1px] hover:border-[#03071e]/50 transition-all duration-300 ">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20  text-[#03071e] flex items-center justify-center  group-hover:scale-105 transition-transform duration-300  mb-4">
                    <School className="w-8 h-8 md:w-16 md:h-16 text-[#03071e]" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#081c15] mb-4">
                    School / Student
                  </h2>

                  <p className="text-[#040403] font-poppins mb-6 flex-grow text-sm md:text-[15px] leading-relaxed">
                    For school students and individual participants looking to
                    showcase their talents, compete in various events, and be
                    part of this mega fest.
                  </p>

                  <ul className="text-left font-poppins text-[#14100b] mb-8 space-y-2.5 text-sm md:text-[15px] w-full">
                    <li className="flex items-start">
                      <span className="text-[#213C87] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Access to 28 competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#213C87] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Cultural events participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#213C87] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Workshops and skill development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#213C87] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Certificate of participation</span>
                    </li>
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#213C87] hover:bg-[#213C87e0] text-white font-semibold font-poppins !rounded-[2px] hover:shadow-lg transition-all duration-300 py-3.5"
                  >
                    <Link
                      href="/register/school"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Register as School/Student</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* University Registration Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-transparent border border-[#213C87] rounded-[1px] hover:border-[#16212C]/40 transition-all duration-300">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 text-[#16212C] flex items-center justify-center  group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <GraduationCap className="w-8 h-8 md:w-16 md:h-16 text-[#16212C]" />
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14100b] mb-4">
                    University
                  </h2>

                  <p className="text-[#040403] font-poppins mb-6 flex-grow text-sm md:text-[15px] leading-relaxed">
                    For universities, colleges, and higher education
                    institutions looking to participate in canopy exhibitions,
                    research showcases, and academic events.
                  </p>

                  <ul className="text-left font-poppins text-[#14100b] mb-8 space-y-2.5 text-sm md:text-[15px] w-full">
                    <li className="flex items-start">
                      <span className="text-[#081c15] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Canopy exhibition space</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#081c15] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Research paper presentations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#081c15] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Industry-academia networking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#081c15] font-bold mr-2.5 shrink-0">
                        ✓
                      </span>
                      <span>Innovation showcase opportunities</span>
                    </li>
                  </ul>

                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#081c15] hover:bg-[#081c15ee] text-white font-bold rounded-[2px] hover:shadow-lg transition-all duration-300 py-3.5"
                  >
                    <Link
                      href="/register/university"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Register as University</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
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
            <Card className="bg-transparent border border-gray-800 rounded-[1px]">
              <CardContent className="p-6">
                <p className="text-gray-800 mb-3 text-sm sm:text-base leading-relaxed">
                  <strong className="text-[#14100b]">Note:</strong> Both
                  registration types include access to cultural events,
                  workshops, and networking opportunities at IDEAS 4.0.
                </p>
                <p className="text-sm text-gray-800">
                  Need help? Contact us at{" "}
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
              className="border border-gray-800 bg-white hover:bg-[#F7FCFE] text-[#14100b] font-semibold shadow-xs rounded-xl transition-colors px-6 py-2.5"
            >
              <Link href="/">← Back to Home</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
