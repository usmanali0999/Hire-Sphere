import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  user: string | null
  token: string | null
  login: (username: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,

      login: (username) =>
        set({
          user: username,
          token: "mock-jwt-token",
        }),

      logout: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "hiresphere-auth", // localStorage key
    }
  )
)