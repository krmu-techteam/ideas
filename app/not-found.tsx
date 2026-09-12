import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, Calendar, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8 relative">
          <h1 className="text-[150px] md:text-[200px] font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-none">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-3xl -z-10"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
          Oops! The page you're looking for seems to have wandered off. 
          Don't worry, even the best explorers take wrong turns sometimes.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link href="/" className="w-full">
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
            >
              <Home className="mr-2" size={20} />
              Back to Home
            </Button>
          </Link>
          <Link href="/register/selection" className="w-full">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Calendar className="mr-2" size={20} />
              Register Now
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Looking for something specific?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link 
              href="/spotlight" 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Spotlight Activities
            </Link>
            <Link 
              href="/cultural" 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Cultural Events
            </Link>
            <Link 
              href="/all-events" 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              All Events
            </Link>
            <Link 
              href="/ideas/innovation" 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Innovation
            </Link>
            <Link 
              href="/contact" 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              Contact Us
            </Link>
            <Link 
              href="/#faq" 
              className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Error Code */}
        <p className="mt-8 text-sm text-gray-500">
          Error Code: 404 | IDEAS 4.0 | K.R. Mangalam University
        </p>
      </div>
    </div>
  )
}
