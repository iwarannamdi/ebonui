import { NavItem, NavItemWithChildren } from "@/types"

interface DocsConfig {
  mainNav: NavItem[]
  sidebarNav: NavItemWithChildren[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Dark Mode",
          href: "/docs/installation/dark-mode",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: `/docs/components/accordion`,
          items: [],
        },
        {
          title: "Alert Dialog",
          href: `/docs/components/alert-dialog`,
          items: [],
        },
        {
          title: "Avatar",
          href: `/docs/components/avatar`,
          items: [],
        },
        {
          title: "Badge",
          href: `/docs/components/badge`,
          items: [],
        },
        {
          title: "Bento Grid",
          href: `/docs/components/bento-grid`,
          items: [],
        },
        {
          title: "Border Beam",
          href: `/docs/components/border-beam`,
          items: [],
        },
        {
          title: "Breadcrumbs",
          href: `/docs/components/breadcrumbs`,
          items: [],
        },
        {
          title: "Card",
          href: `/docs/components/card`,
          items: [],
          label: "",
        },
        {
          title: "Checkbox",
          href: `/docs/components/checkbox`,
          items: [],
          label: "",
        },
        {
          title: "Custom Cursor",
          href: `/docs/components/custom-cursor`,
          items: [],
          label: "",
        },
        {
          title: "Glow Card",
          href: `/docs/components/glow-card`,
          items: [],
        },
        {
          title: "Marquee",
          href: `/docs/components/marquee`,
          items: [],
        },
        {
          title: "Glow Border",
          href: `/docs/components/glow-border`,
          items: [],
          label: "",
        },
        {
          title: "Popover",
          href: `/docs/components/popover`,
          items: [],
          label: "",
        },
        {
          title: "Ripple Button",
          href: "/docs/components/ripple-button",
          items: [],
          label: "",
        },
        {
          title: "Scroll Area",
          href: `/docs/components/scroll-area`,
          items: [],
        },
        {
          title: "Separator",
          href: `/docs/components/separator`,
          items: [],
        },
        {
          title: "Shimmer Button",
          href: `/docs/components/shimmer-button`,
          items: [],
        },
        {
          title: "Tabs",
          href: `/docs/components/tabs`,
          items: [],
          label: "",
        },
        {
          title: "Terminal",
          href: `/docs/components/terminal`,
          items: [],
          label: "",
        },
        {
          title: "Theme Switch Toggler",
          href: `/docs/components/theme-switch-toggler`,
          items: [],
        },
      ],
    },
    {
      title: "Animated Text",
      items: [
        {
          title: "Text Animate",
          href: `/docs/components/text-animate`,
          items: [],
          label: "",
        },
        {
          title: "Typing Animation",
          href: `/docs/components/typing-animation`,
          items: [],
          label: "New",
        },
        {
          title: "Number Ticker",
          href: `/docs/components/number-ticker`,
          items: [],
        },
        {
          title: "Animated Shiny Text",
          href: `/docs/components/animated-shiny-text`,
          items: [],
        },
        {
          title: "Word Rotate",
          href: `/docs/components/word-rotate`,
          items: [],
          label: "",
        },
        {
          title: "Text Highlighter",
          href: "/docs/components/highlighter",
          items: [],
          label: "New",
        },
      ],
    },
  ],
}
