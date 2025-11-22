import { TextAnimate } from "@/registry/ebonui/text-animate"

export default function TextAnimateDemo8() {
  return (
    <TextAnimate
      text="Neon Glow"
      preset="neonWave"
      className="text-6xl font-bold text-purple-500 md:text-7xl"
      segmentClassName="animate-[pulse_1.5s_ease-in-out_infinite]"
      stagger={0.1}
    />
  )
}
