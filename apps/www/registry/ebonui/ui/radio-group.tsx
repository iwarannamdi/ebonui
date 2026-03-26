"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group-root"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item asChild {...props}>
      <motion.button
        whileTap={{ scale: 0.92 }}
        className={cn(
          "relative flex size-5 items-center justify-center rounded-full",

          // base
          "border border-white/20 bg-zinc-900/80 backdrop-blur-md",

          // interaction
          "transition-all duration-200",
          "hover:border-white/40",

          // focus
          "focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none",

          // disabled
          "disabled:cursor-not-allowed disabled:opacity-50",

          className
        )}
        data-slot="radio-group-item"
      >
        <RadioGroupPrimitive.Indicator asChild>
          <motion.span
            layout
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex size-2.5 items-center justify-center rounded-full bg-white shadow-md"
          />
        </RadioGroupPrimitive.Indicator>

        {/* subtle glow */}
        <span className="absolute inset-0 rounded-full ring-1 ring-white/5" />
      </motion.button>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
