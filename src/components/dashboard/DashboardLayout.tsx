import { Link, Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-700 p-6">
        <h2 className="text-xl font-bold mb-6 text-indigo-600">
          Dashboard
        </h2>

        <nav className="flex flex-col gap-4">
          <Link
            to="/dashboard"
            className="hover:text-indigo-600 transition"
          >
            Overview
          </Link>

          <Link
            to="/dashboard/jobs"
            className="hover:text-indigo-600 transition"
          >
            Manage Jobs
          </Link>

          <Link
            to="/"
            className="hover:text-indigo-600 transition"
          >
            Back to Site
          </Link>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 text-gray-900 dark:text-gray-100">
        <Outlet />
      </main>
    </div>
  )
}