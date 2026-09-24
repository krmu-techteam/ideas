import type { Metadata } from "next";
import { generateEventMetadata } from "@/lib/seo/metadata";
import { ideasEventsData } from "@/lib/data/ideas-events";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  Target,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/structured-data";

const trackData = ideasEventsData["skill-based"];

export const metadata: Metadata = generateEventMetadata(
  "Skill-Based Learning Track | IDEAS 4.0",
  "Explore the Skill-Based Learning track at IDEAS 4.0 - hands-on interdisciplinary learning powered by industry partnerships. Features pharmaceutical challenges, legal interpretation, slogan writing, and photography.",
  "October 27–28, 2026",
  "Various Locations, KRMU Campus",
  "/ideas/skill-based",
);

export default function SkillBasedPage() {
  return (
    <div className="min-h-screen bg-[#F4F9FD] text-[#0B256B]">
      <StructuredData
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://ideas.krmangalam.edu.in" },
            {
              name: "IDEAS Tracks",
              url: "https://ideas.krmangalam.edu.in/ideas",
            },
            {
              name: "Skill-Based Learning",
              url: "https://ideas.krmangalam.edu.in/ideas/skill-based",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white pt-28 pb-14 sm:pt-36 sm:pb-16 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors mb-6 text-xs sm:text-sm font-mono uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            <span>Back to IDEAS</span>
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-[#00D2FF] border border-white/20 mb-4 backdrop-blur-xs">
              <Wrench size={14} className="text-[#00D2FF]" />
              <span>Track V • Skill-Based Learning</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
              Skill-Based Learning
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Hands-on interdisciplinary learning powered by industry partnerships
            </p>

            {/* Event Info Chips */}
            <div className="flex flex-wrap justify-center gap-3 text-white text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-xl backdrop-blur-xs">
                <Calendar size={16} className="text-[#00D2FF]" />
                <span>October 27–28, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-xl backdrop-blur-xs">
                <Clock size={16} className="text-[#00D2FF]" />
                <span>9:15 AM onwards (both days)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-xl backdrop-blur-xs">
                <MapPin size={16} className="text-[#00D2FF]" />
                <span>Various Locations, KRMU Campus</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-xl backdrop-blur-xs">
                <Users size={16} className="text-[#00D2FF]" />
                <span>700+ Participants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Description Card */}
        <div className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0062A2]">
              <Target size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B256B]">
              About Skill-Based Learning Track
            </h2>
          </div>
          <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed">
            {trackData.description}
          </p>
        </div>

        {/* Featured Events */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex font-mono items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.14em] text-[#0062A2] bg-blue-50 border border-blue-200 mb-2">
              <span>Competitions &amp; Showcases</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#0B256B]">
              Featured Events
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trackData.showcaseItems.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-blue-100 hover:border-[#0062A2] transition-colors duration-200 overflow-hidden"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-[#0B256B] group-hover:text-[#0062A2] transition-colors mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[13px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Events */}
        <div className="bg-white rounded-2xl border border-blue-100 p-6 sm:p-8 mb-14">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0B256B] mb-4">
            Related Events
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {trackData.relatedEvents.map((event, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 bg-blue-50 text-[#0062A2] border border-blue-100 rounded-full text-xs font-mono font-medium hover:bg-blue-100/70 transition-colors"
              >
                {event}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white rounded-3xl border border-white/20 p-8 sm:p-12 text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Build Essential Skills
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Develop hands-on expertise through practical learning experiences on
            October 27–28, 2026 at K.R. Mangalam University.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#FF6600] to-[#E51937] hover:from-[#FF5500] hover:to-[#CC112D] text-white font-bold h-11 px-8 rounded-xl transition-colors duration-200"
          >
            <Link href="/register/selection" className="inline-flex items-center gap-2">
              <span>Register Now</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
