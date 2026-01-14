import { Metadata } from "next"
import { notFound } from "next/navigation"

import { showcaseSource } from "@/lib/source"
import { absoluteUrl } from "@/lib/utils"
import { ShowcaseCard } from "@/components/sections/showcase"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/registry/ebonui/ui/button"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return showcaseSource.generateParams()
}

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getDocFromParams({ params }: PageProps) {
  const { slug } = await params
  const page = showcaseSource.getPage(slug)
  if (!page) notFound()
  const doc = page.data
  if (!doc.title || !doc.description) {
    notFound()
  }

  return { doc, page }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { doc, page } = await getDocFromParams({ params })

  if (!page) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/og`)
  ogUrl.searchParams.set("title", doc.title ?? "")
  ogUrl.searchParams.set("description", doc.description ?? "")

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  }
}

export default async function PagePage({ params }: PageProps) {
  const { doc, page } = await getDocFromParams({ params })

  return (
    <article className="container max-w-2xl py-14">
      <h2 className="text-foreground mb-4 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
        {doc.title}
      </h2>
      <h3 className="text-foreground/80 mx-auto mb-8 text-center text-lg font-medium tracking-tight text-balance">
        {doc.full == true ? "uses Ebon UI library to build their landing page." : "uses another UI library, but Ebon UI can achieve similar design aesthetics."}
      </h3>
      <ShowcaseCard
        title={doc.title ?? ""}
        href={doc.url ?? ""}
        image={doc.icon ?? ""}
        description={doc.description ?? ""}
      />
      <div className="mt-6 flex gap-4">
        <Link
          href={`https://${doc.title}`}
          target="_blank"
        >
          <Button
          size="lg"
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
        >
          Live Preview
        </Button>
        </Link>
      </div>      
    </article>
  )
}
