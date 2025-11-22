import { Highlighter } from "@/registry/ebonui/highlighter"

export default function HighlighterDemo() {
  return (
    <div className="text-center">
      <Highlighter
        action="highlight"
        color="#a82ed8"
        padding={3}
        animationDuration={800}
        isView={true}
      >
        This text highlights only when it enters the viewport!
      </Highlighter>
    </div>
  )
}
