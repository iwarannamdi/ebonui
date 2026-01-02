import { AnimatedShinyText } from "@/registry/ebonui/ui/animated-shiny-text"

export default function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <AnimatedShinyText
        shimmerWidth={220}
        shimmerColor="white/90"
        gradientVia="white/70"
        className="text-5xl font-bold"
      >
        Shiny Text!
      </AnimatedShinyText>
    </div>
  )
}
