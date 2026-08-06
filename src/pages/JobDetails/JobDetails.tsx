import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getJobById } from "@/services/jobs.service"
import type { Job } from "@/types/job"
import Button from "@/components/ui/Button"

export default function JobDetails() {
  const { id } = useParams()
  const [job, setJob] = useState<Job | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      getJobById(id).then((data) => {
        setJob(data ?? null)
        setLoading(false)
      })
    }
  }, [id])

  if (loading) return <p>Loading job...</p>

  if (!job) return <p>Job not found.</p>

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-4">
        {job.title}
      </h1>

      <p className="text-gray-600 mb-2">
        {job.company} • {job.location}
      </p>

      <p className="text-indigo-600 font-medium mb-4">
        {job.salary}
      </p>

      <p className="text-gray-500 mb-6">
        Posted {job.postedAt}
      </p>

      <Button variant="primary">
        Apply Now
      </Button>
    </div>
  )
}