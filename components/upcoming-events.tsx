"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  User,
  Phone,
  Mail,
  Users,
  Trophy,
  FileText,
  Target,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getSpotlightEvents, type EventItem } from "@/lib/data/events";

// Transform EventItem to component's expected format
function transformEventData(events: EventItem[]) {
  return events.map((event, index) => {
    const firstSession = event.sessions[0] || {};

    // Parse guidelines from string to array
    const guidelines = firstSession.guidelines
      ? firstSession.guidelines.split("\n").filter((g) => g.trim())
      : [];

    return {
      id: index + 1,
      title: event.title,
      date: event.date || "October 27–28, 2026",
      time:
        firstSession.timeSlot || firstSession.startTime || event.time || "TBA",
      location: firstSession.venue || event.location || "TBA",
      description: event.description || "Event details coming soon",
      image: event.image || "/placeholder.svg",
      type: event.department || event.category || "EVENT",
      coordinator: firstSession.coordinator || "TBA",
      contactNumber:
        firstSession.contacts?.match(/\d{10,}/g)?.join(", ") || "TBA",
      email:
        firstSession.contacts?.match(/[\w.-]+@[\w.-]+\.\w+/g)?.join(", ") ||
        "TBA",
      venue: firstSession.venue || event.location || "TBA",
      guidelines: guidelines,
      evaluation:
        firstSession.evaluation ||
        event.evaluation ||
        "Details will be announced",
      teamSize:
        firstSession.teamSize ||
        event.teamSize ||
        firstSession.teamType ||
        "TBA",
      prize: firstSession.prize || event.prize || "Certificates for winners",
    };
  });
}

const upcomingEvents = transformEventData(getSpotlightEvents()).slice(0, 12); // Show first 12 spotlight events

