"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Filter, Search } from "lucide-react"
import Link from "next/link"
import { getSpotlightEvents, getSpotlightCategories, searchSpotlightEvents, EventItem } from "@/lib/data/events"

// Pre-compute categories (stable between renders)
const categories = getSpotlightCategories()
const masterEvents = getSpotlightEvents()

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>(masterEvents)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    setIsInView(true)

    const filtered = searchSpotlightEvents(searchTerm, categoryFilter)
    setFilteredEvents(filtered)
  }, [searchTerm, categoryFilter])

  return (
        <div className="min-h-screen pt-24 pb-16 !bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2">
            Spotlight Activities <span className="text-primary">IDEAS 4.0</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us on October 27–28, 2026 for exciting spotlight activities featuring innovation, technology, and creativity!
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search bar */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200" size={18} />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 !bg-white text-gray-900 shadow-sm hover:shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                suppressHydrationWarning
              />
            </div>

            {/* Category filter (dynamic) */}
            <div className="relative w-full md:w-64">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors duration-200" size={18} />
              <select
                className="w-full pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 !bg-white text-gray-900 shadow-sm hover:shadow-md appearance-none cursor-pointer"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                suppressHydrationWarning
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
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <EventGrid events={filteredEvents} isInView={isInView} />
        </div>

        {filteredEvents.length === 0 && searchTerm && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500 mb-6">We couldn't find any events matching your search criteria. Try adjusting your filters or search terms.</p>
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary hover:text-white"
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
      </div>
    </div>
  )
}

