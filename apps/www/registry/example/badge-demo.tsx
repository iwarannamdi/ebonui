"use client"

import * as React from "react"
import { AlertTriangle, Clock, Eye, Sparkles, Star, Users } from "lucide-react"
import { Badge } from "registry/ebonui/badge"

export function BadgeDemo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="default" className="gap-1">
          <Sparkles className="h-3 w-3" />
          Featured
        </Badge>
        <Badge variant="secondary" className="gap-1">
          <Star className="h-3 w-3" />
          Premium
        </Badge>
        <Badge variant="outline" className="gap-1">
          <Eye className="h-3 w-3" />
          1.2k views
        </Badge>
        <Badge variant="destructive" className="gap-1">
          <AlertTriangle className="h-3 w-3" />
          Error
        </Badge>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="default" size="lg" className="gap-2">
          <Users className="h-4 w-4" />
          Team Plan
          <span className="ml-1 text-xs opacity-75">•</span>
          <span className="text-xs font-normal">Up to 10 users</span>
        </Badge>
        <Badge variant="outline" size="lg" className="gap-2">
          <Clock className="h-4 w-4" />
          Trial Ends
          <span className="ml-auto text-xs font-normal">Dec 31</span>
        </Badge>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Badge className="rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200">
          Blue Pill
        </Badge>
        <Badge className="rounded-full bg-green-100 text-green-800 hover:bg-green-200">
          Green Pill
        </Badge>
        <Badge className="rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200">
          Purple Pill
        </Badge>
      </div>
    </div>
  )
}
