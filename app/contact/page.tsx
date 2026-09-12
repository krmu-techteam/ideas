"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone, Send, Globe, Share2 } from "lucide-react"
import LazyMap from "@/components/lazy-map"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:admissions@krmangalam.edu.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen !bg-white pt-28 md:pt-32 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-deepBlue-dark mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with the IDEAS team at K.R. Mangalam University. We're here to help with your innovation journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="self-start"
          >
            <Card className="shadow-xl border border-slate-200/80 !bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-deepBlue-dark mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-2 border-gray-200 focus:border-primary !bg-white text-gray-900"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-2 border-gray-200 focus:border-primary !bg-white text-gray-900"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-primary !bg-white text-gray-900"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-primary min-h-32 !bg-white text-gray-900"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="shadow-xl border border-slate-200/80 !bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-deepBlue-dark mb-6">Contact &amp; Location</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600 leading-relaxed font-medium">
                        Sohna Road, Gurugram, Delhi-NCR, Haryana
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Landline</h3>
                      <a
                        href="tel:01242867800"
                        className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
                      >
                        0124-2867800
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Helpline Numbers</h3>
                      <p className="text-gray-600 leading-relaxed font-semibold">
                        <a href="tel:08800697010" className="text-primary hover:underline transition-colors">08800697010-15</a>
                        {" | "}
                        <a href="tel:8192888444" className="text-primary hover:underline transition-colors">8192888444</a>
                        {" | "}
                        <a href="tel:8800697012" className="text-primary hover:underline transition-colors">8800697012</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Globe className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                      <a
                        href="https://www.krmangalam.edu.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
                      >
                        www.krmangalam.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Admissions Email</h3>
                      <a
                        href="mailto:admissions@krmangalam.edu.in"
                        className="text-primary hover:text-primary/80 transition-colors duration-300 font-semibold"
                      >
                        admissions@krmangalam.edu.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                      <Share2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Social Media</h3>
                      <p className="text-gray-700 leading-relaxed font-medium mb-2">
                        <a
                          href="https://www.instagram.com/krmuniv/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-semibold"
                        >
                          @krmuniv
                        </a>{" "}
                        (Facebook, Instagram) |{" "}
                        <a
                          href="https://www.linkedin.com/school/k-r-mangalam-university"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-semibold"
                        >
                          K.R. Mangalam University
                        </a>{" "}
                        (LinkedIn, YouTube)
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href="https://www.facebook.com/krmuniv/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded font-semibold transition-colors"
                        >
                          Facebook
                        </a>
                        <a
                          href="https://www.instagram.com/krmuniv/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 bg-pink-50 text-pink-700 hover:bg-pink-100 rounded font-semibold transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="https://www.linkedin.com/school/k-r-mangalam-university"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 bg-blue-50 text-blue-800 hover:bg-blue-100 rounded font-semibold transition-colors"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://www.youtube.com/@KRMangalamUniversity"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-2.5 py-1 bg-red-50 text-red-700 hover:bg-red-100 rounded font-semibold transition-colors"
                        >
                          YouTube
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="shadow-xl border border-slate-200/80 !bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-deepBlue-dark mb-6">Find Us</h2>
                <LazyMap
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.5273481073584!2d77.06725831508!3d28.472450982474074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e42d1b%3A0x883db670513d7be5!2sK.R.%20Mangalam%20University!5e0!3m2!1sen!2sin!4v1635764235840!5m2!1sen!2sin"
                  title="K.R. Mangalam University Location"
                  className="aspect-video w-full rounded-lg overflow-hidden border border-slate-200"
                />
                <div className="mt-4 text-center">
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <a
                      href="https://maps.google.com/?q=K.R.+Mangalam+University,+Sohna+Road,+Gurugram,+Haryana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin size={16} />
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="shadow-xl border border-slate-200/80 !bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-deepBlue-dark mb-4">Join the Innovation Revolution</h2>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                IDEAS is more than just an event - it's a platform for transforming innovative ideas into reality.
                Whether you're a student, entrepreneur, or industry professional, we welcome you to be part of our journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90"
                >
                  <a href="/register">Register for IDEAS 4.0</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <a href="/all-events">View All Events</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
