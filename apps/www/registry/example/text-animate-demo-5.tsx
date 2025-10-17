import { TextAnimate } from "@/registry/blakui/text-animate"

export default function TextAnimateDemo5() {
  return (
    <TextAnimate animation="fadeIn" by="line" as="p">
      {`Fade in by line as paragraph\n\nFade in by line as paragraph\n\nFade in by line as paragraph`}
    </TextAnimate>
  )
}
