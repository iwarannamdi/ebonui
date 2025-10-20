import Image from "next/image";
import { motion } from "motion/react";

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
];

export default function FrameworkGrid() {
  return (
    <section className="w-full py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold">
            Built for your favorite{" "}
            <mark className="bg-purple-700/30 text-purple-500 px-1 rounded">frameworks</mark>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            EbonUI works seamlessly wherever Tailwind goes. Drop it into your stack and start building.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 border border-opacity-30 border-zinc-700 rounded-lg overflow-hidden">
          {frameworks.map((fw) => (
            <div
              key={fw.name}
              className="flex items-center justify-center h-40 border border-opacity-30 border-zinc-700"
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
                  className="object-contain hidden dark:block"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
