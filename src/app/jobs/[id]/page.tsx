import Link from "next/link";
import { notFound } from "next/navigation";
import { jobs } from "@/data/jobs";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function JobDetailPage({ params }: PageProps) {
  const { id } = await params;
  const job = jobs.find((j) => j.id === id);
  if (!job) notFound();

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <Link
            href="/jobs"
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <svg className="h-4 w-4 transition-transform hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Open Roles
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll delay={50}>
          <header className="mt-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                {job.type}
              </span>
              <span className="text-sm text-gray-600">{job.department} · {job.location}</span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{job.title}</h1>
            <p className="mt-2 text-gray-600">
              Posted {new Date(job.postedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </header>
        </AnimateOnScroll>

        <div className="mt-12 space-y-10">
          <AnimateOnScroll delay={100}>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">About the role</h2>
              <p className="mt-3 leading-relaxed text-gray-600">{job.description}</p>
            </section>
          </AnimateOnScroll>
          <AnimateOnScroll delay={150}>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">Responsibilities</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
                {job.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <section>
              <h2 className="text-lg font-semibold text-gray-900">Requirements</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-600">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={250}>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={`/jobs/${job.id}/apply`}
              className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold"
            >
              Apply for this role
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
            >
              View other roles
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
