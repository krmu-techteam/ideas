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

const trackData = ideasEventsData.innovation;

export const metadata: Metadata = generateEventMetadata(
  "Innovation Track | IDEAS 4.0",
  "Explore the Innovation track at IDEAS 4.0 - creative, sustainable & tech-driven solutions. Features AI & Robotics Lab, Smart Farming, Drone Obstacle Course, Gaming Arena, and Tech Treasure Hunt.",
  "October 27–28, 2026",
  "Sohna Road, Gurugram, Delhi-NCR, Haryana",
  "/ideas/innovation",
);

export default function InnovationPage() {
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
              name: "Innovation",
              url: "https://ideas.krmangalam.edu.in/ideas/innovation",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#006d77] via-[#21717a] to-[#16212C] text-white py-20">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to IDEAS
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">💡</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Innovation</h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Creative, sustainable & tech-driven solutions
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-white">
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
                <span>Sohna Road, Gurugram, Delhi-NCR, Haryana</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>500+ Participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Description */}
          <Card className="w-full mb-12 !bg-transparent border-0 shadow-none">
            <CardContent className="py-8">
              <h2 className="text-2xl font-semibold font-serif text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-gray-900" />
                About Innovation Track
              </h2>
              <p className="text-black text-lg leading-relaxed">
                {trackData.description}
              </p>
            </CardContent>
          </Card>

          {/* Showcase Items */}
          <div>
            <h2 className="text-[38px] font-serif font-bold text-black mb-8 text-center">
              Featured Events
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
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
                  className="px-4 py-[6px] bg-[#006d77]/10 text-[#006d77] rounded-full text-sm font-semibold"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-[#006d77] via-[#006d77] to-[#16212C] text-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                  Ready to Innovate?
                </h2>
                <p className="text-slate-200 mb-6 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
                  Join us at the Innovation track on October 27–28, 2026 and
                  showcase your creative solutions at K.R. Mangalam University.
                </p>
                <Button
                  size="lg"
                  className="border rounded-[6px] border-white text-white hover:bg-primary"
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
