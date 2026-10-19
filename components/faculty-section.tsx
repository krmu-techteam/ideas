"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, Sparkles } from "lucide-react";

const facultyMembers = [
  {
    name: "Prof. Ashok Kumar Nagawat",
    role: "Eminent Academician & Theoretical Physicist",
    affiliation: "Former Vice-Chancellor, DSEU & Senior Academic Leader",
    badge: "Advisory Board",
    image: "/faculity/Professor Ashok Kumar Nagawat.jfif.png",
    icon: <Award className="w-4 h-4 text-[#00ACE9]" />,
  },
  {
    name: "Prof. (Dr.) B. Chandra",
    role: "Emeritus Professor & AI/ML Pioneer",
    affiliation: "Former Head of Department, IIT Delhi & Academic Advisor",
    badge: "Research Mentor",
    image: "/faculity/Dr. B Chandra 1.png",
    icon: <Sparkles className="w-4 h-4 text-[#00ACE9]" />,
  },
  {
    name: "Prof. (Dr.) Virendra",
    role: "Senior Academic Leader & Mentor",
    affiliation: "Distinguished Professor & Research Guide, KRMU",
    badge: "Faculty Advisor",
    image: "/faculity/virendra.jpg.png",
    icon: <BookOpen className="w-4 h-4 text-[#00ACE9]" />,
  },
];

export default function FacultySection() {
  return (
    <section
      id="faculty"
      aria-label="Distinguished Faculty & Mentors"
      className="py-20 bg-gradient-to-b from-[#F4F9FD] via-white to-[#F4F9FD] border-t border-blue-50 relative overflow-hidden"
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#00529B] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00ACE9]" />
            <span>Academic Leadership & Mentors</span>
          </div>

          <h2 className="font-serif text-[clamp(30px,4.5vw,46px)] font-bold tracking-[-0.02em] text-[#0B256B] leading-[1.15]">
            Distinguished{" "}
            <span className="italic font-serif font-normal text-[#00ACE9]">
              Faculty & Mentors
            </span>
          </h2>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="group relative bg-white rounded-2xl p-7 border border-blue-100/90 shadow-[0_4px_20px_rgba(0,82,155,0.06)] hover:shadow-[0_16px_40px_rgba(0,82,155,0.12)] hover:border-blue-300 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-100 text-[#00529B] text-[11px] font-semibold tracking-wide">
                {member.icon}
                <span>{member.badge}</span>
              </div>

              {/* Portrait Container */}
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-2 bg-gradient-to-b from-blue-100/70 via-white to-blue-50/50 shadow-inner mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white ring-2 ring-blue-200/60 shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 160px, 180px"
                    className="object-contain object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Details */}
              <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#0B256B] leading-snug mb-1.5 group-hover:text-[#00529B] transition-colors">
                {member.name}
              </h3>

              <p className="text-sm font-semibold text-[#00ACE9] mb-2 leading-tight">
                {member.role}
              </p>

              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans mt-auto pt-2">
                {member.affiliation}
              </p>

              {/* Bottom Subtle Accent Bar */}
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-[#00ACE9]/60 to-transparent mt-5 group-hover:w-20 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
