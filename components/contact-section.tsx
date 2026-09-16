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
      className="py-16 sm:py-20 bg-[#FAF5EC] text-[#14100b] contact-section relative overflow-hidden"
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-[#14100b]">
              Ready to Innovate?
            </h2>
            <p className="text-[#6b6357] text-lg mb-8 leading-relaxed">
              Join the IDEAS revolution at K.R. Mangalam University. Connect
              with us to learn more about upcoming events, registration, or
              collaboration opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white border border-[#e7ded1] p-3 rounded-xl text-[#E11E45] shadow-xs">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#14100b] mb-1">
                    Visit Us
                  </h3>
                  <p className="text-[#6b6357]">
                    Sohna Road, Gurugram, Delhi-NCR, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white border border-[#e7ded1] p-3 rounded-xl text-[#E11E45] shadow-xs">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#14100b] mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:admissions@krmangalam.edu.in"
                    className="text-[#6b6357] hover:text-[#E11E45] transition-colors duration-300"
                  >
                    admissions@krmangalam.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white border border-[#e7ded1] p-3 rounded-xl text-[#E11E45] shadow-xs">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-[#14100b] mb-1">Call Us</h3>
                  <div className="flex flex-col text-sm text-[#6b6357]">
                    <a
                      href="tel:01242867800"
                      className="hover:text-[#E11E45] transition-colors duration-300 font-semibold text-[#14100b]"
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
            <Card className="bg-white border border-[#e7ded1] shadow-md rounded-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-[#E11E45]/10 border border-[#E11E45]/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#E11E45] shadow-xs">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#14100b] mb-4">
                  Get in Touch
                </h3>
                <p className="text-[#6b6357] mb-8 leading-relaxed">
                  Have questions about IDEAS 4.0? Want to collaborate or
                  participate? We'd love to hear from you!
                </p>
                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl bg-[#E11E45] hover:bg-[#E11E45]/80 text-white font-serif text-xs uppercase tracking-wider font-bold transition-colors shadow-xs"
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
                    className="w-full border border-[#e7ded1] bg-[#FAF5EC] hover:bg-[#f4ede1] text-[#14100b] font-semibold shadow-xs rounded-xl transition-all duration-300"
                  >
                    <a
                      href="mailto:ideas@krmangalam.edu.in"
                      className="flex items-center justify-center gap-2"
                    >
                      <Mail size={18} className="text-[#E11E45]" />
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
            <div
              key={index}
              className="text-center bg-white border border-[#e7ded1] rounded-xl p-5 shadow-xs"
            >
              <div className="text-3xl md:text-4xl font-serif font-bold mb-2 text-[#E11E45]">
                {stat.number}
              </div>
              <div className="text-[#6b6357] text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
