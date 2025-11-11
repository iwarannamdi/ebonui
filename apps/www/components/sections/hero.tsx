import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TechStack } from "@/components/tech-stack"

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <Link
        href={"#"}
        className={cn(
          buttonVariants({
            variant: "outline",
            size: "sm",
          }),
          "mx-auto mb-16 flex items-center justify-center rounded-full bg-purple-700/10 px-3 py-1.5 text-purple-500 transition-colors duration-200 hover:bg-purple-700/20 hover:text-purple-400"
        )}
      >
        🎉 <Separator className="mx-2 h-4" orientation="vertical" />
        Introducing Ebon UI
        <ChevronRight className="text-muted-foreground ml-1 size-4" />
      </Link>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-clip-text text-[1.80rem] font-bold tracking-tight sm:px-8 sm:text-6xl md:px-24 md:text-6xl md:leading-[4.5rem]"
      >
        <mark className="rounded bg-purple-700/30 px-1 text-purple-500">
          Ebon UI.
        </mark>{" "}
        Built in the Dark. Beautiful in the light.
      </motion.h1>
      <p className="text-muted-foreground mt-4 max-w-2xl text-center">
        Ebon UI is an Open Source Tailwind CSS library built dark-first that
        features Animations, Effects, and Glassmorphic layouts. Customize it,
        Extend it, and own every single line of code.
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          href="/docs"
          className={cn(
            buttonVariants({
              size: "lg",
            }),
            "bg-purple-600 text-white hover:bg-purple-500"
          )}
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/components"
          className={cn(
            buttonVariants({
              variant: "outline",
              size: "lg",
            }),
            "border-purple-600 text-purple-400 hover:bg-purple-600/10"
          )}
        >
          View Components
        </Link>
      </div>
      <div className="relative mx-auto mt-10 flex w-full max-w-56 items-center justify-center">
        <TechStack
          className="mx-auto flex w-full items-center justify-between"
          technologies={["react", "tailwindcss", "motion", "shadcn"]}
        />
      </div>
    </section>
  )
}
