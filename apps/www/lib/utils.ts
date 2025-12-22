import process from "process"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Metadata } from "next"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function constructMetadata({
  title = "Ebon UI - Modern React + Tailwind CSS components & Templates",
  description = "Ebon UI is a curated collection of the best landing page components built using React + Tailwind CSS + Motion",
  image = absoluteUrl("/og"),
  ...props
}: {
  title?: string
  description?: string
  image?: string
  [key: string]: Metadata[keyof Metadata]
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "React",
      "Tailwind CSS",
      "Motion",
      "Landing Page",
      "Components",
      "Next.js",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@iwarannamdi",
    },
    icons: "/favicon.ico",
    metadataBase: new URL("https://ebonui.com"),
    authors: [
      {
        name: "iwarannamdi",
        url: "https://twitter.com/iwarannamdi",
      },
    ],
    creator: "iwarannamdi",
    ...props,
  }
}

