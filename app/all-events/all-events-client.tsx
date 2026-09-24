"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Search, ChevronDown } from "lucide-react";
import Link from "next/link";
import { getAllEvents } from "@/lib/data/events";

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
              All{" "}
              <span className="italic font-serif font-normal text-[#00D2FF]">
                Events
              </span>
            </h1>

            {/* Lede Subtitle */}
            <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-blue-100">
              Explore the complete official schedule of technical hackathons,
              innovation challenges, academic showcases, and cultural
              performances curated for IDEAS 4.0 at K.R. Mangalam University.
            </p>

            {/* Quick Info Chips */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <div className="bg-transparent border border-white/20 rounded-[4px] px-3 py-1.5 text-xs font-mono text-white flex items-center gap-2 shadow-2xs">
                <Calendar size={13} className="text-[#00D2FF]" />
                <span>October 27–28, 2026</span>
              </div>
              <div className="bg-transparent border border-white/20 rounded-[4px] px-3 py-1.5 text-xs font-mono text-white flex items-center gap-2 shadow-2xs">
                <MapPin size={13} className="text-[#00D2FF]" />
                <span>Sohna Road, Gurugram, Delhi-NCR, Haryana</span>
              </div>
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
                  Every Single Event
                </h2>
                <p className="text-[14px] text-slate-600 mt-1">
                  Search by title, department, or keywords, or filter by
                  organizing school.
                </p>
              </div>
              <div className="font-mono text-xs text-slate-600 shrink-0">
                Showing{" "}
                <span className="font-bold text-[#0B256B]">
                  {filteredEvents.length}
                </span>{" "}
                of {allEvents.length} events
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
                  placeholder="Search all events by title, department, venue..."
                  aria-label="Search all events"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full h-11 rounded-[6px] border border-blue-200 bg-white pl-10 pr-4 text-[14px] text-slate-800 placeholder:text-slate-400 shadow-2xs focus:outline-none focus:border-[#0062A2] focus:ring-1 focus:ring-[#0062A2] transition-all"
                />
              </div>

              {/* Department Select Filter */}
              <div className="relative w-full sm:w-60">
                <select
                  value={filterDepartment}
                  onChange={(e) => setFilterDepartment(e.target.value)}
                  aria-label="Filter by department"
                  className="w-full h-11 rounded-[6px] border border-blue-200 bg-white pl-3.5 pr-9 text-[14px] font-medium text-slate-800 shadow-2xs focus:outline-none focus:border-[#0062A2] focus:ring-1 focus:ring-[#0062A2] cursor-pointer appearance-none transition-all"
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
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0062A2]"
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
                        <div className="flex items-center gap-1.5 truncate max-w-[70%] text-slate-600">
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
                No events found matching your criteria
              </p>
              <p className="mx-auto mt-2 max-w-md text-[14px] text-slate-600">
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
