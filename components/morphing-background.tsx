"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function MorphingBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -inset-[20%] opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          borderRadius: ["20%", "50%", "20%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
          backgroundSize: "400% 400%",
        }}
      />
      <motion.div
        className="absolute -inset-[15%] opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          borderRadius: ["50%", "20%", "50%"],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(-45deg, #f59e0b, #ef4444, #8b5cf6, #06b6d4)",
          backgroundSize: "400% 400%",
        }}
      />
    </div>
  )
}
