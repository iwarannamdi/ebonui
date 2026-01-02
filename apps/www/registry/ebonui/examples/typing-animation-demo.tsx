import { TypingAnimation } from "@/registry/ebonui/ui/typing-animation"

export default function Component() {
  return (
    <TypingAnimation
      words={["Developer", "Designer", "Creator", "Dreamer"]}
      typeSpeed={120}
      deleteSpeed={60}
      pauseDelay={1500}
      loop
      className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent md:text-6xl"
    />
  )
}
