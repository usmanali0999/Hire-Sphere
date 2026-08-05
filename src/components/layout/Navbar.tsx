import { Link } from "react-router-dom"
import Button from "@/components/ui/Button"

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          HireSphere
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <Link to="/jobs" className="hover:text-indigo-600 transition">
            Jobs
          </Link>
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}