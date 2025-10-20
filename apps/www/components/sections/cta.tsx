import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Build the Future in Dark Mode
        </h2>
        <p className="mt-3 text-muted-foreground">
          Explore docs, try components, or star us on GitHub.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button size="lg" className="bg-purple-500 hover:bg-purple-400 text-black">
            Read Docs
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
            GitHub
          </Button>
        </div>
      </section>  
    )
}
