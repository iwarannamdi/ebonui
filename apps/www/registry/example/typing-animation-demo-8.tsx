import { TypingAnimation } from "@/registry/ebonui/typing-animation"

export default function Component() {
  return (
    <div className="mx-auto max-w-2xl rounded-lg bg-black p-8 text-left font-mono">
      <span className="text-green-400">$ </span>
      <TypingAnimation
        as="span"
        words={["npm run dev", "cargo build --release", "docker compose up"]}
        typeSpeed={100}
        pauseDelay={1200}
        loop
        cursorStyle="block"
        className="text-green-400"
      />
    </div>
  )
}
