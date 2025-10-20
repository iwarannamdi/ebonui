import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, UserCog, ComponentIcon, BookText, LayoutPanelTop, CombineIcon, BrickWallIcon } from "lucide-react";
import { motion } from "motion/react";

export default function FeaturesEbonUI() {
  return (
    <section className="py-12 sm:py-24 relative overflow-hidden">
      {/* Reduced padding on mobile */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get Started for{" "}
            <mark className="bg-purple-700/30 text-purple-500 px-1 rounded">Free</mark>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400">
            Launch your next project in minutes with ready-to-use dark mode UI. Everything you need, all powered by Tailwind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-8">
          {/* Column 1 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 grid gap-4 sm:gap-8">
            {/* Card 1 (Small) */}
            <Card className="group min-h-[11rem] sm:h-44 rounded-2xl bg-white/5 backdrop-blur-md border light:border-zinc-300 hover:border-purple-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <ComponentIcon className="w-8 h-8 mb-3 text-purple-400 item-center mx-auto" />                                
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-l from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    200+
                  </span>
                  <h3 className="mt-4 text-base sm:text-lg font-semibold text-muted-foreground">
                    Components
                  </h3>
                </CardContent>
                <div className="absolute inset-0 -z-10 blur-2xl bg-purple-500/10 group-hover:bg-purple-500/20 transition" />
              </motion.div>
            </Card>

            {/* Card 2 (Tall) */}
            <Card className="group min-h-[18rem] sm:h-80 rounded-2xl bg-white/5 backdrop-blur-md border light:border-zinc-300 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-4 sm:p-6 mt-8">
                  <CombineIcon className="w-8 h-8 mb-3 text-purple-400 item-center mx-auto" />              
                  <h3 className="text-base sm:text-lg font-semibold">
                    Pre-made landing page blocks
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    Beautifully designed landing pages for faster development time
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm sm:text-base"
                  >
                    Explore All <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </motion.div>
            </Card>
          </div>

          {/* Column 2 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 grid gap-4 sm:gap-8">
            {/* Card 3 (Tall) */}
            <Card className="group min-h-[18rem] sm:h-80 rounded-2xl bg-white/5 backdrop-blur-md border light:border-zinc-300 hover:border-fuchsia-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-4 sm:p-6 mt-8">
                  <BookText className="w-8 h-8 mb-3 text-purple-400 item-center mx-auto" />              
                  <h3 className="text-base sm:text-lg font-semibold">
                    Full documentation and examples
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    Comprehensive docs on how to integrate each UI
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-fuchsia-400 hover:text-fuchsia-300 text-sm sm:text-base"
                  >
                    Read Docs <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </motion.div>
            </Card>

            {/* Card 4 (Small) */}
            <Card className="group min-h-[11rem] sm:h-44 rounded-2xl bg-white/5 backdrop-blur-md border light:border-zinc-300 hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <LayoutPanelTop className="w-8 h-8 mb-3 text-purple-400 item-center mx-auto" />              
                  <h3 className="text-base sm:text-lg font-semibold">
                    Multiple dark themes out of the box
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    Choose from multiple dark themes crafted for the darkside.
                  </p>
                </CardContent>
              </motion.div>
            </Card>
          </div>

          {/* Column 3 */}
          <div className="col-span-12 md:col-span-12 lg:col-span-4 grid gap-4 sm:gap-8">
            {/* Card 5 (Small) */}
            <Card className="group min-h-[11rem] sm:h-44 rounded-2xl bg-white/5 backdrop-blur-md border light:border-zinc-300 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                  <UserCog className="w-8 h-8 mb-3 text-purple-400 item-center mx-auto" />              
                  <h3 className="text-base sm:text-lg font-semibold">
                    Premium support plans for teams
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    Our plans for teams includes supports
                  </p>
                </CardContent>
              </motion.div>
            </Card>

            {/* Card 6 (Tall) */}
            <Card className="group min-h-[18rem] sm:h-80 rounded-2xl bg-white/5 backdrop-blur-md border light:border-zinc-300 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CardContent className="flex flex-col items-center justify-center text-center p-4 sm:p-6 mt-8">
                  <BrickWallIcon className="w-8 h-8 mb-3 text-purple-400 item-center mx-auto" />              
                  <h3 className="text-base sm:text-lg font-semibold">
                    Full Website Templates
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm sm:text-base">
                    Get started more faster with free and pro templates
                  </p>
                  <Button
                    variant="link"
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm sm:text-base"
                  >
                    View Templates <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </motion.div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}