import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { SiteBanner } from "@/components/site-banner"
import type { Viewport, Metadata } from "next"
import { absoluteUrl, constructMetadata } from "@/lib/utils"

export const metadata: Metadata = constructMetadata({
  title: "Dark Theme Website | Inspirational Website designs done with Ebon UI or other tools",
  keywords:
    "ebonui, Ebon UI, Ebon UI tailwind, inspiration, tailwind css, react blocks, Dark UI, darkui, Black UI, Light UI, Noir UI, neon glow, glassmorphic designs, react templates, next.js templates, Ui, Ebon UI, darkside, tailwind components, dark mode ui, dark mode components, dark mode library, tailwind dark mode, dark theme ui, dark theme components, dark theme library, react components, vue components, svelte components, nextjs components, nuxtjs components",
  description:
    "A Tailwind UI Library Built for the Dark. Beautiful in the Light. Features Animated components and effects, plus Glassmorphic layouts.",
  image: absoluteUrl("/screenshot.png"),
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteBanner />
      <SiteHeader />
      <main className="min-h-screen w-full">{children}</main>
      <SiteFooter />
    </>
  )
}
