"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is IDEAS 4.0?",
    answer:
      "IDEAS 4.0 is K.R. Mangalam University's flagship annual innovation fest, celebrating innovation, academics, hands-on learning, and culture. Now in its fourth edition, it is one of the largest student-led innovation festivals in Delhi-NCR, featuring 19 competitions, 120+ exhibition stalls, and a prize pool of ₹10 Lakh+.",
  },
  {
    question: "When and where is IDEAS 4.0 happening?",
    answer:
      "IDEAS 4.0 will be held on October 27–28, 2026, at the K.R. Mangalam University Campus, Sohna Road, Gurugram, Delhi-NCR, Haryana. Entry begins at 9:15 AM on both days.",
  },
  {
    question: "Who can participate in IDEAS 4.0?",
    answer:
      "IDEAS 4.0 is open to school students (classes 9–12), college and university students from across India, and startups. We expect over 25,000+  participants this year across all categories.",
  },
  {
    question: "What is the AI Arena?",
    answer:
      "The AI Arena is the technology and competition hub of IDEAS 4.0. It hosts 19 competitions in robotics, AI, coding, drones, and other skill-based challenges — including flagship events like Robo War, Drone Race, Robots Race, Drone Obstacle Crossing, Gaming Arena, and the One Day Hackathon. It's the go-to zone for high-energy, hands-on tech competitions with a major share of the prize pool.",
  },
  {
    question: "What is Innoverse?",
    answer:
      "Innoverse is the exhibition and showcase zone of IDEAS 4.0 — the largest physical zone at the event. It brings together 120+ stalls featuring startups, student projects, tech products, and innovative ideas, offering a great space for networking and discovery.",
  },
  {
    question: "What is the prize pool for IDEAS 4.0?",
    answer:
      "IDEAS 4.0 features a prize pool worth ₹10 Lakh+, distributed across 19 competitions in 10 categories, including technology, academics, arts, business, and culture.",
  },
  {
    question:
      "How many competitions are there, and what categories do they cover?",
    answer:
      "There are 19 competitions across 10 categories: Law & Social Sciences, Technology & Engineering, Pharmacy, Creative Arts, Media & Communication, Innovation & Sustainability, Business, Science, Cultural, and Sports & Fitness. There's something for every interest, whether you're into tech, art, debate, dance, or business.",
  },
  {
    question: "How do I register for IDEAS 4.0?",
    answer:
      "Students: Scan the Student Registration QR code available in the event brochure.\nSchools: Scan the separate School Registration QR code for bulk/institutional registration.\nFor the Hackathon: Complete the standard registration first, then fill out the additional Hackathon Team form.\nYou can also reach out to the event team directly for help via ideas@krmangalam.edu.in",
  },
  {
    question: "Can I participate in more than one event?",
    answer:
      "Yes. Participants can select multiple events across different categories during registration — there's no stated limit on how many you can choose.",
  },
  {
    question:
      "What is the One Day Hackathon, and how is it different from other events?",
    answer:
      "The One Day Hackathon is a 24-hour team coding challenge where participants build solutions to real-world problem statements. It's a separate, premium track with its own team-based registration, judging panel, and prize structure — so after your general registration, you'll need to fill a short Hackathon Team form with your team name, leader details, and member list.",
  },
  {
    question:
      "Can students from different schools, colleges, or universities form a team together?",
    answer:
      "Yes, cross-institution teams are welcome for team-based events like the Hackathon. Team composition rules may vary slightly by competition, so please check the specific event guidelines.",
  },
  {
    question:
      "I'm a school student — what information will I need to register?",
    answer:
      "You'll need your name, school name, class/grade, section, and contact details. Registration is quick and can be done via the School QR code, often coordinated in bulk by your school.",
  },
  {
    question: "Is there an entry fee to attend IDEAS 4.0?",
    answer:
      "Please refer to the official registration form or contact the event team for the latest fee details, as this may vary by category or institution type.",
  },
  {
    question: "Is accommodation provided for outstation participants?",
    answer:
      "No, accommodation is not provided by the university. Outstation students and schools are requested to make their own travel and stay arrangements in advance.",
  },
  {
    question: "Will participants receive certificates?",
    answer:
      "Yes, all participants receive an e-certificate for taking part. Winners additionally receive special recognition, trophies, and prizes during the Prize Distribution Ceremony.",
  },
  {
    question: "What are the prizes for winners?",
    answer:
      "Winners across competitions and the AI Arena receive cash prizes, trophies, and certificates. Select innovative projects may also be considered for mentorship and incubation support through KRMU's ecosystem.",
  },
  {
    question: "What is the schedule/flow of the event once I arrive?",
    answer:
      "Entry — Arrive at the welcome gate from 9:15 AM.\nRegistration — Collect your event kit, schedule, and access pass at the on-site desk.\nExplore Innoverse — Visit the 120+ exhibition stalls.\nCompete in AI Arena / Your Events — Attend your pre-selected competitions at their scheduled time and venue.\nPrize Distribution — Join the grand closing ceremony celebrating all winners.",
  },
  {
    question:
      "Will there be workshops or learning sessions besides competitions?",
    answer:
      "Yes. IDEAS 4.0 includes expert-led Workshops & Masterclasses by industry professionals, covering topics like AI, entrepreneurship, emerging technology, and sustainability. These are open to all registered participants.",
  },
  {
    question:
      "Can school students take part in the same events as college students?",
    answer:
      "Some events are designed specifically for school students (e.g., Group Dance – School Students), while others are open to a mixed audience. Please check individual event descriptions during registration for age or category eligibility.",
  },
  {
    question: "Who should I contact for more information?",
    answer:
      "You can reach the IDEAS 4.0 event team at:\nEmail: ideas@krmangalam.edu.in\nMobile: 8448184864\nUniversity Helpline: 8448184864 | 8192888444\nLandline: 0124-2867800\nWebsite: www.krmangalam.edu.in",
  },
];

