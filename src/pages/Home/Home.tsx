import Button from "@/components/ui/Button"

export default function Home() {
  return (
    <section className="text-center py-24">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
        Discover Opportunities.
        <span className="text-indigo-600 block">
          Build Your Future.
        </span>
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        HireSphere connects top talent with leading companies.
        Find curated jobs from the best tech and business teams.
      </p>

      <div className="flex justify-center gap-4">
        <Button variant="primary">
          Explore Jobs
        </Button>

        <Button variant="outline">
          Post a Job
        </Button>
      </div>
    </section>
  )
}