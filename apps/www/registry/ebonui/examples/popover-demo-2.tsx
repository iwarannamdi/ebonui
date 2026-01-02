import {
  CopyIcon,
  Edit,
  MoreHorizontal,
  Share,
  Star,
  Trash2,
} from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "registry/ebonui/ui/popover"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function PopoverDemoTwo() {
  return (
    <div className="space-y-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <div className="grid gap-4">
            <span className="border-b p-1 font-medium">Actions</span>
            <div className="grid gap-2">
              <Button variant="ghost" className="h-8 w-full justify-start px-2">
                <CopyIcon className="mr-2 h-3 w-3" />
                Copy
              </Button>
              <Button variant="ghost" className="h-8 w-full justify-start px-2">
                <Share className="mr-2 h-3 w-3" />
                Share
              </Button>
              <Button variant="ghost" className="h-8 w-full justify-start px-2">
                <Star className="mr-2 h-3 w-3" />
                Add to favorites
              </Button>
            </div>
            <Separator />
            <div className="grid gap-2">
              <Button variant="ghost" className="h-8 w-full justify-start px-2">
                <Edit className="mr-2 h-3 w-3" />
                Edit
              </Button>
              <Button variant="ghost" className="h-8 w-full justify-start px-2">
                <Trash2 className="mr-2 h-3 w-3" />
                Delete
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