export default function Faq() {
  const [searchTerm, setSearchTerm] = useState("");
  // By default, open item 1 ("Who can participate in IDEAS 4.0?") just like HackIndia reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section
      id="faq"
      className="py-16 bg-[#F4F9FD] faq-section"
      suppressHydrationWarning
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-serif text-[clamp(30px,4.5vw,48px)] font-bold tracking-[-0.02em] text-[#0B256B] leading-[1.1]">
            Frequently Asked{" "}
            <span className="italic font-serif font-normal text-[#00ACE9]">
              Questions
            </span>
          </h2>

          <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-slate-600 font-sans">
            Answers to what participants ask most — registration, categories,
            team formation, schedule, and event guidelines.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8 max-w-md">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0062A2]"
          />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ outline: "none" }}
            className="w-full h-11 rounded-lg border border-blue-200 bg-white pl-10 pr-4 text-[14px] text-[#0B256B] placeholder:text-slate-400 outline-none focus:outline-none focus-visible:outline-none focus:border-[#0062A2] focus-visible:border-[#0062A2] focus:ring-1 focus:ring-[#0062A2] transition-all"
            suppressHydrationWarning
          />
        </div>

        {/* Accordion List */}
        <div className="border-t border-blue-100" suppressHydrationWarning>
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border-b border-blue-100 last:border-b-0 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-5 flex items-center justify-between text-left gap-4 transition-colors cursor-pointer group select-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-serif text-[16.5px] sm:text-[18px] font-bold leading-snug transition-colors ${
                      isOpen
                        ? "text-[#0062A2]"
                        : "text-[#0B256B] group-hover:text-[#0062A2]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 text-[#0062A2]"
                        : "text-[#0062A2]/70 group-hover:text-[#0062A2]"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pt-1 text-[15px] sm:text-[15.5px] leading-[1.65] text-slate-600 whitespace-pre-line font-sans">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredFaqs.length === 0 && (
          <div className="py-12 text-center border-b border-blue-100">
            <p className="font-serif text-lg font-bold text-[#0B256B]">
              No questions found
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Try searching with different keywords.
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm("")}
              className="mt-4 font-mono text-xs font-semibold uppercase tracking-wider text-[#0062A2] hover:underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Bottom Help Footer Prompt */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-serif text-[18px] font-bold text-[#0B256B]">
              Still have questions?
            </h3>
            <p className="text-[14px] text-slate-600 mt-0.5">
              Can't find the answer you're looking for? Reach our team directly.
            </p>
          </div>
          <Link
            href="/contact"
            className="font-mono text-xs uppercase tracking-wider font-semibold inline-flex items-center justify-center rounded-xl px-6 py-3 transition-all bg-gradient-to-r from-[#0B256B] to-[#0062A2] text-white hover:from-[#081B4B] hover:to-[#004B87] self-start sm:self-auto"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
