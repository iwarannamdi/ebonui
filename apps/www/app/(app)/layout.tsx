import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SiteBanner } from "@/components/site-banner"
import type { Viewport, Metadata } from "next"
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils"

export const metadata: Metadata = constructMetadata({
  title: "Ebon UI | A Tailwind UI Library Built for the Dark Side",
  keywords:
    "ebonui, Ebon UI, Ebon UI tailwind, tailwind css, react blocks, Dark UI, darkui, Black UI, Light UI, Noir UI, neon glow, glassmorphic designs, react templates, next.js templates, Ui, Ebon UI, darkside, tailwind components, dark mode ui, dark mode components, dark mode library, tailwind dark mode, dark theme ui, dark theme components, dark theme library, react components, vue components, svelte components, nextjs components, nuxtjs components",
  description:
    "A Tailwind UI Library Built for the Dark. Beautiful in the Light. Features Animated components and effects, plus Glassmorphic layouts.",
  image: absoluteUrl("/screenshot.png"),
})

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      data-slot="layout"
      className="bg-background relative z-10 flex min-h-svh flex-col"
    >
      <SiteBanner />
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
    </div>
  )
}
