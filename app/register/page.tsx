"use client";

import type React from "react";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Redirect component to handle old registration URLs
function RedirectToSelection() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new selection page
    router.replace("/register/selection");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffefb] px-4">
      <div className="text-center p-8 bg-white border border-[#e7ded1] rounded-2xl shadow-xs max-w-sm w-full">
        <div className="w-14 h-14 rounded-2xl bg-[#E11E45]/10 border border-[#E11E45]/20 text-[#E11E45] flex items-center justify-center mx-auto mb-4 shadow-xs">
          <div className="w-7 h-7 border-2 border-[#E11E45] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h2 className="font-serif text-lg font-bold text-[#14100b] mb-1">
          Redirecting to Registration
        </h2>
        <p className="text-xs text-[#6b6357]">
          Please wait a moment...
        </p>
      </div>
    </div>
  );
}

const EVENTS_DATA = {
  innovation: {
    title: "Innovation",
    subtitle: "Encouraging creative and technology-driven solutions",
    date: "October 27–28, 2026",
    venue: "Sohna Road, Gurugram, Delhi-NCR, Haryana",
    events: [
      { slug: "ai-robotics", title: "AI & Robotics Showcase" },
      { slug: "app-development", title: "App Development Workshop" },
      { slug: "iot-hackathon", title: "IoT Hackathon" },
    ],
  },
  distinctiveness: {
    title: "Distinctiveness",
    subtitle: "Showcasing unique approaches and best practices",
    date: "October 27–28, 2026",
    venue: "Design Block, KRMU Campus",
    events: [
      { slug: "design-thinking", title: "Design Thinking Workshop" },
      { slug: "problem-solving", title: "Creative Problem-Solving" },
      { slug: "teaching-methods", title: "Innovative Teaching Methods" },
    ],
  },
  extension: {
    title: "Extension",
    subtitle:
      "Expanding learning beyond the classroom into practical applications",
    date: "November 7, 2025",
    venue: "Social Sciences Block, KRMU Campus",
    events: [
      { slug: "community-service", title: "Community Service Projects" },
      { slug: "industry-academia", title: "Industry-Academia Collaboration" },
      { slug: "field-research", title: "Field Research Presentations" },
    ],
  },
  achievements: {
    title: "Achievements",
    subtitle: "Recognizing and rewarding excellence",
    date: "November 7, 2025",
    venue: "Main Auditorium, KRMU Campus",
    events: [
      { slug: "excellence-awards", title: "Excellence Awards" },
      { slug: "research-publication", title: "Research Publication Showcase" },
      { slug: "patent-exhibition", title: "Patent Exhibition" },
    ],
  },
  "skill-based": {
    title: "Skill-Based Learning",
    subtitle: "Enhancing hands-on expertise across disciplines",
    date: "October 27–28, 2026",
    venue: "Various Locations, KRMU Campus",
    events: [
      { slug: "skill-development", title: "Skill Development Workshops" },
      { slug: "technical-training", title: "Technical Training Bootcamp" },
      { slug: "hands-on-learning", title: "Hands-on Learning Exhibition" },
    ],
  },
};

type EventDataType = (typeof EVENTS_DATA)[keyof typeof EVENTS_DATA];
type FlattenedEventType = {
  slug: string;
  title: string;
  category: string;
  categoryTitle: string;
  date: string;
  venue: string;
};

