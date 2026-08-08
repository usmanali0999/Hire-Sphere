import type { ReactNode } from "react"
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import ThemeProvider from "@/app/providers/ThemeProvider"
import ErrorBoundary from "@/components/ui/ErrorBoundary"
import { useUIStore } from "@/store/ui.store"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

function GlobalUI() {
  const { loading, toast, modal, closeModal } = useUIStore()

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-4 rounded">
            Loading...
          </div>
        </div>
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded">
          {toast}
        </div>
      )}

      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow relative">
            <button
              className="absolute top-2 right-2"
              onClick={closeModal}
            >
              ✕
            </button>
            {modal}
          </div>
        </div>
      )}
    </>
  )
}

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          {children}
          <GlobalUI />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}