function EventGrid({ events, isInView }: { events: any[]; isInView: boolean }) {
  const [selected, setSelected] = useState<any | null>(null)

  // Close modal if filtered list no longer contains selected
  useEffect(() => {
    if (selected && !events.find(e => e.id === selected.id)) setSelected(null)
  }, [events, selected])

  // Prevent body scroll when modal open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (selected) {
        document.documentElement.classList.add('overflow-hidden')
      } else {
        document.documentElement.classList.remove('overflow-hidden')
      }
    }
    return () => document.documentElement.classList.remove('overflow-hidden')
  }, [selected])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event: any, index: number) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.04, duration: 0.45 }}
          >
            <Card className="h-full flex flex-col transition-shadow duration-300 overflow-hidden group hover:shadow-xl border border-gray-200 !bg-white shadow-md rounded-[2px] !rounded-[2px]">
              <div className="relative h-48 overflow-hidden rounded-t-[2px]">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-t-[2px]"
                />
                <div className="absolute top-2 right-2 bg-red-600/90 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded-[2px] shadow-lg">
                  {event.department || event.category || 'EVENT'}
                </div>
                {event.day && (
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur text-white text-[10px] font-semibold px-2 py-1 rounded-[2px]">DAY1</div>
                )}
              </div>
              <CardContent className="p-5 flex flex-col flex-1 !bg-white">
                <h3 className="text-lg font-bold mb-2 !text-deepBlue-dark leading-snug min-h-[2.5rem]">{event.title}</h3>
                <div className="space-y-1 mb-3 text-sm">
                  <div className="flex items-center !text-gray-600"><Calendar size={14} className="mr-2 text-primary" />{event.date}</div>
                  <div className="flex items-center !text-gray-600"><Clock size={14} className="mr-2 text-primary" />{event.time || 'See sessions'}</div>
                  <div className="flex items-center !text-gray-600"><MapPin size={14} className="mr-2 text-primary" />{event.location}</div>
                </div>
                <p className="!text-gray-600 text-sm line-clamp-3 flex-1">{event.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  {event.prize && <span className="text-[11px] !text-gray-500 truncate pr-3"><span className="font-semibold">Prize:</span> {event.prize}</span>}
                  <button
                    onClick={() => setSelected(event)}
                    className="ml-auto text-xs font-semibold tracking-wide uppercase text-primary hover:text-primary/80 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 210, damping: 24 }}
            className="relative w-full max-w-4xl md:max-w-5xl !bg-white rounded-[2px] !rounded-[2px] shadow-2xl border border-gray-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-gradient-to-r from-primary/10 to-primary/5 border-b border-gray-200 flex-shrink-0 rounded-t-[2px]">
              <h2 className="text-sm sm:text-base md:text-lg font-bold !text-deepBlue-dark pr-6 leading-snug break-words">{selected.title}</h2>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="group p-2 rounded-[2px] hover:bg-primary/10 text-primary transition-colors flex-shrink-0"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>
            <div className="p-4 sm:p-5 space-y-4 sm:space-y-6 overflow-y-auto overscroll-contain flex-1 min-h-0 !bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="flex items-center !text-gray-700 break-words"><Calendar size={16} className="mr-2 text-primary flex-shrink-0" /><span className="break-words">{selected.date}</span></div>
                <div className="flex items-center !text-gray-700 break-words"><Clock size={16} className="mr-2 text-primary flex-shrink-0" /><span className="break-words">{selected.time || 'Multiple Slots'}</span></div>
                <div className="flex items-center !text-gray-700 break-words"><MapPin size={16} className="mr-2 text-primary flex-shrink-0" /><span className="break-words">{selected.location}</span></div>
                {selected.teamType && <div className="!text-gray-700 break-words"><span className="font-medium">Format:</span> {selected.teamType}{selected.teamSize ? ` (Size: ${selected.teamSize})` : ''}</div>}
                {selected.prize && <div className="!text-gray-700 break-words"><span className="font-medium">Prize:</span> {selected.prize}</div>}
                {selected.department && <div className="!text-gray-700 break-words"><span className="font-medium">Department:</span> {selected.department}</div>}
              </div>
              <div className="space-y-3 sm:space-y-4">
                <section className="!bg-white rounded-[2px] border border-gray-200 p-3 sm:p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">
                    {selected.guidelines && selected.guidelines !== selected.description ? "Description" : "Guidelines / Description"}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed !text-gray-700 whitespace-pre-wrap break-words">{selected.description}</p>
                </section>
                {selected.guidelines && selected.guidelines !== selected.description && (
                  <section className="!bg-white rounded-[2px] border border-gray-200 p-3 sm:p-4">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Guidelines / Rules</h3>
                    <p className="text-xs sm:text-sm leading-relaxed !text-gray-700 whitespace-pre-wrap break-words">{selected.guidelines}</p>
                  </section>
                )}
                {selected.evaluation && (
                  <section className="!bg-slate-50 rounded-[2px] border border-gray-200 p-3 sm:p-4">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Evaluation</h3>
                    <p className="text-xs sm:text-sm leading-relaxed !text-gray-700 whitespace-pre-wrap break-words">{selected.evaluation}</p>
                  </section>
                )}
                {selected.sessions?.length > 0 && (
                  <section className="!bg-white rounded-[2px] border border-gray-200 overflow-hidden">
                    <div className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary/10 to-primary/5 text-xs font-bold uppercase tracking-wide text-primary flex justify-between items-center">
                      <span>Sessions</span>
                      <span className="text-[10px] text-primary/70 font-medium">{selected.sessions.length} slot{selected.sessions.length>1?'s':''}</span>
                    </div>
                    <div className="divide-y divide-gray-100 max-h-48 sm:max-h-60 overflow-auto">
                      {selected.sessions.map((s: any, i: number) => (
                        <div key={i} className="px-3 sm:px-4 py-2 sm:py-3 text-[11px] sm:text-xs leading-snug grid gap-1 !bg-white">
                          <div className="flex flex-wrap gap-x-2 gap-y-1">
                            {s.participation && <span className="font-semibold text-gray-800 break-words">{s.participation}</span>}
                            {s.timeSlot && <span className="text-gray-600 break-words">{s.timeSlot}</span>}
                          </div>
                          <div className="flex flex-wrap gap-2 sm:gap-3 text-gray-600">
                            {s.venue && <span className="inline-flex items-center break-words"><MapPin size={12} className="mr-1 flex-shrink-0" />{s.venue}</span>}
                            {s.capacity && <span className="break-words">Cap: {s.capacity}</span>}
                          </div>
                          {s.coordinator && <div className="text-gray-500 break-words">{s.coordinator}</div>}
                          {s.contacts && <div className="text-gray-500 break-all whitespace-pre-wrap">{s.contacts}</div>}
                          {s.prize && <div className="text-gray-500 break-words">Prize: {s.prize}</div>}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                {selected.sessions.some((s:any)=>s.contacts) && (
                  <section className="!bg-white rounded-[2px] border border-gray-200 p-3 sm:p-4">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-gray-500 mb-2">Contacts</h3>
                    <ul className="space-y-1">
                      {(Array.from(new Set(selected.sessions.map((s:any)=>s.contacts).filter(Boolean))) as string[]).map((c:string,i:number)=>(
                        <li key={i} className="text-[11px] sm:text-xs leading-snug !text-gray-700 whitespace-pre-wrap break-all">{c}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
            <div className="flex justify-end px-4 sm:px-5 py-3 border-t border-gray-200 !bg-slate-50 flex-shrink-0 rounded-b-[2px]">
              <Button variant="outline" size="sm" onClick={() => setSelected(null)} className="text-primary border-primary/40 hover:bg-primary/10 text-xs sm:text-sm rounded-[2px]">Close</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
