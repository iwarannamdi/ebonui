import { WordRotate } from "@/registry/blakui/word-rotate"

export default function WordRotateDemo() {
  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={["Word", "Rotate"]}
    />
  )
}
