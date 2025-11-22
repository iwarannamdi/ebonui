import { NumberTicker } from "@/registry/ebonui/number-ticker"

export default function NumberTickerDemo() {
  return (
    <section className="relative overflow-hidden py-32 text-white">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <NumberTicker
          value={1000000}
          className="bg-gradient-to-r from-purple-400 to-purple-800 bg-clip-text text-6xl text-transparent md:text-8xl"
          delayMs={800}
          springConfig={{ damping: 35, stiffness: 70 }}
        />
      </div>
    </section>
  )
}
