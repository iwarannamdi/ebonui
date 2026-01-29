"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"

import { GlowCard } from "@/registry/ebonui/ui/glow-card"
import { ShinnyIcons } from "@/registry/ebonui/ui/shinny-icons"

import { LogoBeam } from "./logo-beam"

const data = [50, 40, 300, 320, 500, 350, 200, 230, 500]
const maxData = Math.max(...data)
const chartHeight = 400
const chartWidth = 800

export function BentoBox() {
  const chartRef = useRef(null)
  const [isChartVisible, setIsChartVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsChartVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current)
      }
    }
  }, [chartRef])

  return (
    <div className="flex items-center justify-center">
      <div className="flex min-h-[800px] w-full max-w-7xl flex-col gap-4 md:h-[800px] md:min-h-[800px] md:flex-row">
        <GlowCard>
          <div className="flex h-full flex-col justify-between">
            <div className="mt-6 mb-4 px-6">
              <div className="mb-6 flex items-center justify-between pb-2">
                <h2 className="text-muted-foreground text-xl">Sales Data</h2>
                <div className="flex items-center">
                  <div className="bg-background h-1 w-8 rounded-lg"></div>
                  <span className="text-muted-foreground ml-2 text-sm">
                    Growth
                  </span>
                </div>
              </div>
              <div
                ref={chartRef}
                className="relative mt-12 w-full"
                style={{ height: `${chartHeight}px` }}
              >
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="h-full w-full pl-11"
                >
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary)" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="url(#gradient)"
                    stroke="none"
                    points={`${(0 / (data.length - 1)) * chartWidth},${chartHeight} ${data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                      )
                      .join(
                        " "
                      )} ${(data.length - 1) * (chartWidth / (data.length - 1))},${chartHeight}`}
                  />
                  <motion.polyline
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3"
                    className=""
                    points={data
                      .map(
                        (value, index) =>
                          `${(index / (data.length - 1)) * chartWidth},${chartHeight - (value / maxData) * chartHeight}`
                      )
                      .join(" ")}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isChartVisible ? 1 : 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
                <div className="pointer-events-none absolute top-0 left-0 h-full w-full">
                  {Array.from(Array(7).keys()).map((i) => (
                    <div
                      key={i}
                      className="text-muted-foreground absolute left-0 flex w-full items-center text-sm"
                      style={{ top: `${(100 / 6) * i}%` }}
                    >
                      <span className="mr-4">{`${10 + i * 10}%`}</span>
                      <div className="border-border w-full border-t"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 p-6 text-left">
              <h1 className="text-foreground mb-2 text-2xl font-bold">
                Incredible Growth
              </h1>
              <p className="text-muted-foreground text-lg">
                Fly through your tasks with rapid-fire keyboard shortcuts for
                everything. Literally everything.
              </p>
            </div>
          </div>
        </GlowCard>
        <div className="flex h-full w-full flex-col gap-5 md:h-[800px] md:w-1/2">
          <GlowCard>
            <div className="flex h-full flex-col justify-center">
              <LogoBeam />
              <div className="p-6 text-left">
                <h1 className="text-foreground mb-2 text-2xl font-bold">
                  Multiple Technologies
                </h1>
                <p className="text-muted-foreground text-lg">
                  Fly through your tasks with rapid-fire keyboard shortcuts for
                  everything. Literally everything.
                </p>
              </div>
            </div>
          </GlowCard>
          <GlowCard>
            <div className="flex h-full flex-col justify-center pt-9">
              <ShinnyIcons />
              <div className="mt-4 p-6 text-left">
                <h1 className="text-foreground mb-2 text-2xl font-bold">
                  AWS Integration
                </h1>
                <p className="text-muted-foreground text-lg">
                  Integrate AWS and use seamlessly with us.
                </p>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </div>
  )
}
