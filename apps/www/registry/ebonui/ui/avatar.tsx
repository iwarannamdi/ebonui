"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { motion, type Transition } from "motion/react"

import { cn } from "@/lib/utils"

const hoverTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
}

const MotionRoot = motion.create(AvatarPrimitive.Root)

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <MotionRoot
      data-slot="avatar"
      whileHover={{
        y: -6,
        scale: 1.55,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      }}
      transition={hoverTransition}
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full will-change-transform",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }
