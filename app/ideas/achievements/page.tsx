import type { Metadata } from "next";
import { generateEventMetadata } from "@/lib/seo/metadata";
import { ideasEventsData } from "@/lib/data/ideas-events";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  Target,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StructuredData } from "@/components/structured-data";

const trackData = ideasEventsData.achievements;

export const metadata: Metadata = generateEventMetadata(
  "Achievements Track | IDEAS 4.0",
  "Explore the Achievements track at IDEAS 4.0 - highlighting excellence & breakthroughs. Features debate competitions, business quizzes, physical endurance challenges, science quizzes, and photography.",
  "October 27–28, 2026",
  "Main Auditorium, KRMU Campus",
  "/ideas/achievements",
);

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <StructuredData
        type="breadcrumb"
        data={{
          items: [
            { name: "Home", url: "https://ideas.krmangalam.edu.in" },
            {
              name: "IDEAS Tracks",
              url: "https://ideas.krmangalam.edu.in/ideas",
            },
            {
              name: "Achievements",
              url: "https://ideas.krmangalam.edu.in/ideas/achievements",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to IDEAS
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">🏆</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Achievements
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8">
              Highlighting excellence & breakthroughs
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-amber-100">
              <div className="flex items-center gap-2">
                <Calendar size={20} />
                <span>October 27–28, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>9:15 AM onwards (both days)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Main Auditorium, KRMU Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>600+ Participants</span>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-amber-600" />
                About Achievements Track
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {trackData.description}
              </p>
            </CardContent>
          </Card>

          {/* Showcase Items */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trackData.showcaseItems.map((item, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-lg transition-shadow overflow-hidden !bg-white border border-slate-200/90"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Events */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Events
            </h2>
            <div className="flex flex-wrap gap-3">
              {trackData.relatedEvents.map((event, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="!bg-white border border-slate-200/90 shadow-xl text-slate-900">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Achieve Excellence</h2>
                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                  Showcase your achievements and be recognized for excellence on October 27–28, 2026 at K.R. Mangalam University.
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
  );
}
