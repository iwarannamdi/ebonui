"use client"

import * as React from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

function Sheet(props: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root data-slot="sheet-root" {...props} />
}

function SheetTrigger(props: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="sheet-close" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay asChild {...props}>
      <motion.div
        data-slot="sheet-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm",
          className
        )}
      />
    </Dialog.Overlay>
  )
}

type SheetSide = "top" | "right" | "bottom" | "left"

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof Dialog.Content> & {
  side?: SheetSide
}) {
  const variants = {
    right: { x: "100%" },
    left: { x: "-100%" },
    top: { y: "-100%" },
    bottom: { y: "100%" },
  }

  return (
    <Dialog.Portal>
      <AnimatePresence>
        <SheetOverlay />

        <Dialog.Content asChild {...props}>
          <motion.div
            data-slot="sheet-content"
            initial={variants[side]}
            animate={{ x: 0, y: 0 }}
            exit={variants[side]}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className={cn(
              "fixed z-50 flex flex-col gap-4",

              // layout per side
              side === "right" && "inset-y-0 right-0 h-full w-[85%] max-w-md",
              side === "left" && "inset-y-0 left-0 h-full w-[85%] max-w-md",
              side === "top" && "inset-x-0 top-0 w-full",
              side === "bottom" && "inset-x-0 bottom-0 w-full",

              // ebonui surface
              "bg-zinc-900/90 text-white backdrop-blur-xl",

              // depth
              "border border-white/10 shadow-2xl shadow-black/40",

              // identity glow
              "ring-1 ring-white/5",

              className
            )}
          >
            {children}

            <Dialog.Close asChild>
              <motion.button
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "absolute top-4 right-4 rounded-md p-1.5",
                  "text-white/70 hover:text-white",
                  "transition hover:bg-white/10"
                )}
              >
                <XIcon className="size-4" />
                <span className="sr-only">Close</span>
              </motion.button>
            </Dialog.Close>
          </motion.div>
        </Dialog.Content>
      </AnimatePresence>
    </Dialog.Portal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-5", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-5", className)}
      {...props}
    />
  )
}

function SheetTitle(props: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      data-slot="sheet-title"
      className="text-lg font-semibold"
      {...props}
    />
  )
}

function SheetDescription(
  props: React.ComponentProps<typeof Dialog.Description>
) {
  return (
    <Dialog.Description
      data-slot="sheet-description"
      className="text-sm text-white/60"
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
