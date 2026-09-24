"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <div className="min-h-screen bg-[#F4F9FD] text-[#0B256B] selection:bg-[#00ACE9]/30 selection:text-[#081B4B]">
      {/* Hero Header - Brochure Color Gradient */}
      <section className="bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white pt-28 pb-12 sm:pt-36 sm:pb-16 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          {/* Top Navigation / Breadcrumb */}
          <div className="mb-6">
            <Link
              href={backUrl}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-white/80 hover:text-white transition-colors group"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />
              <span>{backLabel}</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-4">
            {/* Eyebrow & Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[4px] border border-white/20 bg-white/10 text-[#00D2FF]">
                <Tag size={12} className="text-[#00D2FF]" />
                <span>{event.department || "IDEAS 4.0"}</span>
              </span>
              <span className="inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[4px] border border-white/20 bg-white/10 text-white">
                <span>{event.category || "FLAGSHIP"}</span>
              </span>
              {event.teamType && (
                <span className="inline-flex items-center font-mono text-[11px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-[4px] border border-white/20 bg-white/10 text-white">
                  <span>{event.teamType}</span>
                  {event.teamSize ? ` (${event.teamSize})` : ""}
                </span>
              )}
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-[clamp(28px,4.5vw,50px)] font-bold leading-[1.08] tracking-[-0.025em] text-white max-w-4xl text-balance">
              {event.title}
            </h1>

            {/* Short Lede */}
            <p className="mt-4 text-[16px] sm:text-[18px] leading-[1.65] text-blue-100 max-w-3xl">
              {event.description}
            </p>

            {/* Meta Line: Date, Venue & Share Button */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 font-mono text-xs uppercase tracking-wider text-white">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#00D2FF]" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#00D2FF]" />
                  <span>
                    {event.time || primarySession?.timeSlot || "Multiple Slots"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#00D2FF]" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Share Button */}
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold px-3.5 py-2 rounded-[4px] border border-white/25 bg-white/10 hover:bg-white/20 text-white transition-colors shadow-2xs cursor-pointer backdrop-blur-sm"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-[#00D2FF]" />
                    <span className="text-[#00D2FF]">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 size={14} className="text-white" />
                    <span>Share Event</span>
                  </>
                )}
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
        {/* Hero Banner Image */}
        <div className="mb-10 overflow-hidden rounded-xl border border-blue-100 bg-slate-100 aspect-[16/9] sm:aspect-[21/9] w-full relative shadow-sm">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute top-3 right-3 bg-[#081B4B]/85 backdrop-blur-xs text-[#00D2FF] text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-[4px] border border-white/10 shadow-xs">
            {event.date}
          </div>
        </div>

        {/* 12-Column Grid (Main Content 8 cols + Sticky Action Sidebar 4 cols) */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. About / Description */}
            <section className="rounded-xl border border-blue-100 bg-white p-6 sm:p-7 shadow-sm">
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0062A2] mb-3 flex items-center gap-2">
                <Sparkles size={13} />
                <span>About This Activity</span>
              </div>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-slate-700 whitespace-pre-wrap font-sans">
                {event.description}
              </p>
            </section>

            {/* 2. Guidelines & Instructions */}
            {event.guidelines && event.guidelines !== event.description && (
              <section className="rounded-xl border border-blue-100 bg-white p-6 sm:p-7 shadow-sm">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0062A2] mb-3">
                  Guidelines &amp; Event Rules
                </div>
                <div className="text-[14px] sm:text-[15px] leading-[1.7] text-slate-700 whitespace-pre-wrap font-sans">
                  {event.guidelines}
                </div>
              </section>
            )}

            {/* 3. Evaluation Pattern */}
            {event.evaluation && (
              <section className="rounded-xl border border-blue-100 bg-white p-6 sm:p-7 shadow-sm">
                <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0062A2] mb-3">
                  Evaluation &amp; Judging Criteria
                </div>
                <p className="text-[14px] sm:text-[15px] leading-[1.7] text-slate-700">
                  {event.evaluation}
                </p>
              </section>
            )}

            {/* 4. Scheduled Slots */}
            {event.sessions && event.sessions.length > 0 && (
              <section className="rounded-xl border border-blue-100 bg-white overflow-hidden shadow-sm">
                <div className="px-6 py-4 bg-[#081B4B] text-white flex items-center justify-between">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em]">
                    Scheduled Sessions
                  </div>
                  <span className="font-mono text-xs text-[#00D2FF]">
                    {event.date}
                  </span>
                </div>
                <div className="divide-y divide-blue-50">
                  {event.sessions.map((s, idx) => (
                    <div
                      key={idx}
                      className="p-5 hover:bg-blue-50/40 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="font-bold text-[15px] text-[#0B256B]">
                          {s.participation || "Open to participants"}
                        </span>
                        <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-[4px] bg-blue-50 text-[#0062A2] border border-blue-100">
                          {s.timeSlot || "TBA"}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 mt-3">
                        {s.venue && (
                          <div className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-[#0062A2]" />
                            <span>Venue: {s.venue}</span>
                          </div>
                        )}
                        {s.capacity && (
                          <div className="flex items-center gap-1.5">
                            <Users size={13} className="text-[#0062A2]" />
                            <span>Capacity: {s.capacity}</span>
                          </div>
                        )}
                        {s.coordinator && (
                          <div className="flex items-center gap-1.5 sm:col-span-2">
                            <UserCheck size={13} className="text-[#0062A2]" />
                            <span>Faculty: {s.coordinator}</span>
                          </div>
                        )}
                        {s.contacts && (
                          <div className="flex items-center gap-1.5 sm:col-span-2">
                            <Phone size={13} className="text-[#0062A2]" />
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
            <div className="sticky top-28 rounded-xl bg-white border border-blue-100 p-6 shadow-sm space-y-6">
              <div>
                <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-[#0062A2] mb-1">
                  EVENT SUMMARY
                </div>
                <h3 className="font-serif text-[20px] font-bold text-[#0B256B]">
                  {event.title}
                </h3>
              </div>

              {/* Fast Facts */}
              <div className="space-y-3 pt-2 border-t border-blue-50 text-xs sm:text-sm">
                <div className="flex items-start gap-3 py-1">
                  <Calendar
                    size={16}
                    className="text-[#0062A2] shrink-0 mt-0.5"
                  />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-slate-500">
                      Date
                    </div>
                    <div className="font-semibold text-[#0B256B]">
                      {event.date}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1">
                  <Clock size={16} className="text-[#0062A2] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-slate-500">
                      Time
                    </div>
                    <div className="font-semibold text-[#0B256B]">
                      {event.time ||
                        primarySession?.timeSlot ||
                        "Multiple Slots"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1">
                  <MapPin size={16} className="text-[#0062A2] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-slate-500">
                      Venue
                    </div>
                    <div className="font-semibold text-[#0B256B]">
                      {event.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-1">
                  <Users size={16} className="text-[#0062A2] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-wider text-slate-500">
                      Participation
                    </div>
                    <div className="font-semibold text-[#0B256B]">
                      {event.teamType || "Individual"}
                      {event.teamSize ? ` (${event.teamSize})` : ""}
                    </div>
                  </div>
                </div>

                {primarySession?.coordinator && (
                  <div className="flex items-start gap-3 py-1">
                    <UserCheck
                      size={16}
                      className="text-[#0062A2] shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-[10.5px] font-mono uppercase tracking-wider text-slate-500">
                        Faculty Coordinator
                      </div>
                      <div className="font-semibold text-[#0B256B]">
                        {primarySession.coordinator}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Big CTA Button */}
              <div className="pt-4 border-t border-blue-50">
                <Link
                  href="/register/selection"
                  className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B256B] to-[#0062A2] hover:from-[#081B4B] hover:to-[#004B87] text-white font-serif text-xs uppercase tracking-wider font-bold transition-all shadow-md shadow-blue-900/15"
                >
                  <span>Register for Event</span>
                  <span>→</span>
                </Link>
                <p className="mt-2 text-center text-[11px] text-slate-500 font-mono">
                  IDEAS 4.0 · K.R. Mangalam University
                </p>
              </div>

              {/* Return to List */}
              <div className="pt-2 text-center">
                <Link
                  href={backUrl}
                  className="font-mono text-xs text-[#0062A2] hover:underline transition-colors inline-flex items-center gap-1.5"
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
