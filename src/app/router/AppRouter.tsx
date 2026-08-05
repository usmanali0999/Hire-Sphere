import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../../components/layout/MainLayout'
import Home from '../../pages/Home/Home'
import Jobs from '../../pages/Jobs/Jobs'
import Login from '../../pages/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: '/jobs',
    element: (
      <MainLayout>
        <Jobs />
      </MainLayout>
    ),
  },
  {
    path: '/login',
    element: (
      <MainLayout>
        <Login />
      </MainLayout>
    ),
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
