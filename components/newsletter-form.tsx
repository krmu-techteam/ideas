"use client";

import { useEffect, useState } from "react";

export function NewsletterForm() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Prevent SSR markup from being mutated by extensions before hydration
  if (!mounted) {
    return <div className="h-[110px] w-full" aria-hidden="true" />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("newsletterEmail") as string;
    // TODO: Hook up API endpoint
    console.info("Newsletter signup:", email);
    e.currentTarget.reset();
  };

  return (
    <form
      className="space-y-2"
      onSubmit={handleSubmit}
      suppressHydrationWarning
    >
      <input
        type="email"
        name="newsletterEmail"
        placeholder="Your Email"
        autoComplete="off"
        inputMode="email"
        className="w-full px-4 py-2.5 rounded-[6px] bg-transparent border border-white/40 text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-white"
        required
        suppressHydrationWarning
      />
      <button
        type="submit"
        className="w-full bg-[#E11E46]  text-white font-bold py-2.5 px-4 rounded-[6px] transition-all duration-300"
        suppressHydrationWarning
      >
        Subscribe
      </button>
    </form>
  );
}
