import { Metadata } from "next";
import Faq from "@/components/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | IDEAS 4.0 | K.R. Mangalam University",
  description:
    "Find answers to common questions about IDEAS 4.0 fest, competitions, registration, eligibility, schedule, and guidelines at K.R. Mangalam University.",
  keywords: [
    "IDEAS 4.0 FAQ",
    "KRMU fest questions",
    "registration help",
    "hackathon rules",
    "eligibility",
  ],
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#fffefb] text-[#14100b]">
      {/* Dedicated Page Hero */}
      <section className="bg-[#f4ede1] pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-[#ea580c] mb-3 flex items-center gap-2">
            <span>IDEAS 4.0</span>
            <span className="text-[#ea580c]/50">·</span>
            <span>K.R. MANGALAM UNIVERSITY</span>
            <span className="text-[#ea580c]/50">·</span>
            <span>SUPPORT</span>
          </div>

          <h1 className="font-serif text-[clamp(34px,5.4vw,64px)] font-bold leading-[1.04] tracking-[-0.025em] text-[#14100b] text-balance">
            Frequently Asked
            <br />
            <span className="italic font-serif font-normal text-[#ea580c]">
              Questions
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-[#6b6357]">
            Answers to what participants ask most — registration, categories,
            team formation, what to bring, and what winners take home.
          </p>
        </div>
      </section>

      {/* Accordion Component */}
      <Faq />
    </main>
  );
}
