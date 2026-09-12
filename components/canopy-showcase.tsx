"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import ClientOnly from "@/components/client-only"

const canopyCategories = ["All", "Innovation", "Distinctiveness", "Extension", "Achievements", "Skill-Based"]

const canopies = [
  {
    id: 1,
    title: "AI & Robotics Lab",
    department: "Computer Science",
    category: "Innovation",
    description: "Showcasing cutting-edge AI algorithms and robotic applications",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Sustainable Architecture",
    department: "Architecture",
    category: "Distinctiveness",
    description: "Eco-friendly building designs and sustainable urban planning",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Community Legal Aid",
    department: "Law",
    category: "Extension",
    description: "Providing legal assistance to underserved communities",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Award-Winning Research",
    department: "Biotechnology",
    category: "Achievements",
    description: "Nationally recognized research in genetic engineering",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Digital Marketing Workshop",
    department: "Management",
    category: "Skill-Based",
    description: "Hands-on training in digital marketing tools and strategies",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "IoT Smart Home",
    department: "Electronics",
    category: "Innovation",
    description: "Internet of Things applications for modern homes",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Virtual Reality Experience",
    department: "Computer Science",
    category: "Skill-Based",
    description: "Immersive VR applications for education and entertainment",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Green Energy Solutions",
    department: "Mechanical Engineering",
    category: "Innovation",
    description: "Renewable energy technologies for a sustainable future",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function CanopyShowcase() {
  const [isInView, setIsInView] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCanopies, setFilteredCanopies] = useState(canopies)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    const section = document.querySelector(".canopy-showcase-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  useEffect(() => {
    const filtered = canopies.filter((canopy) => {
      const matchesCategory = activeCategory === "All" || canopy.category === activeCategory
      const matchesSearch =
        canopy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        canopy.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        canopy.description.toLowerCase().includes(searchTerm.toLowerCase())

      return matchesCategory && matchesSearch
    })

    setFilteredCanopies(filtered)
  }, [activeCategory, searchTerm])

  return (
    <ClientOnly>
      <section className="py-16 bg-white canopy-showcase-section" suppressHydrationWarning>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2">Cultural Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our 120 innovative canopies from various departments showcasing excellence in innovation, academics, hands-on pedagogy, and cultural vibrancy
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search bar */}
      <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search canopies..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
        suppressHydrationWarning
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2">
              {canopyCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCanopies.map((canopy, index) => (
            <motion.div
              key={canopy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={canopy.image || "/placeholder.svg"}
                    alt={canopy.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                    {canopy.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-1">{canopy.department}</div>
                  <h3 className="text-xl font-bold mb-2 text-deepBlue-dark">{canopy.title}</h3>
                  <p className="text-gray-600 mb-4">{canopy.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    asChild
                  >
                    <Link href={`/showcase?canopy=${canopy.id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredCanopies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No canopies found matching your criteria.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/showcase">View All 120 Canopies</Link>
          </Button>
        </div>
      </div>
      </section>
    </ClientOnly>
  )
}
