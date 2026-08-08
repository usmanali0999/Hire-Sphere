import { create } from "zustand"
import { persist } from "zustand/middleware"

export type Role = "user" | "admin"

interface AuthState {
  user: string | null
  token: string | null
  role: Role | null
  login: (username: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      role: null,

      login: (username) =>
        set({
          user: username,
          token: "mock-jwt-token",
          role: username === "admin" ? "admin" : "user",
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          role: null,
        }),
    }),
    {
      name: "hiresphere-auth",
    }
  )
)