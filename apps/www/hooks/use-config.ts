import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type Config = {
  style: "ebonui"
  packageManager: "npm" | "yarn" | "pnpm" | "bun"
  installationType: "cli" | "manual"
}

const configAtom = atomWithStorage<Config>("config", {
  style: "ebonui",
  packageManager: "pnpm",
  installationType: "cli",
})

export function useConfig() {
  return useAtom(configAtom)
}
