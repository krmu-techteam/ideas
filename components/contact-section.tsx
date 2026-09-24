"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    const section = sectionRef.current;
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
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 sm:py-20 bg-[#F4F9FD] text-[#0B256B] contact-section relative overflow-hidden"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#0B256B]">
              Ready to Innovate?
            </h2>
            <p className="text-slate-600 font-sans text-lg mb-8 leading-relaxed">
              Join the IDEAS revolution at K.R. Mangalam University. Connect
              with us to learn more about upcoming events, registration, or
              collaboration opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl text-[#0062A2] shadow-xs">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B256B] mb-1">
                    Visit Us
                  </h3>
                  <p className="text-slate-600">
                    Sohna Road, Gurugram, Delhi-NCR, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl text-[#0062A2] shadow-xs">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B256B] mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:ideas@krmangalam.edu.in"
                    className="text-[#0062A2] hover:underline transition-colors duration-300"
                  >
                    ideas@krmangalam.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-50 border border-blue-100 p-3 rounded-2xl text-[#0062A2] shadow-xs">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B256B] mb-1">Call Us</h3>
                  <div className="flex flex-col text-sm text-slate-600">
                    <a
                      href="tel:01242867800"
                      className="hover:text-[#0062A2] transition-colors duration-300 font-semibold text-[#0B256B]"
                    >
                      Landline: 0124-2867800
                    </a>
                    <span className="font-semibold text-[#0B256B]">
                      Helpline:{" "}
                      <a
                        href="tel:+918448184864"
                        className="text-[#0062A2] hover:underline transition-colors duration-300"
                      >
                        8448184864
                      </a>{" "}
                      |{" "}
                      <a
                        href="tel:+918192888444"
                        className="text-[#0062A2] hover:underline transition-colors duration-300"
                      >
                        8192888444
                      </a>
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
            <Card className="bg-gradient-to-br from-[#081B4B] via-[#00529B] to-[#00ACE9] border border-white/20 shadow-xl rounded-3xl overflow-hidden text-white">
              <CardContent className="p-8 md:p-10 text-center">
                <div className="bg-white/10 border border-white/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-xs backdrop-blur-sm">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Have questions about IDEAS 4.0? Want to collaborate or
                  participate? We'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-blue-50 text-[#081B4B] font-bold uppercase tracking-wider text-xs shadow-md transition-all"
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
                    className="w-full h-11 border border-white/30 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-xs transition-all duration-300"
                  >
                    <a
                      href="mailto:ideas@krmangalam.edu.in"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail size={18} className="text-white" />
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
            { number: "25000+", label: "Participants" },
            { number: "19", label: "Events" },
            { number: "120+", label: "Canopies" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white border border-blue-100 rounded-2xl p-5 shadow-sm hover:border-[#0062A2] transition-all"
            >
              <div className="text-3xl md:text-4xl font-serif font-bold mb-1 text-[#0B256B]">
                {stat.number}
              </div>
              <div className="text-[#0062A2] text-xs font-semibold font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
