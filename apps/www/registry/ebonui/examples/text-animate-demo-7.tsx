import { TextAnimate } from "@/registry/ebonui/ui/text-animate"

export default function TextAnimateDemo7() {
  return (
    <TextAnimate
      text="MELTING"
      preset="liquid"
      className="text-7xl font-bold text-white drop-shadow-2xl"
      stagger={0.12}
    />
  )
}
