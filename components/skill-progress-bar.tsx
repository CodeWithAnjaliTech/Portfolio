"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface SkillProgressBarProps {
  skill: string
  percentage: number
  index: number
  color?: string
}

export function SkillProgressBar({ skill, percentage, index, color = "bg-primary" }: SkillProgressBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayPercentage, setDisplayPercentage] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0
        const increment = percentage / 50
        const interval = setInterval(() => {
          current += increment
          if (current >= percentage) {
            setDisplayPercentage(percentage)
            clearInterval(interval)
          } else {
            setDisplayPercentage(Math.floor(current))
          }
        }, 20)
        return () => clearInterval(interval)
      }, index * 100)
      return () => clearTimeout(timer)
    }
  }, [isInView, percentage, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <motion.span
          className="text-sm font-bold text-primary"
          animate={{
            scale: isInView ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.5,
            type: "spring",
            stiffness: 300,
          }}
        >
          {displayPercentage}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden relative">
        <motion.div
          className={`h-2.5 rounded-full ${color} relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0"
            animate={{
              opacity: [0, 1, 0],
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
