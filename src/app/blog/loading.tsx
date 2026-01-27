export default function BlogLoading() {
  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="h-10 w-64 animate-pulse rounded bg-muted" />
          <div className="mt-4 h-6 w-96 animate-pulse rounded bg-muted" />
        </div>
      </section>
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-8">
                <div className="h-4 w-20 animate-pulse rounded bg-muted" />
                <div className="mt-4 h-6 w-full animate-pulse rounded bg-muted" />
                <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-muted" />
                <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
