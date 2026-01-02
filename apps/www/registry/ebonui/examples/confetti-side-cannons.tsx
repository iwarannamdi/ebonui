"use client"


import { Button } from "@/components/ui/button"

export default function ConfettiSideCannons() {
  const handleClick = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds
    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

    const frame = () => {
      if (Date.now() > end) return

      requestAnimationFrame(frame)
    }

    frame()
  }

  return (
    <div className="relative">
      <Button onClick={handleClick}>Trigger Side Cannons</Button>
    </div>
  )
}
