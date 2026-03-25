"use client"

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/registry/ebonui/ui/hover-card"

interface HoverCardDemoProps {
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
  align?: "start" | "center" | "end"
  alignOffset?: number
  followCursor?: boolean | "x" | "y"
}

export function HoverCardDemo({
  side,
  sideOffset = 8,
  align = "center",
  alignOffset,
  followCursor,
}: HoverCardDemoProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href="https://x.com/ebonui"
          target="_blank"
          rel="noopener noreferrer"
          className="block size-14 overflow-hidden rounded-2xl shadow-sm transition-transform hover:scale-105"
        >
          <img
            src="https://ebonui.com/_next/image?url=%2Flogo.png&w=64&q=75"
            alt="Ebon UI"
            className="h-full w-full object-cover"
          />
        </a>
      </HoverCardTrigger>

      <HoverCardContent
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="w-80 p-5"
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <div className="size-16 overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://ebonui.com/_next/image?url=%2Flogo.png&w=64&q=75"
                alt="Ebon UI"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <div className="font-semibold text-lg tracking-tight">Ebon UI</div>
              <div className="text-sm text-muted-foreground">@ebonui</div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground">
            Beautifully animated React components built with Tailwind CSS, TypeScript,
            and Motion. Open source, production-ready, and designed for delightful user
            experiences.
          </p>

          <div className="flex gap-8 text-sm">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">248</span>
              <span className="text-muted-foreground">Following</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">12.4k</span>
              <span className="text-muted-foreground">Followers</span>
            </div>
          </div>
          <a
            href="https://x.com/ebonui"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex h-9 w-full items-center justify-center rounded-xl bg-foreground text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
          >
            Follow on X
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}