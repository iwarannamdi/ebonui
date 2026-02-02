import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "accordion",
    type: "registry:ui",
    title: "Accordion",
    description:
      "A collapsible set of stacked interactive headings that each opens the actual content.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/accordion.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "alert-dialog",
    type: "registry:ui",
    title: "Alert Dialog",
    description:
      "The Dialog component is a customizable modal dialog that supports flexible content, triggers, and closing mechanisms with smooth animations.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/alert-dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "dialog",
    type: "registry:ui",
    title: "Dialog",
    description:
      "The Dialog component is a customizable modal dialog that supports flexible content, triggers, and closing mechanisms with smooth animations.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar",
    type: "registry:ui",
    title: "Avatar",
    description: "Avatar is a circle image element that represents users.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/avatar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "badge",
    type: "registry:ui",
    title: "Badge",
    description:
      "This Displays a badge that can represent many things in an application.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/badge.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "breadcrumbs",
    type: "registry:ui",
    title: "Breadcrumbs",
    description:
      "Displays a breadcrumbs or a component that looks like a breadcrumbs.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/breadcrumbs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card",
    type: "registry:ui",
    title: "Card",
    description: "Displays a card with header, content, and footer.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    title: "Checkbox",
    description:
      "A fully customizable, theme-aware checkbox component built with Tailwind CSS and React. Perfect for accessible and elegant form controls.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/checkbox.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "glow-card",
    type: "registry:ui",
    title: "Glow Card",
    description:
      "A spotlight effect that follows your mouse cursor and highlights borders on hover.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/glow-card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "custom-cursor",
    type: "registry:ui",
    title: "Custom Cursor",
    description: "Basic smooth mouse cursor",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/custom-cursor.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "android",
    type: "registry:ui",
    title: "Android",
    description: "A mockup of an Android device.",
    files: [
      {
        path: "ui/android.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "warp-background",
    type: "registry:ui",
    title: "Warp Background",
    description: "A card with a time warping background effect.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/warp-background.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "line-shadow-text",
    type: "registry:ui",
    title: "Line Shadow Text",
    description: "A text component with a moving line shadow.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/line-shadow-text.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-line-shadow": "line-shadow 15s linear infinite",
      },
    },
    css: {
      "@keyframes line-shadow": {
        "0%": {
          "background-position": "0 0",
        },
        "100%": {
          "background-position": "100% -100%",
        },
      },
    },
  },
  {
    name: "aurora-text",
    type: "registry:ui",
    title: "Aurora Text",
    description: "A beautiful aurora text effect",
    files: [
      {
        path: "ui/aurora-text.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-aurora": "aurora 8s ease-in-out infinite alternate",
      },
    },
    css: {
      "@keyframes aurora": {
        "0%": {
          "background-position": "0% 50%",
          transform: "rotate(-5deg) scale(0.9)",
        },
        "25%": {
          "background-position": "50% 100%",
          transform: "rotate(5deg) scale(1.1)",
        },
        "50%": {
          "background-position": "100% 50%",
          transform: "rotate(-3deg) scale(0.95)",
        },
        "75%": {
          "background-position": "50% 0%",
          transform: "rotate(3deg) scale(1.05)",
        },
        "100%": {
          "background-position": "0% 50%",
          transform: "rotate(-5deg) scale(0.9)",
        },
      },
    },
  },
  {
    name: "morphing-text",
    type: "registry:ui",
    title: "Morphing Text",
    description: "A dynamic text morphing component for Ebon UI.",
    files: [
      {
        path: "ui/morphing-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "scroll-progress",
    type: "registry:ui",
    title: "Scroll Progress",
    description: "Animated Scroll Progress for your pages",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/scroll-progress.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "lens",
    type: "registry:ui",
    title: "Lens",
    description:
      "A interactive component that enables zooming into images, videos and other elements.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/lens.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "pointer",
    type: "registry:ui",
    title: "Pointer",
    description:
      "A component that displays a pointer when hovering over an element",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/pointer.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "custom-cursor",
    description:
      "A customizable, physics-based smooth cursor animation component with spring animations and rotation effects",
    type: "registry:ui",
    files: [
      {
        path: "ui/custom-cursor.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["framer-motion"],
  },
  {
    name: "progressive-blur",
    type: "registry:ui",
    title: "Progressive Blur",
    description:
      "The Progressive Blur component adds a smooth blur gradient effect to scrollable content, indicating more content below or above.",
    files: [
      {
        path: "ui/progressive-blur.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "neon-gradient-card",
    type: "registry:ui",
    title: "Neon Gradient Card",
    description: "A beautiful neon card effect",
    files: [
      {
        path: "ui/neon-gradient-card.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-background-position-spin":
          "background-position-spin 3000ms infinite alternate",
      },
    },
    css: {
      "@keyframes background-position-spin": {
        "0%": { "background-position": "top center" },
        "100%": { "background-position": "bottom center" },
      },
    },
  },
  {
    name: "meteors",
    type: "registry:ui",
    title: "Meteors",
    description: "A meteor shower effect.",
    files: [
      {
        path: "ui/meteors.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-meteor": "meteor 5s linear infinite",
      },
    },
    css: {
      "@keyframes meteor": {
        "0%": {
          transform: "rotate(var(--angle)) translateX(0)",
          opacity: "1",
        },
        "70%": { opacity: "1" },
        "100%": {
          transform: "rotate(var(--angle)) translateX(-500px)",
          opacity: "0",
        },
      },
    },
  },

  {
    name: "scroll-area",
    type: "registry:ui",
    title: "Scroll Area",
    description: "Component for a scroll bar.",
    files: [
      {
        path: "ui/scroll-area.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "separator",
    type: "registry:ui",
    title: "Separator",
    description:
      "A component that enables the separation of two or more components from each other.",
    files: [
      {
        path: "ui/separator.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    title: "Tabs",
    description:
      "Tabs is a bar-like component for switching between interfaces.",
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "tabs",
    type: "registry:ui",
    title: "Tabs",
    description:
      "Tabs is a bar-like component for switching between interfaces.",
    files: [
      {
        path: "ui/tabs.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "popover",
    type: "registry:ui",
    title: "Popover",
    description:
      "The Popover component provides a floating UI container that can be triggered by clicking or hovering over elements. It supports smart positioning, click-outside detection, and customizable content.",
    files: [
      {
        path: "ui/popover.tsx",
        type: "registry:ui",
      },
    ],
  },

  {
    name: "hero-video-dialog",
    type: "registry:ui",
    title: "Hero Video Dialog",
    description: "A hero video dialog component.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/hero-video-dialog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "code-comparison",
    type: "registry:ui",
    title: "Code Comparison",
    description: "A component which compares two code snippets.",
    dependencies: ["shiki", "next-themes"],
    files: [
      {
        path: "ui/code-comparison.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "marquee",
    type: "registry:ui",
    title: "Marquee",
    description:
      "An infinite scrolling component that can be used to display text, images, or videos.",
    files: [
      {
        path: "ui/marquee.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-marquee": "marquee var(--duration) infinite linear",
        "animate-marquee-vertical":
          "marquee-vertical var(--duration) linear infinite",
      },
    },
    css: {
      "@keyframes marquee": {
        from: {
          transform: "translateX(0)",
        },
        to: {
          transform: "translateX(calc(-100% - var(--gap)))",
        },
      },
      "@keyframes marquee-vertical": {
        from: {
          transform: "translateY(0)",
        },
        to: {
          transform: "translateY(calc(-100% - var(--gap)))",
        },
      },
    },
  },
  {
    name: "shimmer-button",
    type: "registry:ui",
    title: "Shimmer Button",
    description:
      "A button with a shimmering light which travels around the perimeter.",
    files: [
      {
        path: "ui/shimmer-button.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "animate-spin-around":
          "spin-around calc(var(--speed) * 2) infinite linear",
      },
    },
    css: {
      "@keyframes shimmer-slide": {
        to: {
          transform: "translate(calc(100cqw - 100%), 0)",
        },
      },
      "@keyframes spin-around": {
        "0%": {
          transform: "translateZ(0) rotate(0)",
        },
        "15%, 35%": {
          transform: "translateZ(0) rotate(90deg)",
        },
        "65%, 85%": {
          transform: "translateZ(0) rotate(270deg)",
        },
        "100%": {
          transform: "translateZ(0) rotate(360deg)",
        },
      },
    },
  },
  {
    name: "bento-grid",
    type: "registry:ui",
    title: "Bento",
    description:
      "Bento grid is a layout used to showcase the features of a product in a simple and elegant way.",
    dependencies: ["@radix-ui/react-icons"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/bento-grid.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "bento-box",
    type: "registry:ui",
    title: "Bento Box",
    description:
      "Bento grid is a layout used to showcase the features of a product in a simple and elegant way.",
    dependencies: ["@radix-ui/react-icons", "motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/bento-box.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "logo-beam",
    type: "registry:ui",
    title: "Logo Beam",
    description:
      "Logo beam is an icon used to showcase the features of shinny icons.",
    dependencies: ["@radix-ui/react-icons", "motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/logo-beam.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "shinny-icons",
    type: "registry:ui",
    title: "Shinny Icons",
    description:
      "Shinny Icons is a layout used to showcase the features of a shinny logo and icons.",
    dependencies: ["@radix-ui/react-icons", "motion"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/shinny-icons.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "particles",
    type: "registry:ui",
    title: "Particles",
    description:
      "Particles are a fun way to add some visual flair to your website. They can be used to create a sense of depth, movement, and interactivity.",
    files: [
      {
        path: "ui/particles.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "number-counter",
    type: "registry:ui",
    title: "Number Ticker",
    description: "Animate numbers to count up or down to a target number",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/number-counter.tsx",
        type: "registry:ui",
      },
    ],
  },

  {
    name: "animated-list",
    type: "registry:ui",
    title: "Animated List",
    description:
      "A list that animates each item in sequence with a delay. Used to showcase notifications or events on your landing page.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/animated-list.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-shiny-text",
    type: "registry:ui",
    title: "Animated Shiny Text",
    description:
      "A light glare effect which pans across text making it appear as if it is shimmering.",
    files: [
      {
        path: "ui/animated-shiny-text.tsx",
        type: "registry:ui",
      },
    ],

    cssVars: {
      theme: {
        "animate-shiny-text": "shiny-text 8s infinite",
      },
    },
    css: {
      "@keyframes shiny-text": {
        "0%, 90%, 100%": {
          "background-position": "calc(-100% - var(--shiny-width)) 0",
        },
        "30%, 60%": {
          "background-position": "calc(100% + var(--shiny-width)) 0",
        },
      },
    },
  },

  {
    name: "border-beam",
    type: "registry:ui",
    title: "Border Beam",
    description:
      "An animated beam of light which travels along the border of its container.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/border-beam.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-beam",
    type: "registry:ui",
    title: "Animated Beam",
    description:
      "An animated beam of light which travels along a path. Useful for showcasing the integration features of a website.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/animated-beam.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "text-reveal",
    type: "registry:ui",
    title: "Text Reveal",
    description: "Fade in text as you scroll down the page.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/text-reveal.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "hyper-text",
    type: "registry:ui",
    title: "Hyper Text",
    description:
      "A text animation that scrambles letters before revealing the final text.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/hyper-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "animated-gradient-text",
    type: "registry:ui",
    title: "Animated Gradient Text",
    description:
      "An animated gradient background which transitions between colors for text.",
    files: [
      {
        path: "ui/animated-gradient-text.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-gradient": "gradient 8s linear infinite",
      },
    },
    css: {
      "@keyframes gradient": {
        to: {
          "background-position": "var(--bg-size, 300%) 0",
        },
      },
    },
  },
  {
    name: "orbiting-circles",
    type: "registry:ui",
    title: "Orbiting Circles",
    description:
      "A collection of circles which move in orbit along a circular path",
    files: [
      {
        path: "ui/orbiting-circles.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-orbit": "orbit calc(var(--duration)*1s) linear infinite",
      },
    },
    css: {
      "@keyframes orbit": {
        "0%": {
          transform:
            "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
        },
        "100%": {
          transform:
            "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
        },
      },
    },
  },
  {
    name: "word-rotate",
    type: "registry:ui",
    title: "Word Rotate",
    description: "A vertical rotation of words",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/word-rotate.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "avatar-circles",
    type: "registry:ui",
    title: "Avatar Circles",
    description: "Overlapping circles of avatars.",
    files: [
      {
        path: "ui/avatar-circles.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "typing-animation",
    type: "registry:ui",
    title: "Typing Animation",
    description: "Characters appearing in typed animation",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/typing-animation.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-blink-cursor": "blink-cursor 1.2s step-end infinite",
      },
    },
    css: {
      "@keyframes blink-cursor": {
        "0%, 49%": {
          opacity: "1",
        },
        "50%, 100%": {
          opacity: "0",
        },
      },
    },
  },
  {
    name: "sparkles-text",
    type: "registry:ui",
    title: "Sparkles Text",
    description:
      "A dynamic text that generates continuous sparkles with smooth transitions, perfect for highlighting text with animated stars.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/sparkles-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "spinning-text",
    type: "registry:ui",
    title: "Spinning Text",
    description:
      "The Spinning Text component animates text in a circular motion with customizable speed, direction, color, and transitions for dynamic and engaging effects.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/spinning-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "comic-text",
    type: "registry:ui",
    title: "Comic Text",
    description: "Comic text animation",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/comic-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "icon-cloud",
    type: "registry:ui",
    title: "Icon Cloud",
    description: "An interactive 3D tag cloud component",
    dependencies: [],
    files: [
      {
        path: "ui/icon-cloud.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "text-animate",
    type: "registry:ui",
    title: "Text Animate",
    description:
      "A text animation component that animates text using a variety of different animations.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/text-animate.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "scroll-based-velocity",
    type: "registry:ui",
    title: "Scroll Based Velocity",
    description: "Scrolling text whose speed changes based on scroll speed",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/scroll-based-velocity.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "shiny-button",
    type: "registry:ui",
    title: "Shiny Button",
    description:
      "A shiny button component with dynamic styles in the dark mode or light mode.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/shiny-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "glow-border",
    type: "registry:ui",
    title: "Glow Border",
    description: "Shine border is an animated background border effect.",
    files: [
      {
        path: "ui/glow-border.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-shine": "shine var(--duration) infinite linear",
      },
    },
    css: {
      "@keyframes shine": {
        "0%": {
          "background-position": "0% 0%",
        },
        "50%": {
          "background-position": "100% 100%",
        },
        to: {
          "background-position": "0% 0%",
        },
      },
    },
  },
  {
    name: "animated-circular-progress-bar",
    type: "registry:ui",
    title: "Animated Circular Progress Bar",
    description:
      "Animated Circular Progress Bar is a component that displays a circular gauge with a percentage value.",
    files: [
      {
        path: "ui/animated-circular-progress-bar.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "cool-mode",
    type: "registry:ui",
    title: "Cool Mode",
    description: "Cool mode effect for buttons, links, and other DOMs",
    files: [
      {
        path: "ui/cool-mode.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "pulsating-button",
    type: "registry:ui",
    title: "Pulsating Button",
    description:
      "An animated pulsating button useful for capturing attention of users.",
    files: [
      {
        path: "ui/pulsating-button.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-pulse": "pulse var(--duration) ease-out infinite",
      },
    },
    css: {
      "@keyframes pulse": {
        "0%, 100%": { boxShadow: "0 0 0 0 var(--pulse-color)" },
        "50%": { boxShadow: "0 0 0 8px var(--pulse-color)" },
      },
    },
  },
  {
    name: "ripple-button",
    type: "registry:ui",
    title: "Ripple Button",
    description: "An animated button with ripple useful for user engagement.",
    files: [
      {
        path: "ui/ripple-button.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      theme: {
        "animate-rippling": "rippling var(--duration) ease-out",
      },
    },
    css: {
      "@keyframes rippling": {
        "0%": {
          opacity: "1",
        },
        "100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
    },
  },
  {
    name: "file-tree",
    type: "registry:ui",
    title: "File Tree",
    description:
      "A component used to showcase the folder and file structure of a directory.",
    files: [
      {
        path: "ui/file-tree.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "blur-fade",
    type: "registry:ui",
    title: "Blur Fade",
    description:
      "Blur fade in and out animation. Used to smoothly fade in and out content.",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/blur-fade.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "safari",
    type: "registry:ui",
    title: "Safari",
    description: "A safari browser mockup to showcase your website.",
    files: [
      {
        path: "ui/safari.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "iphone",
    type: "registry:ui",
    title: "iPhone",
    description: "A mockup of the iPhone",
    files: [
      {
        path: "ui/iphone.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rainbow-button",
    type: "registry:ui",
    title: "Rainbow Button",
    description: "An animated button with a rainbow effect.",
    files: [
      {
        path: "ui/rainbow-button.tsx",
        type: "registry:ui",
      },
    ],
    cssVars: {
      light: {
        "color-1": "oklch(66.2% 0.225 25.9)",
        "color-2": "oklch(60.4% 0.26 302)",
        "color-3": "oklch(69.6% 0.165 251)",
        "color-4": "oklch(80.2% 0.134 225)",
        "color-5": "oklch(90.7% 0.231 133)",
      },
      dark: {
        "color-1": "oklch(66.2% 0.225 25.9)",
        "color-2": "oklch(60.4% 0.26 302)",
        "color-3": "oklch(69.6% 0.165 251)",
        "color-4": "oklch(80.2% 0.134 225)",
        "color-5": "oklch(90.7% 0.231 133)",
      },
      theme: {
        "animate-rainbow": "rainbow var(--speed, 2s) infinite linear",
      },
    },

    css: {
      "@keyframes rainbow": {
        "0%": { "background-position": "0%" },
        "100%": { "background-position": "200%" },
      },
    },
  },
  {
    name: "interactive-hover-button",
    type: "registry:ui",
    files: [
      {
        path: "ui/interactive-hover-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "terminal",
    type: "registry:ui",
    title: "Terminal",
    description: "A terminal component",
    files: [
      {
        path: "ui/terminal.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "video-text",
    type: "registry:ui",
    title: "Video Text",
    description:
      "A component that displays text with a video playing in the background.",
    files: [
      {
        path: "ui/video-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "pixel-image",
    type: "registry:ui",
    title: "Pixel Image",
    description:
      "A component that displays an image with a pixelated effect, creating a retro aesthetic.",
    files: [
      {
        path: "ui/pixel-image.tsx",
        type: "registry:ui",
      },
    ],
  },

  {
    name: "theme-switch-toggler",
    type: "registry:ui",
    title: "Theme Toggler",
    description: "A component for theme changing animation.",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/theme-switch-toggler.tsx",
        type: "registry:ui",
      },
    ],
    css: {
      "::view-transition-old(root), ::view-transition-new(root)": {
        animation: "none",
        "mix-blend-mode": "normal",
      },
    },
  },
]
