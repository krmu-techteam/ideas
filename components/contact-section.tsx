"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ContactSection() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector(".contact-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-deepBlue-dark to-primary contact-section overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Join the IDEAS revolution at K.R. Mangalam University. Connect with us to learn more about 
              upcoming events, registration, or collaboration opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-blue-100">
                    Sohna Road, Gurugram, Delhi-NCR, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email Us</h3>
                  <a
                    href="mailto:admissions@krmangalam.edu.in"
                    className="text-blue-100 hover:text-white transition-colors duration-300"
                  >
                    admissions@krmangalam.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <div className="flex flex-col text-sm text-blue-100">
                    <a
                      href="tel:01242867800"
                      className="hover:text-white transition-colors duration-300 font-semibold"
                    >
                      Landline: 0124-2867800
                    </a>
                    <span>
                      Helpline: 08800697010-15 | 8192888444 | 8800697012
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Have questions about IDEAS 4.0? Want to collaborate or participate? 
                  We'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white/90 backdrop-blur-sm text-royal-900 hover:bg-white hover:scale-105 font-semibold shadow-lg transition-all duration-300"
                  >
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      Contact Us
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white/30 hover:border-white hover:scale-105 font-semibold shadow-lg transition-all duration-300"
                  >
                    <a
                      href="mailto:ideas@krmangalam.edu.in"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail size={18} />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "4.0", label: "Version" },
            { number: "1000+", label: "Participants" },
            { number: "50+", label: "Events" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
