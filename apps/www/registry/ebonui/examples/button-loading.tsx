import { Button } from "@/registry/ebonui/ui/button"
import { Spinner } from "@/registry/ebonui/ui/spinner"

export default function ButtonLoading() {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      Submit
    </Button>
  )
}
