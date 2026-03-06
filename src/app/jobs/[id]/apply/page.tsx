"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { jobs } from "@/data/jobs";

export default function ApplyPage() {
  const params = useParams();
  const id = params.id as string;
  const job = jobs.find((j) => j.id === id);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null as File | null,
    coverLetter: "",
    linkedIn: "",
  });

  if (!job) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <p className="text-gray-600">Job not found.</p>
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      setFormData((prev) => ({ ...prev, resume: target.files?.[0] ?? null }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-[calc(100vh-4rem)]">
        <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-cyan)]/20 animate-fade-in-up">
            <svg className="h-7 w-7 text-[var(--accent-cyan)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">Application submitted</h1>
          <p className="mt-3 text-gray-600">
            Thanks for applying for <strong className="text-gray-900">{job.title}</strong>. We&apos;ll review your application and get back to you soon.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/jobs" className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold">
              View other roles
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:scale-[1.02] hover:border-gray-400 hover:bg-gray-50"
            >
              Back to Careers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href={`/jobs/${job.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to role
        </Link>

        <h1 className="mt-8 text-3xl font-bold text-gray-900">Apply for {job.title}</h1>
        <p className="mt-2 text-gray-600">
          {job.department} · {job.location}
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]"
              placeholder="jane@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Resume / CV *
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              required
              className="mt-2 block w-full text-sm text-gray-600 file:mr-4 file:rounded-lg file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-gray-700 hover:file:bg-gray-200"
            />
            <p className="mt-1 text-xs text-gray-500">PDF or DOC, max 10MB. (Upload is UI only — no backend.)</p>
          </div>

          <div>
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">
              Cover letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={5}
              value={formData.coverLetter}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]"
              placeholder="Why are you interested in this role and FutureEdge Solutions?"
            />
          </div>

          <div>
            <label htmlFor="linkedIn" className="block text-sm font-medium text-gray-700">
              LinkedIn profile
            </label>
            <input
              type="url"
              id="linkedIn"
              name="linkedIn"
              value={formData.linkedIn}
              onChange={handleChange}
              className="mt-2 block w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[var(--accent-cyan)] focus:outline-none focus:ring-1 focus:ring-[var(--accent-cyan)]"
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button type="submit" className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold">
              Submit application
            </button>
            <Link
              href={`/jobs/${job.id}`}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:scale-[1.02] hover:border-gray-400 hover:bg-gray-50"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
