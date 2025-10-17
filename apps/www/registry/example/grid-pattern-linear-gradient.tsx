"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "@/registry/blakui/grid-pattern"

export default function GridPatternLinearGradient() {
  return (
    <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
    </div>
  )
}
