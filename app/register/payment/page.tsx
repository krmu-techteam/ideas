"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, ExternalLink } from "lucide-react";

function PaymentRedirectContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const [countdown, setCountdown] = useState(0);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const paymentLinks = {
    "school-institution":
      "https://docs.google.com/forms/d/1KjBm6XZI4J4mfN073QQSiQkc2F1BrlA377zhbA1ZS-0/viewform?edit_requested=true",
    "school-student":
      "https://docs.google.com/forms/d/17RRPEuosSJlFXc_MqdBle4xN6D0j7ROuf1oQhN1lSr4/viewform?edit_requested=true",
    krmu: "https://p.ppsl.io/PYTMPS/d0VMdk",
    "other-university": "https://p.ppsl.io/PYTMPS/KFAMdk",
  };

  const titles = {
    "school-institution": "School Registration (Principal/Coordinator)",
    "school-student": "Student Registration",
    krmu: "KRMU Student Registration",
    "other-university": "Other University Registration",
  };

  const descriptions = {
    "school-institution":
      "You're being redirected to the school registration form for principals and coordinators",
    "school-student":
      "You're being redirected to the student registration form",
    krmu: "You're being redirected to the KRMU student activities registration",
    "other-university":
      "You're being redirected to the university activities registration",
  };

  const paymentLink = type
    ? paymentLinks[type as keyof typeof paymentLinks]
    : null;
  const title = type ? titles[type as keyof typeof titles] : "Registration";
  const description = type
    ? descriptions[type as keyof typeof descriptions]
    : "Redirecting...";

  useEffect(() => {
    if (!paymentLink) return;

    // Prefetch the payment link to speed up redirect
    const link = document.createElement("link");
    link.rel = "prefetch";
    link.href = paymentLink;
    document.head.appendChild(link);

    // Immediate redirect with minimal delay
    const timer = setTimeout(() => {
      setIsRedirecting(true);
      // Use replace for faster redirect without adding to history
      window.location.replace(paymentLink);
    }, 100); // Just 100ms delay to show the transition UI

    return () => {
      clearTimeout(timer);
      document.head.removeChild(link);
    };
  }, [paymentLink]);

  if (!type || !paymentLink) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center text-white"
        >
          <p className="text-xl mb-4">Invalid registration type</p>
          <a
            href="/register/selection"
            className="text-gold-400 hover:underline"
          >
            Return to registration
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 relative overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(255,215,128,0.12), transparent 60%), radial-gradient(circle at 75% 65%, rgba(255,215,128,0.08), transparent 55%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          // Use index-based calculations instead of Math.random() to avoid hydration issues
          const seed = i * 0.618033988749895; // Golden ratio for distribution
          const width = ((seed * 10) % 10) + 6;
          const height = ((seed * 10) % 10) + 6;
          const top = (seed * 100) % 100;
          const left = ((seed + 0.5) * 100) % 100;
          const delay = (seed * 4) % 4;
          const duration = ((seed * 8) % 8) + 12;

          return (
            <div
              key={i}
              className="absolute rounded-full bg-gold-400/20 animate-float"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center min-h-[calc(100vh-12rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full"
        >
          <div className="bg-white/10 backdrop-blur-md border-2 border-gold-400/30 rounded-2xl p-8 md:p-10 shadow-2xl">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold text-white text-center mb-3"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-royal-200 text-center mb-8"
            >
              {description}
            </motion.p>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative">
                <Loader2 className="w-12 h-12 text-gold-400 animate-spin" />
                {!isRedirecting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {countdown}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-royal-300 text-sm">
                {isRedirecting
                  ? "Opening payment page..."
                  : `Redirecting in ${countdown} second${countdown !== 1 ? "s" : ""}...`}
              </p>
            </motion.div>

            {/* Manual Redirect Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 space-y-3"
            >
              <a
                href={paymentLink}
                className="block w-full text-center py-2 px-4 bg-gold-500/20 hover:bg-gold-500/30 border border-gold-400/50 rounded-lg text-gold-400 hover:text-gold-300 transition-all text-sm font-medium"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Click here if not redirected automatically</span>
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
              <a
                href={paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 bg-primary/20 hover:bg-primary/30 border border-primary/50 rounded-lg text-primary hover:text-rose-400 transition-all text-xs"
              >
                Or open in new tab →
              </a>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6"
            >
              <div className="h-1 bg-royal-800/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-gold-400 to-gold-600"
                />
              </div>
            </motion.div>

            {/* Security Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center"
            >
              <p className="text-xs text-royal-400">
                🔒 Secure payment gateway
              </p>
            </motion.div>
          </div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-center mt-6"
          >
            <a
              href="/register/selection"
              className="text-royal-300 hover:text-white text-sm transition-colors"
            >
              ← Go back
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PaymentRedirectPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 flex items-center justify-center">
          <Loader2 className="w-12 h-12 text-gold-400 animate-spin" />
        </div>
      }
    >
      <PaymentRedirectContent />
    </Suspense>
  );
}
