import Link from "next/link"
import {
  ArrowRight,
  BookText,
  BrickWallIcon,
  CombineIcon,
  ComponentIcon,
  LayoutPanelTop,
  UserCog,
} from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FeaturesEbonUI() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-24">
      {/* Reduced padding on mobile */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get Started for{" "}
            <mark className="rounded bg-purple-700/30 px-1 text-purple-500">
              Free
            </mark>
          </h2>
          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Launch your next project in minutes with ready-to-use components &
            blocks. Everything you need, all powered by Tailwind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          {/* Column 1 */}
          <div className="col-span-12 grid gap-4 sm:gap-8 md:col-span-6 lg:col-span-4">
            {/* Card 1 (Small) */}
            <Card className="group light:border-zinc-300 relative min-h-[11rem] overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20 sm:h-44">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center p-4 text-center sm:p-6">
                  <ComponentIcon className="item-center mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <span className="bg-gradient-to-l from-purple-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                    200+
                  </span>
                  <h3 className="text-muted-foreground mt-4 text-base font-semibold sm:text-lg">
                    Components
                  </h3>
                </CardContent>
                <div className="absolute inset-0 -z-10 bg-purple-500/10 blur-2xl transition group-hover:bg-purple-500/20" />
              </motion.div>
            </Card>

            {/* Card 2 (Tall) */}
            <Card className="group light:border-zinc-300 min-h-[18rem] overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 sm:h-80">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="mt-8 flex flex-col items-center justify-center p-4 text-center sm:p-6">
                  <CombineIcon className="item-center mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <h3 className="text-base font-semibold sm:text-lg">
                    Pre-made UI blocks
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    Beautifully designed blocks for faster development time
                  </p>
                  <a href="/components">
                    <Button
                      variant="link"
                      className="mt-4 text-sm text-blue-400 hover:text-blue-300 sm:text-base"
                    >
                      Explore All <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </motion.div>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="col-span-12 grid gap-4 sm:gap-8 md:col-span-6 lg:col-span-4">
            {/* Card 3 (Tall) */}
            <Card className="group light:border-zinc-300 min-h-[18rem] overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-fuchsia-400/50 hover:shadow-lg hover:shadow-fuchsia-500/20 sm:h-80">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="mt-8 flex flex-col items-center justify-center p-4 text-center sm:p-6">
                  <BookText className="item-center mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <h3 className="text-base font-semibold sm:text-lg">
                    Full documentation and examples
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    Comprehensive docs on how to integrate each UI code
                  </p>
                  <Link href="/docs">
                    <Button
                      variant="link"
                      className="mt-4 text-sm text-fuchsia-400 hover:text-fuchsia-300 sm:text-base"
                    >
                      Read Docs <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </motion.div>
            </Card>

            {/* Card 4 (Small) */}
            <Card className="group light:border-zinc-300 min-h-[11rem] overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/20 sm:h-44">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center p-4 text-center sm:p-6">
                  <LayoutPanelTop className="item-center mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <h3 className="text-base font-semibold sm:text-lg">
                    Multiple dark themes out of the box
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    Choose from multiple dark themes crafted for the darkside.
                  </p>
                </CardContent>
              </motion.div>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="col-span-12 grid gap-4 sm:gap-8 md:col-span-12 lg:col-span-4">
            {/* Card 5 (Small) */}
            <Card className="group light:border-zinc-300 min-h-[11rem] overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-pink-400/50 hover:shadow-lg hover:shadow-pink-500/20 sm:h-44">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center p-4 text-center sm:p-6">
                  <UserCog className="item-center mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <h3 className="text-base font-semibold sm:text-lg">
                    Premium support plans for teams
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    Our plans for teams includes supports
                  </p>
                </CardContent>
              </motion.div>
            </Card>

            {/* Card 6 (Tall) */}
            <Card className="group light:border-zinc-300 min-h-[18rem] overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 sm:h-80">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="mt-8 flex flex-col items-center justify-center p-4 text-center sm:p-6">
                  <BrickWallIcon className="item-center mx-auto mb-3 h-8 w-8 text-purple-400" />
                  <h3 className="text-base font-semibold sm:text-lg">
                    Full Website Templates
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 sm:text-base">
                    Get started more faster with free and pro templates
                  </p>
                  <a href="#">
                    <Button
                      variant="link"
                      className="mt-4 text-sm text-blue-400 hover:text-blue-300 sm:text-base"
                    >
                      View Templates <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </motion.div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
