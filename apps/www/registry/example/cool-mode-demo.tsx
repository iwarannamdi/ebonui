import { Button } from "@/components/ui/button"
import { CoolMode } from "@/registry/ebonui/cool-mode"

export default function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  )
}
