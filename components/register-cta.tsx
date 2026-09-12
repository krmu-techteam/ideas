"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterCTA() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl md:rounded-3xl bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-white p-8 sm:p-12 md:p-14 shadow-2xl overflow-hidden border border-royal-800/60"
        >
          {/* Ambient Glows */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-rose-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white leading-tight">
              Ready to Join <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-300 bg-clip-text text-transparent">IDEAS 4.0?</span>
            </h2>

            {/* Description */}
            <p className="text-royal-200 text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              Register now for your favorite events and be part of this incredible journey
            </p>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-base px-8 py-6 rounded-[2px] shadow-lg hover:shadow-rose-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Link href="/register/selection" className="inline-flex items-center gap-2">
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
