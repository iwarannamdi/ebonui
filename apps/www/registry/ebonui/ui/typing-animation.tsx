"use client"

import React, {
  ElementType,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { motion, MotionProps } from "motion/react"

import { cn } from "@/lib/utils"

interface TypingAnimationProps extends MotionProps {
  words?: string[]
  children?: string
  className?: string
  duration?: number
  typeSpeed?: number
  deleteSpeed?: number
  delay?: number
  pauseDelay?: number
  loop?: boolean
  showCursor?: boolean
  cursorStyle?: "line" | "block" | "underscore"
  as?: ElementType
  "aria-label"?: string
}

const DEFAULT_TYPE_SPEED = 80
const DEFAULT_DELETE_SPEED = 40
const DEFAULT_PAUSE_DELAY = 1200

export function TypingAnimation({
  words: propWords,
  children,
  className,
  duration,
  typeSpeed = duration || DEFAULT_TYPE_SPEED,
  deleteSpeed = duration ? duration / 2 : DEFAULT_DELETE_SPEED,
  delay = 0,
  pauseDelay = DEFAULT_PAUSE_DELAY,
  loop = false,
  showCursor = true,
  cursorStyle = "line",
  as: Component = "span",
  "aria-label": ariaLabel,
  ...motionProps
}: TypingAnimationProps) {
  const words = propWords || (children ? [children] : [])

  const [displayedText, setDisplayedText] = useState("")
  const [phase, setPhase] = useState<
    "waiting" | "typing" | "pausing" | "deleting"
  >("waiting")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const frameRef = useRef<number | undefined>(undefined)
  const lastTimestampRef = useRef<number>(0)
  const initialDelayDoneRef = useRef(false)

  // Refs for mutable state to keep animate stable
  const phaseRef = useRef(phase)
  const wordIndexRef = useRef(wordIndex)
  const charIndexRef = useRef(charIndex)

  // Sync refs with state
  useEffect(() => {
    phaseRef.current = phase
  }, [phase])
  useEffect(() => {
    wordIndexRef.current = wordIndex
  }, [wordIndex])
  useEffect(() => {
    charIndexRef.current = charIndex
  }, [charIndex])

  const getCursor = () => {
    switch (cursorStyle) {
      case "block":
        return "▋"
      case "underscore":
        return "_"
      case "line":
      default:
        return "|"
    }
  }

  const animate = useCallback(
    (timestamp: number) => {
      if (words.length === 0) return

      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp

      const delta = timestamp - lastTimestampRef.current

      // Initial delay
      if (!initialDelayDoneRef.current) {
        if (delta >= delay) {
          initialDelayDoneRef.current = true
          setPhase("typing")
          phaseRef.current = "typing"
          lastTimestampRef.current = timestamp
        }
        frameRef.current = requestAnimationFrame(animate)
        return
      }

      const currentWord = words[wordIndexRef.current] || ""
      const graphemes = Array.from(
        new Intl.Segmenter().segment(currentWord)
      ).map((s) => s.segment)
      const targetIndex = phaseRef.current === "deleting" ? 0 : graphemes.length

      if (phaseRef.current === "typing" || phaseRef.current === "deleting") {
        const speed = phaseRef.current === "typing" ? typeSpeed : deleteSpeed
        if (delta >= speed) {
          const nextIndex =
            phaseRef.current === "typing"
              ? charIndexRef.current + 1
              : charIndexRef.current - 1

          setDisplayedText(graphemes.slice(0, nextIndex).join(""))
          setCharIndex(nextIndex)
          // No need to set refs here—synced via effects
          lastTimestampRef.current = timestamp

          if (nextIndex === targetIndex) {
            if (phaseRef.current === "typing") {
              const isLastWord = wordIndexRef.current === words.length - 1
              if (loop || !isLastWord) {
                setPhase("pausing")
                phaseRef.current = "pausing"
                lastTimestampRef.current = timestamp
              }
            } else {
              // Finished deleting → next word (if not stopping)
              const nextWordIndex = (wordIndexRef.current + 1) % words.length
              setWordIndex(nextWordIndex)
              wordIndexRef.current = nextWordIndex
              setCharIndex(0)
              charIndexRef.current = 0
              setPhase("typing")
              phaseRef.current = "typing"
            }
          }
        }
      } else if (phaseRef.current === "pausing" && delta >= pauseDelay) {
        setPhase("deleting")
        phaseRef.current = "deleting"
        lastTimestampRef.current = timestamp // Reset here to start deleting immediately
      }

      frameRef.current = requestAnimationFrame(animate)
    },
    // Stable deps only—no states!
    [words, typeSpeed, deleteSpeed, pauseDelay, delay, loop]
  )

  // Start/stop animation
  useEffect(() => {
    if (words.length === 0) return

    lastTimestampRef.current = performance.now()
    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      frameRef.current = undefined
      lastTimestampRef.current = 0
      initialDelayDoneRef.current = false
    }
  }, [animate, words]) // No words.length—use words (stable array ref)

  // Reset when words change
  useEffect(() => {
    setDisplayedText("")
    setWordIndex(0)
    setCharIndex(0)
    setPhase("waiting")
    // Sync refs
    wordIndexRef.current = 0
    charIndexRef.current = 0
    phaseRef.current = "waiting"
    initialDelayDoneRef.current = false
    lastTimestampRef.current = 0
  }, [words])

  if (words.length === 0) {
    return null
  }

  const currentGraphemes = Array.from(
    new Intl.Segmenter().segment(words[wordIndex] || "")
  ).map((s) => s.segment)

  const isDone =
    !loop &&
    wordIndex === words.length - 1 &&
    charIndex === currentGraphemes.length &&
    phase !== "deleting" &&
    phase !== "pausing"

  const showCursorFinal = showCursor && !isDone

  return (
    <motion.span
      className={cn("inline-block", className)}
      aria-live="polite"
      aria-label={ariaLabel || displayedText || undefined}
      {...motionProps}
    >
      <Component className="inline">
        {displayedText}
        {showCursorFinal && (
          <span
            className="ml-0.5 inline-block w-[0.1em] translate-y-[0.1em] animate-pulse font-bold text-current"
            aria-hidden="true"
          >
            {getCursor()}
          </span>
        )}
      </Component>
    </motion.span>
  )
}
