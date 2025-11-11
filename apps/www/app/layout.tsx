import type { Viewport } from "next"
import { Metadata } from "next"
import { Provider as JotaiProvider } from "jotai"

import { fontVariables } from "@/lib/fonts"
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Analytics } from "@/components/analytics"
import { PHProvider } from "@/components/posthog-provider"
import { ThemeProvider } from "@/components/theme-provider"

import "@/styles/globals.css"

export const metadata: Metadata = constructMetadata({
  title: "Ebon UI",
  keywords:
    " ebonui, ebonui.com, Ebon UI tailwind, tailwind css, react blocks, Dark UI, darkui, Black UI, Light UI, Noir UI, neon glow, glassmorphic designs, react templates, next.js templates, Ui, Ebon UI, darkside, tailwind components, dark mode ui, dark mode components, dark mode library, tailwind dark mode, dark theme ui, dark theme components, dark theme library, react components, vue components, svelte components, nextjs components, nuxtjs components",
  description:
    "A Tailwind UI Library Built for the Dark. Beautiful in the Light. Features Animated components and effects, plus Glassmorphic layouts.",
  image: absoluteUrl("/og"),
})

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="layout-fixed">
      <head />
      <body
        className={cn(
          "text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
          fontVariables
        )}
      >
        <JotaiProvider>
          <PHProvider>
            <ThemeProvider attribute="class" defaultTheme="dark">
              <TooltipProvider>
                {children}
                <Toaster position="top-center" richColors toastOptions={{}} />
                <Analytics />
              </TooltipProvider>
            </ThemeProvider>
          </PHProvider>
        </JotaiProvider>
      </body>
    </html>
  )
}
