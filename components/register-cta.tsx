"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterCTA() {
  return (
    <section className="py-8 sm:py-12 bg-[#F4F9FD] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white p-8 md:p-12 border border-white/20 overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 text-white leading-tight">
              Ready to Join IDEAS 4.0?
            </h2>

            {/* Description */}
            <p className="text-blue-100 font-sans text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              Register now for your favorite events and be part of this
              incredible journey
            </p>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FF6600] to-[#E51937] hover:from-[#FF5500] hover:to-[#CC112D] text-white font-bold text-base px-8 py-5 rounded-xl transition-colors duration-200"
            >
              <Link
                href="/register/selection"
                className="inline-flex items-center gap-2"
              >
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
