"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "registry/ebonui/avatar"

export function AvatarDemo() {
  const teamMembers = [
    {
      id: 1,
      name: "Jessica Parker",
      avatar: "https://avatars.githubusercontent.com/u/15854638",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://avatars.githubusercontent.com/u/124599",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar: "https://avatars.githubusercontent.com/u/1394023",
    },
    {
      id: 4,
      name: "David Wilson",
      avatar: "https://avatars.githubusercontent.com/u/1241234",
    },
    {
      id: 5,
      name: "Emily Davis",
      avatar: "https://avatars.githubusercontent.com/u/20110627",
    },
  ]

  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <div className="space-y-4">
        <div className="flex -space-x-2">
          {teamMembers.slice(0, 5).map((member) => (
            <Avatar
              key={member.id}
              className="border-background h-8 w-8 border-2"
            >
              <AvatarImage src={member.avatar} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
          ))}
          <div className="bg-muted border-background flex h-8 w-8 items-center justify-center rounded-full border-2">
            <span className="text-muted-foreground text-xs">+2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
