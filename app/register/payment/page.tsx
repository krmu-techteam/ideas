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
      <div className="min-h-screen bg-[#fffefb] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white border border-[#e7ded1] rounded-2xl p-8 max-w-md w-full shadow-sm"
        >
          <p className="font-serif text-xl font-bold text-[#14100b] mb-2">
            Invalid Registration Type
          </p>
          <p className="text-sm text-[#6b6357] mb-6">
            The requested registration category does not exist or has expired.
          </p>
          <a
            href="/register/selection"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#E11E45] hover:bg-[#c2410c] text-white font-bold rounded-xl shadow-xs transition-colors text-sm"
          >
            ← Return to Registration
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffefb] text-[#14100b] flex items-center justify-center px-4 py-16 selection:bg-[#E11E45]/20 selection:text-[#E11E45]">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="bg-white border border-[#e7ded1] rounded-2xl p-8 md:p-10 shadow-lg text-center">
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#E11E45]/10 border border-[#E11E45]/20 flex items-center justify-center shadow-xs">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-[#E11E45]" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-2xl md:text-3xl font-bold text-[#14100b] mb-3"
            >
              {title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#6b6357] text-sm md:text-base leading-relaxed mb-8"
            >
              {description}
            </motion.p>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-3 mb-6"
            >
              <div className="relative">
                <Loader2 className="w-10 h-10 text-[#E11E45] animate-spin" />
              </div>

              <p className="text-[#8c8273] text-sm font-medium">
                {isRedirecting
                  ? "Opening registration portal..."
                  : `Redirecting in ${countdown} second${countdown !== 1 ? "s" : ""}...`}
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <div className="h-1.5 bg-[#f4ede1] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#E11E45] to-[#c2410c]"
                />
              </div>
            </motion.div>

            {/* Manual Redirect Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-3"
            >
              <a
                href={paymentLink}
                className="block w-full text-center py-3 px-4 bg-[#E11E45] hover:bg-[#c2410c] text-white font-bold rounded-xl shadow-md transition-all text-sm"
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
                className="block w-full text-center py-2.5 px-4 bg-white hover:bg-[#FAF5EC] border border-[#e7ded1] rounded-xl text-[#14100b] hover:text-[#E11E45] transition-all text-xs font-semibold"
              >
                Or open in new tab →
              </a>
            </motion.div>

            {/* Security Note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-center"
            >
              <p className="text-xs text-[#8c8273] flex items-center justify-center gap-1.5">
                <span>🔒</span>
                <span>Secure registration gateway</span>
              </p>
            </motion.div>
          </div>

          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-6"
          >
            <a
              href="/register/selection"
              className="inline-flex items-center text-sm font-semibold text-[#6b6357] hover:text-[#E11E45] transition-colors"
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
        <div className="min-h-screen bg-[#fffefb] flex items-center justify-center px-4">
          <div className="text-center p-8 bg-white border border-[#e7ded1] rounded-2xl shadow-sm max-w-sm w-full">
            <div className="w-16 h-16 rounded-2xl bg-[#E11E45]/10 border border-[#E11E45]/20 text-[#E11E45] flex items-center justify-center mx-auto mb-4 shadow-xs">
              <Loader2 className="w-8 h-8 text-[#E11E45] animate-spin" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#14100b] mb-1">
              Loading Registration
            </h2>
            <p className="text-sm text-[#6b6357]">
              Please wait while we prepare your session...
            </p>
          </div>
        </div>
      }
    >
      <PaymentRedirectContent />
    </Suspense>
  );
}
