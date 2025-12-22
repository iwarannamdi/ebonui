import Image from "next/image"
import { motion } from "motion/react"

const frameworks = [
  {
    name: "Next.js",
    logoLight: "/next-black.svg",
    logoDark: "/next-white.svg",
  },
  {
    name: "Vite",
    logoLight: "/vite-logo-black.png",
    logoDark: "/vite-logo-white.png",
  },
  {
    name: "Remix",
    logoLight: "/remix-logo-black.webp",
    logoDark: "/remix-logo-white.png",
  },
  {
    name: "Astro",
    logoLight: "/astro-logo-black.webp",
    logoDark: "/astro-logo-white.png",
  },
]

export default function FrameworkGrid() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Title */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-bold">
            Built for your favorite{" "}
            <mark className="rounded bg-purple-700/30 px-1 text-purple-500">
              frameworks
            </mark>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            EbonUI works seamlessly wherever Tailwind goes. Drop it into your
            stack and start building.
          </p>
        </div>

        <div className="border-opacity-30 grid grid-cols-2 overflow-hidden rounded-lg border border-zinc-700 md:grid-cols-4">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="border-opacity-30 flex h-40 items-center justify-center border border-zinc-700"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 4 * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={fw.logoLight}
                  alt={`${fw.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain dark:hidden"
                />
                <Image
                  src={fw.logoDark}
                  alt={`${fw.name} logo`}
                  width={80}
                  height={80}
                  className="hidden object-contain dark:block"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
