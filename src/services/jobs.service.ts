import type { Job } from "@/types/job"

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $90,000",
    postedAt: "2 days ago",
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "PixelCraft",
    location: "Berlin, Germany",
    type: "Part-time",
    salary: "$40/hr",
    postedAt: "5 days ago",
  },
  {
    id: "3",
    title: "React Engineer",
    company: "DevSphere",
    location: "San Francisco, USA",
    type: "Full-time",
    salary: "$110,000",
    postedAt: "1 week ago",
  },
]

export function getJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockJobs), 500)
  })
}