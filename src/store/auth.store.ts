import { create } from "zustand"

interface AuthState {
  user: string | null
  token: string | null
  login: (username: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
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
}))