import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"
import { useAuthStore } from "@/store/auth.store"

export default function Navbar() {
  const user = useAuthStore((state) => state.user)
  const logout = useAuthStore((state) => state.logout)

  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          HireSphere
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/jobs"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Jobs
          </Link>

          {user ? (
            <>
              <span className="text-gray-600">
                Welcome, {user}
              </span>

              <Button
                variant="outline"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button variant="primary">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}