import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/ebonui/ui/button"
import { ButtonGroup } from "@/registry/ebonui/ui/button-group"
import { Input } from "@/registry/ebonui/ui/input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
