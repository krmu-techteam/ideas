"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Clock, MapPin, Eye, Palette, Music, Star, Users, Trophy, Target } from "lucide-react"
import Link from "next/link"
import { getCulturalEvents } from "@/lib/data/events"

// Filter cultural events from main events data
const culturalEvents = getCulturalEvents()

export default function CulturalEvents() {
  const [isInView, setIsInView] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.2 },
    )

    const section = document.querySelector(".cultural-events-section")
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 cultural-events-section overflow-hidden" suppressHydrationWarning>
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">
            <Palette size={16} />
            <span>Cultural Events</span>
          </div> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-900 via-pink-800 to-rose-900 bg-clip-text text-transparent mb-4">
            Celebrate Art & Culture
          </h2> */}
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Express your creativity and celebrate cultural diversity through traditional and contemporary art forms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {culturalEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="group"
            >
              <Card className="h-full group-hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-pink-600 to-purple-600 shadow-lg flex items-center gap-1">
                      <Star size={14} />
                      Cultural
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl font-bold mb-2 drop-shadow-lg">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <span className="flex items-center gap-1">
                          <Users size={14} />
                          {event.teamType || "Team Event"}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={18} className="mr-3 text-pink-600" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock size={18} className="mr-3 text-pink-600" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Music size={18} className="mr-3 text-pink-600" />
                      <span className="font-medium">{event.department || "Cultural Department"}</span>
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]"
                        size="lg"
                      >
                        <Eye size={18} className="mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto !bg-white bg-white text-gray-900 border border-slate-200/90 shadow-2xl p-6 sm:p-8 rounded-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                          <Palette className="text-pink-600" size={28} />
                          {event.title}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div className="flex flex-wrap gap-4 text-sm p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                          <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-pink-600" />
                            <span className="font-medium">{event.date}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={16} className="text-pink-600" />
                            <span className="font-medium">{event.time || 'Time TBA'}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={16} className="text-pink-600" />
                            <span className="font-medium">{event.location || 'TBA'}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <Users size={16} className="text-pink-600" />
                            <span className="font-medium">{event.teamType} {event.teamSize && `(${event.teamSize})`}</span>
                          </span>
                          {event.department && (
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                              {event.department}
                            </span>
                          )}
                        </div>

                        <div className="relative">
                          <img 
                            src={event.image || "/placeholder.svg"} 
                            alt={event.title}
                            className="w-full h-64 object-cover rounded-xl shadow-lg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <span className="w-1 h-6 bg-gradient-to-b from-pink-600 to-purple-600 rounded"></span>
                            Event Description
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-base">{event.description}</p>
                        </div>

                        {event.sessions && event.sessions.length > 0 && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <span className="w-1 h-6 bg-gradient-to-b from-pink-600 to-purple-600 rounded"></span>
                              Sessions & Details
                            </h4>
                            <div className="grid gap-4">
                              {event.sessions.map((session, idx) => (
                                <div key={idx} className="bg-gradient-to-r from-pink-50 to-purple-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                                  <div className="flex flex-wrap items-center gap-4 mb-3">
                                    {session.participation && <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">{session.participation}</span>}
                                    {session.timeSlot && <span className="text-gray-600 font-medium">{session.timeSlot}</span>}
                                    {session.venue && <span className="text-gray-600">{session.venue}</span>}
                                  </div>
                                  {session.guidelines && (
                                    <div className="mb-3">
                                      <h5 className="font-medium text-gray-900 mb-1">Guidelines</h5>
                                      <p className="text-gray-700 text-sm leading-relaxed">{session.guidelines}</p>
                                    </div>
                                  )}
                                  {session.evaluation && (
                                    <div className="mb-3">
                                      <h5 className="font-medium text-gray-900 mb-1">Evaluation</h5>
                                      <p className="text-gray-700 text-sm leading-relaxed">{session.evaluation}</p>
                                    </div>
                                  )}
                                  {session.contacts && (
                                    <div className="mb-3">
                                      <h5 className="font-medium text-gray-900 mb-1">Contact</h5>
                                      <div className="text-sm text-gray-600">
                                        {session.coordinator && <p><strong>Coordinator:</strong> {session.coordinator}</p>}
                                        <p className="text-gray-700">{session.contacts}</p>
                                      </div>
                                    </div>
                                  )}
                                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                    {session.teamType && <span><strong>Type:</strong> {session.teamType}</span>}
                                    {session.teamSize && <span><strong>Team Size:</strong> {session.teamSize}</span>}
                                    {session.prize && <span className="text-yellow-700"><strong>Prize:</strong> {session.prize}</span>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {event.prize && (
                          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Trophy className="text-yellow-600" size={20} />
                              Prizes & Recognition
                            </h4>
                            <p className="text-gray-700">{event.prize}</p>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3"
          >
            {/* <Link href="/cultural" className="flex items-center gap-2">
              <Palette size={20} />
              <span>View All Cultural Events</span>
            </Link> */}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
