// Replaces duplicate code in explore-events, events/page, and cultural/page

"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Search, Filter } from "lucide-react"
import type { UnifiedEventItem } from "@/lib/data/unified-events"
import EventDetailsModal from "./event-details-modal"

interface UnifiedEventGridProps {
  events: UnifiedEventItem[]
  showSearch?: boolean
  showFilter?: boolean
  filterOptions?: string[]
  title?: string
  description?: string
  emptyMessage?: string
}

export default function UnifiedEventGrid({
  events: initialEvents,
  showSearch = true,
  showFilter = true,
  filterOptions = [],
  title,
  description,
  emptyMessage = "No events found matching your criteria.",
}: UnifiedEventGridProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [filteredEvents, setFilteredEvents] = useState<UnifiedEventItem[]>(initialEvents)
  const [selectedEvent, setSelectedEvent] = useState<UnifiedEventItem | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    let filtered = initialEvents

    // Filter by search term
    if (searchTerm) {
      const t = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(t) ||
          event.description.toLowerCase().includes(t) ||
          event.department?.toLowerCase().includes(t) ||
          event.sessions.some((s) => s.participation?.toLowerCase().includes(t) || s.venue?.toLowerCase().includes(t)),
      )
    }

    // Filter by category
    if (categoryFilter !== "all" && filterOptions.length > 0) {
      filtered = filtered.filter((event) => event.category.toLowerCase() === categoryFilter.toLowerCase())
    }

    setFilteredEvents(filtered)
  }, [searchTerm, categoryFilter, initialEvents])

  const handleEventSelect = (event: UnifiedEventItem) => {
    setSelectedEvent(event)
    setShowModal(true)
  }

  return (
    <div className="w-full">
      {/* Header */}
      {(title || description) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {title && <h1 className="text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2">{title}</h1>}
          {description && <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </motion.div>
      )}

      {/* Search and Filter */}
      {(showSearch || showFilter) && (
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {showSearch && (
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}

            {showFilter && filterOptions.length > 0 && (
              <div className="relative w-full md:w-64">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 bg-white shadow-sm hover:shadow-md appearance-none cursor-pointer"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {filterOptions.map((opt) => (
                    <option key={opt} value={opt.toLowerCase()}>
                      {opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Events Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02, duration: 0.3 }}
            >
              <Card className="h-full flex flex-col transition-all duration-300 overflow-hidden group hover:shadow-xl border border-gray-200 !bg-white shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded shadow-lg">
                    {event.category || "General"}
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col flex-1 !bg-white">
                  <h3 className="text-lg font-bold mb-2 text-slate-900 leading-snug min-h-[2.5rem]">{event.title}</h3>
                  <div className="space-y-1 mb-3 text-sm">
                    <div className="flex items-center text-slate-700">
                      <Calendar size={14} className="mr-2 text-red-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-slate-700">
                      <Clock size={14} className="mr-2 text-red-600" />
                      {event.time || "See sessions"}
                    </div>
                    <div className="flex items-center text-slate-700">
                      <MapPin size={14} className="mr-2 text-red-600" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm line-clamp-3 flex-1">{event.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
                    {event.prize && (
                      <span className="text-xs text-slate-600 truncate pr-3">
                        <span className="font-semibold">Prize:</span> {event.prize}
                      </span>
                    )}
                    <button
                      onClick={() => handleEventSelect(event)}
                      className="ml-auto text-xs font-semibold tracking-wide uppercase text-red-600 hover:text-red-700 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500 mb-6">{emptyMessage}</p>
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-primary hover:text-white bg-transparent"
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("all")
              }}
            >
              Clear all filters
            </Button>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {showModal && selectedEvent && (
        <EventDetailsModal event={selectedEvent} isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}
