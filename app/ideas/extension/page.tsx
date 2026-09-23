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

const trackData = ideasEventsData.extension;

export const metadata: Metadata = generateEventMetadata(
  "Extension Track | IDEAS 4.0",
  "Explore the Extension track at IDEAS 4.0 - connecting academia with community & industry. Features community events, live performances, storytelling, legal awareness, and zero waste projects.",
  "October 27–28, 2026",
  "Social Sciences Block, KRMU Campus",
  "/ideas/extension",
);

export default function ExtensionPage() {
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
              name: "Extension",
              url: "https://ideas.krmangalam.edu.in/ideas/extension",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#07393c] via-[#07393c]/85 to-[#333533] text-white pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex font-poppins items-center gap-2 text-white hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to IDEAS
          </Link>

          <div className="max-w-[1440px] mx-auto text-center">
            <div className="text-8xl mb-6">🌱</div>
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
              Extension
            </h1>
            <p className="text-xl md:text-2xl font-serif text-white mb-8">
              Connecting academia with community & industry
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
                <span>Social Sciences Block, KRMU Campus</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>450+ Participants</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12">
        <div className="max-w-[1440px] mx-auto">
          {/* Description */}
          <Card className="mb-12  border-none !bg-transparent shadow-none">
            <CardContent>
              <h2 className="text-2xl font-bold font-serif text-gray-900 mb-4 flex items-center gap-2">
                <Target className="text-primary" />
                About Extension Track
              </h2>
              <p className="text-black text-[16px] leading-relaxed">
                {trackData.description}
              </p>
            </CardContent>
          </Card>

          {/* Showcase Items */}
          <div>
            <h2 className="text-[38px] font-serif font-bold text-gray-900 mb-8 text-center">
              Featured Events
            </h2>
            <div className="grid md:grid-cols-4  gap-6">
              {trackData.showcaseItems.map((item, idx) => (
                <Card
                  key={idx}
                  className=" hover:shadow-lg transition-shadow overflow-hidden !bg-white border border-[#07393c]/30"
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
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-black/80 text-[15px] font-normal font-poppins">
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
                  className="px-4 py-[6px] font-poppins bg-[#07393c]/5 text-[#07393c] rounded-full text-sm font-medium"
                >
                  {event}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-br from-[#07393c] to-[#333533] text-white border-0 shadow-xl">
              <CardContent className="p-8 md:p-10">
                <h2 className="text-2xl font-bold font-serif mb-4 text-white">
                  Extend Your Impact
                </h2>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Connect your academic work with real-world applications on
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
