import Link from "next/link";
import { jobs } from "@/data/jobs";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function Home() {
  const featuredJobs = jobs.slice(0, 4);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero - matches original: gradient bg, blur orbs, concentric circles, grid, floating cards */}
      <section className="relative z-10 -mt-16 flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#0A1628]">
        {/* Background layer: orbs, circles, grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/10" />
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-500/10" />
          <div
            className="absolute inset-0 bg-[length:60px_60px]"
            style={{
              backgroundImage: "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: copy + CTAs */}
            <div className="pt-16 lg:pt-0">
              <div className="hero-animate-1 mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-sm font-medium text-cyan-400">We&apos;re Hiring</span>
              </div>
              <h1 className="hero-animate-2 mb-6 max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Build the Future of
                <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  AI & Cybersecurity
                </span>
              </h1>
              <p className="hero-animate-3 mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
                Join FutureEdge Solutions and help democratize world-class AI and Cybersecurity education for rural America and India. Because geography should never determine opportunity.
              </p>
              <div className="hero-animate-4 flex flex-wrap gap-4">
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-lg font-medium text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40"
                >
                  View Open Roles
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="#why-join"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-500 bg-transparent px-8 py-6 text-lg font-medium text-slate-300 transition-colors hover:bg-white/5"
                >
                  Why Join Us
                </a>
              </div>
            </div>

            {/* Right: decorative floating cards + stat (hidden on small screens) */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute left-10 top-10 animate-float rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 p-4 backdrop-blur-sm">
                  <svg className="h-12 w-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="absolute right-20 top-20 animate-float rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-4 backdrop-blur-sm [animation-delay:0.5s]">
                  <svg className="h-12 w-12 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-float rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-4 backdrop-blur-sm [animation-delay:1s]">
                  <svg className="h-12 w-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="relative mx-auto h-80 w-80">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl" />
                  <div className="absolute inset-4 flex items-center justify-center rounded-full border border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900">
                    <div className="text-center">
                      <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        50K+
                      </div>
                      <div className="mt-2 text-slate-400">Rural Learners Goal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section id="why-join" className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Join FutureEdge?</h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              We&apos;re on a mission to transform rural youth into globally competitive professionals. Your work here has real impact.
            </p>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Mission-Driven Impact", description: "Every project directly supports rural learners and enterprises. See the impact of your work.", icon: "🎯" },
              { title: "Remote-First & Flexible", description: "Work from anywhere in the US or India. We prioritize outcomes and well-being over hours.", icon: "🌐" },
              { title: "Learn & Grow", description: "Access to cutting-edge AI and security training, conferences, and a culture that values growth.", icon: "📈" },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 80}>
                <div className="card-hover rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[var(--accent-cyan)]/40 hover:shadow-md">
                  <span className="text-2xl transition-transform duration-300 group-hover:scale-110" aria-hidden>{item.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Preview */}
      <section className="border-t border-gray-200 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Open Roles</h2>
            <p className="mt-4 text-gray-600">Find your next opportunity and help us empower rural communities.</p>
          </AnimateOnScroll>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {featuredJobs.map((job, i) => (
              <AnimateOnScroll key={job.id} delay={i * 60}>
                <Link
                  href={`/jobs/${job.id}`}
                  className="card-hover group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[var(--accent-cyan)]/40 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-[var(--accent-cyan)]">
                        {job.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">{job.department} · {job.location}</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{job.type}</span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm text-gray-600">{job.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-cyan)]">
                    View role
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          <AnimateOnScroll delay={200}>
            <div className="mt-10 text-center">
              <Link href="/jobs" className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold">
                View All Open Roles
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to Make an Impact?</h2>
            <p className="mt-4 text-gray-600">
              Partner with us to democratize access to AI and Cybersecurity education. Together we can create opportunities where geography no longer determines potential.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/jobs" className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold">
                Explore Open Roles
              </Link>
              <a
                href="mailto:patrick@futureedge.it.com"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:scale-[1.02] hover:border-gray-400 hover:bg-gray-50"
              >
                Get in Touch
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
