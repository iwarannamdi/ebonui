"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  transition = { type: "spring", stiffness: 150, damping: 25 },
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay asChild>
      <motion.div
        key="alert-dialog-overlay"
        initial={{ opacity: 0, filter: "blur(4px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(4px)" }}
        transition={transition}
        {...props}
      />
    </DialogPrimitive.Overlay>
  )
}

function DialogContent({
  from = "top",
  transition = { type: "spring", stiffness: 150, damping: 25 },

  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  const initialRotation =
    from === "bottom" || from === "left" ? "20deg" : "-20deg"
  const isVertical = from === "top" || from === "bottom"
  const rotateAxis = isVertical ? "rotateX" : "rotateY"

  return (
    <DialogPortal>
      <AnimatePresence>
        <DialogOverlay />
        <DialogPrimitive.Content asChild>
        <motion.div
          key="alert-dialog-content"
          data-slot="alert-dialog-content"
          initial={{
            opacity: 0,
            filter: "blur(4px)",
            transform: `perspective(500px) ${rotateAxis}(${initialRotation}) scale(0.8)`,
          }}
          animate={{
            opacity: 1,
            filter: "blur(0px)",
            transform: `perspective(500px) ${rotateAxis}(0deg) scale(1)`,
          }}
          exit={{
            opacity: 0,
            filter: "blur(4px)",
            transform: `perspective(500px) ${rotateAxis}(${initialRotation}) scale(0.8)`,
          }}
          transition={transition}
          {...props}
          >
            {children}

            {showCloseButton && (
              <DialogPrimitive.Close className="absolute right-4 top-4 opacity-70 hover:opacity-100">
                <XIcon />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
            )}
          </motion.div>
        </DialogPrimitive.Content>
      </AnimatePresence>
    </DialogPortal>
  )
}


function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
