"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  Filter,
  Calendar,
  Clock,
  MapPin,
  Users,
  Trophy,
  Eye,
  Palette,
} from "lucide-react";
import Link from "next/link";
import { getCulturalEvents } from "@/lib/data/events";

// Get cultural events from main events data
const culturalEvents = getCulturalEvents();

// Extract categories from cultural events
const getCategories = () => {
  const categories = new Set<string>();
  culturalEvents.forEach((event) => {
    if (event.category) categories.add(event.category);
  });
  return ["All", ...Array.from(categories).sort()];
};

export default function ShowcasePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(culturalEvents);
  const [isInView, setIsInView] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<
    (typeof culturalEvents)[0] | null
  >(null);
  const [showModal, setShowModal] = useState(false);

  const categories = getCategories();

  useEffect(() => {
    setIsInView(true);

    // Filter events based on search term and category
    let filtered = culturalEvents;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.department?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.sessions.some((session) =>
            session.venue?.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    // Filter by category
    if (categoryFilter !== "All") {
      filtered = filtered.filter((event) => event.category === categoryFilter);
    }

    setFilteredEvents(filtered);
  }, [searchTerm, categoryFilter]);

  const openEventDetails = (event: (typeof culturalEvents)[0]) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2">
            Cultural Events
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dance, music, and fashion converging in dynamic performances that
            celebrate expression, collaboration, and creativity at IDEAS 4.0.
            Join us on October 27–28, 2026!
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search bar */}
            <div className="relative w-full md:w-64">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search cultural events..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category filter */}
            <div className="relative w-full md:w-64">
              <Filter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {event.category || "Cultural"}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-1">
                    {event.department}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-deepBlue-dark">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar size={14} className="mr-2 text-pink-600" />
                      <span>{event.date}</span>
                    </div>
                    {event.location && (
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-2 text-pink-600" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users size={14} className="mr-2 text-pink-600" />
                      <span>
                        {event.teamType}{" "}
                        {event.teamSize && `(${event.teamSize})`}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                      onClick={() => openEventDetails(event)}
                    >
                      <Eye size={16} className="mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No cultural events found matching your criteria.
            </p>
            <Button
              variant="link"
              className="text-primary mt-2"
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("All");
              }}
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Event Details Modal */}
        {showModal && selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-sm font-bold px-3 py-1 rounded">
                  {selectedEvent.category || "Cultural Event"}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">
                  {selectedEvent.department}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-deepBlue-dark flex items-center gap-2">
                  <Palette className="text-pink-600" size={28} />
                  {selectedEvent.title}
                </h3>

                {/* Event Info */}
                <div className="flex flex-wrap gap-4 text-sm p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-pink-600" />
                    <span className="font-medium">{selectedEvent.date}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} className="text-pink-600" />
                    <span className="font-medium">
                      {selectedEvent.time || "Time TBA"}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-pink-600" />
                    <span className="font-medium">
                      {selectedEvent.location || "TBA"}
                    </span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={16} className="text-pink-600" />
                    <span className="font-medium">
                      {selectedEvent.teamType}{" "}
                      {selectedEvent.teamSize && `(${selectedEvent.teamSize})`}
                    </span>
                  </span>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedEvent.description}
                </p>

                {/* Sessions Details */}
                {selectedEvent.sessions &&
                  selectedEvent.sessions.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-pink-600 to-purple-600 rounded"></span>
                        Sessions & Details
                      </h4>
                      <div className="grid gap-4">
                        {selectedEvent.sessions.map((session, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-r from-pink-50 to-purple-50 p-5 rounded-xl border border-gray-100"
                          >
                            <div className="flex flex-wrap items-center gap-4 mb-3">
                              {session.participation && (
                                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                                  {session.participation}
                                </span>
                              )}
                              {session.timeSlot && (
                                <span className="text-gray-600 font-medium">
                                  {session.timeSlot}
                                </span>
                              )}
                              {session.venue && (
                                <span className="text-gray-600">
                                  {session.venue}
                                </span>
                              )}
                            </div>
                            {session.guidelines && (
                              <div className="mb-3">
                                <h5 className="font-medium text-gray-900 mb-1">
                                  Guidelines
                                </h5>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {session.guidelines}
                                </p>
                              </div>
                            )}
                            {session.evaluation && (
                              <div className="mb-3">
                                <h5 className="font-medium text-gray-900 mb-1">
                                  Evaluation
                                </h5>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  {session.evaluation}
                                </p>
                              </div>
                            )}
                            {session.contacts && (
                              <div className="mb-3">
                                <h5 className="font-medium text-gray-900 mb-1">
                                  Contact
                                </h5>
                                <div className="text-sm text-gray-600">
                                  {session.coordinator && (
                                    <p>
                                      <strong>Coordinator:</strong>{" "}
                                      {session.coordinator}
                                    </p>
                                  )}
                                  <p className="text-gray-700">
                                    {session.contacts}
                                  </p>
                                </div>
                              </div>
                            )}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                              {session.teamType && (
                                <span>
                                  <strong>Type:</strong> {session.teamType}
                                </span>
                              )}
                              {session.teamSize && (
                                <span>
                                  <strong>Team Size:</strong> {session.teamSize}
                                </span>
                              )}
                              {session.prize && (
                                <span className="text-yellow-700">
                                  <strong>Prize:</strong> {session.prize}
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Prize Information */}
                {selectedEvent.prize && (
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <Trophy className="text-yellow-600" size={20} />
                      Prizes & Recognition
                    </h4>
                    <p className="text-gray-700">{selectedEvent.prize}</p>
                  </div>
                )}

                <div className="flex gap-4 justify-end">
                  <Button variant="outline" onClick={() => setShowModal(false)}>
                    Close
                  </Button>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                  >
                    <Link href="/all-events">View All Events</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
