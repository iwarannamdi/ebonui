"use client"

import { TextAnimate } from "@/registry/ebonui/text-animate"

export default function TextAnimateDemo9() {
  return (
    <TextAnimate
      text="Launching Soon"
      preset="scaleIn"
      className="inline-block rounded-2xl bg-purple-600 px-12 py-6 text-5xl font-bold text-white md:text-7xl"
    />
  )
}
