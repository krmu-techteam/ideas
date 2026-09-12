import { Loader2 } from "lucide-react"

export default function PaymentLoading() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-royal-950 via-royal-900 to-royal-800 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-gold-400 animate-spin" />
        <p className="text-royal-200">Loading payment information...</p>
      </div>
    </div>
  )
}
