"use client"

import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function SeparatorDemo() {
  const settings = [
    { id: "profile", title: "Profile" },
    { id: "billing", title: "Billing" },
    { id: "security", title: "Security" },
  ]

  return (
    <div className="container mx-auto space-y-8 py-10">
      <Card>
        <CardContent className="space-y-6 p-6">
          {/* Profile Section */}
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Profile</h3>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-muted-foreground text-sm">
                    john.doe@email.com
                  </p>
                </div>
              </div>
              <Separator className="my-2" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-xs font-medium uppercase">
                    First name
                  </Label>
                  <Input defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground text-xs font-medium uppercase">
                    Last name
                  </Label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <Separator />

          {/* Settings List */}
          <div className="space-y-0">
            {settings.map((setting, index) => (
              <React.Fragment key={setting.id}>
                <div className="flex items-center space-x-3 py-3">
                  <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-md">
                    <span className="text-xs font-medium">
                      {setting.id.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{setting.title}</p>
                </div>
                {index < settings.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
