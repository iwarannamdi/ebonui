"use client"

import { useEffect, useMemo, useRef } from "react"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import type { RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)

  // Detect when text enters the viewport
  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  const shouldShow = !isView || isInView

  // Memoized annotation configuration
  const annotationConfig = useMemo(
    () => ({
      type: action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    }),
    [
      action,
      color,
      strokeWidth,
      animationDuration,
      iterations,
      padding,
      multiline,
    ]
  )

  useEffect(() => {
    const el = elementRef.current
    if (!el || !shouldShow) return

    // Prevent creating multiple annotation objects
    if (!annotationRef.current) {
      annotationRef.current = annotate(el, annotationConfig)
    }

    const annotation = annotationRef.current
    annotation.show()

    // Resize observer to reposition annotation when size changes
    const resizeObserver = new ResizeObserver(() => {
      annotation.hide()
      annotation.show()
    })

    resizeObserver.observe(el)

    return () => {
      resizeObserver.disconnect()
      annotation.remove()
      annotationRef.current = null
    }
  }, [shouldShow, annotationConfig])

  return (
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}
