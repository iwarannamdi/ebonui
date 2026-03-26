"use client"

import { useEffect, useState } from "react"

import { Progress } from "@/registry/ebonui/ui/progress"

export default function Demo() {
  const [progress, setProgress] = useState(10)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 10))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-[300px] space-y-4">
      <Progress value={progress} />
      <p className="text-sm text-zinc-400">{progress}%</p>
    </div>
  )
}
