import { docs, blog, websites } from "@/.source"
import { loader } from "fumadocs-core/source"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
})

export const blogSource = loader({
  baseUrl: "/blog",
  source: blog.toFumadocsSource(),
})

export const showcaseSource = loader({
  baseUrl: "/websites",
  source: websites.toFumadocsSource(),
})
