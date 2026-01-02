import { TypingAnimation } from "@/registry/ebonui/ui/typing-animation"

export default function Component() {
  return (
    <TypingAnimation
      words={[
        "Building the next generation of AI-powered applications",
        "Turning coffee into beautiful, performant code",
        "Shipping features faster than you can say deploy",
      ]}
      typeSpeed={80}
      deleteSpeed={40}
      pauseDelay={2000}
      loop
      className="mx-auto max-w-5xl text-4xl leading-relaxed md:text-5xl"
    />
  )
}
