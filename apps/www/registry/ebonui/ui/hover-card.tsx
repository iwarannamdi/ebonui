"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

function HoverCard({
  openDelay = 200,
  closeDelay = 100,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return (
    <HoverCardPrimitive.Root
      openDelay={openDelay}
      closeDelay={closeDelay}
      data-slot="hover-card-root"
      {...props}
    />
  )
}

function HoverCardTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger asChild {...props}>
      <motion.span
        className={cn("inline-flex", className)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        data-slot="hover-card-trigger"
      >
        {children}
      </motion.span>
    </HoverCardPrimitive.Trigger>
  )
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 8,
  children,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal>
      <AnimatePresence>
        <HoverCardPrimitive.Content
          asChild
          align={align}
          sideOffset={sideOffset}
          {...props}
        >
          <motion.div
            data-slot="hover-card-content"
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: 6,
              filter: "blur(50px)",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 24,
            }}
            className={cn(
              // layout
              "z-50 w-72 rounded-2xl p-4",

              // ebonui surface
              "text-white backdrop-blur-xl dark:bg-zinc-900/90",

              // depth
              "border border-white/10",
              "shadow-md shadow-black/20",

              // subtle glow identity
              "ring-1 ring-white/5",

              className
            )}
          >
            {children}
          </motion.div>
        </HoverCardPrimitive.Content>
      </AnimatePresence>
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
