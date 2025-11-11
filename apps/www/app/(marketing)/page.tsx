"use client"

import { BelowHero } from "@/components/sections/below-hero"
import { CTASection } from "@/components/sections/cta"
import Features from "@/components/sections/features"
import FrameworkGrid from "@/components/sections/frameworks"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <div className="flex min-h-[82vh] flex-col justify-center py-14 text-center sm:min-h-[87.5vh] sm:items-center sm:py-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-transparent blur-3xl dark:from-gray-950 dark:via-gray-900 dark:to-transparent" />
      <Hero />
      <BelowHero />
      <Features />
      <FrameworkGrid />
      <CTASection />
    </div>
  )
}
