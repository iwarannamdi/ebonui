"use client"

import { useState } from "react"
import { ProductImage } from "@/assets"
import { featuresTabs } from "@/data/data"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "motion/react"

import FeatureTab from "@/components/sections/features-tab"

export const BelowHero = () => {
  const [currentTab, setCurrentTab] = useState<number>(0)
  const backgroundPositionX = useMotionValue(
    featuresTabs[0].backgroundPositionX
  )
  const backgroundPositionY = useMotionValue(
    featuresTabs[0].backgroundPositionY
  )
  const backgroundSizeX = useMotionValue(featuresTabs[0].backgroundSizeX)

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`

  const handleSelectTab = (tabIndex: number) => {
    setCurrentTab(tabIndex)

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    }

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, featuresTabs[tabIndex].backgroundSizeX],
      animateOptions
    )

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), featuresTabs[tabIndex].backgroundPositionX],
      animateOptions
    )

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), featuresTabs[tabIndex].backgroundPositionY],
      animateOptions
    )
  }

  return (
    <section className="py-0 md:py-0">
      <div className="container">
        <div className="flex flex-col gap-3 lg:flex-row">
          {featuresTabs.map((tab, tabIndex) => (
            <FeatureTab
              key={tabIndex}
              {...tab}
              onClick={() => handleSelectTab(tabIndex)}
              selected={currentTab === tabIndex}
            />
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-neutral-600 p-2.5">
          <motion.div
            className="mt-3 aspect-video rounded-lg border border-neutral-600 bg-cover"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${ProductImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  )
}
