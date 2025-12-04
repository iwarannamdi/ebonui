import { ComponentPropsWithoutRef, CSSProperties, FC } from "react"

import { cn } from "@/lib/utils"

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
  shimmerWidth?: number
  shimmerColor?: string
  gradientFrom?: string
  gradientVia?: string
  gradientTo?: string
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  shimmerColor = "black/80",
  gradientFrom = "transparent",
  gradientVia = "black/80",
  gradientTo = "transparent",
  ...props
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
          "--shimmer-color": shimmerColor,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md",
        "text-neutral-600/70 dark:text-neutral-400/70",

        // Animation
        "animate-shiny-text bg-clip-text bg-no-repeat",
        "[background-size:var(--shiny-width)_100%]",
        "[transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Gradient (customizable)
        `bg-gradient-to-r from-${gradientFrom} via-${gradientVia} to-${gradientTo}`,
        "dark:via-white/80",

        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
