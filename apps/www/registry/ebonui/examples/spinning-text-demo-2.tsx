import { SpinningText } from "@/registry/ebonui/ui/spinning-text"

export default function SpinningTextBasic() {
  return (
    <SpinningText reverse className="text-4xl" duration={4} radius={6}>
      learn more • earn more • grow more •
    </SpinningText>
  )
}
