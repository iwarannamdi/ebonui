import { showcaseSource } from "@/lib/source"
import { ShowcaseCard } from "@/components/sections/showcase"
import { BlurFade } from "@/registry/ebonui/ui/blur-fade"

export default function Page() {
  const showcases = showcaseSource.getPages()
  return (
    <article className="container max-w-[120ch] py-14">
      <h2 className="text-foreground mb-2 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
        Selected Darkside Websites
      </h2>
      <h3 className="text-foreground/80 mx-auto mb-8 text-center text-lg font-medium tracking-tight text-balance">
        Built with Ebon UI for the dark and other Inspirational dark mode
        design websites.
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {showcases.map((websites, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05}>
            <ShowcaseCard
              {...websites}
              href={websites.url ?? ""}
              title={websites.data.title ?? ""}
              image={websites.data.icon ?? ""}
              description={websites.data.description ?? ""}
            />
          </BlurFade>
        ))}
      </div>
    </article>
  )
}
