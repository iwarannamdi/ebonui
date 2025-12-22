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

const title = "Ebon UI | A Tailwind UI Library Built for the Dark Side"
const description =
  "A Tailwind UI Library Built for the Dark. Beautiful in the Light. Features Animated components and effects, plus Glassmorphic layouts."
const keywords =
    "ebonui, ebonui.com, Ebon UI tailwind, tailwind css, react blocks, Dark UI, darkui, Black UI, Light UI, Noir UI, neon glow, glassmorphic designs, react templates, next.js templates, Ui, Ebon UI, darkside, tailwind components, dark mode ui, dark mode components, dark mode library, tailwind dark mode, dark theme ui, dark theme components, dark theme library, react components, vue components, svelte components, nextjs components, nuxtjs components"
export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="h-[31px] rounded-lg">
            <Link href="/create">
              <HugeiconsIcon icon={PlusSignIcon} />
              New Project
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-lg">
            <Link href="/docs/components">View Components</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav className="hidden md:flex">
        <ExamplesNav className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
      <div className="container-wrapper section-soft flex-1 pb-6">
        <div className="container overflow-hidden">
          <section className="border-border/50 -mx-4 w-[160vw] overflow-hidden rounded-lg border md:hidden md:w-[150vw]">
            <Image
              src="/r/styles/ebonui/dashboard-01-light.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="block dark:hidden"
              priority
            />
            <Image
              src="/r/styles/ebonui/dashboard-01-dark.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="hidden dark:block"
              priority
            />
          </section>
          <section className="theme-container hidden md:block">
            <RootComponents />
          </section>
        </div>
      </div>
    </div>
  )
}
