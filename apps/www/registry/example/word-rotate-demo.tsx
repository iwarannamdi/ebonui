import { WordRotate } from "@/registry/ebonui/word-rotate"

export default function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Website", "Platform", "Builder", "Experience"]}
      duration={2000}
      pauseOnHover
    />
  )
}
