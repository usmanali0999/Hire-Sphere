import type { Job } from "@/types/job"
import { api } from "@/lib/api"

/*
  NOTE:
  Mock data for frontend simulation.
*/

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

// Local mutable copy (simulate database)
let jobs: Job[] = [...mockJobs]

export async function getJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(jobs), 500)
  })
}

export async function getJobById(id: string): Promise<Job | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(jobs.find((job) => job.id === id))
    }, 500)
  })
}

export async function createJob(job: Job): Promise<Job> {
  jobs.push(job)
  return job
}

export async function deleteJob(id: string): Promise<string> {
  jobs = jobs.filter((j) => j.id !== id)
  return id
}