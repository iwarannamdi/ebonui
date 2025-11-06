import { CustomCursor } from "@/registry/ebonui/custom-cursor"

export default function CustomCursorDemo() {
  return (
    <>
      <span className="hidden md:block">Move your mouse around</span>
      <span className="block md:hidden">Tap anywhere to see the cursor</span>
      <CustomCursor />
    </>
  )
}
