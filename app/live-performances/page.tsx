"use client"

import { useEffect, useRef, useState } from "react"

const performances = [
  {
    id: "rudra",
    name: "RUDRA",
    genre: "Live Music",
    date: "6th November, 2025",
    time: "2:00 PM Onwards",
    venue: "Sunken Ground",
    image:
      "/live-performance/rudra.jpg",
    description:
      "Experience the mesmerizing live performance of RUDRA, a talented musician bringing classical and contemporary sounds to life.",
  },
 {
    "id": "firdaus",
    "name": "FIRDAUS",
    "genre": "Live Band",
    "date": "7th November, 2025",
    "time": "2:00 PM Onwards",
    "venue": "Sunken Ground",
    "image": "/live-performance/firdaus.jpg",
    "description": "Witness the soulful and energetic performance of the band FIRDAUS, known for their captivating blend of Hindi Rock music."
},
  {
    id: "rcr",
    name: "RCR RAPPER",
    genre: "Rap Performance",
    date: "6th November, 2025",
    time: "2:00 PM Onwards",
    venue: "Sunken Ground",
    image:
      "/live-performance/rcr.jpg",
    description:
      "Get ready for an intense rap performance by RCR RAPPER, bringing cutting-edge hip-hop beats and lyrical excellence.",
  },
]

export default function LivePerformances() {
  const [currentPerformer, setCurrentPerformer] = useState(0)
  const performerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = performerRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setCurrentPerformer(index)
            }
          }
        })
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is visible
      },
    )

    performerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      performerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <div className="relative w-full px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Live Performances
          </h1>
          <p className="text-lg md:text-xl text-blue-200 leading-relaxed">
            Experience world-class artists performing live exclusively for students
          </p>
        </div>
      </div>

      {/* Featured Performers Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Featured Performers</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          {/* Sticky Scroll Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Premium Details Cards */}
            <div className="space-y-12 md:space-y-16">
              {performances.map((perf, index) => (
                <div
                  key={perf.id}
                  ref={(el) => {
                    if (el) performerRefs.current[index] = el
                  }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/80 to-blue-900/60 backdrop-blur-md border border-orange-500/30 hover:border-orange-500/70 transition-all duration-500 p-6 md:p-8 shadow-2xl hover:shadow-orange-500/30">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl -z-10"></div>

                    {/* Genre Badge */}
                    <div className="mb-6 flex items-center gap-3">
                      <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                      <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">{perf.genre}</span>
                    </div>

                    {/* Artist Name */}
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300 tracking-tight">
                      {perf.name}
                    </h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-transparent rounded-full mb-4"></div>

                    {/* Description */}
                    <p className="text-blue-100 text-base leading-relaxed mb-8 font-light">{perf.description}</p>

                    {/* Event Details */}
                    <div className="space-y-4 border-t border-orange-500/20 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
                          <span className="text-orange-400 text-sm font-bold">📅</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-blue-300 text-xs uppercase tracking-wider font-semibold mb-1">
                            Performance Date
                          </p>
                          <p className="text-white font-semibold text-base">{perf.date}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
                          <span className="text-orange-400 text-sm font-bold">🕐</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-blue-300 text-xs uppercase tracking-wider font-semibold mb-1">
                            Start Time
                          </p>
                          <p className="text-white font-semibold text-base">{perf.time}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/15 border border-orange-500/40 flex items-center justify-center">
                          <span className="text-orange-400 text-sm font-bold">📍</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-blue-300 text-xs uppercase tracking-wider font-semibold mb-1">
                            Venue Location
                          </p>
                          <p className="text-white font-semibold text-base">{perf.venue}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Sticky Image */}
            <div className="lg:sticky lg:top-20 h-fit">
              <div className="relative h-[400px] md:h-[550px] lg:h-[650px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900 border-2 border-orange-500/50 shadow-2xl">
                <img
                  src={performances[currentPerformer].image || "/placeholder.svg"}
                  alt={performances[currentPerformer].name}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-70"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                  <p className="text-white text-2xl md:text-3xl font-bold">{performances[currentPerformer].name}</p>
                  <p className="text-orange-400 text-sm md:text-base font-semibold mt-2">
                    {performances[currentPerformer].genre}
                  </p>
                </div>

                <div className="absolute inset-0 rounded-3xl border-2 border-orange-500/30 pointer-events-none shadow-lg shadow-orange-500/20"></div>

                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-orange-500/60 rounded-tr-2xl"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-orange-500/60 rounded-bl-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-500/50 rounded-3xl p-10 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Open to All Students</h2>
            <p className="text-base md:text-lg text-blue-100 mb-6 leading-relaxed">
              All performances are open to university students. Bring your friends and enjoy an unforgettable
              experience!
            </p>
            <p className="text-lg md:text-xl font-semibold text-orange-400">Mark your calendar and don't miss out!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
