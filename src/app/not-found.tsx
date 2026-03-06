import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-gray-600">This page could not be found.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="btn-gradient inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold">
            Careers home
          </Link>
          <Link
            href="/jobs"
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:scale-[1.02] hover:border-gray-400 hover:bg-gray-50"
          >
            Open roles
          </Link>
        </div>
      </div>
    </div>
  );
}
