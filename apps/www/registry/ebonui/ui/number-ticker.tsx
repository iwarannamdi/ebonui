"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"
import {
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
} from "motion/react"

import { cn } from "@/lib/utils"

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delayMs?: number
  decimalPlaces?: number
  /** Optional spring config override */
  springConfig?: Partial<{ damping: number; stiffness: number }>
  /** Re-trigger animation when element comes back into view */
  triggerOnce?: boolean
}

const formatterCache = new Map<number, Intl.NumberFormat>()

function getFormatter(decimalPlaces: number): Intl.NumberFormat {
  if (!formatterCache.has(decimalPlaces)) {
    formatterCache.set(
      decimalPlaces,
      new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimalPlaces,
        maximumFractionDigits: decimalPlaces,
      })
    )
  }
  return formatterCache.get(decimalPlaces)!
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delayMs = 0,
  decimalPlaces = 0,
  springConfig,
  triggerOnce = true,
  className,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    ...springConfig,
  })

  const isInView = useInView(ref, {
    once: triggerOnce,
    margin: "-100px", // start a bit earlier for smoother feel
  })

  // Start animation when in view (with optional delay)
  useEffect(() => {
    if (!isInView) return

    const timeout = setTimeout(() => {
      motionValue.set(direction === "down" ? startValue : value)
    }, delayMs)

    return () => clearTimeout(timeout)
  }, [isInView, motionValue, direction, value, startValue, delayMs])

  // Efficiently update text content on every frame while animating
  useAnimationFrame((time) => {
    if (!ref.current) return

    const latest = springValue.get()
    const formatted = getFormatter(decimalPlaces).format(
      Number(latest.toFixed(decimalPlaces))
    )

    // Only update DOM if value actually changed (prevents layout thrashing)
    if (ref.current.textContent !== formatted) {
      ref.current.textContent = formatted
    }
  })

  // Initialize with correct starting value (no flicker)
  const initialValue = direction === "down" ? value : startValue
  const initialFormatted = getFormatter(decimalPlaces).format(
    Number(initialValue.toFixed(decimalPlaces))
  )

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tracking-wider text-black tabular-nums dark:text-white",
        className
      )}
      aria-live="polite"
      aria-atomic="true"
      {...props}
    >
      {initialFormatted}
    </span>
  )
}
