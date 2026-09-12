import { Calendar, Clock, MapPin, Users, ArrowLeft, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { StructuredData } from "@/components/structured-data"

interface TrackData {
  title: string
  emoji: string
  tagline: string
  description: string
  date: string
  time: string
  location: string
  participants: string
  showcaseItems: Array<{
    title: string
    description: string
    image?: string
  }>
  relatedEvents: string[]
  colorScheme: {
    gradient: string
    text: string
    badge: string
    button: string
  }
}

interface IdeasTrackPageProps {
  track: TrackData
}

export default function IdeasTrackPage({ track }: IdeasTrackPageProps) {
  const bgGradient = `bg-gradient-to-br ${track.colorScheme.gradient}`
  const headerGradient = `bg-gradient-to-br ${track.colorScheme.button}`
  const textColor = track.colorScheme.text
  const badgeColor = track.colorScheme.badge

  return (
    <div className={`min-h-screen ${bgGradient}`}>
      <StructuredData
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://ideas.krmangalam.edu.in" },
            { name: "IDEAS Tracks", url: "https://ideas.krmangalam.edu.in/ideas" },
            {
              name: track.title,
              url: `https://ideas.krmangalam.edu.in/ideas/${track.title.toLowerCase().replace(/\s+/g, "-")}`,
            },
          ],
        }}
      />

      {/* Hero Section */}
      <div className={`${headerGradient} text-white py-20`}>
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 ${textColor} hover:text-white transition-colors mb-8`}
          >
            <ArrowLeft size={20} />
            Back to IDEAS
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">{track.emoji}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{track.title}</h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">{track.tagline}</p>

            <div className="flex flex-wrap justify-center gap-6 opacity-90">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>{track.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{track.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>{track.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>{track.participants}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <Card className="mb-12 !bg-white border border-slate-200/90 shadow-md">
            <CardContent className="p-8">
              <h2 className={`text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2`}>
                <Target className={`${textColor.replace("text-", "text-")}`} />
                About {track.title} Track
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">{track.description}</p>
            </CardContent>
          </Card>

          {/* Showcase Items */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {track.showcaseItems.map((item, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow overflow-hidden !bg-white border border-slate-200/90">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Events */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Events</h2>
            <div className="flex flex-wrap gap-3">
              {track.relatedEvents.map((event, idx) => (
                <span key={idx} className={`px-4 py-2 ${badgeColor} rounded-full text-sm font-medium`}>
                  {event}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="!bg-white border border-slate-200/90 shadow-xl text-slate-900">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Ready to Participate?</h2>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                  Join us at the {track.title} track on October 27–28, 2026 and showcase your talents at K.R. Mangalam University.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-md" asChild>
                  <Link href="/register/selection">Register Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
