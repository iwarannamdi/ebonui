import { VideoText } from "@/registry/ebonui/ui/video-text"

export default function VideoTextDemo() {
  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <VideoText src="https://cdn.ebonui.com/ocean-small.webm">OCEAN</VideoText>
    </div>
  )
}
