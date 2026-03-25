"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/ebonui/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex min-h-[200px] items-center justify-center gap-6">
        <Tooltip>
          <TooltipTrigger className="rounded-md border px-4 py-2">
            More details
          </TooltipTrigger>
          <TooltipContent className="max-w-[200px]">
            <div className="space-y-1">
              <p className="font-medium">EbonUI Tooltip</p>
              <p className="text-xs text-zinc-400">
                Smooth animations, glass effect, and better UX.
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
