import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, getCaseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return { title: "Case study not found" };
  return {
    title: cs.title,
    description: cs.excerpt,
  };
}

export async function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <p className="text-sm font-medium text-primary">{cs.industry} · {cs.client}</p>
          <SectionHeading title={cs.title} subtitle={cs.excerpt} />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-foreground">Challenge</h2>
          <p className="mt-4 text-muted-foreground">{cs.challenge}</p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">Approach</h2>
          <p className="mt-4 text-muted-foreground">{cs.approach}</p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">Results</h2>
          <ul className="mt-4 space-y-2">
            {cs.results.map((r) => (
              <li
                key={r.metric}
                className="flex items-baseline justify-between rounded-lg border border-border bg-card px-4 py-3"
              >
                <span className="text-muted-foreground">{r.metric}</span>
                <span className="font-semibold text-foreground">{r.value}</span>
              </li>
            ))}
          </ul>

          {cs.testimonial && (
            <blockquote className="mt-12 rounded-xl border border-border bg-muted/40 p-8">
              <p className="text-lg text-foreground">&ldquo;{cs.testimonial.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-foreground">{cs.testimonial.name}</span>
                  <span className="text-muted-foreground">
                    , {cs.testimonial.role} at {cs.testimonial.company}
                  </span>
                </cite>
              </footer>
            </blockquote>
          )}

          <div className="mt-16 flex gap-4">
            <Button asChild>
              <Link href="/contact#form">Get in touch</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/case-studies">All case studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
