import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Marquee } from "@/registry/ebonui/ui/marquee"

const features = [
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    title: "John Mark",
    description: "Unlock data-driven decisions with precision analytics.",
    badge: "Frontend",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    title: "Thomas Shelby",
    description: "Experience seamless performance at scale.",
    badge: "Designer",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    title: "Larry Page",
    description: "Enterprise-grade protection for your assets.",
    badge: "Expert",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    title: "Berry White",
    description: "Connect across borders with effortless integration.",
    badge: "Lawyer",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    title: "Susan Collins",
    description: "Visualize trends and forecasts in real-time.",
    badge: "Manager",
  },
]

const FeatureCard = ({
  avatar,
  title,
  description,
  badge,
}: {
  avatar: string
  title: string
  description: string
  badge: string
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-74 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:scale-95",
        // light styles
        "border-border bg-card hover:bg-accent/20",
        // dark styles
        "dark:border-border dark:bg-card dark:hover:bg-accent/20"
      )}
    >
      <div className="mb-4 text-4xl">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={title} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {title.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-foreground text-lg font-semibold">{title}</h3>
          <Badge variant="secondary" className="text-xs">
            {badge}
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  )
}

export default function FeatureMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="w-full max-w-6xl [--gap:1.5rem]">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </Marquee>
    </div>
  )
}
