import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { useAuthStore } from "@/store/auth.store"
import { useThemeStore } from "@/store/theme.store"

export default function Navbar() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  const theme = useThemeStore((state) => state.theme)
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          HireSphere
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            to="/jobs"
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"
          >
            Jobs
          </Link>

          <Button
            variant="outline"
            onClick={toggleTheme}
          >
            {theme === "light" ? "Dark" : "Light"}
          </Button>

          {user ? (
            <>
              <span className="text-gray-600 dark:text-gray-300">
                {user}
              </span>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}