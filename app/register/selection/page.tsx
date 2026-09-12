"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, School, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RegistrationSelectionPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(circle at 30% 40%, rgba(255,215,128,0.12), transparent 60%), radial-gradient(circle at 75% 65%, rgba(255,215,128,0.08), transparent 55%)"}} />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Choose Your Registration Type
          </h1>
          <p className="text-lg md:text-xl text-royal-200 max-w-2xl mx-auto">
            Select the appropriate registration category to get started with IDEAS 4.0
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* School/Student Registration Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-2 border-gold-400/30 hover:border-gold-400 hover:shadow-2xl hover:shadow-gold-400/20 transition-all duration-300 group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <School className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    School / Student
                  </h2>
                  
                  <p className="text-royal-200 mb-6 flex-grow text-sm md:text-base">
                    For school students and individual participants looking to showcase their talents, 
                    compete in various events, and be part of this mega fest.
                  </p>
                  
                  <ul className="text-left text-royal-100 mb-8 space-y-2 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">✓</span>
                      <span>Access to 28 competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">✓</span>
                      <span>Cultural events participation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">✓</span>
                      <span>Workshops and skill development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2">✓</span>
                      <span>Certificate of participation</span>
                    </li>
                  </ul>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold shadow-lg hover:shadow-gold-400/30 group-hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/register/school">
                      <span>Register as School/Student</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* University Registration Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-2 border-primary/30 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-rose-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    University
                  </h2>
                  
                  <p className="text-royal-200 mb-6 flex-grow text-sm md:text-base">
                    For universities, colleges, and higher education institutions looking to participate 
                    in canopy exhibitions, research showcases, and academic events.
                  </p>
                  
                  <ul className="text-left text-royal-100 mb-8 space-y-2 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Canopy exhibition space</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Research paper presentations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Industry-academia networking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Innovation showcase opportunities</span>
                    </li>
                  </ul>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white font-semibold shadow-lg hover:shadow-primary/30 group-hover:scale-105 transition-all duration-300"
                  >
                    <Link href="/register/university">
                      <span>Register as University</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            {/* NO REFUND POLICY - Prominent Warning */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                repeat: 3,
                repeatType: "reverse",
              }}
              className="mb-6"
            >
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-1 rounded-lg shadow-2xl shadow-red-500/50">
                <div className="bg-royal-900 rounded-md p-6 border-2 border-red-400">
                  <p className="text-3xl md:text-4xl font-extrabold text-red-400 tracking-wide animate-pulse">
                    ⚠️ NO REFUND POLICY ⚠️
                  </p>
                  <p className="text-sm md:text-base text-red-300 mt-2 font-semibold">
                    All registration fees are non-refundable once payment is completed
                  </p>
                </div>
              </div>
            </motion.div>

            <Card className="bg-white/5 backdrop-blur-sm border border-royal-600/30">
              <CardContent className="p-6">
                <p className="text-royal-200 mb-4">
                  <strong className="text-gold-400">Note:</strong> Both registration types include access to 
                  cultural events, workshops, and networking opportunities at IDEAS 4.0.
                </p>
                <p className="text-sm text-royal-300">
                  Need help? Contact us at{" "}
                  <a href="mailto:ideas@krmangalam.edu.in" className="text-gold-400 hover:underline">
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-center"
          >
            <Button
              asChild
              variant="outline"
              className="bg-royal-800/40 border-royal-600/40 text-royal-100 hover:bg-royal-700/50 hover:border-royal-500/60 backdrop-blur-sm"
            >
              <Link href="/">
                ← Back to Home
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
