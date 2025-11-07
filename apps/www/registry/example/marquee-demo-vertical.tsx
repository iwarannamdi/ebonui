import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Marquee } from "@/registry/ebonui/marquee"

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Lead Designer",
    bio: "Crafting pixel-perfect experiences that delight users worldwide.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    badge: "Design",
  },
  {
    name: "Jordan Lee",
    role: "Full-Stack Dev",
    bio: "Building robust backends and sleek frontends with a passion for code.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    badge: "Engineering",
  },
  {
    name: "Taylor Kim",
    role: "Product Manager",
    bio: "Bridging visions to reality, one feature at a time.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    badge: "Product",
  },
  {
    name: "Casey Patel",
    role: "UX Researcher",
    bio: "Uncovering user needs to shape intuitive journeys.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    badge: "Research",
  },
]

const leftColumn = teamMembers.slice(0, teamMembers.length / 2)
const rightColumn = teamMembers.slice(teamMembers.length / 2)

const TeamCard = ({
  avatar,
  name,
  role,
  bio,
  badge,
}: {
  avatar: string
  name: string
  role: string
  bio: string
  badge: string
}) => {
  return (
    <Card className="h-full w-48 border-0 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-base leading-tight font-semibold">
              {name}
            </CardTitle>
            <Badge variant="outline" className="text-xs capitalize">
              {badge}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-xs leading-relaxed">{bio}</p>
        <p className="text-primary mt-2 text-xs font-medium">{role}</p>
      </CardContent>
    </Card>
  )
}

export default function TeamMarqueeVerticalDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee vertical pauseOnHover className="[--duration:20s]">
        {leftColumn.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </Marquee>
      <Marquee vertical reverse pauseOnHover className="[--duration:20s]">
        {rightColumn.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </Marquee>
    </div>
  )
}
