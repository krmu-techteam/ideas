// Replaces duplicate modal code across event pages

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import type { UnifiedEventItem } from "@/lib/data/unified-events"

interface EventDetailsModalProps {
  event: UnifiedEventItem
  isOpen: boolean
  onClose: () => void
}

export default function EventDetailsModal({ event, isOpen, onClose }: EventDetailsModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 210, damping: 24 }}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between px-5 py-3 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-bold text-deepBlue-dark pr-6 leading-snug">{event.title}</h2>
          <button
            onClick={onClose}
            aria-label="Close details"
            className="group p-2 rounded-md hover:bg-primary/10 text-primary transition-colors flex-shrink-0"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6">
          {/* Event Image */}
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          </div>

          {/* Event Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <Calendar size={16} className="mr-2 text-primary" />
              {event.date}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={16} className="mr-2 text-primary" />
              {event.time || "Multiple Slots"}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2 text-primary" />
              {event.location}
            </div>
            {event.teamType && (
              <div className="text-gray-600">
                <span className="font-medium">Format:</span> {event.teamType}
                {event.teamSize ? ` (Size: ${event.teamSize})` : ""}
              </div>
            )}
            {event.prize && (
              <div className="text-gray-600">
                <span className="font-medium">Prize:</span> {event.prize}
              </div>
            )}
            {event.category && (
              <div className="text-gray-600">
                <span className="font-medium">Category:</span> {event.category}
              </div>
            )}
          </div>

          {/* Description */}
          <section className="bg-white rounded-lg border border-gray-200 p-4">
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Description</h3>
            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{event.description}</p>
          </section>

          {/* Evaluation */}
          {event.evaluation && (
            <section className="bg-gray-50 rounded-lg border border-gray-200 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Evaluation Criteria</h3>
              <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">{event.evaluation}</p>
            </section>
          )}

          {/* Sessions */}
          {event.sessions && event.sessions.length > 0 && (
            <section className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-xs font-bold uppercase tracking-wide text-primary flex justify-between items-center">
                <span>Sessions</span>
                <span className="text-[10px] text-primary/70 font-medium">
                  {event.sessions.length} slot{event.sessions.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="divide-y divide-gray-100 max-h-72 overflow-auto">
                {event.sessions.map((session, idx) => (
                  <div key={idx} className="px-4 py-3 text-[12px] leading-snug grid gap-1 bg-white">
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                      {session.participation && (
                        <span className="font-semibold text-gray-800">{session.participation}</span>
                      )}
                      {session.timeSlot && <span className="text-gray-600">{session.timeSlot}</span>}
                    </div>
                    <div className="flex flex-wrap gap-3 text-gray-600">
                      {session.venue && (
                        <span className="inline-flex items-center">
                          <MapPin size={12} className="mr-1" />
                          {session.venue}
                        </span>
                      )}
                      {session.capacity && <span>Cap: {session.capacity}</span>}
                    </div>
                    {session.coordinator && <div className="text-gray-500">{session.coordinator}</div>}
                    {session.contacts && (
                      <div className="text-gray-500 break-words whitespace-pre-wrap">{session.contacts}</div>
                    )}
                    {session.prize && <div className="text-gray-500">Prize: {session.prize}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Contacts */}
          {event.sessions.some((s) => s.contacts) && (
            <section className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Contacts</h3>
              <ul className="space-y-1">
                {(Array.from(new Set(event.sessions.map((s) => s.contacts).filter(Boolean))) as string[]).map(
                  (contact, idx) => (
                    <li key={idx} className="text-[12px] leading-snug text-gray-700 whitespace-pre-wrap break-words">
                      {contact}
                    </li>
                  ),
                )}
              </ul>
            </section>
          )}

          {/* Actions */}
          <div className="flex justify-end pt-2 gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="text-primary border-primary/40 hover:bg-primary/10 bg-transparent"
            >
              Close
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link href="/all-events">View All Events</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
