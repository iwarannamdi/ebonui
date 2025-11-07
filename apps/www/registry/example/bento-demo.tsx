import Image from "next/image"
import { CodesImage, GlobeMap, Tablet } from "@/assets"

import { cn } from "@/lib/utils"
import { BentoCard, BentoGrid } from "@/registry/ebonui/bento-grid"
import { Marquee } from "@/registry/ebonui/marquee"

const books = [
  {
    title: "The Clockwork Horizon",
    description:
      "A steampunk adventure following an inventor who discovers a hidden city powered by time itself.",
  },
  {
    title: "Echoes of the Deep",
    description:
      "A marine biologist uncovers ancient secrets buried beneath the ocean floor while battling corporate greed.",
  },
  {
    title: "Digital Whispers",
    description:
      "In a world run by AI, a hacker finds a way to communicate with forgotten human memories stored in the cloud.",
  },
  {
    title: "The Silent Kingdom",
    description:
      "A fantasy tale of a cursed kingdom where no one can speak, and a young scribe holds the key to breaking the silence.",
  },
  {
    title: "Solar Ashes",
    description:
      "After Earth’s last sunrise, a group of astronauts races against time to reignite the dying sun.",
  },
]

const features = [
  {
    name: "Book Summaries",
    description: "The art of condensing knowledge into bite-sized pieces.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
      >
        {books.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.title}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.description}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    name: "Open Source",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={CodesImage}
        alt="Codes"
        className="absolute top-2 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
  {
    name: "Tablets",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src={Tablet}
        alt="Codes"
        className="absolute top-2 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
  {
    name: "The World Map",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Image
        src={GlobeMap}
        alt="Codes"
        className="absolute top-10 right-0 scale-75 rounded-md border [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90"
      />
    ),
  },
]

export default function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  )
}
