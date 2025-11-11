import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent">
        Build the Future in Dark Mode
      </h2>
      <p className="text-muted-foreground mt-3">
        Explore docs, try components, or star us on GitHub.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Button
          size="lg"
          className="bg-purple-500 text-black hover:bg-purple-400"
        >
          Read Docs
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
        >
          GitHub
        </Button>
      </div>
    </section>
  )
}
