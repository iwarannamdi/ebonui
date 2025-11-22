import { TextAnimate } from "@/registry/ebonui/text-animate"

export default function TextAnimateDemo4() {
  return (
    <TextAnimate
      text="CyperPunk 2077"
      preset="glitch"
      className="text-6xl font-bold tracking-wider uppercase"
      segmentClassName="drop-shadow-[0_0_20px_rgba(122, 14, 230, 0.8)]"
    />
  )
}