// Fallback hardcoded data in case import fails
const fallbackEvents = [
  {
    id: 1,
    title: "Drone Obstacle Crossing",
    date: "October 27–28, 2026",
    time: "10:00 - 11:00 AM",
    location: "Tennis Court",
    description:
      "Test your flying skills as you guide drones through a series of tricky obstacles, a perfect mix of precision, control, and innovation in action.",
    image: "/assets/upcoming-events/up-ev-1.webp",
    type: "spotlight",
    coordinator: "Dr. Rakhi Dua & Dr. Digvijay",
    contactNumber: "+91-9311260482, +91-9266964359",
    email: "rakhi.dua@krmangalam.edu.in, digvijay.singh@krmangalam.edu.in",
    venue: "Tennis Court",
    guidelines: [
      "1.Drones may be manual remote-controlled.",
      "2.Maximum size and weight will be specified by organizers (e.g., diagonal < 500 mm, weight < 2 kg).",
      "3.The obstacle course may include hoops or rings to fly through and zig-zag poles.",
      "4.Drones must follow the marked obstacle path without skipping.",
    ],
    evaluation:
      "1.Evaluation will be based on compact, efficient, and innovative design and precision in crossing the loops.\n\n2.Drone that reaches the destination first will win.",
    teamSize: "Team (3-5 members)",
    prize: "1st Prize: ₹5000 + Trophy, 2nd Prize: ₹3000 + Certificate",
  },
  {
    id: 2,
    title: "Crime Scene Investigation Game",
    date: "27-Oct-26",
    time: "10.00 -12.30 PM & 2-4 PM",
    location: "B Block Lobby Ground Floor",
    description:
      "These activities, such as scavenger hunts and crime scene investigations, are interactive and educational exercises that encourage teamwork, observation, and critical thinking. Participants search for hidden clues, solve puzzles, analyze evidence, and collaborate to reach a solution. They make learning fun while developing problem-solving, communication, and decision-making skills in an engaging, hands-on environment",
    image: "/assets/upcoming-events/up-ev-2.webp",
    type: "SBAS",
    coordinator: "Dr Sourabh and Mr Vaibhav",
    contactNumber: "TBA",
    email: "TBA",
    venue: "B Block Lobby Ground Floor",
    guidelines: [
      "1. Teams: Players must be divided into teams. Each team must stay together at all times during the hunt.",
      "2. Objective: Find all the hidden items or clues on the list. Complete any challenges or puzzles at each station. Be the first team to solve the final mystery or finish all tasks.",
      "3. Time Limit: All teams must complete the hunt within the designated time (e.g., 30–45 minutes).",
      "4. Clues and Evidence: Teams must collect or photograph all items/clues exactly as instructed. Handle items carefully; do not damage or remove permanent property.",
      "5. Teamwork: Team members must work together and share information. No helping or giving answers to other teams.",
    ],
    evaluation:
      "Be the first team to solve the final mystery or finish all tasks within the designated time.",
    teamSize: "SOLO",
    prize: "To be announced",
  },
  {
    id: 3,
    title: "Agritech – Smart Farming Models",
    date: "October 27–28, 2026",
    time: "10:00 - 11:00 AM",
    location: "C-306A",
    description:
      "Develop smart farming solutions using IoT, sensors, automation, and data analytics to revolutionize agriculture through technology.",
    image: "/assets/upcoming-events/up-ev-3.webp",
    type: "spotlight",
    coordinator: "Dr. Rabiya Basri & Dr. Jay Nath Patel",
    contactNumber: "+91-9876543210, +91-9876543211",
    email: "rabiya.basri@krmangalam.edu.in, jaynath.patel@krmangalam.edu.in",
    venue: "C-306A",
    guidelines: [
      "Model max 4 x 5 ft showcasing smart farming techniques",
      "Focus on improving crop yield, water efficiency, soil health, or pest management",
      "Create working prototypes or detailed models with clear technical specifications",
      "Include cost analysis and feasibility study for real-world implementation",
      "Demonstrate how the solution addresses specific agricultural challenges",
    ],
    evaluation:
      "Innovation in agricultural technology, novelty, feasibility, sustainability, and usefulness of the proposed solution.",
    teamSize: "Individual/Team (2 members)",
    prize: "1st Prize: ₹4000 + Trophy, 2nd Prize: ₹2500 + Certificate",
  },
  {
    id: 4,
    title: "Robots Race",
    date: "October 27–28, 2026",
    time: "10:00 - 11:00 AM",
    location: "Football Ground",
    description:
      "Robots enter the battlefield to prove their strength, design, and intelligence. Watch the ultimate clash of machines engineered by young minds.",
    image: "/assets/upcoming-events/up-ev-4.webp",
    type: "spotlight",
    coordinator: "Mr. Gaurav & Dr. Feroz",
    contactNumber: "+91-9910152655, +91-9717331253",
    email: "gaurav@krmangalam.edu.in, feroz.ahmed@krmangalam.edu.in",
    venue: "Football Ground",
    guidelines: [
      "1.Robot will be wireless.",
      "2.Maximum dimensions and weight will be specified by organizers (e.g., 30x30 cm, 5 kg).",
      "3.The race track will include turns, straight paths, obstacles, or ramps (announced in advance or revealed on the spot).",
      "4.Robots must follow the track without skipping checkpoints.",
      "5.Touching the robot during the run (except for an official reset) will result in penalty points or disqualification.",
    ],
    evaluation:
      "1.Evaluation will be based on the speed, design, navigation, and technical complexity of the design.\n\n2.The robot that completes the track first within the predefined time slot will win.",
    teamSize: "Team (3-5 members)",
    prize: "1st Prize: ₹4500 + Trophy, 2nd Prize: ₹2500 + Certificate",
  },
  {
    id: 5,
    title: "Gaming Arena",
    date: "October 27–28, 2026",
    time: "10:00 - 11:00 AM",
    location: "Football Ground",
    description:
      "Ultimate robot gaming challenge featuring Robot Soccer, Sumo Battle, and Task Arena. Compete in multiple game modes with your custom-built robots.",
    image: "/assets/upcoming-events/up-ev-5.webp",
    type: "spotlight",
    coordinator: "Mr. Rajesh & Dr. Sameer",
    contactNumber: "+91-9466967702, +91-6005031187",
    email: "rajesh.badrana@krmangalam.edu.in, sameer.farooq@krmangalam.edu.in",
    venue: "Football Ground",
    guidelines: [
      "1.Robot will be wireless.",
      "2.Maximum robot size and weight will be specified (e.g., 40x40 cm, 10 kg).",
      "3.The objective varies by event type: Robot Soccer – score maximum goals; Sumo Battle – push opponent out of arena; Task Arena – collect objects or complete missions fastest.",
      "4.Robots must remain inside the arena during gameplay. Leaving the arena results in penalty or disqualification.",
      "5.Each match will have a fixed time limit (e.g., 2–5 minutes).",
    ],
    evaluation:
      "1.Evaluation will be based on the speed, design, navigation, and technical complexity of the design.\n\n2.The robot that scores the maximum goals, pushes the opponent robot out of the arena, or picks the maximum objects within the predefined time slots will be the winner.",
    teamSize: "Team (3-5 members)",
    prize: "1st Prize: ₹4000 + Trophy, 2nd Prize: ₹2000 + Certificate",
  },
  {
    id: 6,
    title: "Zero Waste Innovation",
    date: "October 27–28, 2026",
    time: "11:00 AM - 12:00 PM",
    location: "SOLA Building",
    description:
      "Create innovative solutions for zero waste management. Design sustainable systems that eliminate waste and promote circular economy principles.",
    image: "/assets/upcoming-events/up-ev-6.webp",
    type: "spotlight",
    coordinator: "Dr. Varun Sharma & Ms. Rashmi",
    contactNumber: "+91-9717331253, +91-9811866008",
    email: "varun.sharma@krmangalam.edu.in, rashmi.dixit@krmangalam.edu.in",
    venue: "SOLA Building",
    guidelines: [
      "1.Develop innovative zero waste management solutions.",
      "2.Focus on waste reduction, reuse, and recycling technologies.",
      "3.Create prototypes or detailed models with clear implementation plans.",
      "4.Include an environmental impact assessment highlighting measurable outcomes.",
      "5.Present cost-effective and scalable solutions suitable for real-world adoption.",
    ],
    evaluation:
      "1.Innovation and creativity of the solution.\n\n2.Environmental impact and sustainability.\n\n3.Feasibility and scalability of implementation.\n\n4.Clarity and effectiveness of presentation.",
    teamSize: "Individual/Team (2-4 members)",
    prize: "1st Prize: INR 3500 + Trophy, 2nd Prize: INR 2000 + Certificate",
  },
  {
    id: 7,
    title: "Chemistry: Real Magic",
    date: "October 27–28, 2026",
    time: "11:00 AM - 12:00 PM",
    location: "Chemistry Lab",
    description:
      "Witness the magic of chemistry through spectacular experiments and demonstrations. Explore the wonders of chemical reactions and their real-world applications.",
    image: "/assets/upcoming-events/up-ev-7.webp",
    type: "spotlight",
    coordinator: "Dr. Priya Sharma & Dr. Anil Kumar",
    contactNumber: "+91-9910467831, +91-9811866008",
    email: "priya.sharma@krmangalam.edu.in, anil.kumar@krmangalam.edu.in",
    venue: "Chemistry Lab",
    guidelines: [
      "1.Demonstrate spectacular chemistry experiments safely.",
      "2.Explain the scientific principles behind each experiment in clear language.",
      "3.Use only approved chemicals, equipment, and personal protective gear.",
      "4.Ensure each experiment highlights real-world applications or learning outcomes.",
      "5.Follow all laboratory safety protocols throughout the demonstration.",
    ],
    evaluation:
      "1.Scientific accuracy and clarity of explanation.\n\n2.Creativity and originality of demonstrations.\n\n3.Safety compliance and lab discipline.\n\n4.Audience engagement and presentation quality.",
    teamSize: "Team (2-3 members)",
    prize: "1st Prize: INR 3000 + Trophy, 2nd Prize: INR 1500 + Certificate",
  },
  {
    id: 8,
    title: "Business Quiz",
    date: "October 27–28, 2026",
    time: "11:00 AM - 12:00 PM",
    location: "C-415",
    description:
      "Test your business acumen and knowledge in this comprehensive quiz covering various aspects of business, economics, and entrepreneurship.",
    image: "/assets/upcoming-events/up-ev-8.webp",
    type: "spotlight",
    coordinator: "Dr. Sarina Asif",
    contactNumber: "+91-9580962524",
    email: "sarina.asif@krmangalam.edu.in",
    venue: "C-415",
    guidelines: [
      "Quiz includes both Google form and printed questions",
      "Covers business fundamentals, current affairs, and case studies",
      "Multiple rounds with increasing difficulty",
      "No external resources or devices allowed",
      "Team collaboration encouraged for group rounds",
    ],
    evaluation:
      "Accuracy of answers and speed of completion. Comprehensive business knowledge assessment.",
    teamSize: "Team (4 members, Max 15 teams)",
    prize:
      "1st Prize: ₹3000 + Trophy, 2nd Prize: ₹1500 + Certificate, 3rd Prize: ₹1000 + Certificate",
  },
  {
    id: 9,
    title: "React to the Situation",
    date: "October 27–28, 2026",
    time: "10:00 - 11:00 AM",
    location: "A-309",
    description:
      "Challenge your creativity and storytelling skills with image-based story writing. Develop compelling narratives that capture emotions and scenarios.",
    image: "/assets/upcoming-events/up-ev-9.webp",
    type: "spotlight",
    coordinator: "Dr. Tijender & Dr. Arti Sharma",
    contactNumber: "+91-6230504369, +91-9899073342",
    email:
      "tijender.kumarsingh@krmangalam.edu.in, arti.sharma@krmangalam.edu.in",
    venue: "A-309",
    guidelines: [
      "Timed image-based story writing exercise",
      "Answer key questions: What's happening? Character feelings/goals? Next outcome? Overall mood?",
      "Images displayed for limited time (3-5 minutes per image)",
      "Focus on spontaneous and authentic responses",
      "Write compelling narratives that capture the essence of each scene",
    ],
    evaluation:
      "Coherence of story, descriptive detail, creativity in interpretation, and coverage of all guideline requirements.",
    teamSize: "Individual",
    prize: "1st Prize: ₹2500 + Trophy, 2nd Prize: ₹1500 + Certificate",
  },
  {
    id: 10,
    title: "Soap Carving – Carved Expression",
    date: "October 27–28, 2026",
    time: "11:00 AM - 12:00 PM",
    location: "SOAD Building",
    description:
      "Transform ordinary soap bars into extraordinary sculptures. Showcase your artistic skills through intricate carving and creative expression.",
    image: "/assets/upcoming-events/up-ev-10.webp",
    type: "spotlight",
    coordinator: "SOAD Faculty Team",
    contactNumber: "+91-9876543214",
    email: "soad@krmangalam.edu.in",
    venue: "SOAD Building",
    guidelines: [
      "Soap bars and basic carving tools will be provided",
      "Create original artistic designs and sculptures",
      "Focus on creativity, precision, and artistic expression",
      "Time limit: 90 minutes for completion",
      "Safety guidelines must be followed while using carving tools",
      "Final pieces will be judged on artistic merit and technical skill",
    ],
    evaluation:
      "Artistic creativity, technical precision, originality of design, and overall aesthetic appeal of the carved piece.",
    teamSize: "Individual",
    prize:
      "1st Prize: Art Supplies Kit + Certificate, 2nd Prize: ₹1000 + Certificate",
  },
  {
    id: 11,
    title: "Ad Mad Show",
    date: "October 27–28, 2026",
    time: "9:00 - 10:00 AM",
    location: "C-416",
    description:
      "Create compelling advertisements that capture attention and convey powerful messages. Showcase your marketing creativity and presentation skills.",
    image: "/assets/upcoming-events/up-ev-11.webp",
    type: "spotlight",
    coordinator: "Dr. Anumeha Mathur",
    contactNumber: "+91-9998249600",
    email: "anumeha.mathur@krmangalam.edu.in",
    venue: "C-416",
    guidelines: [
      "Theme-based advertisement creation with provided art supplies",
      "Focus on creativity, clarity, and effective message delivery",
      "Teams can create print ads, video concepts, or live presentations",
      "Use visual elements, catchy slogans, and persuasive content",
      "Present your advertisement to the judging panel",
      "Time limit: 45 minutes for creation, 3 minutes for presentation",
    ],
    evaluation:
      "Creativity and innovation, clarity of message, visual appeal, presentation quality, and audience engagement.",
    teamSize: "Team (4 members, Max 15 teams)",
    prize:
      "1st Prize: ₹4000 + Trophy, 2nd Prize: ₹2500 + Certificate, 3rd Prize: ₹1500 + Certificate",
  },
  {
    id: 12,
    title: "Debate Competition",
    date: "October 27–28, 2026",
    time: "10:00 - 11:00 AM",
    location: "SOLA Auditorium",
    description:
      "Engage in intellectual discourse and showcase your argumentation skills. Defend your stance on contemporary topics with logic and eloquence.",
    image: "/assets/upcoming-events/up-ev-12.webp",
    type: "spotlight",
    coordinator: "SOLA Debate Team",
    contactNumber: "+91-9876543215",
    email: "debate@krmangalam.edu.in",
    venue: "SOLA Auditorium",
    guidelines: [
      "Formal debate format with assigned topics",
      "Participants get 15 minutes preparation time",
      "Each speaker gets 3-4 minutes for opening statements",
      "Followed by rebuttals and cross-examinations",
      "Focus on logical argumentation, factual evidence, and persuasive delivery",
      "Maintain respectful discourse throughout the debate",
    ],
    evaluation:
      "Strength of arguments, factual accuracy, presentation skills, rebuttal effectiveness, and overall persuasiveness.",
    teamSize: "Individual/Team (2-3 members)",
    prize:
      "1st Prize: ₹3500 + Trophy, 2nd Prize: ₹2000 + Certificate, 3rd Prize: ₹1000 + Certificate",
  },
];

