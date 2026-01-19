"use client"

import { memo, useId, type ElementType } from "react"
import { motion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

type SplitType = "character" | "word" | "line"
type Preset =
  | "fadeUp"
  | "blurIn"
  | "blurInUp"
  | "slideUp"
  | "scaleIn"
  | "typewriter"
  | "glitch"
  | "holographic"
  | "neonWave"
  | "liquid"
  | "magneticHover"

interface TextAnimateProps {
  text: string
  className?: string
  segmentClassName?: string
  as?: ElementType
  split?: SplitType
  preset?: Preset
  delay?: number
  stagger?: number
  once?: boolean
  hoverEffect?: boolean
  mouseDistort?: boolean
  accessible?: boolean
  variants?: { container?: Variants; item?: Variants }
}

const presets: Record<Preset, { container: Variants; item: Variants }> = {
  fadeUp: {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
    },
    item: {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      },
    },
  },
  blurIn: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.03 } },
    },
    item: {
      hidden: { opacity: 0, filter: "blur(12px)" },
      visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1 } },
    },
  },
  blurInUp: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.05 } },
    },
    item: {
      hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
      visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
      },
    },
  },
  slideUp: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.04 } },
    },
    item: {
      hidden: { y: "110%" },
      visible: { y: "0%", transition: { duration: 0.8, ease: "easeOut" } },
    },
  },
  scaleIn: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.03 } },
    },
    item: {
      hidden: { scale: 0, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      },
    },
  },
  typewriter: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.03 } },
    },
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.01 } },
    },
  },
  glitch: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.02 } },
    },
    item: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  },
  holographic: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.04 } },
    },
    item: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
    },
  },
  neonWave: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.06 } },
    },
    item: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  },
  liquid: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
    },
    item: {
      hidden: { y: 0 },
      visible: {
        y: [0, -40, 30, -20, 0],
        transition: { duration: 1.4, ease: "easeInOut" },
      },
    },
  },
  magneticHover: {
    container: {
      hidden: {},
      visible: { transition: { staggerChildren: 0.04 } },
    },
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
    },
  },
}

const TextAnimate = memo(function TextAnimate({
  text,
  className,
  segmentClassName,
  as: Component = "div",
  split = "word",
  preset = "fadeUp",
  delay = 0,
  stagger = 0.04,
  once = true,
  hoverEffect = false,
  mouseDistort = false,
  accessible = true,
  variants,
  ...props
}: TextAnimateProps) {
  const id = useId()
  const { container: customContainer, item: customItem } = variants || {}
  const { item: presetItem } = presets[preset]

  const containerVariants: Variants = customContainer || {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  }

  const itemVariants: Variants = customItem || presetItem

  const safeText = text ?? ""

  const segments =
    split === "line"
      ? safeText.split("\n")
      : split === "character"
        ? safeText.split("")
        : safeText.split(/(\s+)/)

  return (
    <Component className={cn("relative", className)} {...props}>
      {accessible && <span className="sr-only">{text}</span>}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-100px" }}
        className="inline-block"
        style={
          preset === "typewriter"
            ? {
                overflow: "hidden",
                whiteSpace: "nowrap",
                borderRight: "3px solid currentColor",
              }
            : {}
        }
      >
        {segments.map((segment, i) => {
          const isSpace = /\s+/.test(segment)
          return (
            <motion.span
              key={`${id}-${i}`}
              variants={itemVariants}
              className={cn(
                "inline-block",
                split === "line" && "block",
                segmentClassName
              )}
              style={{
                ...(isSpace ? { width: "0.35em" } : {}),
                ...(split === "line" ? { display: "block" } : {}),
              }}
              whileHover={
                hoverEffect && preset === "magneticHover"
                  ? {
                      scale: 1.3,
                      rotate: [0, 8, -8, 0],
                      transition: { duration: 0.4 },
                    }
                  : hoverEffect
                    ? { scale: 1.15, y: -6 }
                    : undefined
              }
              onMouseMove={(e) => {
                if (!mouseDistort) return
                const el = e.currentTarget
                const rect = el.getBoundingClientRect()
                const x = (e.clientX - rect.left) / rect.width - 0.5
                const y = (e.clientY - rect.top) / rect.height - 0.5
                el.style.transform = `perspective(1000px) rotateX(${y * 20}deg) rotateY(${x * 20}deg) scale(1.1)`
              }}
              onMouseLeave={(e) => {
                if (mouseDistort) {
                  e.currentTarget.style.transform =
                    "rotateX(0) rotateY(0) scale(1)"
                }
              }}
            >
              {/* Special Effects per Preset */}
              {preset === "glitch" && (
                <span className="relative inline-block">
                  <span className="relative z-10">{segment}</span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-pulse text-cyan-500 opacity-70"
                    style={{
                      clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
                    }}
                  >
                    {segment}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-pulse text-pink-500 opacity-70"
                    style={{
                      clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
                      animationDelay: "0.1s",
                    }}
                  >
                    {segment}
                  </span>
                </span>
              )}
              {preset === "holographic" && (
                <span className="animate-[shine_4s_linear_infinite] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent">
                  {segment}
                </span>
              )}
              {preset === "neonWave" && (
                <span
                  className="text-purple-500"
                  style={{
                    textShadow: "0 0 20px currentColor",
                    animation: "pulse 2s infinite",
                  }}
                >
                  {segment}
                </span>
              )}
              {preset !== "glitch" &&
                preset !== "holographic" &&
                preset !== "neonWave" &&
                segment}
            </motion.span>
          )
        })}

        {preset === "typewriter" && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            className="ml-1 inline-block h-[1.2em] w-1 bg-current align-middle"
          />
        )}
      </motion.div>
    </Component>
  )
})

export { TextAnimate }
