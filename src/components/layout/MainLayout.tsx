import type { ReactNode } from "react"
import Navbar from "./Navbar"

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </div>
  )
}