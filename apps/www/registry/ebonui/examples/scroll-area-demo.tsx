"use client"

import * as React from "react"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function ScrollAreaDemo() {
  return (
    <div className="container mx-auto space-y-8 py-10">
      <ScrollArea className="h-64 rounded-md border">
        <div className="p-4">
          <div className="prose prose-sm max-w-none">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="mb-4">
                <p className="text-muted-foreground mb-2 text-sm">
                  This section contains detailed information about various
                  aspects of the project. It includes technical specifications,
                  implementation details, and usage guidelines. The content is
                  structured to provide comprehensive coverage of all relevant
                  topics.
                </p>
              </div>
            ))}
          </div>
        </div>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </div>
  )
}
