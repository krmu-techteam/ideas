"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactSection() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    const section = document.querySelector(".contact-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0a1844] via-royal-900 to-[#0e276b] text-white contact-section overflow-hidden border-t border-royal-700/60 relative">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Innovate?
            </h2>
            <p className="text-royal-100 text-lg mb-8 leading-relaxed">
              Join the IDEAS revolution at K.R. Mangalam University. Connect
              with us to learn more about upcoming events, registration, or
              collaboration opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-royal-800/60 border border-royal-700/80 p-3 rounded-xl backdrop-blur-sm text-gold-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Visit Us</h3>
                  <p className="text-royal-200">
                    Sohna Road, Gurugram, Delhi-NCR, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-royal-800/60 border border-royal-700/80 p-3 rounded-xl backdrop-blur-sm text-gold-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email Us</h3>
                  <a
                    href="mailto:admissions@krmangalam.edu.in"
                    className="text-royal-200 hover:text-gold-300 transition-colors duration-300"
                  >
                    admissions@krmangalam.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-royal-800/60 border border-royal-700/80 p-3 rounded-xl backdrop-blur-sm text-gold-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Call Us</h3>
                  <div className="flex flex-col text-sm text-royal-200">
                    <a
                      href="tel:01242867800"
                      className="hover:text-gold-300 transition-colors duration-300 font-semibold"
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
            <Card className="bg-royal-900/40 backdrop-blur-md border border-royal-700/70 shadow-2xl rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-royal-800/70 border border-royal-700/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-gold-400 shadow-sm">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-royal-200 mb-8 leading-relaxed">
                  Have questions about IDEAS 4.0? Want to collaborate or
                  participate? We'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold shadow-lg shadow-rose-600/25 hover:shadow-rose-500/35 hover:scale-[1.02] active:scale-[0.98] rounded-xl transition-all duration-300"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2"
                    >
                      <span>Contact Us</span>
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-white/80 bg-white/10 text-white hover:bg-white/20 font-semibold shadow-md rounded-xl backdrop-blur-sm transition-all duration-300"
                  >
                    <a
                      href="mailto:ideas@krmangalam.edu.in"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail size={18} />
                      <span>Send Email</span>
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
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-serif font-bold mb-2 text-gold-400">
                {stat.number}
              </div>
              <div className="text-royal-200 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
