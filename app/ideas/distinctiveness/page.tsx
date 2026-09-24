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

const trackData = ideasEventsData.distinctiveness;

export const metadata: Metadata = generateEventMetadata(
  "Distinctiveness Track | IDEAS 4.0",
  "Explore the Distinctiveness track at IDEAS 4.0 - original models & practices. Features Crime Scene Investigation, ReelBaaz, Soap Carving, Cartoon Craze, and Poster Making.",
  "October 27–28, 2026",
  "Design Block, KRMU Campus",
  "/ideas/distinctiveness",
);

export default function DistinctivenessPage() {
  return (
    <div className="min-h-screen bg-[#F4F9FD]">
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
              name: "Distinctiveness",
              url: "https://ideas.krmangalam.edu.in/ideas/distinctiveness",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white pt-24 pb-14 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex font-poppins items-center gap-2 text-blue-100 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft size={18} />
            Back to IDEAS
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">🔍</div>
            <h1 className="text-5xl font-serif md:text-6xl font-bold mb-6 text-white">
              Distinctiveness
            </h1>
            <p className="text-xl font-serif md:text-2xl text-blue-100 mb-8">
              Original models &amp; practices
            </p>

            <div className="flex font-poppins flex-wrap justify-center gap-6 text-white text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
                <Calendar size={18} className="text-[#00D2FF]" />
                <span>October 27–28, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
                <Clock size={18} className="text-[#00D2FF]" />
                <span>9:15 AM onwards (both days)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
                <MapPin size={18} className="text-[#00D2FF]" />
                <span>Design Block, KRMU Campus</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
                <Users size={18} className="text-[#00D2FF]" />
                <span>400+ Participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[1440px] mx-auto">
          {/* Description */}
          <Card className="mb-12 border-0 shadow-none !bg-transparent">
            <CardContent>
              <h2 className="text-2xl font-bold text-[#0B256B] mb-4 flex items-center gap-2">
                <Target className="text-[#0062A2]" />
                About Distinctiveness Track
              </h2>
              <p className="text-slate-700 text-lg leading-relaxed">
                {trackData.description}
              </p>
            </CardContent>
          </Card>

          {/* Showcase Items */}
          <div>
            <h2 className="text-3xl font-bold text-[#0B256B] mb-8 text-center font-serif">
              Featured Events
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {trackData.showcaseItems.map((item, idx) => (
                <Card
                  key={idx}
                  className="!bg-white border border-blue-100 hover:border-[#0062A2] transition-colors duration-200 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[#0B256B] mb-2 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Related Events */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#0B256B] mb-6">
              Related Events
            </h2>
            <div className="flex flex-wrap gap-3">
              {trackData.relatedEvents.map((event, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-blue-50 text-[#0062A2] border border-blue-100 rounded-full text-sm font-medium"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-[#081B4B] via-[#00529B] to-[#00ACE9] text-white border-0">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-4 text-white font-serif">
                  Showcase Your Distinctiveness
                </h2>
                <p className="text-blue-100 mb-6 max-w-xl mx-auto leading-relaxed">
                  Demonstrate your unique approaches and creative methodologies
                  on October 27–28, 2026 at K.R. Mangalam University.
                </p>
                <Button
                  size="lg"
                  className="bg-transparent hover:bg-white hover:text-[#081B4B] text-white font-semibold !border !border-white rounded-xl transition-colors"
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