const flattenedEvents: Record<string, FlattenedEventType> = Object.entries(
  EVENTS_DATA,
).reduce(
  (acc, [category, data]) => {
    data.events.forEach((event) => {
      acc[`${category}/${event.slug}`] = {
        ...event,
        category,
        categoryTitle: data.title,
        date: data.date,
        venue: data.venue,
      };
    });
    return acc;
  },
  {} as Record<string, FlattenedEventType>,
);

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const eventParam = searchParams.get("event");
  const typeParam = searchParams.get("type");

  // Redirect old registration URLs to the new selection page
  useEffect(() => {
    // If there's an event parameter (old URL structure), redirect to selection page
    if (eventParam) {
      router.replace("/register/selection");
    }
  }, [eventParam, router]);

  // Show loading state while redirecting
  if (eventParam) {
    return <RedirectToSelection />;
  }

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    organizationType: typeParam === "school" ? "school" : "university",
    course: "",
    address: "",
    hostelRequired: false,
    whatsappGroup: true,
    selectedEvent: eventParam || "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [qrCode, setQrCode] = useState("");
  const [noEventSelected, setNoEventSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!eventParam) {
      router.replace("/register/selection");
    }
  }, [eventParam, router]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSelectChange = useCallback((name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCheckboxChange = useCallback((name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  }, []);

  const generateWhatsAppQR = useCallback((phone: string, event = "") => {
    const eventDetails =
      event && flattenedEvents[event]
        ? `${flattenedEvents[event].categoryTitle} - ${flattenedEvents[event].title}`
        : event;
    const message = eventDetails
      ? `IDEAS 4.0 Registration for ${eventDetails}`
      : "IDEAS 4.0 Registration";
    const whatsappLink = `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappLink)}`;
  }, []);

  useEffect(() => {
    if (formData.phone && formData.whatsappGroup) {
      setQrCode(generateWhatsAppQR(formData.phone, formData.selectedEvent));
    }
  }, [
    formData.phone,
    formData.whatsappGroup,
    formData.selectedEvent,
    generateWhatsAppQR,
  ]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      if (formData.whatsappGroup && formData.phone) {
        setQrCode(generateWhatsAppQR(formData.phone, formData.selectedEvent));
      }

      // Simulate submission
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);
    },
    [formData, generateWhatsAppQR],
  );

  const nextStep = useCallback(() => {
    if (step === 1 && !formData.selectedEvent) {
      setNoEventSelected(true);
      return;
    }
    setStep((prev) => prev + 1);
  }, [step, formData.selectedEvent]);

  const prevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const selectedEventDetails =
    formData.selectedEvent && flattenedEvents[formData.selectedEvent]
      ? {
          title: flattenedEvents[formData.selectedEvent].title,
          categoryTitle: flattenedEvents[formData.selectedEvent].categoryTitle,
          date: flattenedEvents[formData.selectedEvent].date,
          venue: flattenedEvents[formData.selectedEvent].venue,
        }
      : null;

  if (!eventParam) {
    return null;
  }

  if (noEventSelected) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2">
              Select an Event to Register
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please select an event from the list below to continue with
              registration
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {Object.entries(EVENTS_DATA).map(([category, data]) => (
                    <div
                      key={category}
                      className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
                    >
                      <h2 className="text-xl font-bold text-deepBlue-dark mb-2">
                        {data.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{data.subtitle}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data.events.map((event) => (
                          <Card
                            key={event.slug}
                            className="hover:shadow-md transition-shadow"
                          >
                            <CardContent className="p-4">
                              <h3 className="font-medium text-deepBlue-dark mb-2">
                                {event.title}
                              </h3>
                              <div className="text-xs text-gray-500 mb-3">
                                {data.date} | {data.venue}
                              </div>
                              <Button
                                asChild
                                className="w-full bg-primary hover:bg-primary/90"
                              >
                                <Link
                                  href={`/register?event=${category}/${event.slug}`}
                                >
                                  Select & Register
                                </Link>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-between">
                  <Button asChild variant="outline">
                    <Link href="/all-events">
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2">
            Register for IDEAS <span className="text-primary">4.0</span>
          </h1>
          {selectedEventDetails ? (
            <div>
              <p className="text-xl text-primary font-semibold mb-1">
                {selectedEventDetails.categoryTitle}:{" "}
                {selectedEventDetails.title}
              </p>
              <p className="text-gray-600">
                {selectedEventDetails.date} | {selectedEventDetails.venue}
              </p>
            </div>
          ) : (
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us on October 27–28, 2026 for an exciting two-day event
              showcasing innovation and creativity
            </p>
          )}
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <Card>
              <CardContent className="p-6">
                {/* Progress indicator */}
                <div className="mb-8">
                  <div className="flex justify-between">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step >= i
                              ? "bg-primary text-white"
                              : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {step > i ? <Check size={20} /> : i}
                        </div>
                        <div className="text-xs mt-2 text-gray-500">
                          {i === 1
                            ? "Personal Info"
                            : i === 2
                              ? "Event Details"
                              : "Confirmation"}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="relative mt-2">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200"></div>
                    <div
                      className="absolute top-0 left-0 h-1 bg-primary transition-all duration-300"
                      style={{ width: `${(step - 1) * 50}%` }}
                    ></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Information */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <Label>Organization Type</Label>
                          <RadioGroup
                            value={formData.organizationType}
                            onValueChange={(value: string) =>
                              handleSelectChange("organizationType", value)
                            }
                            className="flex flex-col space-y-1 mt-2"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="university"
                                id="university"
                              />
                              <Label htmlFor="university">
                                University/College
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="school" id="school" />
                              <Label htmlFor="school">School</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div>
                          <Label htmlFor="organization">
                            Organization Name
                          </Label>
                          <Input
                            id="organization"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="course">Course/Class</Label>
                          <Input
                            id="course"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => router.push("/all-events")}
                        >
                          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-primary hover:bg-primary/90"
                          disabled={isLoading}
                        >
                          Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Event Selection */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <Label htmlFor="event">Selected Event</Label>
                        {selectedEventDetails ? (
                          <div className="mt-2 p-4 bg-gray-50 rounded-md">
                            <div className="font-medium text-deepBlue-dark">
                              {selectedEventDetails.title}
                            </div>
                            <div className="text-sm text-gray-600">
                              Category: {selectedEventDetails.categoryTitle}
                            </div>
                            <div className="text-sm text-gray-600">
                              {selectedEventDetails.date} |{" "}
                              {selectedEventDetails.venue}
                            </div>
                            <Button
                              variant="link"
                              className="text-primary p-0 h-auto text-sm"
                              onClick={() => {
                                setNoEventSelected(true);
                                router.push("/register");
                              }}
                            >
                              Change Event
                            </Button>
                          </div>
                        ) : null}
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="hostel"
                            checked={formData.hostelRequired}
                            onCheckedChange={(
                              checked: boolean | "indeterminate",
                            ) =>
                              handleCheckboxChange(
                                "hostelRequired",
                                checked === true,
                              )
                            }
                          />
                          <div>
                            <Label htmlFor="hostel" className="font-normal">
                              I require hostel accommodation (paid)
                            </Label>
                            <p className="text-sm text-gray-500">
                              Available for outstation participants
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox
                            id="whatsapp"
                            checked={formData.whatsappGroup}
                            onCheckedChange={(
                              checked: boolean | "indeterminate",
                            ) =>
                              handleCheckboxChange(
                                "whatsappGroup",
                                checked === true,
                              )
                            }
                          />
                          <div>
                            <Label htmlFor="whatsapp" className="font-normal">
                              Join WhatsApp group for updates
                            </Label>
                            <p className="text-sm text-gray-500">
                              Receive important announcements and updates
                            </p>
                          </div>
                        </div>
                      </div>

                      {formData.phone && formData.whatsappGroup && qrCode && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md">
                          <h4 className="text-sm font-medium mb-2">
                            WhatsApp QR Code
                          </h4>
                          <div className="flex justify-center">
                            <img
                              src={qrCode || "/placeholder.svg"}
                              alt="WhatsApp QR Code"
                              className="w-32 h-32"
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-2 text-center">
                            Scan this code to join our WhatsApp group
                          </p>
                        </div>
                      )}

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          disabled={isLoading}
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="bg-primary hover:bg-primary/90"
                          disabled={isLoading}
                        >
                          Next <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Confirmation */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-lg font-medium mb-4">
                          Confirm Your Registration
                        </h3>
                        <div className="space-y-4 bg-gray-50 p-4 rounded-md">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm font-medium">Name:</div>
                            <div className="text-sm">{formData.name}</div>

                            <div className="text-sm font-medium">Email:</div>
                            <div className="text-sm">{formData.email}</div>

                            <div className="text-sm font-medium">Phone:</div>
                            <div className="text-sm">{formData.phone}</div>

                            <div className="text-sm font-medium">
                              Organization:
                            </div>
                            <div className="text-sm">
                              {formData.organization}
                            </div>

                            <div className="text-sm font-medium">
                              Course/Class:
                            </div>
                            <div className="text-sm">{formData.course}</div>
                          </div>

                          {selectedEventDetails && (
                            <div>
                              <div className="text-sm font-medium mb-1">
                                Selected Event:
                              </div>
                              <div className="text-sm">
                                <span className="font-medium">
                                  {selectedEventDetails.categoryTitle}:{" "}
                                  {selectedEventDetails.title}
                                </span>
                              </div>
                              <div className="text-sm">
                                {selectedEventDetails.date} |{" "}
                                {selectedEventDetails.venue}
                              </div>
                            </div>
                          )}

                          {formData.hostelRequired && (
                            <div className="text-sm">
                              <span className="font-medium">
                                Hostel Required:
                              </span>{" "}
                              Yes
                            </div>
                          )}

                          {formData.whatsappGroup && (
                            <div className="text-sm">
                              <span className="font-medium">
                                WhatsApp Group:
                              </span>{" "}
                              Yes
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="font-normal text-sm">
                          I agree to the{" "}
                          <Link
                            href="/terms"
                            className="text-primary hover:underline"
                          >
                            Terms and Conditions
                          </Link>{" "}
                          and{" "}
                          <Link
                            href="/privacy"
                            className="text-primary hover:underline"
                          >
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex justify-between">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          disabled={isLoading}
                        >
                          Back
                        </Button>
                        <Button
                          type="submit"
                          className="bg-primary hover:bg-primary/90"
                          disabled={isLoading}
                        >
                          {isLoading
                            ? "Submitting..."
                            : "Complete Registration"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </form>
              </CardContent>
            </Card>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-deepBlue-dark mb-2">
                    Registration Successful!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for registering for IDEAS 4.0. We&apos;ve sent a
                    confirmation email to {formData.email} with all the details.
                  </p>

                  {selectedEventDetails && (
                    <div className="mb-6 bg-gray-50 p-4 rounded-md">
                      <h3 className="text-lg font-medium mb-2">
                        Event Details
                      </h3>
                      <p className="font-medium text-primary">
                        {selectedEventDetails.categoryTitle}:{" "}
                        {selectedEventDetails.title}
                      </p>
                      <p className="text-gray-600">
                        {selectedEventDetails.date} |{" "}
                        {selectedEventDetails.venue}
                      </p>
                    </div>
                  )}

                  {qrCode && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-2">
                        Join WhatsApp Group
                      </h3>
                      <div className="flex justify-center">
                        <img
                          src={qrCode || "/placeholder.svg"}
                          alt="WhatsApp QR Code"
                          className="w-40 h-40"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-2">
                        Scan this QR code with your phone to join our WhatsApp
                        group for updates
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link href="/all-events">Back to Events</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/">Return to Home</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
