"use client"

import { useState } from "react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogDemo() {
  return (
    <div className="bg-background flex flex-col items-center justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:neon-glow transition-all"
            >
              Open Modal
            </Button>
          </motion.div>
        </DialogTrigger>

        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary text-2xl font-bold">
              System Update
            </DialogTitle>
            <DialogDescription className="text-muted-foreground pt-2">
              You are about to deploy your dark-first UI library. This will
              apply <strong>Vivid Purple</strong> accents across your entire
              dashboard.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <p className="text-foreground/80 text-sm">
                Notice how this box sits on the glassy background. The 1px
                border creates that we discussed.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="ghost" className="hover:bg-white/5">
              Cancel
            </Button>
            <Button className="bg-primary hover:neon-glow">
              Confirm Deployment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
