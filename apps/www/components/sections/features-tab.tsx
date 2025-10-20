import { useRef, useEffect } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "motion/react";
import { ComponentPropsWithoutRef } from "react";
import { featuresTabs } from "@/data/data";
import { MousePointerClick } from "lucide-react";



const FeatureTab = (
  props: (typeof featuresTabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean },
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

  useEffect(() => {
    if (!tabRef.current || !props.selected) {
      return;
    }
    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 - height) / circumference,
      1,
    ];

    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [props.selected, xPercentage, yPercentage]);

  const handleTabHover = () => {
    if (!dotLottieRef.current) return;

    // Cast to any to safely access web component methods
   
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      onClick={props.onClick}
      className="relative flex gap-2.5 p-2.5 lg:flex-1 items-center border border-neutral-600 rounded-xl cursor-pointer"
    >
      {props.selected && (
        <motion.div
          style={{
            maskImage: maskImage,
          }}
          className="absolute inset-0 -m-px border border-[#651cda] rounded-xl"
        ></motion.div>
      )}
      <div className="inline-flex justify-center items-center size-12 border border-neutral-600 rounded-lg">
       <MousePointerClick className="size-5 text-purple-400" />
      </div>
      <span className="font-medium">{props.title}</span>
      {props.isNew && (
        <span className="px-2 py-1 text-xs bg-[#6618e2] text-white font-semibold rounded-full">
          click
        </span>
      )}
    </div>
  );
};

export default FeatureTab;
