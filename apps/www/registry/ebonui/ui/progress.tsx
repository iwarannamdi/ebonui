"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value = 0,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  value?: number
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress-root"
      className={cn(
        "bg-muted relative h-2 w-full overflow-hidden rounded-full",
        "ring-1 ring-white/5",

        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator asChild>
        <motion.div
          data-slot="progress-indicator"
          initial={{ x: "-100%" }}
          animate={{ x: `${value - 100}%` }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          className={cn(
            "h-full w-full",
            "bg-foreground",
            "shadow-sm shadow-white/60"
          )}
        />
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  )
}

export { Progress }
