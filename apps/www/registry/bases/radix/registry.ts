import { registryItemSchema, type Registry } from "shadcn/schema"
import { z } from "zod"

export const registry = {
  name: "ebonui",
  homepage: "https://ebonui.com",
  items: z.array(registryItemSchema).parse([]),
} satisfies Registry
