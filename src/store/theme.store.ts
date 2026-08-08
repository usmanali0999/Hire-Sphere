import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "light" | "dark"

interface ThemeState {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "light",

      toggleTheme: () => {
        const current = get().theme
        set({ theme: current === "light" ? "dark" : "light" })
      },

      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "hiresphere-theme",
    }
  )
)