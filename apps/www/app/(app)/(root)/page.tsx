"use client"
import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { PlusSignIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { Button } from "@/registry/ebonui/ui/button"

import { RootComponents } from "./components"
import { CTASection } from "@/components/sections/cta"
import Features from "@/components/sections/features"
import FrameworkGrid from "@/components/sections/frameworks"
import { Hero } from "@/components/sections/hero"


export default function IndexPage() {
  return (
    <div className="flex min-h-[82vh] flex-col justify-center py-14 text-center sm:min-h-[87.5vh] sm:items-center sm:py-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-transparent blur-3xl dark:from-black dark:via-black dark:to-transparent" />
      <Hero />
      <Features />
      <FrameworkGrid />
      <CTASection />
    </div>
  )
}
