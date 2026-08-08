import { createBrowserRouter, RouterProvider } from "react-router-dom"

import MainLayout from "@/components/layout/MainLayout"
import DashboardLayout from "@/components/dashboard/DashboardLayout"
import ProtectedRoute from "@/app/router/ProtectedRoute"
import AdminRoute from "@/app/router/AdminRoute"

import Home from "@/pages/Home/Home"
import Jobs from "@/pages/Jobs/Jobs"
import JobDetails from "@/pages/JobDetails/JobDetails"
import Login from "@/pages/Login/Login"

import DashboardHome from "@/pages/Dashboard/DashboardHome"
import DashboardJobs from "@/pages/Dashboard/DashboardJobs"
import AdminPanel from "@/pages/Dashboard/AdminPanel"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: "/login",
    element: <MainLayout><Login /></MainLayout>,
  },
  {
    path: "/jobs",
    element: (
      <ProtectedRoute>
        <MainLayout><Jobs /></MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/jobs/:id",
    element: (
      <ProtectedRoute>
        <MainLayout><JobDetails /></MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "jobs", element: <DashboardJobs /> },
      {
        path: "admin",
        element: (
          <AdminRoute>
            <AdminPanel />
          </AdminRoute>
        ),
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}