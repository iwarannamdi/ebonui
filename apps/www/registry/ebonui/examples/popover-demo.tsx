import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "registry/ebonui/ui/popover"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function PopoverDemo() {
  return (
    <div className="space-y-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="start">
          <div className="space-y-4">
            <div className="space-y-2">
              <h4 className="leading-none font-medium">Edit profile</h4>
              <p className="text-muted-foreground text-sm">
                Make changes to your profile here. Click save when you are done.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john.doe@company.com"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
