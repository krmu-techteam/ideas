"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function RegisterCTA() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join IDEAS 4.0?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Register now for your favorite events and be part of this incredible journey
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/register">
              Register Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
