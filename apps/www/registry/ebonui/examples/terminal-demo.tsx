import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/ebonui/ui/terminal"

export default function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>
        &gt; npx create-vite@latest my-app --template react-ts
      </TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Scaffolding project in /path/to/my-app...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">✔ Done. Now run:</AnimatedSpan>

      <AnimatedSpan className="ml-4 text-green-500">npm install</AnimatedSpan>

      <AnimatedSpan className="ml-4 text-green-500">npm run dev</AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>📁 Created files:</span>
        <span className="block pl-2">- src/App.tsx</span>
        <span className="block pl-2">- vite.config.ts</span>
        <span className="block pl-2">- tsconfig.json</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Your Vite + React + TypeScript project is ready!
      </TypingAnimation>

      <TypingAnimation className="text-muted-foreground">
        Navigate to the project and start building.
      </TypingAnimation>
    </Terminal>
  )
}
