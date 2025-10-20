import Link from "next/link"
import { motion } from "motion/react";
import { Button } from "@/components/ui/button"
import { ArrowRight, MoveUpRightIcon } from "lucide-react"


export function Hero() {
  return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <Link
          href="https://github.com/thedarkjs/Ebon UI"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 hover:text-purple-400 transition-colors"
        >
          <mark className="bg-purple-700/30 text-purple-500 px-1 rounded flex items-center gap-1">Contribute on GitHub <MoveUpRightIcon className="w-4 h-4 font-extrabold" /></mark>
        </Link>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[1.80rem] sm:px-8 md:leading-[4.5rem] sm:text-6xl md:text-6xl font-bold md:px-24 tracking-tight bg-clip-text"
        >
          <mark className="bg-purple-700/30 text-purple-500 px-1 rounded">Ebon UI.</mark> Design in the dark. Build for the future.
        </motion.h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-center">
          Ebon UI is the open-source Tailwind CSS library built dark-first that features neon glow glassmorphic layouts. Customize, extend, and own every single line of code.
        </p>
        <div className="mt-6 flex gap-4">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
            View Components
          </Button>
        </div>
      </section>
    )
}
