"use client";
import Features from "@/components/sections/features";
import FrameworkGrid from "@/components/sections/frameworks";
import { BelowHero } from "@/components/sections/below-hero";
import { Hero } from "@/components/sections/hero";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14">
      <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-br from-white via-white to-transparent dark:from-gray-950 dark:via-gray-900 dark:to-transparent" />
      <Hero />
      <BelowHero />
      <Features />
      <FrameworkGrid />
      <CTASection />
    </div>
  )
}
