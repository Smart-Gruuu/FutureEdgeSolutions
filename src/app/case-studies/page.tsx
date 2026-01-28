import type { Metadata } from "next";
import Link from "next/link";
import { getCaseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CardLink } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected engagements and measurable outcomes across healthcare, fintech, and e‑commerce.",
};

export default function CaseStudiesPage() {
  const studies = getCaseStudies();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Case studies"
            subtitle="Selected engagements and measurable outcomes across healthcare, fintech, and e‑commerce."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studies.map((cs) => (
              <CardLink key={cs.slug} href={`/case-studies/${cs.slug}`} className="p-8">
                <p className="text-sm font-medium text-primary">{cs.industry}</p>
                <h2 className="mt-2 font-heading text-xl font-bold text-foreground">{cs.title}</h2>
                <p className="mt-3 text-muted-foreground">{cs.excerpt}</p>
                {cs.results.length > 0 && (
                  <p className="mt-4 text-sm text-muted-foreground">
                    {cs.results[0].metric}: {cs.results[0].value}
                  </p>
                )}
                <span className="mt-6 inline-block font-medium text-primary hover:underline">
                  Read case study →
                </span>
              </CardLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
