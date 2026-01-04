"use client"

import * as React from "react"
import { RotateCcw } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { OpenInV0Button } from "@/components/open-in-v0-button"

export function ComponentPreviewTabs({
  className,
  name,
  align = "center",
  hideCode = false,
  chromeLessOnMobile = false,
  component,
  source,
  ...props
}: React.ComponentProps<"div"> & {
  name: string
  align?: "center" | "start" | "end"
  hideCode?: boolean
  chromeLessOnMobile?: boolean
  component: React.ReactNode
  source: React.ReactNode
}) {
  const [key, setKey] = React.useState(0)
  const [tab, setTab] = React.useState("preview")

  return (
    <div
      className={cn("relative mt-4 mb-12 flex flex-col gap-2", className)}
      {...props}
    >
      <div
        data-tab={tab}
        className="data-[tab=code]:border-code relative rounded-lg border md:-mx-1"
      >
        <div
          data-slot="preview"
          data-active={tab === "preview"}
          className="invisible overflow-hidden data-[active=true]:visible"
        >
          <div className="flex items-center justify-end gap-2 p-4">
            <OpenInV0Button name={name} />
            <Button
              onClick={() => setKey((prev) => prev + 1)}
              className="flex items-center rounded-lg px-3 py-1"
              variant="ghost"
            >
              <RotateCcw aria-label="restart-btn" size={16} />
            </Button>
          </div>
          <div
            key={key}
            data-align={align}
            className={cn(
              "preview flex min-h-[450px] w-full justify-center p-10 data-[align=center]:items-center data-[align=end]:items-end data-[align=start]:items-start"
            )}
          >
            {component}
          </div>
        </div>
        {!hideCode && (
        <div
          data-slot="code"
          data-active={tab === "code"}
          className="overflow-hidden **:data-rehype-pretty-code-figure:m-0! **:data-rehype-pretty-code-figure:rounded-t-none! **:data-rehype-pretty-code-figure:border-t! [&_pre]:max-h-100"
        >
          {source}
        </div>
        )}
      </div>
    </div>
  )
}
