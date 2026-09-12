"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Set the event date - October 27, 2026 09:15 AM
    const eventDate = new Date("October 27, 2026 09:15:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      // Calculate time units
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
    };

    // Initial update
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  // Don't render time values until mounted on client
  if (!mounted) {
    return (
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2 leading-tight">
              Countdown to IDEAS <span className="text-primary">4.0</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Mark your calendars for October 27–28, 2026
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white  p-4 sm:p-6 text-center border-2 border-deepBlue hover:border-primary transition-colors touch-manipulation"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 sm:mb-2 leading-tight">
                  00
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const timeUnits = [
    { label: "Days", value: days },
    { label: "Hours", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Seconds", value: seconds },
  ];

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl font-serif sm:text-3xl md:text-4xl font-bold text-deepBlue-dark mb-2 leading-tight">
            Countdown to IDEAS <span className="text-primary">4.0</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Mark your calendars for October 27–28, 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-[2px] p-4 sm:p-6 text-center border-2 border-deepBlue hover:border-primary transition-colors touch-manipulation"
            >
              <div className="text-2xl font-serif sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deepBlue-dark mb-1 sm:mb-2 leading-tight">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-600">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
