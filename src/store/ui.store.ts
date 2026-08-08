import { create } from "zustand"

interface UIState {
  loading: boolean
  toast: string | null
  modal: React.ReactNode | null
  setLoading: (state: boolean) => void
  showToast: (msg: string) => void
  openModal: (node: React.ReactNode) => void
  closeModal: () => void
}

export const useUIStore = create<UIState>((set) => ({
  loading: false,
  toast: null,
  modal: null,

  setLoading: (state) => set({ loading: state }),

  showToast: (msg) => {
    set({ toast: msg })
    setTimeout(() => set({ toast: null }), 3000)
  },

  openModal: (node) => set({ modal: node }),
  closeModal: () => set({ modal: null }),
}))