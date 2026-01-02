import { TextAnimate } from "@/registry/ebonui/ui/text-animate"

export default function TextAnimateDemo6() {
  return (
    <TextAnimate
      text="Blinking Cursor"
      preset="typewriter"
      className="inline-block rounded-lg bg-black/80 px-8 py-4 font-mono text-4xl text-green-400 md:text-6xl"
    />
  )
}
