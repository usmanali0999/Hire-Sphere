import axios from "axios"
import { useAuthStore } from "@/store/auth.store"

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

/*
  ✅ REQUEST INTERCEPTOR
  Automatically attach token to every request
*/
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

/*
  ✅ RESPONSE INTERCEPTOR
  Handle 401 globally
*/
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout()
      window.location.href = "/login"
    }

    return Promise.reject(error)
  }
)