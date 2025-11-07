import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/ebonui/marquee"

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Lead Designer",
    bio: "Crafting pixel-perfect experiences that delight users worldwide.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Jordan Lee",
    role: "Full-Stack Dev",
    bio: "Building robust backends and sleek frontends with a passion for code.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Taylor Kim",
    role: "Product Manager",
    bio: "Bridging visions to reality, one feature at a time.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Casey Patel",
    role: "UX Researcher",
    bio: "Uncovering user needs to shape intuitive journeys.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
]

const firstRow = teamMembers.slice(0, teamMembers.length / 2)
const secondRow = teamMembers.slice(teamMembers.length / 2)
const thirdRow = teamMembers.slice(0, teamMembers.length / 2)
const fourthRow = teamMembers.slice(teamMembers.length / 2)

const TeamCard = ({
  avatar,
  name,
  role,
  bio,
}: {
  avatar: string
  name: string
  role: string
  bio: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-fit cursor-pointer overflow-hidden rounded-xl border p-4 sm:w-36",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={avatar}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{role}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{bio}</blockquote>
    </figure>
  )
}

export default function Marquee3D() {
  return (
    <div className="relative flex h-96 w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(0px) translateY(-50px) translateZ(-150px) rotateX(15deg) rotateY(0deg) rotateZ(0deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:20s]">
          {firstRow.map((review) => (
            <TeamCard key={review.role} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {secondRow.map((review) => (
            <TeamCard key={review.role} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]" vertical>
          {thirdRow.map((review) => (
            <TeamCard key={review.role} {...review} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:20s]" vertical>
          {fourthRow.map((review) => (
            <TeamCard key={review.role} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
