"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EventsPage() {
  const router = useRouter()

  // Redirect /events to /spotlight since they show the same content
  useEffect(() => {
    router.replace('/spotlight')
  }, [router])

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Spotlight Activities...</p>
      </div>
    </div>
  )
}
