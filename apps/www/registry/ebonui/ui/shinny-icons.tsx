"use client"

import Image, { type StaticImageData } from "next/image"
import { Ecosystem, SocialInstagram, SocialYoutube } from "@/assets"
import { motion } from "motion/react"

export function ShinnyIcons() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center pt-20">
      <div className="relative flex h-full flex-row items-center justify-center gap-8">
        <GlowLogo src={SocialInstagram} />
        <GlowLogo src={SocialYoutube} />
        <GlowLogo src={Ecosystem} />
      </div>
    </div>
  )
}

function GlowLogo({ src }: { src: StaticImageData }) {
  return (
    <div className="bg-background border-border/70 relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border-2 p-4 shadow-[0_0_15px_5px_var(--muted)]">
      <Image src={src} alt="logo" className="brightness-0 dark:invert" />
      <motion.div
        className="via-foreground absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent to-transparent opacity-30"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2, ease: "linear", repeat: Infinity }}
      />
    </div>
  )
}
