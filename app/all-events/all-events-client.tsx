"use client";

import { useState } from "react";
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
  Calendar,
  Clock,
  MapPin,
  Eye,
  Sparkles,
  Trophy,
  Users,
  Target,
  Search,
  BookOpen,
  Phone,
  Building,
} from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import { getAllRawEvents, EventItem } from "@/lib/data/events";

function AllEventsClientPageComponent() {
  const allEvents = getAllRawEvents();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = allEvents.filter((event) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      event.title.toLowerCase().includes(term) ||
      event.department?.toLowerCase().includes(term) ||
      event.category.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term) ||
      event.location.toLowerCase().includes(term)
    );
  });

  const truncateText = (text: string, limit: number) => {
    if (!text) return "";
    if (text.length <= limit) return text;
    return text.substring(0, limit).trim() + "...";
  };

  const uniqueDepartments = Array.from(
    new Set(allEvents.map((e) => e.department).filter(Boolean)),
  );

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <StructuredData
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://ideas.krmangalam.edu.in" },
            {
              name: "All Events",
              url: "https://ideas.krmangalam.edu.in/all-events",
            },
          ],
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-5 shadow-sm">
            <Target size={16} />
            <span>Official Event Lineup</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 bg-clip-text text-transparent mb-4">
            IDEAS Events
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the vibrant lineup of competitions, research, innovation,
            and cultural performances at K.R. Mangalam University.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/80">
              <Trophy className="text-amber-500 mx-auto mb-1.5" size={22} />
              <div className="text-2xl font-bold text-gray-900">
                {allEvents.length}
              </div>
              <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                Total Events
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/80">
              <Building className="text-blue-600 mx-auto mb-1.5" size={22} />
              <div className="text-2xl font-bold text-gray-900">
                {uniqueDepartments.length}
              </div>
              <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                Departments
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200/80">
              <Sparkles className="text-purple-600 mx-auto mb-1.5" size={22} />
              <div className="text-2xl font-bold text-gray-900">2</div>
              <div className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                Event Days (Oct 27–28)
              </div>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by event, department, venue..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-sm"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 px-1"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* All Events Grid - No Category Grouping, Badges Directly on Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className="group h-full"
            >
              <Card className="h-full group-hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-sm bg-white overflow-hidden flex flex-col rounded-[2px] !rounded-[2px] p-0 py-0 gap-0 !p-0 !py-0 !gap-0">
                {/* Image Container with Floating Badges */}
                <div className="relative w-full h-56 overflow-hidden flex-shrink-0 rounded-t-[2px] m-0 p-0 bg-gray-900">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-t-[2px] block transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Top & Bottom Gradient for High Badge Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

                  {/* Top-Left Badge: Department */}
                  {event.department && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 backdrop-blur-md text-white rounded-[2px] text-xs font-bold uppercase tracking-wider shadow-md border border-white/10">
                      {event.department}
                    </div>
                  )}

                  {/* Top-Right Badge: Date */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-[2px] text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
                    {event.date.includes("28")
                      ? "Oct 28, 2026"
                      : "Oct 27, 2026"}
                  </div>

                  {/* Bottom-Left Badges: Format & Category */}
                  <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-1.5 max-w-[70%] z-10">
                    {event.teamType && (
                      <span className="px-2 py-0.5 bg-white/95 backdrop-blur-md text-gray-900 font-bold rounded-[2px] text-[11px] shadow-sm uppercase tracking-wide">
                        {event.teamType}
                      </span>
                    )}
                    {event.category && (
                      <span className="px-2 py-0.5 bg-blue-600/90 backdrop-blur-md text-white font-semibold rounded-[2px] text-[11px] shadow-sm">
                        {event.category}
                      </span>
                    )}
                  </div>

                  {/* Bottom-Right Badge: Prize */}
                  {event.prize && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 bg-amber-500/95 backdrop-blur-md text-white rounded-[2px] text-[11px] font-bold shadow-sm flex items-center gap-1 z-10">
                      <Trophy size={11} className="text-amber-100" />
                      <span>{event.prize.split("|")[0].trim()}</span>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <CardContent className="p-4 sm:p-5 flex flex-col flex-1 !p-4 sm:!p-5">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-200 line-clamp-2 min-h-[3.5rem]">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Calendar
                        size={15}
                        className="mr-2 text-blue-600 flex-shrink-0"
                      />
                      <span className="font-medium text-xs sm:text-sm">
                        {event.date}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock
                        size={15}
                        className="mr-2 text-blue-600 flex-shrink-0"
                      />
                      <span className="font-medium text-xs sm:text-sm">
                        {event.time ||
                          event.sessions?.[0]?.timeSlot ||
                          "See sessions"}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin
                        size={15}
                        className="mr-2 text-blue-600 flex-shrink-0"
                      />
                      <span className="font-medium text-xs sm:text-sm truncate">
                        {event.location ||
                          event.sessions?.[0]?.venue ||
                          "Campus"}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3 flex-grow">
                    {truncateText(event.description, 130)}
                  </p>

                  {/* Detail Modal Dialog */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-sm hover:shadow-md rounded-[2px] transition-all duration-200 font-semibold text-xs sm:text-sm"
                      >
                        <Eye size={15} className="mr-2" />
                        Explore Details
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2px] !rounded-[2px] p-5 sm:p-7 !bg-white bg-white text-gray-900 border border-gray-200 shadow-2xl">
                      <DialogHeader className="pb-3 border-b border-gray-100">
                        <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold !text-gray-900 flex items-start gap-3">
                          <Sparkles
                            className="text-blue-600 flex-shrink-0 mt-1"
                            size={24}
                          />
                          <span className="text-gray-900 leading-tight">
                            {event.title}
                          </span>
                        </DialogTitle>
                      </DialogHeader>

                      <div className="space-y-6 pt-2 !bg-white text-gray-900">
                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm p-4 bg-gray-50 rounded-[2px] border border-gray-200">
                          <div>
                            <span className="text-gray-500 text-[11px] uppercase block font-semibold">
                              Department
                            </span>
                            <span className="font-bold text-gray-900">
                              {event.department || "General"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 text-[11px] uppercase block font-semibold">
                              Date
                            </span>
                            <span className="font-bold text-gray-900">
                              {event.date}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 text-[11px] uppercase block font-semibold">
                              Format
                            </span>
                            <span className="font-bold text-gray-900">
                              {event.teamType || "Individual"}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-500 text-[11px] uppercase block font-semibold">
                              Prize Pool
                            </span>
                            <span className="font-bold text-amber-700">
                              {event.prize || "Exciting Prizes"}
                            </span>
                          </div>
                        </div>

                        {/* Full Address Banner */}
                        <div className="flex items-center gap-2.5 p-3 bg-blue-50/80 border border-blue-100 rounded-[2px] text-xs sm:text-sm text-blue-950">
                          <MapPin
                            size={16}
                            className="text-blue-600 shrink-0"
                          />
                          <span>
                            <strong>Address:</strong>{" "}
                            {event.address ||
                              `${event.location}, K.R. Mangalam University, Sohna Road, Gurugram, Delhi-NCR, Haryana`}
                          </span>
                        </div>

                        {/* Image banner */}
                        <div className="relative overflow-hidden rounded-[2px] border border-gray-200 max-h-72 sm:max-h-80">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover rounded-[2px] block"
                          />
                        </div>

                        {/* Description */}
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                            <span className="w-1 h-5 bg-blue-600 rounded-[1px]"></span>
                            Event Overview
                          </h4>
                          <p className="text-gray-700 leading-relaxed text-xs sm:text-sm whitespace-pre-wrap">
                            {event.description}
                          </p>
                        </div>

                        {/* Guidelines & Rules */}
                        {event.guidelines && (
                          <div className="p-4 bg-gray-50 rounded-[2px] border border-gray-200">
                            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                              <BookOpen size={16} className="text-blue-600" />
                              Guidelines & Rules
                            </h4>
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-sans">
                              {event.guidelines}
                            </p>
                          </div>
                        )}

                        {/* Evaluation Pattern */}
                        {event.evaluation && (
                          <div className="p-4 bg-blue-50/60 rounded-[2px] border border-blue-100">
                            <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                              <Trophy size={16} className="text-blue-600" />
                              Evaluation Pattern
                            </h4>
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                              {event.evaluation}
                            </p>
                          </div>
                        )}

                        {/* Sessions Breakdown */}
                        {event.sessions && event.sessions.length > 0 && (
                          <div className="space-y-3">
                            <h4 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                              <span className="w-1 h-5 bg-purple-600 rounded-[1px]"></span>
                              Sessions & Schedule
                            </h4>
                            <div className="grid gap-3">
                              {event.sessions.map((session, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white p-4 rounded-[2px] border border-gray-200 shadow-sm space-y-2"
                                >
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-2 py-0.5 bg-purple-100 text-purple-800 rounded-[2px] text-xs font-bold">
                                      Slot {idx + 1}
                                    </span>
                                    {session.participation && (
                                      <span className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded-[2px] text-xs font-semibold">
                                        {session.participation}
                                      </span>
                                    )}
                                    {session.timeSlot && (
                                      <span className="text-gray-800 font-semibold text-xs sm:text-sm flex items-center gap-1">
                                        <Clock
                                          size={13}
                                          className="text-gray-500"
                                        />
                                        {session.timeSlot}
                                      </span>
                                    )}
                                  </div>

                                  {session.venue && (
                                    <div className="text-gray-600 text-xs sm:text-sm flex items-center gap-1.5">
                                      <MapPin
                                        size={14}
                                        className="text-blue-600 flex-shrink-0"
                                      />
                                      <span>
                                        <strong>Venue:</strong> {session.venue}
                                      </span>
                                    </div>
                                  )}

                                  {session.coordinator && (
                                    <div className="text-gray-600 text-xs sm:text-sm flex items-start gap-1.5">
                                      <Users
                                        size={14}
                                        className="text-blue-600 flex-shrink-0 mt-0.5"
                                      />
                                      <span>
                                        <strong>Faculty Coordinator:</strong>{" "}
                                        {session.coordinator}
                                      </span>
                                    </div>
                                  )}

                                  {session.contacts && (
                                    <div className="text-gray-600 text-xs sm:text-sm flex items-start gap-1.5">
                                      <Phone
                                        size={14}
                                        className="text-emerald-600 flex-shrink-0 mt-0.5"
                                      />
                                      <span>
                                        <strong>Student Contacts:</strong>{" "}
                                        {session.contacts}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
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

        {/* Empty Search Result */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 max-w-md mx-auto mb-16">
            <Search className="text-gray-400 mx-auto mb-3" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              No matching events found
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              Try changing or clearing your search term.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSearchTerm("")}
              className="text-blue-600 border-blue-600"
            >
              Clear search
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-2xl p-8 text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to Participate?</h3>
          <p className="mb-6 text-blue-200 max-w-2xl mx-auto text-sm sm:text-base">
            Join us at K.R. Mangalam University on October 27–28, 2026 to
            showcase your talent, innovation, and skills.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export { AllEventsClientPageComponent as AllEventsClientPage };
