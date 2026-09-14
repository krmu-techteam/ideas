"use client"

import { useEffect, useState } from "react"

export function NewsletterForm() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // Prevent SSR markup from being mutated by extensions before hydration
  if (!mounted) {
    return <div className="h-[110px] w-full" aria-hidden="true" />
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get("newsletterEmail") as string
    // TODO: Hook up API endpoint
    console.info("Newsletter signup:", email)
    e.currentTarget.reset()
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit} suppressHydrationWarning>
      <input
        type="email"
        name="newsletterEmail"
        placeholder="Your Email"
        autoComplete="off"
        inputMode="email"
        className="w-full px-4 py-2.5 rounded-lg bg-royal-950/70 border border-royal-700/60 text-white placeholder-royal-300/60 focus:outline-none focus:ring-2 focus:ring-gold-400"
        required
        suppressHydrationWarning
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-2.5 px-4 rounded-lg shadow-md transition-all duration-300"
        suppressHydrationWarning
      >
        Subscribe
      </button>
    </form>
  )
}
