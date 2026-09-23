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
    <div className="min-h-screen bg-[#f2f4f3]">
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
      <div className="bg-gradient-to-r from-[#ffaa5a] via-[#aa6328] to-[#191919] text-white pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white font-poppins hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to IDEAS
          </Link>

          <div className="max-w-[1440px] mx-auto text-center">
            <div className="text-8xl mb-6">🏆</div>
            <h1 className="text-5xl font-serif md:text-6xl font-bold mb-6">
              Achievements
            </h1>
            <p className="text-xl font-serif md:text-2xl text-white mb-8">
              Highlighting excellence & breakthroughs
            </p>

            <div className="flex font-poppins flex-wrap justify-center gap-6 text-white">
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
      <div className="container mx-auto pt-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Description */}
          <Card className="pb-12 !bg-transparent border-none  shadow-none">
            <CardContent>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-black" />
                About Achievements Track
              </h2>
              <p className="text-black text-[16px] leading-relaxed">
                {trackData.description}
              </p>
            </CardContent>
          </Card>

          {/* Divider */}
          <div className="border-t border-[#191919]/80 mb-12" />

          {/* Showcase Items */}
          <div>
            <h2 className="text-[38px] font-bold font-serif text-gray-900 mb-8 text-center">
              Featured Events
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {trackData.showcaseItems.map((item, idx) => (
                <Card
                  key={idx}
                  className="hover:shadow-lg transition-shadow overflow-hidden !bg-white border border-black/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-poppins text-[15px]">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Events */}
          <div className="mt-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Related Events
            </h2>
            <div className="flex flex-wrap gap-3">
              {trackData.relatedEvents.map((event, idx) => (
                <span
                  key={idx}
                  className="px-4 py-[6px] bg-[#ffaa5a]/10 font-poppins text-[#804b20] rounded-full text-sm font-medium"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center my-12">
            <Card className="bg-gradient-to-r from-[#ffaa5a] via-[#aa6328] to-[#191919] text-white border-0 shadow-xl">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold font-serif mb-4 text-white">
                  Achieve Excellence
                </h2>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Showcase your achievements and be recognized for excellence on
                  October 27–28, 2026 at K.R. Mangalam University.
                </p>
                <Button
                  size="lg"
                  className="bg-primary font-poppins hover:bg-primary/90 text-white font-semibold shadow-md !border !border-white"
                  asChild
                >
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
