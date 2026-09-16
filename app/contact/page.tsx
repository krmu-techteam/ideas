"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Mail, Phone, Send, Globe, Share2 } from "lucide-react";
import LazyMap from "@/components/lazy-map";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:admissions@krmangalam.edu.in?subject=${encodeURIComponent(
      formData.subject,
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-[#fffefb] text-[#14100b] selection:bg-[#E11E45]/20 selection:text-[#E11E45]">
      {/* 1. Hero Section - HackIndia Header Aesthetic (100% User Content Only) */}
      <section className="bg-[#f4ede1] pt-28 pb-12 sm:pt-36 sm:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[9in]"
          >
            {/* Kicker */}
            <div className="font-mono text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E11E45] mb-3 flex items-center gap-2">
              <span>IDEAS 4.0</span>
              <span className="text-[#E11E45]/50">·</span>
              <span>K.R. MANGALAM UNIVERSITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(34px,5.4vw,64px)] font-bold leading-[1.04] tracking-[-0.025em] text-[#14100b] text-balance">
              Contact{" "}
              <span className="italic font-serif font-normal text-[#E11E45]">
                Us
              </span>
            </h1>

            {/* Lede Subtitle (User's Exact Text) */}
            <p className="mt-4 max-w-2xl text-[16px] sm:text-[17px] leading-[1.65] text-[#6b6357]">
              Get in touch with the IDEAS team at K.R. Mangalam University.
              We're here to help with your innovation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Section: Send us a Message + Contact Information */}
      <section className="bg-[#fffefb] py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Contact Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-[6px] p-6 sm:p-8 border border-[#e7ded1] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="mb-6 pb-4 border-b border-[#e7ded1]">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E11E45] mb-1">
                    GET IN TOUCH
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14100b]">
                    Send us a Message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-[13px] font-semibold text-[#14100b]"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        style={{ outline: "none" }}
                        className="h-11 w-full rounded-[6px] border border-[#e7ded1] bg-[#fffefb] px-3.5 text-[14px] text-[#14100b] placeholder:text-[#8c8273] shadow-2xs outline-none focus:outline-none focus-visible:outline-none focus:border-[#E11E45] focus-visible:border-[#E11E45] focus:ring-1 focus:ring-[#E11E45] focus-visible:ring-1 focus-visible:ring-[#E11E45] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-semibold text-[#14100b]"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        style={{ outline: "none" }}
                        className="h-11 w-full rounded-[6px] border border-[#e7ded1] bg-[#fffefb] px-3.5 text-[14px] text-[#14100b] placeholder:text-[#8c8273] shadow-2xs outline-none focus:outline-none focus-visible:outline-none focus:border-[#E11E45] focus-visible:border-[#E11E45] focus:ring-1 focus:ring-[#E11E45] focus-visible:ring-1 focus-visible:ring-[#E11E45] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-[13px] font-semibold text-[#14100b]"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What is this regarding?"
                      style={{ outline: "none" }}
                      className="h-11 w-full rounded-[6px] border border-[#e7ded1] bg-[#fffefb] px-3.5 text-[14px] text-[#14100b] placeholder:text-[#8c8273] shadow-2xs outline-none focus:outline-none focus-visible:outline-none focus:border-[#E11E45] focus-visible:border-[#E11E45] focus:ring-1 focus:ring-[#E11E45] focus-visible:ring-1 focus-visible:ring-[#E11E45] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-semibold text-[#14100b]"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      style={{ outline: "none" }}
                      className="w-full rounded-[6px] border border-[#e7ded1] bg-[#fffefb] p-3.5 text-[14px] leading-[1.6] text-[#14100b] placeholder:text-[#8c8273] shadow-2xs outline-none focus:outline-none focus-visible:outline-none focus:border-[#E11E45] focus-visible:border-[#E11E45] focus:ring-1 focus:ring-[#E11E45] focus-visible:ring-1 focus-visible:ring-[#E11E45] transition-colors resize-y min-h-[140px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="font-serif h-11 w-full rounded-[3px] bg-[#E11E45] hover:bg-[#c2410c] text-white font-semibold text-[15px] transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Contact Information (5 Cols) - Exact User Content */}
            <div className="lg:col-span-5 bg-white rounded-[6px] p-6 sm:p-8 border border-[#e7ded1] shadow-2xs flex flex-col justify-between">
              <div>
                <div className="mb-6 pb-4 border-b border-[#e7ded1]">
                  <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E11E45] mb-1">
                    CAMPUS DESK
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[#14100b]">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3.5 p-3 rounded-[6px] bg-[#f4ede1]/60 border border-[#e7ded1]">
                    <div className="w-9 h-9 rounded-[4px] bg-white text-[#E11E45] border border-[#e7ded1] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <MapPin size={17} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#14100b] text-sm mb-0.5">
                        Address
                      </h3>
                      <p className="text-[#6b6357] text-xs sm:text-sm">
                        Sohna Road, Gurugram, Delhi-NCR, Haryana
                      </p>
                    </div>
                  </div>

                  {/* Landline */}
                  <div className="flex items-start gap-3.5 p-3 rounded-[6px] bg-[#f4ede1]/60 border border-[#e7ded1]">
                    <div className="w-9 h-9 rounded-[4px] bg-white text-[#E11E45] border border-[#e7ded1] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Phone size={17} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#14100b] text-sm mb-0.5">
                        Landline
                      </h3>
                      <a
                        href="tel:01242867800"
                        className="text-[#E11E45] hover:underline transition-colors font-semibold text-xs sm:text-sm"
                      >
                        0124-2867800
                      </a>
                    </div>
                  </div>

                  {/* Helpline Numbers */}
                  <div className="flex items-start gap-3.5 p-3 rounded-[6px] bg-[#f4ede1]/60 border border-[#e7ded1]">
                    <div className="w-9 h-9 rounded-[4px] bg-white text-[#E11E45] border border-[#e7ded1] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Phone size={17} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#14100b] text-sm mb-0.5">
                        Helpline Numbers
                      </h3>
                      <p className="text-[#14100b] text-xs sm:text-sm font-semibold">
                        <a
                          href="tel:08800697010"
                          className="text-[#E11E45] hover:underline transition-colors"
                        >
                          08800697010-15
                        </a>
                        {" | "}
                        <a
                          href="tel:8192888444"
                          className="text-[#E11E45] hover:underline transition-colors"
                        >
                          8192888444
                        </a>
                        {" | "}
                        <a
                          href="tel:8800697012"
                          className="text-[#E11E45] hover:underline transition-colors"
                        >
                          8800697012
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Website */}
                  <div className="flex items-start gap-3.5 p-3 rounded-[6px] bg-[#f4ede1]/60 border border-[#e7ded1]">
                    <div className="w-9 h-9 rounded-[4px] bg-white text-[#E11E45] border border-[#e7ded1] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Globe size={17} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#14100b] text-sm mb-0.5">
                        Website
                      </h3>
                      <a
                        href="https://www.krmangalam.edu.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#14100b] hover:text-[#E11E45] underline transition-colors font-semibold text-xs sm:text-sm"
                      >
                        www.krmangalam.edu.in
                      </a>
                    </div>
                  </div>

                  {/* Admissions Email */}
                  <div className="flex items-start gap-3.5 p-3 rounded-[6px] bg-[#f4ede1]/60 border border-[#e7ded1]">
                    <div className="w-9 h-9 rounded-[4px] bg-white text-[#E11E45] border border-[#e7ded1] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Mail size={17} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-[#14100b] text-sm mb-0.5">
                        Admissions Email
                      </h3>
                      <a
                        href="mailto:admissions@krmangalam.edu.in"
                        className="text-[#E11E45] hover:underline transition-colors font-semibold text-xs sm:text-sm break-all"
                      >
                        admissions@krmangalam.edu.in
                      </a>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start gap-3.5 p-3 rounded-[6px] bg-[#f4ede1]/60 border border-[#e7ded1]">
                    <div className="w-9 h-9 rounded-[4px] bg-white text-[#E11E45] border border-[#e7ded1] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Share2 size={17} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-[#14100b] text-sm mb-1">
                        Social Media
                      </h3>
                      <p className="text-[#6b6357] text-xs leading-relaxed mb-2.5">
                        <a
                          href="https://www.instagram.com/krmuniv/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#E11E45] hover:underline font-semibold"
                        >
                          @krmuniv
                        </a>{" "}
                        (Facebook, Instagram) |{" "}
                        <a
                          href="https://www.linkedin.com/school/k-r-mangalam-university"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#E11E45] hover:underline font-semibold"
                        >
                          K.R. Mangalam University
                        </a>{" "}
                        (LinkedIn, YouTube)
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <a
                          href="https://www.facebook.com/krmuniv/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 rounded-[3px] bg-white hover:bg-[#f4ede1] text-[#14100b] border border-[#e7ded1] font-semibold transition-colors"
                        >
                          Facebook
                        </a>
                        <a
                          href="https://www.instagram.com/krmuniv/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 rounded-[3px] bg-white hover:bg-[#f4ede1] text-[#14100b] border border-[#e7ded1] font-semibold transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://www.linkedin.com/school/k-r-mangalam-university"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 rounded-[3px] bg-white hover:bg-[#f4ede1] text-[#14100b] border border-[#e7ded1] font-semibold transition-colors"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://www.youtube.com/@KRMangalamUniversity"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 rounded-[3px] bg-white hover:bg-[#f4ede1] text-[#14100b] border border-[#e7ded1] font-semibold transition-colors"
                        >
                          YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Campus Location Map Section (Find Us) - 100% User Content */}
      <section className="bg-[#f4ede1] py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E11E45] mb-1">
                LOCATION
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#14100b]">
                Find Us
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=K.R.+Mangalam+University,+Sohna+Road,+Gurugram,+Haryana"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-[3px] border border-[#14100b] bg-white text-[#14100b] hover:bg-[#14100b] hover:text-white px-4 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider transition-colors shadow-2xs"
            >
              <MapPin size={14} className="text-[#E11E45]" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="rounded-[6px] overflow-hidden border border-[#e7ded1] aspect-[16/9] sm:aspect-[21/9] w-full bg-white shadow-xs">
            <LazyMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5273481073584!2d77.06725831508!3d28.472450982474074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e42d1b%3A0x883db670513d7be5!2sK.R.%20Mangalam%20University!5e0!3m2!1sen!2sin!4v1635764235840!5m2!1sen!2sin"
              title="K.R. Mangalam University Location"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </section>

      {/* 4. Contrast Bottom Banner (Join the Innovation Revolution) - 100% User Content */}
      <section
        className="relative overflow-hidden py-16 sm:py-20 border-t border-[#e7ded1]"
        style={{ background: "#14100b" }}
      >
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E11E45] mb-3">
            IDEAS 4.0
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Join the Innovation Revolution
          </h2>

          <p className="text-white/80 text-sm sm:text-base mb-8 leading-relaxed max-w-2xl mx-auto font-normal">
            IDEAS is more than just an event - it's a platform for transforming
            innovative ideas into reality. Whether you're a student,
            entrepreneur, or industry professional, we welcome you to be part of
            our journey.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="/register"
              className="font-serif inline-flex items-center justify-center rounded-[3px] px-8 py-3 text-sm font-semibold transition-colors bg-[#E11E45] text-white hover:bg-[#c2410c] shadow-xs"
            >
              Register for IDEAS 4.0
            </a>

            <Link
              href="/all-events"
              className="font-serif inline-flex items-center justify-center rounded-[3px] px-8 py-3 text-sm font-semibold transition-colors border border-white/40 text-white hover:bg-white/10"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
