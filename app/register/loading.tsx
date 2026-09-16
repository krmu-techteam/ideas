import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
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
  )
}
