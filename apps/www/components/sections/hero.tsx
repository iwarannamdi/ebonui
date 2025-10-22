import Link from "next/link"
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { TechStack } from "@/components/tech-stack"


export function Hero() {

  return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
              <Link
                href={"#"}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  }),
                  "rounded-full mb-16 px-3 py-1.5 bg-purple-700/10 text-purple-500 hover:bg-purple-700/20 hover:text-purple-400 transition-colors duration-200 flex items-center justify-center mx-auto"
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
          className="text-[1.80rem] sm:px-8 md:leading-[4.5rem] sm:text-6xl md:text-6xl font-bold md:px-24 tracking-tight bg-clip-text"
        >
          <mark className="bg-purple-700/30 text-purple-500 px-1 rounded">Ebon UI</mark> Built in the Dark. Beautiful in the light.
        </motion.h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-center">
          Ebon UI is an Open Source Tailwind CSS library built dark-first that features Animations, Effects, and Glassmorphic layouts. Customize it, Extend it, and own every single line of code.
        </p>
        <div className="mt-6 flex gap-4">
          <Link href="/docs"
                  className={cn(
                    buttonVariants({
                      size: "lg",
                    }),
                    "bg-purple-600 hover:bg-purple-500 text-white"
                  )}          
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link href="/components"
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
          <div className="relative mx-auto flex w-full max-w-56 items-center justify-center mt-10">
            <TechStack
              className="mx-auto flex w-full items-center justify-between"
              technologies={[
                "react",
                "tailwindcss",
                "motion",
                "shadcn",
              ]}
            />
          </div>        
      </section>
    )
}
