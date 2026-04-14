'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

import { Slot, type WithAsChild } from '@/registry/ebonui/ui/slot';
import { cn } from '@/lib/utils';

type SlideButtonProps = WithAsChild<
  HTMLMotionProps<'button'> & {
    delay?: string;
    fillHeight?: string;
    hoverScale?: number;
    tapScale?: number;
  }
>;

function SlideButton({
  delay = '0.3s',
  fillHeight = '3px',
  hoverScale = 1.05,
  tapScale = 0.95,
  asChild = false,
  className,
  style,
  children,
  ...props
}: SlideButtonProps) {
  return (
    <motion.button
      data-slot="slide-button"
      whileTap={{ scale: tapScale }}
      whileHover={{
        scale: hoverScale,
        color: 'var(--primary-foreground)',
        '--slide-fill-width': '100%',
        '--slide-fill-height': '100%',
        '--slide-delay': delay,
        transition: { duration: 0 },
      }}
      className={cn(
        'relative inline-flex items-center justify-center overflow-hidden rounded-md px-4 py-2 font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      style={
        {
          '--slide-fill-width': '-1%',
          '--slide-fill-height': fillHeight,
          '--slide-delay': '0s',

          color: 'var(--accent-foreground)',
          backgroundColor: 'var(--accent)',

          background:
            'linear-gradient(var(--primary) 0 0) no-repeat calc(200% - var(--slide-fill-width)) 100% / 200% var(--slide-fill-height)',

          transition: `
            background ${delay} var(--slide-delay),
            color ${delay} ${delay},
            background-position ${delay} calc(${delay} - var(--slide-delay))
          `,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {asChild ? <Slot>{children}</Slot> : children}
    </motion.button>
  );
}

export { SlideButton, type SlideButtonProps };