import { defineConfig, defineDocs } from "fumadocs-mdx/config"
import rehypePrettyCode from "rehype-pretty-code"

import { transformers } from "@/lib/highlight-code"

export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift()
      plugins.push([
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
          transformers,
        },
      ])

      return plugins
    },
  },
})

export const docs = defineDocs({
  dir: "content/docs",
  // TODO: Fix this when we upgrade to zod v4.
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     links: z.optional(
  //       z.object({
  //         doc: z.string().optional(),
  //         api: z.string().optional(),
  //       })
  //     ),
  //   }),
  // },
})

export const websites = defineDocs({
  dir: "content/websites",
  // TODO: Fix this when we upgrade to zod v4.
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     links: z.optional(
  //       z.object({
  //         doc: z.string().optional(),
  //         api: z.string().optional(),
  //       })
  //     ),
  //   }),
  // },
})

export const blog = defineDocs({
  dir: "content/blog",
  // TODO: Fix this when we upgrade to zod v4.
  // docs: {
  //   schema: frontmatterSchema.extend({
  //     links: z.optional(
  //       z.object({
  //         doc: z.string().optional(),
  //         api: z.string().optional(),
  //       })
  //     ),
  //   }),
  // },
})
