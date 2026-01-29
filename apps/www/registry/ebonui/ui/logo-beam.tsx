"use client"

import Image, { type StaticImageData } from "next/image"
import { Ecosystem, SocialInstagram, SocialYoutube } from "@/assets"
import { motion } from "motion/react"

const lineWidth = 80
const lineHeight = 2

export function LogoBeam() {
  return (
    <div className="flex min-h-52 items-center justify-center">
      <div className="relative flex items-center">
        <LogoBox src={Ecosystem} />
        <Beam direction="right" />
        <GlowLogo src={SocialInstagram} />
        <Beam direction="left" delay={3.5} />
        <LogoBox src={SocialYoutube} />
      </div>
    </div>
  )
}

function LogoBox({ src }: { src: string | StaticImageData }) {
  return (
    <div className="bg-background border-border flex h-14 w-14 items-center justify-center rounded-2xl border p-4">
      <Image src={src} alt="logo" className="brightness-0 dark:invert" />
    </div>
  )
}

function GlowLogo({ src }: { src: string | StaticImageData }) {
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

function Beam({
  direction,
  delay = 2.5,
}: {
  direction: "left" | "right"
  delay?: number
}) {
  const from = direction === "right" ? -40 : 40
  const to = direction === "right" ? lineWidth + 40 : -lineWidth - 40

  return (
    <div
      className="bg-border relative overflow-hidden"
      style={{ width: lineWidth, height: lineHeight }}
    >
      <motion.div
        className="via-foreground absolute top-0 h-full w-10 bg-gradient-to-r from-transparent to-transparent opacity-75"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          repeatDelay: delay,
          ease: "linear",
        }}
      />
    </div>
  )
}
