import { TypingAnimation } from "@/registry/ebonui/typing-animation"

export default function Component() {
  return (
    <div className="space-y-6">
      <TypingAnimation
        words={["Design.", "Develop.", "Deploy.", "Dominate."]}
        typeSpeed={200}
        deleteSpeed={80}
        pauseDelay={1000}
        loop
        className="bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 bg-clip-text text-4xl font-black tracking-tighter text-transparent md:text-6xl"
      />
      <TypingAnimation
        words={["One line of code at a time."]}
        typeSpeed={80}
        showCursor={false}
        className="text-2xl text-gray-500"
      />
    </div>
  )
}
