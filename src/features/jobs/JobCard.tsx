import type { Job } from "@/types/job"
import Button from "@/components/ui/Button"

interface Props {
  job: Job
}

export default function JobCard({ job }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">
        {job.title}
      </h3>

      <p className="text-gray-600">
        {job.company} • {job.location}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-indigo-600 font-medium">
          {job.salary}
        </span>

        <Button variant="outline">
          View Details
        </Button>
      </div>

      <p className="text-sm text-gray-400 mt-2">
        {job.postedAt}
      </p>
    </div>
  )
}