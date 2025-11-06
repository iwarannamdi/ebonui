"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

import { cn } from "@/lib/utils"

interface ThemeSwitcherToggleProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "onClick"> {
  transitionDelay?: number
}

const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const updateFromDocument = () => {
    const isDark = document.documentElement.classList.contains("dark")
    setTheme(isDark ? "dark" : "light")
  }

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light")

    document.documentElement.classList.toggle("dark", initialTheme === "dark")
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(updateFromDocument)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light"
        document.documentElement.classList.toggle("dark", newTheme === "dark")
      }
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const toggle = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
    // State update will follow via observer
  }

  return { theme, toggle }
}

export const ThemeSwitcherToggle = ({
  className,
  transitionDelay = 200,
  ...props
}: ThemeSwitcherToggleProps) => {
  const { theme, toggle } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      onClick={toggle}
      className={cn(
        "relative w-10 h-10 rounded-full border bg-white dark:bg-gray-800 transition-all duration-300 ease-out hover:scale-110 active:scale-95",
        className
      )}
      style={{ transitionDelay: `${transitionDelay}ms` }}
      {...props}
    >
      {/* Sliding container for icons */}
      <div className="relative w-full h-full overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out",
            {
              "translate-x-0": !isDark,
              "translate-x-full": isDark,
            }
          )}
        >
          <Moon className="h-5 w-5 text-gray-950" />
        </div>
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-in-out",
            {
              "translate-x-full": !isDark,
              "translate-x-0": isDark,
            }
          )}
        >
          <Sun className="h-5 w-5 text-white" />
        </div>
      </div>
      {/* Subtle shine overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent transition-opacity duration-500"
        style={{
          opacity: isDark ? 0.5 : 1,
          transitionDelay: `${transitionDelay + 100}ms`,
        }}
      />
    </button>
  )
}