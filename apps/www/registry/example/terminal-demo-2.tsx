import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/ebonui/terminal"

export default function TerminalDemo2() {
  return (
    <Terminal>
      <TypingAnimation delay={0}>$ git status</TypingAnimation>

      <AnimatedSpan delay={800} className="text-green-500">
        On branch main
      </AnimatedSpan>

      <AnimatedSpan delay={1000} className="text-green-500">
        Your branch is up to date with origin/main.
      </AnimatedSpan>

      <AnimatedSpan delay={1200} className="text-blue-500">
        Changes not staged for commit:
      </AnimatedSpan>

      <AnimatedSpan delay={1400} className="ml-4 text-blue-500">
        modified: src/components/Button.tsx
      </AnimatedSpan>

      <TypingAnimation delay={2000}>$ git add .</TypingAnimation>

      <TypingAnimation delay={2800}>
        $ git commit -m Update Button component
      </TypingAnimation>

      <AnimatedSpan delay={3600} className="text-green-500">
        [main abc1234] Update Button component
      </AnimatedSpan>

      <AnimatedSpan delay={3800} className="text-green-500">
        1 file changed, 5 insertions(+), 2 deletions(-)
      </AnimatedSpan>
    </Terminal>
  )
}
