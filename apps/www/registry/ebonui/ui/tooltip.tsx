"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 200,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 6,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <AnimatePresence>
        <TooltipPrimitive.Content asChild sideOffset={sideOffset} {...props}>
          <motion.div
            data-slot="tooltip-content"
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 6,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: 4,
              filter: "blur(4px)",
            }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 24,
            }}
            className={cn(
              // base
              "z-50 w-fit text-xs leading-relaxed",

              // ebonui style
              "rounded-xl px-3 py-1.5",
              "bg-zinc-900/90 text-white",
              "backdrop-blur-md",

              // border + depth
              "border border-white/10",
              "shadow-lg shadow-black/30",

              // subtle glow (identity)
              "ring-1 ring-white/5",

              className
            )}
          >
            {children}

            <TooltipPrimitive.Arrow asChild>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn(
                  "z-50 size-2.5 rotate-45",
                  "bg-zinc-900/90",
                  "border-t border-l border-white/10"
                )}
              />
            </TooltipPrimitive.Arrow>
          </motion.div>
        </TooltipPrimitive.Content>
      </AnimatePresence>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
