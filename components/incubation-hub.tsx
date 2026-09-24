"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const isLive = false;

const incubatedProjects = [
  {
    id: 1,
    title: "Smart Water Purifier",
    team: "AquaTech",
    year: 2023,
    description: "IoT-enabled water purification system for rural communities",
    image: "/assets/incubation-hub/in-win-1.webp?height=200&width=300",
  },
  {
    id: 2,
    title: "Solar-Powered Agri-Bot",
    team: "Team Innovate",
    year: 2023,
    description:
      "An autonomous robot that uses solar energy to perform agricultural tasks",
    image: "/assets/incubation-hub/in-win-2.webp?height=200&width=300",
  },
  {
    id: 3,
    title: "AR Learning Platform",
    team: "EduVision",
    year: 2023,
    description:
      "Augmented reality platform for immersive educational experiences",
    image: "/assets/incubation-hub/in-win-3.webp?height=200&width=300",
  },
];

export default function IncubationHub() {
  if (!isLive) {
    return null;
  }
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    const section = document.querySelector(".incubation-hub-section");
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
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % incubatedProjects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gray-50 incubation-hub-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2">
            Incubation Hub
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected projects will be pre-incubated or incubated under KEIC
            Foundation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-deepBlue-dark mb-4">
              Turn Your Ideas Into Reality
            </h3>
            <p className="text-gray-600 mb-6">
              The KEIC Foundation at K.R. Mangalam University provides a
              supportive ecosystem for student entrepreneurs to transform their
              innovative ideas into successful startups. At KRMU, emphasis is
              placed on interdisciplinary learning, hands-on pedagogy, and
              industry-academia collaboration, nurturing creativity,
              entrepreneurship, and problem-solving.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-deepBlue-dark">Mentorship</h4>
                  <p className="text-gray-600">
                    Access to industry experts and academic mentors
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M16 12h-6.5a2 2 0 1 0 0 4H12"></path>
                    <path d="M10 8h6.5a2 2 0 1 1 0 4H14"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-deepBlue-dark">
                    Funding Opportunities
                  </h4>
                  <p className="text-gray-600">
                    Seed funding and connections to potential investors
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary rounded-full p-2 text-white mr-4 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="7"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-deepBlue-dark">
                    Infrastructure
                  </h4>
                  <p className="text-gray-600">
                    Access to workspace, labs, and technical resources
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-96 overflow-hidden rounded-xl border border-blue-100"
          >
            <div
              className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {incubatedProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="text-sm font-medium mb-1">
                      {project.year} Winner | {project.team}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-200 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel indicators */}
            <div
              className="absolute bottom-4 left-0 right-0 flex justify-center"
              suppressHydrationWarning
            >
              {incubatedProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 mx-1 rounded-full ${index === activeIndex ? "bg-white" : "bg-white/50"}`}
                  aria-label={`Go to slide ${index + 1}`}
                  suppressHydrationWarning
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <Link
              href="https://www.krmangalam.edu.in/keic/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply for Incubation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
