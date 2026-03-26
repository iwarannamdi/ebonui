import { Label } from "@/registry/ebonui/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/ebonui/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="plan-a" className="gap-4">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="plan-a" />
        <span>Starter</span>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="plan-b" />
        <span>Pro</span>
      </div>

      <div className="flex items-center gap-2">
        <RadioGroupItem value="plan-c" />
        <span>Enterprise</span>
      </div>
    </RadioGroup>
  )
}
