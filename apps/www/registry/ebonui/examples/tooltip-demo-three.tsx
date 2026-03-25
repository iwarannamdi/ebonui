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
          <TooltipTrigger className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white">
            ?
          </TooltipTrigger>
          <TooltipContent>Helpful info here</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  )
}
