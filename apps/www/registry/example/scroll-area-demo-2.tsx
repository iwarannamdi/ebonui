"use client"

import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function ScrollAreaDemoTwo() {
  return (
    <div className="container mx-auto space-y-8 py-10">
      <ScrollArea className="h-64 w-full rounded-md border">
        <div className="flex space-x-4 p-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex w-48 shrink-0 flex-col space-y-2">
              <div className="bg-muted aspect-square overflow-hidden rounded-md">
                <Image
                  src={`https://picsum.photos/192/192?random=${i}`}
                  alt={`Image ${i + 1}`}
                  className="h-full w-full object-cover"
                  width={192}
                  height={192}
                />
              </div>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
