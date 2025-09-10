"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const current = theme === "system" ? systemTheme : theme

  const toggle = () => setTheme(current === "dark" ? "light" : "dark")

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggle}
      className="text-foreground hover:text-muted-foreground"
      title={`Switch to ${current === "dark" ? "light" : "dark"} mode`}
    >
      {current === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

