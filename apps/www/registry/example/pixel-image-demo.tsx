import { PixelImage } from "@/registry/ebonui/pixel-image"

export default function Home() {
  return (
    <PixelImage
      src="/pixel-image-demo.jpg"
      customGrid={{ rows: 4, cols: 6 }}
      grayscaleAnimation
    />
  )
}
