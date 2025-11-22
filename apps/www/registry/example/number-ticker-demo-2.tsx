import { cn } from "@/lib/utils"
import { NumberTicker } from "@/registry/ebonui/number-ticker"

export default function NumberTickerDemo() {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
      {[
        {
          label: "Total Sales",
          value: 84250,
          prefix: "$",
          color: "text-white",
        },
        { label: "New Users", value: 1832, suffix: "+", color: "text-white" },
        {
          label: "Success Rate",
          value: 97.3,
          suffix: "%",
          color: "text-white",
        },
        {
          label: "Avg. Score",
          value: 4.89,
          decimalPlaces: 2,
          suffix: "/5",
          color: "text-white",
        },
      ].map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl bg-white p-6 shadow-lg dark:bg-neutral-900"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {stat.label}
          </p>
          <p className={cn("mt-2 text-2xl font-bold", stat.color)}>
            {stat.prefix}
            <NumberTicker
              value={stat.value}
              decimalPlaces={stat.decimalPlaces ?? 0}
              triggerOnce={false}
              delayMs={200}
            />
            {stat.suffix}
          </p>
        </div>
      ))}
    </div>
  )
}
