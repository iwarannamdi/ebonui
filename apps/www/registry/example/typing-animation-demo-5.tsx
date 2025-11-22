import { TypingAnimation } from "@/registry/ebonui/typing-animation"

export default function Component() {
  return (
    <TypingAnimation
      words={["Hello 👋", "Bonjour 🌍", "Ciao ✨", "Hola 🔥"]}
      typeSpeed={100}
      pauseDelay={1800}
      loop
      className="text-6xl"
    />
  )
}
