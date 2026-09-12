"use client"

import { motion } from "framer-motion"

interface CircularIdeasAnimationProps {
  darkMode?: boolean
}

export default function CircularIdeasAnimation({ darkMode = false }: CircularIdeasAnimationProps) {
  // Pre-calculate letter positions for consistent rendering
  const letterPositions = [
    { top: "5%", left: "50%", transform: "translate(-50%, -50%)" },
    { top: "28%", left: "85%", transform: "translate(-50%, -50%)" },
    { top: "73%", left: "76%", transform: "translate(-50%, -50%)" },
    { top: "86%", left: "24%", transform: "translate(-50%, -50%)" },
    { top: "35%", left: "10%", transform: "translate(-50%, -50%)" },
  ]

  const textColor = darkMode ? "text-white" : "text-royal-900"
  const altTextColor = darkMode ? "text-gold-400" : "text-gold-600"
  const centerBg = darkMode ? "bg-royal-800/30" : "bg-gray-100/50"
  const centerBorder = darkMode ? "border-gold-400/50" : "border-gold-500/70"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="flex items-center justify-center"
    >
      <div className="relative w-64 h-64">
        {/* IDEAS Letters arranged in a circle */}
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          {["I", "D", "E", "A", "S"].map((letter, index) => (
            <div key={letter} className="absolute text-4xl font-bold" style={letterPositions[index]}>
              <span className={`${index % 2 === 0 ? textColor : altTextColor}`}>{letter}</span>
            </div>
          ))}
        </div>

        {/* Center version number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-20 h-20 ${centerBg} backdrop-blur-sm rounded-full flex items-center justify-center border-2 ${centerBorder} rotating`}>
            <span className={`text-2xl font-bold ${altTextColor}`}>3.0</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
