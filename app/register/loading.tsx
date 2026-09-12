import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-gold-400 animate-spin mx-auto mb-4" />
        <p className="text-white text-lg">Loading registration...</p>
      </div>
    </div>
  )
}
