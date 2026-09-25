"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  ChevronDown,
  FileText,
} from "lucide-react";
import Link from "next/link";
import {
  getSpotlightEvents,
  getSpotlightCategories,
  searchSpotlightEvents,
  EventItem,
} from "@/lib/data/events";

// Pre-computed categories and spotlight events
const categories = getSpotlightCategories();
const masterEvents = getSpotlightEvents();

export default function SpotlightPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] =
    useState<EventItem[]>(masterEvents);

  useEffect(() => {
    const filtered = searchSpotlightEvents(searchTerm, categoryFilter);
    setFilteredEvents(filtered);
  }, [searchTerm, categoryFilter]);

  return (
    <div className="min-h-screen bg-[#F4F9FD] text-[#0B256B] selection:bg-[#00ACE9]/30 selection:text-[#081B4B]">
      {/* 1. Page Intro / Hero - Brochure Color Combination (Deep Navy #081B4B -> Royal Blue #00529B -> Electric Sky #00ACE9) */}
      <section className="bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] pt-28 pb-12 sm:pt-36 sm:pb-16 text-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(32px,5.2vw,58px)] font-bold leading-[1.08] tracking-[-0.025em] text-white text-balance">
              Spotlight{" "}
              <span className="italic font-serif font-normal text-[#00D2FF]">
                Activities
              </span>
            </h1>

            {/* Lede Subtitle */}
            <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-blue-100">
              The marquee challenges, hands-on competitions, and
              interdisciplinary innovation arenas curated for IDEAS 4.0 at K.R.
              Mangalam University.
            </p>

            {/* Quick Info Chips & Rule Book Button - All 3 in 1 line with transparent background */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="bg-transparent border border-white/20 rounded-full px-3 py-1.5 text-xs font-mono text-white flex items-center gap-2">
                <Calendar size={13} className="text-[#00D2FF]" />
                <span>October 27–28, 2026</span>
              </div>
              <div className="bg-transparent border border-white/20 rounded-full px-3 py-1.5 text-xs font-mono text-white flex items-center gap-2">
                <MapPin size={13} className="text-[#00D2FF]" />
                <span>Sohna Road, Gurugram, Delhi-NCR, Haryana</span>
              </div>
            </div>

            <div className="mt-5">
              <a
                href="/rule-book.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Official Rule Book (PDF)"
                className="relative inline-flex items-center justify-center rounded-full px-4 sm:px-5 py-3 text-xs font-mono font-semibold uppercase tracking-wide hover:bg-white/10 transition-colors duration-300 cursor-pointer"
              >
                {/* Gradient Border with Transparent Center */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full p-[2px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, #FFD000 0%, #FF6600 50%, #E51937 100%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <span className="relative z-10 font-poppins flex items-center gap-1.5">
                  <span className="text-[#FFD000]">Download</span>
                  <span className="text-[#fff]">Rule Book</span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="bg-[#F4F9FD] py-10 sm:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Heading & Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-blue-100 pb-6">
              <div>
                <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#0B256B] tracking-[-0.015em]">
                  Every Activity
                </h2>
                <p className="text-[14px] text-slate-600 mt-1">
                  Search by headline, department, or keywords, or filter by
                  category.
                </p>
              </div>
              <div className="font-mono text-xs text-slate-600 shrink-0">
                Showing{" "}
                <span className="font-bold text-[#0B256B]">
                  {filteredEvents.length}
                </span>{" "}
                of {masterEvents.length} activities
              </div>
            </div>

            {/* Search & Filter Controls */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3.5">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#0062A2]"
                />
                <input
                  type="text"
                  placeholder="Search spotlight activities..."
                  aria-label="Search spotlight activities"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-11 rounded-[6px] border border-blue-200 bg-white pl-10 pr-4 text-[14px] text-slate-800 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-[#0062A2] focus:ring-1 focus:ring-[#0062A2] transition-all"
                />
              </div>

              {/* Category Select Filter */}
              <div className="relative w-full sm:w-56">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  aria-label="Filter by category"
                  className="w-full h-11 rounded-[6px] border border-blue-200 bg-white pl-3.5 pr-9 text-[14px] font-medium text-slate-800 shadow-2xs focus:outline-none focus:border-[#0062A2] focus:ring-1 focus:ring-[#0062A2] cursor-pointer appearance-none transition-all"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat.length <= 4
                        ? cat.toUpperCase()
                        : cat
                            .split(/[-_\s]/)
                            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                            .join(" ")}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0062A2]"
                />
              </div>
            </div>
          </div>

          {/* 3. Cards Grid - Click directly navigates to /spotlight/[slug] */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                >
                  <Link
                    href={`/spotlight/${event.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[8px] border border-blue-100 bg-white transition-all duration-200 hover:border-[#0062A2] hover:shadow-lg cursor-pointer"
                  >
                    {/* 16:9 Aspect Ratio Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Top-Right Badge: Date / Day */}
                      <div className="absolute top-2.5 right-2.5 bg-[#081B4B]/85 backdrop-blur-xs text-[#00D2FF] text-[10.5px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[3px] border border-white/10 shadow-xs">
                        {event.date?.includes("24")
                          ? "Oct 24–28"
                          : event.day === "both" ||
                              (event.date?.includes("27") &&
                                event.date?.includes("28")) ||
                              event.date?.includes("–")
                            ? "Oct 27–28"
                            : event.day === "day2" || event.date?.includes("28")
                              ? "Oct 28"
                              : "Oct 27"}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* Kicker Meta: Department · Category · Format */}
                      <div className="font-mono flex flex-wrap items-center gap-x-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#0062A2]">
                        <span>{event.department || "IDEAS"}</span>
                        <span aria-hidden="true" className="text-[#0062A2]/40">
                          ·
                        </span>
                        <span className="truncate">
                          {event.category || "Competition"}
                        </span>
                        {event.teamType && (
                          <>
                            <span
                              aria-hidden="true"
                              className="text-[#0062A2]/40"
                            >
                              ·
                            </span>
                            <span>{event.teamType}</span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif mt-3 text-[18px] font-bold leading-snug tracking-[-0.015em] text-[#0B256B] transition-colors line-clamp-2 group-hover:text-[#0062A2]">
                        {event.title}
                      </h3>

                      {/* Excerpt / Description */}
                      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-slate-600 line-clamp-2 flex-1">
                        {event.description}
                      </p>

                      {/* Time Row */}
                      {event.time && (
                        <div className="mt-3 flex items-center gap-1.5 text-[11.5px] text-[#0062A2] font-mono">
                          <Clock size={12.5} className="shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                      )}

                      {/* Divider & Footer (Location + Details →) */}
                      <div className="mt-3 pt-3 border-t border-blue-50 flex items-center justify-between text-[12px] text-slate-500">
                        <div className="flex items-center gap-1.5 truncate max-w-[70%]">
                          <MapPin
                            size={13}
                            className="shrink-0 text-[#0062A2]"
                          />
                          <span className="truncate">
                            {event.location || "Campus"}
                          </span>
                        </div>
                        <span className="inline-flex items-center text-[12.5px] font-semibold text-[#0062A2] group-hover:text-[#0B256B] transition-colors">
                          Details
                          <span className="ml-1 inline-block text-[#0062A2] transition-transform duration-200 group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="rounded-[8px] border border-blue-100 bg-white px-6 py-16 text-center shadow-xs">
              <p className="font-serif text-xl font-bold text-[#0B256B]">
                No spotlight activities found
              </p>
              <p className="mx-auto mt-2 max-w-md text-[14px] text-slate-600">
                Try adjusting your search keywords or switching your category
                filter.
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                  }}
                  className="font-mono text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-[4px] border border-[#0B256B] text-[#0B256B] hover:bg-[#0B256B] hover:text-white transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
