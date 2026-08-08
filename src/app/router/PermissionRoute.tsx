import { Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth.store"
import type { ReactNode } from "react"

interface Props {
  children: ReactNode
  allow: Array<"admin" | "user">
}

export default function PermissionRoute({ children, allow }: Props) {
  const role = useAuthStore((s) => s.role)

  if (!role || !allow.includes(role)) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}