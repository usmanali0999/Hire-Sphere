import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuthStore } from "@/store/auth.store"
import Button from "@/components/ui/Button"
import { useNavigate } from "react-router-dom"

const schema = z.object({
  username: z.string().min(3, "Minimum 3 characters"),
  password: z.string().min(6, "Minimum 6 characters"),
})

type FormData = z.infer<typeof schema>

export default function Login() {
  const login = useAuthStore((state) => state.login)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    login(data.username)
    navigate("/")
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Login to HireSphere
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            placeholder="Username"
            {...register("username")}
            className="w-full border rounded-lg px-4 py-2"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full border rounded-lg px-4 py-2"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type="submit" variant="primary" className="w-full">
          Login
        </Button>
      </form>
    </div>
  )
}