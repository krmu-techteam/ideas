"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, School, ArrowRight, Sparkles, Loader2 } from "lucide-react"
import Link from "next/link"

export default function UniversityRegistrationPage() {
  const router = useRouter()
  const [loadingType, setLoadingType] = useState<string | null>(null)

  // Prefetch payment page on mount for faster navigation
  useEffect(() => {
    router.prefetch("/register/payment")
  }, [router])

  const handleNavigation = (href: string, type: string) => {
    setLoadingType(type)
    // Navigate immediately without artificial delay
    router.push(href)
  }
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(circle at 30% 40%, rgba(255,215,128,0.12), transparent 60%), radial-gradient(circle at 75% 65%, rgba(255,215,128,0.08), transparent 55%)"}} />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => {
          // Use index-based calculations instead of Math.random() to avoid hydration issues
          const seed = i * 0.618033988749895; // Golden ratio for distribution
          const width = ((seed * 10) % 10) + 6;
          const height = ((seed * 10) % 10) + 6;
          const top = ((seed * 100) % 100);
          const left = (((seed + 0.5) * 100) % 100);
          const delay = ((seed * 4) % 4);
          const duration = ((seed * 8) % 8) + 12;
          
          return (
            <div
              key={i}
              className="absolute rounded-full bg-gold-400/20 animate-float"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gold-500/20 backdrop-blur-sm border border-gold-400/30">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-sm font-semibold text-gold-400">University Registration</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Select Your Institution Type
          </h1>
          <p className="text-lg md:text-xl text-royal-200 max-w-2xl mx-auto">
            Choose the appropriate category for your university registration
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* KRMU Students Card */}
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
                    KRMU Students
                  </h2>
                  
                  <p className="text-royal-200 mb-6 flex-grow text-sm md:text-base">
                    For K.R. Mangalam University students participating in student activities, 
                    competitions, and showcasing your projects at IDEAS 4.0.
                  </p>
                  
                  <ul className="text-left text-royal-100 mb-8 space-y-2 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2 flex-shrink-0">✓</span>
                      <span>Special rates for KRMU students</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2 flex-shrink-0">✓</span>
                      <span>Access to all student activities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2 flex-shrink-0">✓</span>
                      <span>Participation in competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-gold-400 mr-2 flex-shrink-0">✓</span>
                      <span>Certificates & recognition</span>
                    </li>
                  </ul>
                  
                  <Button
                    size="lg"
                    disabled={loadingType !== null}
                    onClick={() => handleNavigation("/register/payment?type=krmu", "krmu")}
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-semibold shadow-lg hover:shadow-gold-400/30 group-hover:scale-105 transition-all duration-300 disabled:opacity-70"
                  >
                    {loadingType === "krmu" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        <span>Loading...</span>
                      </>
                    ) : (
                      <>
                        <span>Register as KRMU Student</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Other Universities Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full bg-white/10 backdrop-blur-md border-2 border-primary/30 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
                <CardContent className="p-8 md:p-10 flex flex-col items-center text-center h-full">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-rose-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Building2 className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Other Universities
                  </h2>
                  
                  <p className="text-royal-200 mb-6 flex-grow text-sm md:text-base">
                    For students from other universities, colleges, and higher education institutions 
                    looking to participate in canopy exhibitions and academic events.
                  </p>
                  
                  <ul className="text-left text-royal-100 mb-8 space-y-2 text-sm md:text-base w-full">
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0">✓</span>
                      <span>Canopy exhibition space</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0">✓</span>
                      <span>Research showcase opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0">✓</span>
                      <span>Inter-university networking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2 flex-shrink-0">✓</span>
                      <span>Innovation & tech presentations</span>
                    </li>
                  </ul>
                  
                  <Button
                    size="lg"
                    disabled={loadingType !== null}
                    onClick={() => handleNavigation("/register/payment?type=other-university", "other-university")}
                    className="w-full bg-gradient-to-r from-primary to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white font-semibold shadow-lg hover:shadow-primary/30 group-hover:scale-105 transition-all duration-300 disabled:opacity-70"
                  >
                    {loadingType === "other-university" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        <span>Loading...</span>
                      </>
                    ) : (
                      <>
                        <span>Register from Other University</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
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
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <Card className="bg-white/5 backdrop-blur-sm border border-royal-600/30">
              <CardContent className="p-6">
                <p className="text-royal-200 mb-4">
                  <strong className="text-gold-400">Note:</strong> All university registrations include 
                  access to workshops, networking sessions, and cultural events at IDEAS 4.0.
                </p>
                <p className="text-sm text-royal-300">
                  Need assistance? Contact us at{" "}
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
              <Link href="/register/selection">
                ← Back to Registration Options
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
