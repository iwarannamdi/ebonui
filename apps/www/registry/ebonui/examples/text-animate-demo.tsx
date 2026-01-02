import { TextAnimate } from "@/registry/ebonui/ui/text-animate"

export default function TextAnimateDemo() {
  return (
    <TextAnimate
      text="We build the future"
      preset="fadeUp"
      className="text-5xl font-bold tracking-tighter md:text-7xl"
    />
  )
}
