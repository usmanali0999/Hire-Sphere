import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainLayout from "@/components/layout/MainLayout"
import ProtectedRoute from "@/app/router/ProtectedRoute"

import Home from "@/pages/Home/Home"
import Jobs from "@/pages/Jobs/Jobs"
import JobDetails from "@/pages/JobDetails/JobDetails"
import Login from "@/pages/Login/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
  {
    path: "/jobs",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Jobs />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/jobs/:id",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <JobDetails />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}