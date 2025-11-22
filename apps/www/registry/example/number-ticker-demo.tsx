import { NumberTicker } from "@/registry/ebonui/number-ticker"

export default function NumberTickerDemo() {
  return (
    <section className="from-white to-gray-50 py-24 dark:from-black dark:to-neutral-950">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              <NumberTicker value={12750} decimalPlaces={0} delayMs={300} />
              <span className="text-4xl">+</span>
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Active users
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              <NumberTicker value={4.82} decimalPlaces={2} delayMs={600} />
              <span className="text-4xl">M</span>
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Revenue generated
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              <NumberTicker value={99.7} decimalPlaces={1} delayMs={900} />
              <span className="text-4xl">%</span>
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Uptime this year
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
