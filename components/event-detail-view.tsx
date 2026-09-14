"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  Share2,
  Check,
  Tag,
  Phone,
  UserCheck,
  Sparkles,
} from "lucide-react";
import { EventItem } from "@/lib/data/events";

interface EventDetailViewProps {
  event: EventItem | undefined;
  backUrl: string;
  backLabel: string;
}

export default function EventDetailView({
  event,
  backUrl,
  backLabel,
}: EventDetailViewProps) {
  const [copied, setCopied] = useState(false);

  if (!event) {
    notFound();
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const primarySession = event.sessions[0];

  return (
    <div className="min-h-screen bg-[#fffefb] text-[#14100b] selection:bg-[#ea580c]/20 selection:text-[#ea580c] pt-24 pb-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Navigation / Breadcrumb */}
        <div className="mb-6 pt-4">
          <Link
            href={backUrl}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-[#8c8273] hover:text-[#ea580c] transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            <span>{backLabel}</span>
          </Link>
        </div>

        {/* Article Header (HackIndia Style) */}
        <header className="mb-8">
          {/* Eyebrow & Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[3px] border border-[#e7ded1] bg-[#f4ede1] text-[#ea580c]">
              <Tag size={12} className="text-[#ea580c]" />
              <span>{event.department || "IDEAS 4.0"}</span>
            </span>
            <span className="inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[3px] border border-[#e7ded1] bg-white text-[#14100b]">
              <span>{event.category || "FLAGSHIP"}</span>
            </span>
            {event.teamType && (
              <span className="inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[3px] border border-[#e7ded1] bg-white text-[#6b6357]">
                <span>{event.teamType}</span>
                {event.teamSize ? ` (${event.teamSize})` : ""}
              </span>
            )}
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-[clamp(28px,4.5vw,50px)] font-bold leading-[1.08] tracking-[-0.025em] text-[#14100b] max-w-4xl text-balance">
            {event.title}
          </h1>

          {/* Short Lede */}
          <p className="mt-4 max-w-3xl text-[16px] sm:text-[18px] leading-[1.65] text-[#6b6357]">
            {event.description}
          </p>

          {/* Meta Line: Date, Venue & Share Button */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#e7ded1] pb-6">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 font-mono text-xs uppercase tracking-wider text-[#6b6357]">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#ea580c]" />
                <span className="font-semibold text-[#14100b]">{event.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#ea580c]" />
                <span>{event.time || primarySession?.timeSlot || "Multiple Slots"}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#ea580c]" />
                <span>{event.location}</span>
              </div>
            </div>

            {/* Share Button */}
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold px-3.5 py-2 rounded-[4px] border border-[#e7ded1] bg-white hover:bg-[#f4ede1] text-[#14100b] transition-colors shadow-2xs cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-600" />
                  <span className="text-green-700">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} className="text-[#8c8273]" />
                  <span>Share Event</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Hero Banner Image */}
        <div className="mb-10 overflow-hidden rounded-[8px] border border-[#e7ded1] bg-[#ede6dc] aspect-[16/9] sm:aspect-[21/9] w-full relative shadow-xs">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute top-3 right-3 bg-[#14100b]/80 backdrop-blur-xs text-white text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-[3px] border border-white/10">
            {event.date}
          </div>
        </div>

        {/* 12-Column Grid (Main Content 8 cols + Sticky Action Sidebar 4 cols) */}
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. About / Description */}
            <section className="rounded-[6px] border border-[#e7ded1] bg-white p-6 shadow-xs">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ea580c] mb-3 flex items-center gap-2">
                <Sparkles size={13} />
                <span>About This Activity</span>
              </div>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#14100b] whitespace-pre-wrap font-sans">
                {event.description}
              </p>
            </section>

            {/* 2. Guidelines & Instructions */}
            {event.guidelines && event.guidelines !== event.description && (
              <section className="rounded-[6px] border border-[#e7ded1] bg-white p-6 shadow-xs">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ea580c] mb-3">
                  Guidelines &amp; Event Rules
                </div>
                <div className="text-[14px] sm:text-[15px] leading-[1.7] text-[#14100b] whitespace-pre-wrap font-sans">
                  {event.guidelines}
                </div>
              </section>
            )}

            {/* 3. Evaluation Pattern */}
            {event.evaluation && (
              <section className="rounded-[6px] border border-[#e7ded1] bg-white p-6 shadow-xs">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ea580c] mb-3">
                  Evaluation &amp; Judging Criteria
                </div>
                <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#14100b]">
                  {event.evaluation}
                </p>
              </section>
            )}

            {/* 4. Scheduled Slots */}
            {event.sessions && event.sessions.length > 0 && (
              <section className="rounded-[6px] border border-[#e7ded1] bg-white overflow-hidden shadow-xs">
                <div className="px-6 py-4 bg-[#fbf8f2] border-b border-[#e7ded1] flex items-center justify-between">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ea580c]">
                    Scheduled Sessions ({event.sessions.length})
                  </div>
                  <span className="font-mono text-xs text-[#8c8273]">
                    {event.date}
                  </span>
                </div>
                <div className="divide-y divide-[#e7ded1]">
                  {event.sessions.map((s, idx) => (
                    <div key={idx} className="p-5 hover:bg-[#fbf8f2]/60 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-[15px] text-[#14100b]">
                          Slot {idx + 1}: {s.participation || "Open to participants"}
                        </span>
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-[3px] bg-[#ea580c]/10 text-[#ea580c]">
                          {s.timeSlot || "TBA"}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6b6357] mt-3">
                        {s.venue && (
                          <div className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-[#ea580c]" />
                            <span>Venue: {s.venue}</span>
                          </div>
                        )}
                        {s.capacity && (
                          <div className="flex items-center gap-1.5">
                            <Users size={13} className="text-[#ea580c]" />
                            <span>Capacity: {s.capacity}</span>
                          </div>
                        )}
                        {s.coordinator && (
                          <div className="flex items-center gap-1.5 sm:col-span-2">
                            <UserCheck size={13} className="text-[#ea580c]" />
                            <span>Faculty: {s.coordinator}</span>
                          </div>
                        )}
                        {s.contacts && (
                          <div className="flex items-center gap-1.5 sm:col-span-2">
                            <Phone size={13} className="text-[#ea580c]" />
                            <span>Coordinators: {s.contacts}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sticky Sidebar (4 cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-[8px] border border-[#e7ded1] bg-white p-6 shadow-sm space-y-6">
              <div>
                <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#ea580c] mb-1">
                  EVENT SUMMARY
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#14100b]">
                  {event.title}
                </h3>
              </div>

              {/* Fast Facts */}
              <div className="space-y-3 pt-2 border-t border-[#f0eae1] text-xs sm:text-sm">
                <div className="flex items-start gap-3 py-1">
                  <Calendar size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8c8273]">Date</div>
                    <div className="font-semibold text-[#14100b]">{event.date}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1">
                  <Clock size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8c8273]">Time</div>
                    <div className="font-semibold text-[#14100b]">{event.time || primarySession?.timeSlot || "Multiple Slots"}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1">
                  <MapPin size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8c8273]">Venue</div>
                    <div className="font-semibold text-[#14100b]">{event.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1">
                  <Users size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8c8273]">Participation</div>
                    <div className="font-semibold text-[#14100b]">
                      {event.teamType || "Individual"}
                      {event.teamSize ? ` (${event.teamSize})` : ""}
                    </div>
                  </div>
                </div>

                {primarySession?.coordinator && (
                  <div className="flex items-start gap-3 py-1">
                    <UserCheck size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10.5px] font-mono uppercase tracking-wider text-[#8c8273]">Faculty Coordinator</div>
                      <div className="font-semibold text-[#14100b]">{primarySession.coordinator}</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Big CTA Button */}
              <div className="pt-4 border-t border-[#f0eae1]">
                <Link
                  href="/register/selection"
                  className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-[4px] bg-[#ea580c] hover:bg-[#c2410c] text-white font-mono text-xs uppercase tracking-wider font-bold transition-colors shadow-xs"
                >
                  <span>Register for Event</span>
                  <span>→</span>
                </Link>
                <p className="mt-2 text-center text-[11px] text-[#8c8273]">
                  IDEAS 4.0 · K.R. Mangalam University
                </p>
              </div>

              {/* Return to List */}
              <div className="pt-2 text-center">
                <Link
                  href={backUrl}
                  className="font-mono text-xs text-[#6b6357] hover:text-[#ea580c] transition-colors inline-flex items-center gap-1.5"
                >
                  <ArrowLeft size={13} />
                  <span>{backLabel}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
