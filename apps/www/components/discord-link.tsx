import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/registry/ebonui/ui/button"
import { Skeleton } from "@/registry/ebonui/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/ebonui/ui/tooltip"
import { Icons } from "@/components/icons"
import { PingDot } from "@/components/ping-dot"

export function DiscordLink({ className }: { className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "shadow-none transition-colors",
            className
          )}
          href={siteConfig.links.discord}
          target="_blank"
          rel="noreferrer"
        >
          <Icons.discord />
          <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
            <ActiveMembersCount className="text-muted-foreground" />
          </React.Suspense>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
          <span>
            <ActiveMembersCount className="text-background" /> members online in
            our Discord community
          </span>
        </React.Suspense>
      </TooltipContent>
    </Tooltip>
  )
}

export async function ActiveMembersCount({
  className,
}: {
  className?: string
}) {
  const data = await fetch(
    "https://discord.com/api/guilds/1430619488730218619/widget.json",
    {
      next: { revalidate: 3600 }, // Cache for 1 hour (3600 seconds)
    }
  )
  const json = await data.json()

  return (
    <div className={cn("ml-2 inline-flex items-center gap-1", className)}>
      <PingDot />
      <span className="min-w-[2rem] text-xs font-medium tabular-nums">
        {json.presence_count >= 1000
          ? `${(json.presence_count / 1000).toFixed(1)}k`
          : json.presence_count.toLocaleString()}
      </span>
    </div>
  )
}
