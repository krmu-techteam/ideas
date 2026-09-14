"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegisterCTA() {
  return (
    <section className="py-8 bg-[#F9F5EC] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 overflow-hidden"
        >
          <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#16212C] leading-tight">
              Ready to Join IDEAS 4.0?
            </h2>

            {/* Description */}
            <p className="text-[#16212C] text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
              Register now for your favorite events and be part of this
              incredible journey
            </p>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-semibold text-base px-8 py-5 rounded-[2px]"
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
