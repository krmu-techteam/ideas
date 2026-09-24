"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import {
  getAllEvents,
  getSpotlightEvents,
  getCulturalEvents,
  EventItem,
} from "@/lib/data/events";

type FilterTab = "all" | "spotlight" | "cultural" | "day1" | "day2";

export default function UpcomingEvents() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const allEvents = useMemo(() => getAllEvents(), []);
  const spotlightEvents = useMemo(() => getSpotlightEvents(), []);
  const culturalEvents = useMemo(() => getCulturalEvents(), []);

  // Filter events based on active tab
  const displayEvents = useMemo(() => {
    switch (activeTab) {
      case "spotlight":
        return spotlightEvents;
      case "cultural":
        return culturalEvents;
      case "day1":
        return allEvents.filter(
          (e) =>
            e.day === "day1" ||
            e.day === "both" ||
            e.date?.toLowerCase().includes("27"),
        );
      case "day2":
        return allEvents.filter(
          (e) =>
            e.day === "day2" ||
            e.day === "both" ||
            e.date?.toLowerCase().includes("28"),
        );
      case "all":
      default:
        // Prioritize spotlight events followed by cultural & key competitions
        return allEvents.slice(0, 9);
    }
  }, [activeTab, allEvents, spotlightEvents, culturalEvents]);

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    {
      id: "all",
      label: "Featured Activities",
      count: Math.min(allEvents.length, 9),
    },
    {
      id: "spotlight",
      label: "Spotlight Arena",
      count: spotlightEvents.length,
    },
    { id: "cultural", label: "Cultural & Stage", count: culturalEvents.length },
    {
      id: "day1",
      label: "Day 1 (Oct 27)",
      count: allEvents.filter(
        (e) =>
          e.day === "day1" ||
          e.day === "both" ||
          e.date?.toLowerCase().includes("27"),
      ).length,
    },
    {
      id: "day2",
      label: "Day 2 (Oct 28)",
      count: allEvents.filter(
        (e) =>
          e.day === "day2" ||
          e.day === "both" ||
          e.date?.toLowerCase().includes("28"),
      ).length,
    },
  ];

  return (
    <section
      id="upcoming-events"
      className="py-16 sm:py-20 bg-[#F4F9FD] relative overflow-hidden"
      suppressHydrationWarning
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-blue-100 pb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[clamp(28px,4.5vw,46px)] font-bold tracking-[-0.02em] text-[#0B256B] leading-[1.12]">
              Upcoming Competitions &amp;{" "}
              <span className="italic font-serif font-normal text-[#00ACE9]">
                Activities
              </span>
            </h2>

            <p className="mt-3 text-[15px] font-sans sm:text-[16px] leading-relaxed text-slate-600">
              Explore marquee hackathons, robotics challenges, hands-on arenas,
              and stage showcases scheduled for October 27–28, 2026 at K.R.
              Mangalam University.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/all-events"
              className="inline-flex items-center gap-2 text-[13.5px] font-mono font-semibold uppercase tracking-wider text-[#0062A2] hover:underline transition-colors"
            >
              <span>View All Events</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="mt-6 mb-8 flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`h-9 px-3.5 sm:px-4 rounded-lg text-[13px] font-medium transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#0B256B] to-[#0062A2] text-white"
                    : "bg-white border border-blue-200 text-[#0B256B] hover:bg-blue-50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded-[3px] ${
                    isActive
                      ? "bg-white/20 text-[#00D2FF]"
                      : "bg-blue-50 text-[#0062A2]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] sm:gap-6">
          {displayEvents.map((event, index) => (
            <motion.div
              key={event.id || event.slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: Math.min(index * 0.04, 0.3),
                duration: 0.35,
              }}
            >
              <Link
                href={`/events/${event.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-blue-100 bg-white transition-colors duration-200 hover:border-[#0062A2] cursor-pointer"
              >
                {/* 16:9 Aspect Ratio Image with Zoom on Hover */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top-Right Badge: Date / Day */}
                  <div className="absolute top-2.5 right-2.5 bg-[#081B4B]/85 backdrop-blur-xs text-[#00D2FF] text-[10.5px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-[3px] border border-white/10">
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
                    <span>{event.department || "IDEAS 4.0"}</span>
                    <span aria-hidden="true" className="text-[#0062A2]/40">
                      ·
                    </span>
                    <span className="truncate">
                      {event.category || "Competition"}
                    </span>
                    {event.teamType && (
                      <>
                        <span aria-hidden="true" className="text-[#0062A2]/40">
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
                      <MapPin size={13} className="text-[#0062A2] shrink-0" />
                      <span className="truncate">
                        {event.location ||
                          event.sessions?.[0]?.venue ||
                          "KRMU Campus"}
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

        {/* Bottom CTA Row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="/all-events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B256B] to-[#0062A2] hover:from-[#081B4B] hover:to-[#004B87] px-7 py-3 text-[14px] font-semibold text-white transition-all"
          >
            <span>Explore All Events</span>
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/spotlight"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-6 py-3 text-[14px] font-semibold text-[#0B256B] hover:bg-blue-50 transition-colors"
          >
            <span>Flagship Spotlight Activities</span>
            <ArrowRight size={16} className="text-[#0062A2]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
