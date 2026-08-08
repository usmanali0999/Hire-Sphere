import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getJobs, deleteJob } from "@/services/jobs.service"
import type { Job } from "@/types/job"
import Button from "@/components/ui/Button"

export default function DashboardJobs() {
  const queryClient = useQueryClient()

  const { data: jobs = [] } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jobs"] })
    },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Manage Jobs
      </h1>

      <div className="space-y-4">
        {jobs.map((job: Job) => (
          <div
            key={job.id}
            className="flex justify-between items-center bg-white dark:bg-gray-900 p-4 rounded border"
          >
            <span>{job.title}</span>

            <Button
              variant="outline"
              onClick={() => deleteMutation.mutate(job.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}