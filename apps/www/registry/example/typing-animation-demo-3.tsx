import { TypingAnimation } from "@/registry/ebonui/typing-animation"

export default function Component() {
  return (
    <TypingAnimation
      words={["HACKER", "CODER", "ENGINEER", "WIZARD"]}
      typeSpeed={40}
      deleteSpeed={20}
      pauseDelay={800}
      loop
      cursorStyle="block"
      className="font-mono text-7xl tracking-wider text-green-400"
    />
  )
}
