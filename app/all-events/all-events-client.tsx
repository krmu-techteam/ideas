"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getAllEvents, EventItem } from "@/lib/data/events";

export function AllEventsClientPage() {
  const allEvents = useMemo(() => getAllEvents(), []);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("all");

  // Extract unique departments / categories for filtering
  const departments = useMemo(() => {
    const set = new Set<string>();
    for (const ev of allEvents) {
      if (ev.department) set.add(ev.department.trim());
    }
    return Array.from(set).sort();
  }, [allEvents]);

  const filteredEvents = useMemo(() => {
    return allEvents.filter((event) => {
      // Department filter
      if (
        filterDepartment !== "all" &&
        event.department?.toLowerCase() !== filterDepartment.toLowerCase()
      ) {
        return false;
      }

      // Search term
      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase();
      return (
        event.title.toLowerCase().includes(term) ||
        event.department?.toLowerCase().includes(term) ||
        event.category?.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term) ||
        event.location.toLowerCase().includes(term) ||
        event.sessions.some(
          (s) =>
            s.venue?.toLowerCase().includes(term) ||
            s.timeSlot?.toLowerCase().includes(term) ||
            s.participation?.toLowerCase().includes(term) ||
            s.coordinator?.toLowerCase().includes(term),
        )
      );
    });
  }, [allEvents, searchTerm, filterDepartment]);

  return (
    <div className="min-h-screen bg-[#fffefb] text-[#14100b] selection:bg-[#E11E45]/20 selection:text-[#E11E45]">
      {/* 1. Page Intro / Hero - Styled exactly after Spotlight / HackIndia Newsroom */}
      <section className="bg-[#f4ede1] pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(32px,5.2vw,58px)] font-bold leading-[1.08] tracking-[-0.025em] text-[#14100b] text-balance">
              All{" "}
              <span className="italic font-serif font-normal text-[#E11E45]">
                Events
              </span>
            </h1>

            {/* Lede Subtitle */}
            <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-[#6b6357]">
              Explore the complete official schedule of technical hackathons,
              innovation challenges, academic showcases, and cultural
              performances curated for IDEAS 4.0 at K.R. Mangalam University.
            </p>

            {/* Quick Info Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <div className="bg-white border border-[#e7ded1] rounded-[4px] px-3 py-1.5 text-xs font-mono text-[#14100b] flex items-center gap-2 shadow-2xs">
                <Calendar size={13} className="text-[#E11E45]" />
                <span>October 27–28, 2026</span>
              </div>
              <div className="bg-white border border-[#e7ded1] rounded-[4px] px-3 py-1.5 text-xs font-mono text-[#14100b] flex items-center gap-2 shadow-2xs">
                <MapPin size={13} className="text-[#E11E45]" />
                <span>Sohna Road, Gurugram, Delhi-NCR, Haryana</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="bg-[#fffefb] py-10 sm:py-14">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section Heading & Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e7ded1] pb-6">
              <div>
                <h2 className="font-serif text-[26px] sm:text-[30px] font-bold text-[#14100b] tracking-[-0.015em]">
                  Every Single Event
                </h2>
                <p className="text-[14px] text-[#6b6357] mt-1">
                  Search by title, department, or keywords, or filter by
                  organizing school.
                </p>
              </div>
              <div className="font-mono text-xs text-[#8c8273] shrink-0">
                Showing{" "}
                <span className="font-bold text-[#14100b]">
                  {filteredEvents.length}
                </span>{" "}
                of {allEvents.length} events
              </div>
            </div>

            {/* Search & Filter Controls (HackIndia News Bar Style) */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3.5">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c8273]"
                />
                <input
                  type="text"
                  placeholder="Search all events by title, department, venue..."
                  aria-label="Search all events"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-11 rounded-[6px] border border-[#e7ded1] bg-white pl-10 pr-4 text-[14px] text-[#14100b] placeholder:text-[#8c8273] shadow-2xs focus:outline-none focus:border-[#E11E45] focus:ring-1 focus:ring-[#E11E45] transition-all"
                />
              </div>

              {/* Department Select Filter */}
              <div className="relative w-full sm:w-60">
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  aria-label="Filter by department"
                  className="w-full h-11 rounded-[6px] border border-[#e7ded1] bg-white pl-3.5 pr-9 text-[14px] font-medium text-[#14100b] shadow-2xs focus:outline-none focus:border-[#E11E45] focus:ring-1 focus:ring-[#E11E45] cursor-pointer appearance-none transition-all"
                >
                  <option value="all">
                    All Departments ({departments.length})
                  </option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8273]"
                />
              </div>
            </div>
          </div>

          {/* 3. Cards Grid - Click directly navigates to /events/[slug] */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: Math.min(index * 0.03, 0.4),
                    duration: 0.35,
                  }}
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-[#e7ded1] bg-white transition-all duration-200 hover:border-[#E11E45] hover:shadow-lg cursor-pointer"
                  >
                    {/* 16:9 Aspect Ratio Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#ede6dc]">
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
                      <div className="font-mono flex flex-wrap items-center gap-x-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#E11E45]">
                        <span>{event.department || "IDEAS"}</span>
                        <span aria-hidden="true" className="text-[#E11E45]/50">
                          ·
                        </span>
                        <span className="truncate">
                          {event.category || "Competition"}
                        </span>
                        {event.teamType && (
                          <>
                            <span
                              aria-hidden="true"
                              className="text-[#E11E45]/50"
                            >
                              ·
                            </span>
                            <span>{event.teamType}</span>
                          </>
                        )}
                      </div>

                      {/* Title (HackIndia font-serif, hover to saffron) */}
                      <h3 className="font-serif mt-3 text-[18px] font-bold leading-snug tracking-[-0.015em] text-[#14100b] transition-colors line-clamp-2 group-hover:text-[#E11E45]">
                        {event.title}
                      </h3>

                      {/* Excerpt / Description */}
                      <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#6b6357] line-clamp-2 flex-1">
                        {event.description}
                      </p>

                      {/* Time Row */}
                      {event.time && (
                        <div className="mt-3 flex items-center gap-1.5 text-[11.5px] text-[#E11E45] font-mono">
                          <Clock size={12.5} className="shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                      )}

                      {/* Divider & Footer (Location + Details →) */}
                      <div className="mt-3 pt-3 border-t border-[#f0eae1] flex items-center justify-between text-[12px] text-[#78716c]">
                        <div className="flex items-center gap-1.5 truncate max-w-[70%]">
                          <MapPin
                            size={13}
                            className="text-[#E11E45] shrink-0"
                          />
                          <span className="truncate">
                            {event.location || "Campus"}
                          </span>
                        </div>
                        <span className="inline-flex items-center text-[12.5px] font-semibold text-[#14100b] group-hover:text-[#E11E45] transition-colors">
                          Details
                          <span className="ml-1 inline-block text-[#E11E45] transition-transform duration-200 group-hover:translate-x-1">
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
            <div className="rounded-[6px] border border-[#e7ded1] bg-white px-6 py-16 text-center">
              <p className="font-serif text-xl font-bold text-[#14100b]">
                No events found matching your criteria
              </p>
              <p className="mx-auto mt-2 max-w-md text-[14px] text-[#6b6357]">
                Try adjusting your search keywords or switching your department
                filter.
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterDepartment("all");
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
