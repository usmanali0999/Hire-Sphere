import { useEffect, useState } from "react"
import { getJobs } from "@/services/jobs.service"
import type { Job } from "@/types/job"
import JobCard from "@/features/jobs/JobCard"

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getJobs().then((data) => {
      setJobs(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <p>Loading jobs...</p>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  )
}