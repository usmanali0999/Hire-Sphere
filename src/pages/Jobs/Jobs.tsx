import { useEffect, useMemo, useState } from "react"
import { getJobs } from "@/services/jobs.service"
import type { Job } from "@/types/job"
import JobCard from "@/features/jobs/JobCard"

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState("")
  const [typeFilter, setTypeFilter] = useState("All")

  useEffect(() => {
    getJobs().then((data) => {
      setJobs(data)
      setLoading(false)
    })
  }, [])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())

      const matchesType =
        typeFilter === "All" || job.type === typeFilter

      return matchesSearch && matchesType
    })
  }, [jobs, search, typeFilter])

  if (loading) return <p>Loading jobs...</p>

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/3"
        />

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full md:w-1/4"
        >
          <option value="All">All Types</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Remote">Remote</option>
        </select>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  )
}