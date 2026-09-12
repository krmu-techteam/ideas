"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Link from "next/link"

const faqs = [
  {
    question: "1. What is IDEAS 4.0?",
    answer:
      "IDEAS 4.0 is K.R. Mangalam University's flagship annual innovation fest, celebrating innovation, academics, hands-on learning, and culture. Now in its fourth edition, it is one of the largest student-led innovation festivals in Delhi-NCR, featuring 28 competitions, 120+ exhibition stalls, and a prize pool of ₹10 Lakh+.",
  },
  {
    question: "2. When and where is IDEAS 4.0 happening?",
    answer:
      "IDEAS 4.0 will be held on October 27–28, 2026, at the K.R. Mangalam University Campus, Sohna Road, Gurugram, Delhi-NCR, Haryana. Entry begins at 9:15 AM on both days.",
  },
  {
    question: "3. Who can participate in IDEAS 4.0?",
    answer:
      "IDEAS 4.0 is open to school students (classes 9–12), college and university students from across India, and startups. We expect over 18,000 participants this year across all categories.",
  },
  {
    question: "4. What is the AI Arena?",
    answer:
      "The AI Arena is the technology and competition hub of IDEAS 4.0. It hosts 25+ competitions in robotics, AI, coding, drones, and other skill-based challenges — including flagship events like Robo War, Drone Race, Robots Race, Drone Obstacle Crossing, Gaming Arena, and the One Day Hackathon. It's the go-to zone for high-energy, hands-on tech competitions with a major share of the prize pool.",
  },
  {
    question: "5. What is Innoverse?",
    answer:
      "Innoverse is the exhibition and showcase zone of IDEAS 4.0 — the largest physical zone at the event. It brings together 120+ stalls featuring startups, student projects, tech products, and innovative ideas, offering a great space for networking and discovery.",
  },
  {
    question: "6. What is the prize pool for IDEAS 4.0?",
    answer:
      "IDEAS 4.0 features a prize pool worth ₹10 Lakh+, distributed across 28 competitions in 10 categories, including technology, academics, arts, business, and culture.",
  },
  {
    question: "7. How many competitions are there, and what categories do they cover?",
    answer:
      "There are 28 competitions across 10 categories: Law & Social Sciences, Technology & Engineering, Pharmacy, Creative Arts, Media & Communication, Innovation & Sustainability, Business, Science, Cultural, and Sports & Fitness. There's something for every interest, whether you're into tech, art, debate, dance, or business.",
  },
  {
    question: "8. How do I register for IDEAS 4.0?",
    answer:
      "Students: Scan the Student Registration QR code available in the event brochure.\nSchools: Scan the separate School Registration QR code for bulk/institutional registration.\nFor the Hackathon: Complete the standard registration first, then fill out the additional Hackathon Team form.\nYou can also reach out to the event team directly for help (see contact details below).",
  },
  {
    question: "9. Can I participate in more than one event?",
    answer:
      "Yes. Participants can select multiple events across different categories during registration — there's no stated limit on how many you can choose.",
  },
  {
    question: "10. What is the One Day Hackathon, and how is it different from other events?",
    answer:
      "The One Day Hackathon is a 24-hour team coding challenge where participants build solutions to real-world problem statements. It's a separate, premium track with its own team-based registration, judging panel, and prize structure — so after your general registration, you'll need to fill a short Hackathon Team form with your team name, leader details, and member list.",
  },
  {
    question: "11. Can students from different schools, colleges, or universities form a team together?",
    answer:
      "Yes, cross-institution teams are welcome for team-based events like the Hackathon. Team composition rules may vary slightly by competition, so please check the specific event guidelines.",
  },
  {
    question: "12. I'm a school student — what information will I need to register?",
    answer:
      "You'll need your name, school name, class/grade, section, and contact details. Registration is quick and can be done via the School QR code, often coordinated in bulk by your school.",
  },
  {
    question: "13. Is there an entry fee to attend IDEAS 4.0?",
    answer:
      "Please refer to the official registration form or contact the event team for the latest fee details, as this may vary by category or institution type.",
  },
  {
    question: "14. Is accommodation provided for outstation participants?",
    answer:
      "No, accommodation is not provided by the university. Outstation students and schools are requested to make their own travel and stay arrangements in advance.",
  },
  {
    question: "15. Will participants receive certificates?",
    answer:
      "Yes, all participants receive an e-certificate for taking part. Winners additionally receive special recognition, trophies, and prizes during the Prize Distribution Ceremony.",
  },
  {
    question: "16. What are the prizes for winners?",
    answer:
      "Winners across competitions and the AI Arena receive cash prizes, trophies, and certificates. Select innovative projects may also be considered for mentorship and incubation support through KRMU's ecosystem.",
  },
  {
    question: "17. What is the schedule/flow of the event once I arrive?",
    answer:
      "Entry — Arrive at the welcome gate from 9:15 AM.\nRegistration — Collect your event kit, schedule, and access pass at the on-site desk.\nExplore Innoverse — Visit the 120+ exhibition stalls.\nCompete in AI Arena / Your Events — Attend your pre-selected competitions at their scheduled time and venue.\nPrize Distribution — Join the grand closing ceremony celebrating all winners.",
  },
  {
    question: "18. Will there be workshops or learning sessions besides competitions?",
    answer:
      "Yes. IDEAS 4.0 includes expert-led Workshops & Masterclasses by industry professionals, covering topics like AI, entrepreneurship, emerging technology, and sustainability. These are open to all registered participants.",
  },
  {
    question: "19. Can school students take part in the same events as college students?",
    answer:
      "Some events are designed specifically for school students (e.g., Group Dance – School Students), while others are open to a mixed audience. Please check individual event descriptions during registration for age or category eligibility.",
  },
  {
    question: "20. Who should I contact for more information?",
    answer:
      "You can reach the IDEAS 4.0 event team at:\nEmail: ideas@krmangalam.edu.in\nMobile: 8448184864\nUniversity Helpline: 08800697010-15 | 8192888444 | 8800697012\nLandline: 0124-2867800\nWebsite: www.krmangalam.edu.in",
  },
]

export default function Faq() {
  const [isInView, setIsInView] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState(faqs)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    const section = document.querySelector(".faq-section")
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
    if (searchTerm.trim() === "") {
      setFilteredFaqs(faqs)
      return
    }

    const filtered = faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    setFilteredFaqs(filtered)
  }, [searchTerm])

  return (
  <section id="faq" className="py-12 sm:py-16 bg-white faq-section" suppressHydrationWarning>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2 leading-tight">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">Find answers to common questions about IDEAS 4.0</p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="relative">
            <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-3 sm:py-4 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-base sm:text-lg shadow-lg touch-manipulation"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              suppressHydrationWarning
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3 sm:space-y-4" suppressHydrationWarning>
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-0 bg-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" suppressHydrationWarning>
                <AccordionTrigger className="text-left font-semibold text-deepBlue-dark hover:text-primary px-4 sm:px-6 lg:px-8 py-4 sm:py-6 rounded-lg sm:rounded-xl hover:no-underline text-sm sm:text-base leading-relaxed touch-manipulation" suppressHydrationWarning>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 leading-relaxed text-sm sm:text-base whitespace-pre-line" suppressHydrationWarning>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-6 sm:py-8" suppressHydrationWarning>
              <p className="text-gray-500 text-sm sm:text-base">No FAQs found matching your search.</p>
              <Button variant="link" className="text-primary mt-2 touch-manipulation" onClick={() => setSearchTerm("")} suppressHydrationWarning>
                Clear search
              </Button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">Still have questions? Contact us directly.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto touch-manipulation">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
