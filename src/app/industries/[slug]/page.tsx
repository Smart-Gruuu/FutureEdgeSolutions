import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, getIndustries, getCaseStudyBySlug } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { CardLink } from "@/components/shared/Card";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry not found" };
  return { title: industry.title, description: industry.excerpt };
}

export async function generateStaticParams() {
  return getIndustries().map((i) => ({ slug: i.slug }));
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const related = (industry.caseStudySlugs ?? [])
    .map((s) => getCaseStudyBySlug(s))
    .filter(Boolean);

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading title={industry.title} subtitle={industry.excerpt} />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground">{industry.description}</p>
          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
            Common challenges
          </h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            {industry.challenges.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">How we help</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            {industry.howWeHelp.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="mt-16">
            <Button asChild size="lg">
              <Link href="/contact#form">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-border bg-muted/30 px-4 py-16 md:py-24">
          <div className="container mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground">
              Related case studies
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((cs) =>
                cs ? (
                  <CardLink key={cs.slug} href={`/case-studies/${cs.slug}`} className="p-6">
                    <p className="text-sm text-primary">{cs.industry}</p>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {cs.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{cs.excerpt}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
                      Read more
                    </span>
                  </CardLink>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
