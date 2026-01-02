// components/ui/breadcrumbs.tsx
import * as React from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

import { cn } from "@/lib/utils"

interface Breadcrumb {
  href?: string
  label: string
  icon?: React.ReactNode
}

interface BreadcrumbsProps {
  items: Breadcrumb[]
  separator?: React.ReactNode
  className?: string
}

function Breadcrumbs({
  items,
  separator = <ChevronRight className="h-4 w-4" />,
  className,
}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "inline-flex h-10 items-center space-x-1 text-sm",
        className
      )}
    >
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground flex items-center space-x-1"
      >
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <span className="sr-only">{separator}</span>
          <span aria-hidden="true" className="px-1.5">
            {separator}
          </span>
          <a
            href={item.href}
            className={cn(
              "hover:text-foreground",
              index === items.length - 1
                ? "text-foreground font-semibold"
                : "text-muted-foreground"
            )}
          >
            {item.icon && (
              <span className="mr-1 inline-block h-4 w-4 align-middle">
                {item.icon}
              </span>
            )}
            {item.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  )
}

export { Breadcrumbs }
