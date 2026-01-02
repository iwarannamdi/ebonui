import { Settings, Users } from "lucide-react"
import { Breadcrumbs } from "registry/ebonui/ui/breadcrumbs"

export function BreadcrumbsDemo() {
  return (
    <div className="space-y-6">
      <div>
        <Breadcrumbs
          items={[
            {
              href: "/admin",
              label: "Admin",
              icon: <Settings className="h-4 w-4" />,
            },
            {
              href: "/admin/users",
              label: "Users",
              icon: <Users className="h-4 w-4" />,
            },
            { href: "/admin/users/123", label: "John Doe" },
          ]}
        />
      </div>
    </div>
  )
}
