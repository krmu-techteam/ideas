"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Search, ChevronDown } from "lucide-react";
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
    <div className="min-h-screen bg-[#F6FCFE] text-[#14100b] selection:bg-[#14100b]/20 selection:text-[#14100b]">
      {/* 1. Page Intro / Hero - Styled exactly after HackIndia Newsroom */}
      <section className="bg-gradient-to-r from-[#213C87] via-[#0062A2] to-[#00ACE9] pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(32px,5.2vw,58px)] font-bold leading-[1.08] tracking-[-0.025em] text-[#fff] text-balance">
              Spotlight{" "}
              <span className="italic font-serif font-normal text-[#fff]">
                Activities
              </span>
            </h1>

            {/* Lede Subtitle */}
            <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-[#fff]">
              The marquee challenges, hands-on competitions, and
              interdisciplinary innovation arenas curated for IDEAS 4.0 at K.R.
              Mangalam University.
            </p>

            {/* Quick Info Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <div className="bg-white border border-[#e7ded1] rounded-[4px] px-3 py-1.5 text-xs font-mono text-[#14100b] flex items-center gap-2 shadow-2xs">
                <Calendar size={13} className="text-[#14100b]" />
                <span>October 27–28, 2026</span>
              </div>
              <div className="bg-white border border-[#e7ded1] rounded-[4px] px-3 py-1.5 text-xs font-mono text-[#14100b] flex items-center gap-2 shadow-2xs">
                <MapPin size={13} className="text-[#14100b]" />
                <span>Sohna Road, Gurugram, Delhi-NCR, Haryana</span>
              </div>
            </div>
            <button className="bg-transparent   bg-gradient-to-r from-[#B8AC14]   to-[#C50D22] text-[#090702] p-[2px] rounded-full   mt-6 font-poppins font-medium">
              <div className="bg-[#034894] px-5 py-3 rounded-full text-white">
                <a href="/rulebook.pdf" target="_blank">
                  Download Rule Book
                </a>
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="bg-[#F6FCFE] py-10 sm:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Heading & Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-800 pb-6">
              <div>
                <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#14100b] tracking-[-0.015em]">
                  Every Activity
                </h2>
                <p className="text-[14px] text-gray-800 mt-1">
                  Search by headline, department, or keywords, or filter by
                  category.
                </p>
              </div>
              <div className="font-mono text-xs text-gray-800 shrink-0">
                Showing{" "}
                <span className="font-bold text-[#14100b]">
                  {filteredEvents.length}
                </span>{" "}
                of {masterEvents.length} activities
              </div>
            </div>

            {/* Search & Filter Controls (HackIndia News Bar Style) */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3.5">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-800"
                />
                <input
                  type="text"
                  placeholder="Search spotlight activities..."
                  aria-label="Search spotlight activities"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-11 rounded-[6px] border border-gray-800 bg-white pl-10 pr-4 text-[14px] text-[#14100b] placeholder:text-gray-800 shadow-2xs focus:outline-none focus:border-[#14100b] focus:ring-1 focus:ring-[#14100b] transition-all"
                />
              </div>

              {/* Category Select Filter */}
              <div className="relative w-full sm:w-56">
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  aria-label="Filter by category"
                  className="w-full h-11 rounded-[6px] border border-gray-800 bg-white pl-3.5 pr-9 text-[14px] font-medium text-[#14100b] shadow-2xs focus:outline-none focus:border-[#14100b] focus:ring-1 focus:ring-[#14100b] cursor-pointer appearance-none transition-all"
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
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-800"
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
                    className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-gray-800 bg-white transition-all duration-200 hover:border-[#14100b] hover:shadow-lg cursor-pointer"
                  >
                    {/* 16:9 Aspect Ratio Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-800">
                      <img
                        src={event.image || "/placeholder.svg"}
                        alt={event.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Top-Right Badge: Date / Day */}
                      <div className="absolute top-2.5 right-2.5 bg-[#14100b]/80 backdrop-blur-xs text-white text-[10.5px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[3px] border border-white/10 shadow-xs">
                        {event.date?.includes("24")
                          ? "Oct 24–28"
                          : event.day === "both" ||
                              event.date?.includes("–") ||
                              event.date?.includes("-")
                            ? "Oct 27–28"
                            : event.day === "day2"
                              ? "Oct 28"
                              : "Oct 27"}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="flex flex-1 flex-col p-5">
                      {/* Kicker Meta: Department · Category · Format */}
                      <div className="font-mono flex flex-wrap items-center gap-x-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#14100b]">
                        <span>{event.department || "IDEAS"}</span>
                        <span aria-hidden="true" className="text-[#14100b]/50">
                          ·
                        </span>
                        <span className="truncate">
                          {event.category || "Competition"}
                        </span>
                        {event.teamType && (
                          <>
                            <span
                              aria-hidden="true"
                              className="text-[#14100b]/50"
                            >
                              ·
                            </span>
                            <span>{event.teamType}</span>
                          </>
                        )}
                      </div>

                      {/* Title (HackIndia font-serif, hover to saffron) */}
                      <h3 className="font-serif mt-3 text-[18px] font-bold leading-snug tracking-[-0.015em] text-[#14100b] transition-colors line-clamp-2 group-hover:text-[#14100b]">
                        {event.title}
                      </h3>

                      {/* Excerpt / Description */}
                      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-gray-800 line-clamp-2 flex-1">
                        {event.description}
                      </p>

                      {/* Time Row */}
                      {event.time && (
                        <div className="mt-3 flex items-center gap-1.5 text-[11.5px] text-[#14100b] font-mono">
                          <Clock size={12.5} className="shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                      )}

                      {/* Divider & Footer (Location + Details →) */}
                      <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between text-[12px] text-[#78716c]">
                        <div className="flex items-center gap-1.5 truncate max-w-[70%]">
                          <MapPin size={13} className="shrink-0" />
                          <span className="truncate">
                            {event.location || "Campus"}
                          </span>
                        </div>
                        <span className="inline-flex items-center text-[12.5px] font-semibold text-[#14100b] group-hover:text-[#14100b] transition-colors">
                          Details
                          <span className="ml-1 inline-block text-[#14100b] transition-transform duration-200 group-hover:translate-x-1">
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
            /* Empty State (HackIndia EmptyState design) */
            <div className="rounded-[6px] border border-gray-800 bg-white px-6 py-16 text-center">
              <p className="font-serif text-xl font-bold text-[#14100b]">
                No spotlight activities found
              </p>
              <p className="mx-auto mt-2 max-w-md text-[14px] text-gray-800">
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
                  className="font-mono text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-[4px] border border-[#14100b] text-[#14100b] hover:bg-[#14100b] hover:text-white transition-colors"
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
