import { TextAnimate } from "@/registry/ebonui/text-animate"

export default function TextAnimateDemo5() {
  return (
    <TextAnimate
      text="Future is Now"
      preset="holographic"
      className="bg-gradient-to-r from-cyan-400 via-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-6xl font-bold text-transparent md:text-7xl"
    />
  )
}
