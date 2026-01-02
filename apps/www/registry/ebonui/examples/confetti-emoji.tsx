"use client"


import { Button } from "@/components/ui/button"

export default function ConfettiEmoji() {
  const handleClick = () => {
    const scalar = 2

    }

  return (
    <div className="relative justify-center">
      <Button onClick={handleClick}>Trigger Emoji</Button>
    </div>
  )
}
