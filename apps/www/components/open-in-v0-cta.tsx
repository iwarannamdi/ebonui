import { cn } from "@/lib/utils"
import { Button } from "@/registry/ebonui/ui/button"

export function OpenInV0Cta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 rounded-lg p-6 text-sm",
        className
      )}
    >
      <div className="text-base leading-tight font-semibold text-balance group-hover:underline">
        Support Ebon UI by giving it a star on GitHub!
      </div>
      <div className="text-muted-foreground">
        A lot of work goes into maintaining and improving Ebon UI. Your stars
        help show your support and encourage further development.
      </div>
      <Button size="sm" className="mt-2 w-fit">
        Star Now
      </Button>
      <a
        href="https://github.com/iwarannamdi/ebonui"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">Star on Github</span>
      </a>
    </div>
  )
}
