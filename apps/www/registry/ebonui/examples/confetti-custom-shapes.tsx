"use client"


import { Button } from "@/components/ui/button"

export default function ConfettiCustomShapes() {
  const handleClick = () => {
    const scalar = 2


  }

  return (
    <div className="relative flex items-center justify-center">
      <Button onClick={handleClick}>Trigger Shapes</Button>
    </div>
  )
}
