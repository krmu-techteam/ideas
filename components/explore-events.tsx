"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const eventCategories = [
  {
    title: "Spotlight Activities",
    description: "20+ tech-driven and creative competitions",
    icon: "🎯",
    href: "/events",
  },
  {
    title: "Cultural Events",
    description: "Dance, music, and artistic performances",
    icon: "🎭",
    href: "/cultural",
  },
  {
    title: "Innovation Track",
    description: "Tech solutions and creative ideas",
    icon: "🚀",
    href: "/ideas/innovation",
  },
  {
    title: "Skill-Based Track",
    description: "Hands-on expertise and training",
    icon: "🎯",
    href: "/ideas/skill-based",
  },
  {
    title: "Extension Track",
    description: "Learning beyond classroom",
    icon: "🌍",
    href: "/ideas/extension",
  },
]

export default function ExploreEvents() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Explore Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover 23+ events across multiple tracks and categories</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {eventCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">{category.description}</p>
                  <Button asChild variant="ghost" className="w-full justify-start p-0 h-auto">
                    <Link href={category.href} className="text-primary hover:text-primary/80">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/all-events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
