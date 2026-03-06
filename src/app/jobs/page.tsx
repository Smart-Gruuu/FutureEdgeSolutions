import Link from "next/link";
import { jobs } from "@/data/jobs";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function JobsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Open Roles</h1>
            <p className="mt-4 text-gray-600">
              Join our team and help democratize AI and Cybersecurity education for rural America and India.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <AnimateOnScroll key={job.id} delay={i * 50}>
              <Link
                href={`/jobs/${job.id}`}
                className="card-hover group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[var(--accent-cyan)]/40 hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-[var(--accent-cyan)]">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {job.department} · {job.location}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">{job.description}</p>
                </div>
                <div className="mt-4 flex items-center gap-3 sm:mt-0 sm:shrink-0">
                  <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                    {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-cyan)]">
                    View role
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