// Use live data, fallback to hardcoded if needed
const displayEvents =
  upcomingEvents.length > 0 ? upcomingEvents : fallbackEvents;

export default function UpcomingEvents() {
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    const section = document.querySelector(".upcoming-events-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const numSlides = Math.ceil(displayEvents.length / 4);
    if (numSlides > 1 && !isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % numSlides);
      }, 3200);
      return () => clearInterval(interval);
    }
  }, [isClient, isPaused]);

  // Truncate text and add ellipsis
  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit).trim() + "...";
  };

  return (
    <section
      className="py-8 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 upcoming-events-section overflow-hidden"
      suppressHydrationWarning
    >
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Experience exciting spotlight activities and innovation challenges
            at IDEAS 4.0
          </p>
        </motion.div>

        {/* Mobile Event List */}
        <div className="md:hidden space-y-4" style={{ contain: "content" }}>
          {displayEvents.slice(0, 5).map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-full will-change-transform"
            >
              <Card
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white overflow-hidden"
                style={{
                  contentVisibility: "auto",
                  containIntrinsicSize: "140px",
                }}
              >
                <div className="flex flex-row min-h-[120px] overflow-hidden">
                  <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden bg-gray-100 rounded-md m-2 ml-3">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover select-none"
                      priority={index === 0}
                      sizes="112px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {/* Department badge instead of DAY1 on top-left */}
                    <div className="absolute top-1 left-1 px-2 py-0.5 rounded text-[10px] font-bold text-white bg-gray-900/80 backdrop-blur-sm">
                      DAY1
                    </div>
                    {/* Department badge on top-right */}
                    <div className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full text-[10px] font-semibold text-white bg-red-600">
                      {event.type?.toUpperCase() || "EVENT"}
                    </div>
                  </div>
                  <CardContent className="flex-1 pr-3 py-3 pl-2 flex flex-col min-w-0">
                    <h3 className="text-[13px] font-semibold mb-1 text-deepBlue-dark break-words leading-snug">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-y-1 gap-x-3 text-[11px] text-gray-600 mb-2 leading-snug">
                      <span className="flex items-start gap-1 max-w-[46%] break-words">
                        <Calendar
                          size={12}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="whitespace-normal leading-tight break-words">
                          {event.date}
                        </span>
                      </span>
                      <span className="flex items-start gap-1 max-w-[46%] break-words">
                        <Clock
                          size={12}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="whitespace-normal leading-tight break-words">
                          {event.time}
                        </span>
                      </span>
                      <span className="flex items-start gap-1 w-full break-words">
                        <MapPin
                          size={12}
                          className="text-primary flex-shrink-0 mt-0.5"
                        />
                        <span className="whitespace-normal leading-tight break-words">
                          {event.location}
                        </span>
                      </span>
                    </div>
                    <p className="text-gray-600 text-[11px] leading-snug break-words line-clamp-2 mb-2">
                      {truncateText(event.description, 80)}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 px-2 text-[10px] text-blue-600 hover:text-blue-800 self-start"
                        >
                          <ArrowRight size={12} className="mr-1" />
                          Read More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-hidden flex flex-col !bg-white bg-white text-gray-900 border border-slate-200/90 shadow-2xl p-5 sm:p-7">
                        <DialogHeader className="flex-shrink-0 mb-2">
                          <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 pr-8 leading-tight">
                            {event.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4 sm:space-y-6 overflow-y-auto pr-2 sm:pr-4 flex-1">
                          <div className="aspect-video relative rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
                            <Image
                              src={event.image}
                              alt={event.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 90vw, 576px"
                            />
                          </div>

                          {/* Full Address Banner */}
                          <div className="flex items-center gap-2.5 p-3 bg-blue-50/90 border border-blue-100 rounded-md text-xs sm:text-sm text-blue-950">
                            <MapPin
                              size={16}
                              className="text-blue-600 shrink-0"
                            />
                            <span>
                              <strong>Address:</strong>{" "}
                              {event.venue || event.location}, K.R. Mangalam
                              University, Sohna Road, Gurugram, Delhi-NCR,
                              Haryana
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 flex-shrink-0">
                            <div className="flex items-center gap-2.5">
                              <Calendar
                                size={16}
                                className="text-primary flex-shrink-0"
                              />
                              <span className="font-semibold text-sm sm:text-base text-gray-900 break-words">
                                {event.date}
                              </span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <Clock
                                size={16}
                                className="text-primary flex-shrink-0"
                              />
                              <span className="font-medium text-sm sm:text-base text-gray-800 break-words">
                                {event.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-2.5 md:col-span-2">
                              <MapPin
                                size={16}
                                className="text-primary flex-shrink-0"
                              />
                              <span className="font-medium text-sm sm:text-base text-gray-800 break-words">
                                {event.venue || event.location}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-bold mb-2 text-sm sm:text-base text-gray-900">
                              Description
                            </h4>
                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words">
                              {event.description}
                            </p>
                          </div>

                          {event.coordinator && (
                            <div>
                              <h4 className="font-bold mb-1 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                <User
                                  size={16}
                                  className="text-primary flex-shrink-0"
                                />
                                Coordinator
                              </h4>
                              <p className="text-xs sm:text-sm font-medium text-gray-700 break-words">
                                {event.coordinator}
                              </p>
                              {event.contactNumber && (
                                <div className="flex items-center gap-2 mt-1">
                                  <Phone
                                    size={14}
                                    className="text-primary flex-shrink-0"
                                  />
                                  <span className="text-xs sm:text-sm text-gray-700 font-medium break-all">
                                    {event.contactNumber}
                                  </span>
                                </div>
                              )}
                              {event.email && (
                                <div className="flex items-center gap-2 mt-1">
                                  <Mail
                                    size={14}
                                    className="text-primary flex-shrink-0"
                                  />
                                  <span className="text-xs sm:text-sm text-gray-700 font-medium break-all">
                                    {event.email}
                                  </span>
                                </div>
                              )}
                            </div>
                          )}

                          {event.teamSize && (
                            <div>
                              <h4 className="font-bold mb-1 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                <Users
                                  size={16}
                                  className="text-primary flex-shrink-0"
                                />
                                Team Size
                              </h4>
                              <p className="text-xs sm:text-sm font-semibold text-gray-800 break-words">
                                {event.teamSize}
                              </p>
                            </div>
                          )}

                          {event.guidelines && event.guidelines.length > 0 && (
                            <div>
                              <h4 className="font-bold mb-2 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                <FileText
                                  size={16}
                                  className="text-primary flex-shrink-0"
                                />
                                Guidelines
                              </h4>
                              <ul className="text-xs sm:text-sm space-y-1.5 list-disc list-inside text-gray-700">
                                {event.guidelines.map((guideline, index) => (
                                  <li
                                    key={index}
                                    className="leading-relaxed break-words"
                                  >
                                    {guideline}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {event.evaluation && (
                            <div>
                              <h4 className="font-bold mb-2 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                <Target
                                  size={16}
                                  className="text-primary flex-shrink-0"
                                />
                                Evaluation Criteria
                              </h4>
                              <p className="text-xs sm:text-sm leading-relaxed break-words whitespace-pre-wrap text-gray-700">
                                {event.evaluation}
                              </p>
                            </div>
                          )}

                          {event.prize && (
                            <div className="bg-emerald-50 border border-emerald-200 p-3 sm:p-4 rounded-lg">
                              <h4 className="font-bold mb-1 flex items-center gap-2 text-sm sm:text-base text-emerald-800">
                                <Trophy
                                  size={16}
                                  className="text-emerald-600 flex-shrink-0"
                                />
                                Prize Pool
                              </h4>
                              <p className="text-xs sm:text-sm font-bold text-emerald-700 break-words">
                                {event.prize}
                              </p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}

          <div className="text-center mt-4">
            <Button
              asChild
              variant="outline"
              size="default"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold transition-all duration-300 w-full max-w-xs"
            >
              <Link
                href="/events"
                className="flex items-center justify-center gap-2"
              >
                <span>View All {displayEvents.length} Events</span>
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>

        {/* Desktop Horizontal Slider */}
        <div className="hidden md:block relative">
          <div
            className="overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {Array.from(
                { length: Math.ceil(displayEvents.length / 4) },
                (_, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full flex-shrink-0 grid grid-cols-4 gap-6"
                  >
                    {displayEvents
                      .slice(slideIndex * 4, (slideIndex + 1) * 4)
                      .map((event, index) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0, scale: 0.98 }
                          }
                          transition={{ delay: index * 0.08, duration: 0.4 }}
                        >
                          <Card className="h-full group hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col bg-white/90 backdrop-blur-sm hover:bg-white rounded-[2px] !rounded-[2px] overflow-hidden">
                            <div className="relative h-48 overflow-hidden rounded-t-[2px]">
                              <Image
                                src={event.image || "/placeholder.svg"}
                                alt={event.title}
                                fill
                                className="object-cover rounded-t-[2px]"
                                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 250px"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                              {/* Show department badge on top-right */}
                              <div className="absolute top-3 right-3 px-3 py-1 rounded-[2px] text-xs font-semibold text-white bg-red-600">
                                {event.type?.toUpperCase() || "EVENT"}
                              </div>
                            </div>
                            <CardContent className="p-4 flex flex-col flex-grow">
                              <h3 className="text-lg font-bold mb-3 text-deepBlue-dark hover:text-primary transition-colors duration-200 line-clamp-2">
                                {event.title}
                              </h3>
                              <div className="space-y-2 mb-4">
                                <div className="flex items-center text-gray-600">
                                  <Calendar
                                    size={16}
                                    className="mr-2 text-primary flex-shrink-0"
                                  />
                                  <span className="font-medium text-sm truncate">
                                    {event.date}
                                  </span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <Clock
                                    size={16}
                                    className="mr-2 text-primary flex-shrink-0"
                                  />
                                  <span className="font-medium text-sm truncate">
                                    {event.time}
                                  </span>
                                </div>
                                <div className="flex items-center text-gray-600">
                                  <MapPin
                                    size={16}
                                    className="mr-2 text-primary flex-shrink-0"
                                  />
                                  <span className="font-medium text-sm truncate">
                                    {event.location}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm leading-relaxed flex-grow line-clamp-2 mb-3">
                                {event.description}
                              </p>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="mt-auto border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-medium rounded-[2px]"
                                  >
                                    <span>Read More</span>
                                    <ArrowRight size={14} className="ml-2" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl max-h-[85vh] sm:max-h-[90vh] overflow-hidden flex flex-col rounded-lg !bg-white bg-white text-gray-900 border border-slate-200/90 shadow-2xl p-5 sm:p-7">
                                  <DialogHeader className="flex-shrink-0 mb-2">
                                    <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900 pr-8 leading-tight">
                                      {event.title}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <div className="space-y-4 sm:space-y-6 overflow-y-auto pr-2 sm:pr-4 flex-1">
                                    <div className="aspect-video relative rounded-lg overflow-hidden flex-shrink-0 border border-slate-100 shadow-sm">
                                      <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 90vw, 672px"
                                      />
                                    </div>

                                    {/* Full Address Banner */}
                                    <div className="flex items-center gap-2.5 p-3 bg-blue-50/90 border border-blue-100 rounded-md text-xs sm:text-sm text-blue-950">
                                      <MapPin
                                        size={16}
                                        className="text-blue-600 shrink-0"
                                      />
                                      <span>
                                        <strong>Address:</strong>{" "}
                                        {event.venue || event.location}, K.R.
                                        Mangalam University, Sohna Road,
                                        Gurugram, Delhi-NCR, Haryana
                                      </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 flex-shrink-0">
                                      <div className="space-y-3">
                                        <div className="flex items-center gap-2.5">
                                          <Calendar
                                            size={18}
                                            className="text-primary flex-shrink-0"
                                          />
                                          <span className="font-semibold text-sm sm:text-base text-gray-900 break-words">
                                            {event.date}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                          <Clock
                                            size={18}
                                            className="text-primary flex-shrink-0"
                                          />
                                          <span className="font-medium text-sm sm:text-base text-gray-800 break-words">
                                            {event.time}
                                          </span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                          <MapPin
                                            size={18}
                                            className="text-primary flex-shrink-0"
                                          />
                                          <span className="font-medium text-sm sm:text-base text-gray-800 break-words">
                                            {event.venue || event.location}
                                          </span>
                                        </div>
                                      </div>

                                      <div className="space-y-3">
                                        {event.coordinator && (
                                          <div>
                                            <h4 className="font-bold mb-1 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                              <User
                                                size={16}
                                                className="text-primary flex-shrink-0"
                                              />
                                              Coordinator
                                            </h4>
                                            <p className="text-xs sm:text-sm font-medium text-gray-700 break-words">
                                              {event.coordinator}
                                            </p>
                                            {event.contactNumber && (
                                              <div className="flex items-center gap-2 mt-1">
                                                <Phone
                                                  size={14}
                                                  className="text-primary flex-shrink-0"
                                                />
                                                <span className="text-xs sm:text-sm text-gray-700 font-medium break-all">
                                                  {event.contactNumber}
                                                </span>
                                              </div>
                                            )}
                                            {event.email && (
                                              <div className="flex items-center gap-2 mt-1">
                                                <Mail
                                                  size={14}
                                                  className="text-primary flex-shrink-0"
                                                />
                                                <span className="text-xs sm:text-sm text-gray-700 font-medium break-all">
                                                  {event.email}
                                                </span>
                                              </div>
                                            )}
                                          </div>
                                        )}

                                        {event.teamSize && (
                                          <div>
                                            <h4 className="font-bold mb-1 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                              <Users
                                                size={16}
                                                className="text-primary flex-shrink-0"
                                              />
                                              Team Size
                                            </h4>
                                            <p className="text-xs sm:text-sm font-semibold text-gray-800 break-words">
                                              {event.teamSize}
                                            </p>
                                          </div>
                                        )}
                                      </div>
                                    </div>

                                    <div>
                                      <h4 className="font-bold mb-2 text-sm sm:text-base text-gray-900">
                                        Description
                                      </h4>
                                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed break-words">
                                        {event.description}
                                      </p>
                                    </div>

                                    {event.guidelines &&
                                      event.guidelines.length > 0 && (
                                        <div>
                                          <h4 className="font-bold mb-3 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                            <FileText
                                              size={18}
                                              className="text-primary flex-shrink-0"
                                            />
                                            Guidelines
                                          </h4>
                                          <ul className="text-xs sm:text-sm space-y-2 list-disc list-inside text-gray-700">
                                            {event.guidelines.map(
                                              (guideline, index) => (
                                                <li
                                                  key={index}
                                                  className="leading-relaxed break-words"
                                                >
                                                  {guideline}
                                                </li>
                                              ),
                                            )}
                                          </ul>
                                        </div>
                                      )}

                                    {event.evaluation && (
                                      <div>
                                        <h4 className="font-bold mb-2 flex items-center gap-2 text-sm sm:text-base text-gray-900">
                                          <Target
                                            size={18}
                                            className="text-primary flex-shrink-0"
                                          />
                                          Evaluation Criteria
                                        </h4>
                                        <p className="text-xs sm:text-sm leading-relaxed break-words whitespace-pre-wrap text-gray-700">
                                          {event.evaluation}
                                        </p>
                                      </div>
                                    )}

                                    {event.prize && (
                                      <div className="bg-emerald-50 border border-emerald-200 p-3 sm:p-4 rounded-lg">
                                        <h4 className="font-bold mb-1 flex items-center gap-2 text-sm sm:text-base text-emerald-800">
                                          <Trophy
                                            size={18}
                                            className="text-emerald-600 flex-shrink-0"
                                          />
                                          Prize Pool
                                        </h4>
                                        <p className="text-xs sm:text-sm font-bold text-emerald-700 break-words">
                                          {event.prize}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </DialogContent>
                              </Dialog>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Carousel indicators and navigation */}
          <div
            className="flex flex-col items-center mt-8 gap-4"
            suppressHydrationWarning
          >
            <div className="flex justify-center flex-wrap gap-2">
              {Array.from(
                { length: Math.ceil(displayEvents.length / 4) },
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125 shadow-md"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    suppressHydrationWarning
                  />
                ),
              )}
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg"
            >
              <Link href="/events" className="flex items-center gap-3">
                <span>Explore All Events</span>
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
