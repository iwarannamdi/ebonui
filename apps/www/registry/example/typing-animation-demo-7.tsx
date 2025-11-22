import { TypingAnimation } from "@/registry/ebonui/typing-animation"

export default function Component() {
  return (
    <TypingAnimation
      words={["This is the moment you've been waiting for..."]}
      showCursor={false}
      className="text-5xl font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
    />
  )
}
