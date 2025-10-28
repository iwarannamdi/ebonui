import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/registry/ebonui/terminal"

export default function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>&gt; npx create-vite@latest my-app --template react-ts</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Scaffolding project in /path/to/my-app...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Done. Now run:
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500 ml-4">
        npm install
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500 ml-4">
        npm run dev
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>📁 Created files:</span>
        <span className="pl-2 block">- src/App.tsx</span>
        <span className="pl-2 block">- vite.config.ts</span>
        <span className="pl-2 block">- tsconfig.json</span>
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