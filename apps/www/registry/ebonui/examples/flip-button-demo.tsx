import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/registry/ebonui/ui/flip-button"

export function FlipButtonDemo() {
  return (
    <FlipButton className="bg-primary rounded-md px-5 py-2 text-white">
      <FlipButtonFront>Submit</FlipButtonFront>
      <FlipButtonBack>Processing...</FlipButtonBack>
    </FlipButton>
  )
}
