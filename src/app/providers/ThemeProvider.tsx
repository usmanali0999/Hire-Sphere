import { useEffect } from "react"
import { useThemeStore } from "@/store/theme.store"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    const root = document.documentElement

    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  return <>{children}</>
}