import { Badge } from "@/registry/ebonui/ui/badge"
import { Spinner } from "@/registry/ebonui/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-2">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Loading
      </Badge>
    </div>
  )
}
