import { TextAnimate } from "@/registry/ebonui/ui/text-animate"

export default function TextAnimateDemo2() {
  return (
    <TextAnimate
      text="DISRUPT OR DIE"
      preset="blurInUp"
      className="text-6xl leading-none font-bold uppercase md:text-[100px]"
      stagger={0.08}
    />
  )
}
