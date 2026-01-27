import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCareerBySlug, getCareers } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getCareerBySlug(slug);
  if (!job) return { title: "Job not found" };
  return {
    title: job.title,
    description: job.description,
  };
}

export async function generateStaticParams() {
  return getCareers().map((c) => ({ slug: c.slug }));
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getCareerBySlug(slug);
  if (!job) notFound();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <p className="text-sm text-muted-foreground">
            {job.location} · {job.type}
          </p>
          <SectionHeading title={job.title} subtitle={job.description} />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-foreground">About the role</h2>
          <p className="mt-4 text-muted-foreground">{job.description}</p>

          {job.requirements && job.requirements.length > 0 && (
            <>
              <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
                Requirements
              </h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                {job.requirements.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-16 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={`mailto:jobs@futureedge.io?subject=Application: ${encodeURIComponent(job.title)}`}>
                Apply now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/careers">All openings</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
