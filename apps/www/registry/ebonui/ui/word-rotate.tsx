"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion, MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface WordRotateProps {
  words: string[]
  duration?: number
  motionProps?: MotionProps
  className?: string
  pauseOnHover?: boolean
}

export function WordRotate({
  words,
  duration = 2500,
  pauseOnHover = false,
  motionProps = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const rotateWord = useCallback(() => {
    setIndex((prev) => (prev + 1) % words.length)
  }, [words.length])

  useEffect(() => {
    if (paused) return

    const timer = setInterval(rotateWord, duration)
    return () => clearInterval(timer)
  }, [rotateWord, duration, paused])

  return (
    <div
      className={cn("overflow-hidden py-2 select-none", className)}
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.h1 key={words[index]} {...motionProps}>
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}
