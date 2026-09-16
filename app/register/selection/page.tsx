"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RegistrationSelectionPage() {
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
              <span>IDEAS 4.0 REGISTRATION</span>
            </div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-bold text-[#14100b] mb-4 tracking-[-0.02em]">
              Choose Your Registration Type
            </h1>
            <p className="text-base sm:text-lg text-[#6b6357] max-w-2xl mx-auto leading-relaxed">
              Select the appropriate registration category to get started with IDEAS 4.0
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
              <Card className="h-full bg-white border border-[#e7ded1] rounded-2xl hover:shadow-xl hover:border-[#E11E45]/50 transition-all duration-300 shadow-xs group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#E11E45]/10 border border-[#E11E45]/20 text-[#E11E45] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <School className="w-8 h-8 md:w-10 md:h-10 text-[#E11E45]" />
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14100b] mb-4">
                    School / Student
                  </h2>
                  
                  <p className="text-[#6b6357] mb-6 flex-grow text-sm md:text-base leading-relaxed">
                    For school students and individual participants looking to showcase their talents, 
                    compete in various events, and be part of this mega fest.
                  </p>
                  
                  <ul className="text-left text-[#14100b] mb-8 space-y-2.5 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Access to 28 competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Cultural events participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Workshops and skill development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E11E45] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Certificate of participation</span>
                    </li>
                  </ul>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#E11E45] hover:bg-[#c2410c] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-3.5"
                  >
                    <Link href="/register/school" className="flex items-center justify-center gap-2">
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
              <Card className="h-full bg-white border border-[#e7ded1] rounded-2xl hover:shadow-xl hover:border-[#16212C]/40 transition-all duration-300 shadow-xs group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#16212C]/10 border border-[#16212C]/20 text-[#16212C] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-xs">
                    <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#16212C]" />
                  </div>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#14100b] mb-4">
                    University
                  </h2>
                  
                  <p className="text-[#6b6357] mb-6 flex-grow text-sm md:text-base leading-relaxed">
                    For universities, colleges, and higher education institutions looking to participate 
                    in canopy exhibitions, research showcases, and academic events.
                  </p>
                  
                  <ul className="text-left text-[#14100b] mb-8 space-y-2.5 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Canopy exhibition space</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Research paper presentations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Industry-academia networking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#16212C] font-bold mr-2.5 shrink-0">✓</span>
                      <span>Innovation showcase opportunities</span>
                    </li>
                  </ul>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#16212C] hover:bg-[#233344] text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 py-3.5"
                  >
                    <Link href="/register/university" className="flex items-center justify-center gap-2">
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
            {/* NO REFUND POLICY - Prominent Warning */}
            <div className="mb-6 bg-red-50/90 border border-red-200 rounded-2xl p-6 sm:p-7 shadow-xs">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-red-600 tracking-wide flex items-center justify-center gap-2">
                <span>⚠️</span>
                <span>NO REFUND POLICY</span>
                <span>⚠️</span>
              </p>
              <p className="text-sm sm:text-base text-red-700/90 mt-2 font-medium">
                All registration fees are non-refundable once payment is completed
              </p>
            </div>

            <Card className="bg-white border border-[#e7ded1] rounded-2xl shadow-xs">
              <CardContent className="p-6">
                <p className="text-[#6b6357] mb-3 text-sm sm:text-base leading-relaxed">
                  <strong className="text-[#14100b]">Note:</strong> Both registration types include access to 
                  cultural events, workshops, and networking opportunities at IDEAS 4.0.
                </p>
                <p className="text-sm text-[#8c8273]">
                  Need help? Contact us at{" "}
                  <a href="mailto:ideas@krmangalam.edu.in" className="text-[#E11E45] font-semibold hover:underline">
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
              <Link href="/">
                ← Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
