import { TypingAnimation } from "@/registry/ebonui/typing-animation"

export default function Component() {
  return (
    <TypingAnimation
      words={["minimalist", "elegant", "timeless", "refined"]}
      typeSpeed={150}
      pauseDelay={2000}
      loop
      cursorStyle="underscore"
      className="font-serif text-6xl text-gray-800 italic"
    />
  )
}
