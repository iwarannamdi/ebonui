import { TextAnimate } from "@/registry/ebonui/text-animate"

export default function TextAnimateDemo3() {
  return (
    <TextAnimate
      text="HOVER ME"
      preset="magneticHover"
      hoverEffect
      mouseDistort
      className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-6xl font-bold text-transparent"
    />
  )
}
