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
