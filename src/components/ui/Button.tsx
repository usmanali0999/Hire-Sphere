import type { ButtonHTMLAttributes } from "react"
import clsx from "clsx"

type Variant = "primary" | "secondary" | "outline"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  const base =
    "px-6 py-3 rounded-lg font-medium transition-all duration-200"

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-800",
    outline:
      "border border-gray-300 hover:bg-gray-100",
  }

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  )
}