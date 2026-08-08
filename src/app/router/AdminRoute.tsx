import { Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth.store"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export default function AdminRoute({ children }: Props) {
  const role = useAuthStore((state) => state.role)

  if (role !== "admin") {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}