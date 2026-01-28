import Link from "next/link";
import { getCaseStudies } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CardLink } from "@/components/shared/Card";
import { Button } from "@/components/ui/button";

/** Euvic-style "Success Stories" — case studies preview */
export function SuccessStoriesPreview() {
  const studies = getCaseStudies().slice(0, 3);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          title="Success stories"
          subtitle="Selected engagements and measurable outcomes."
        />
        <Button asChild variant="outline" size="sm" className="w-fit">
          <Link href="/case-studies">View all case studies</Link>
        </Button>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studies.map((cs) => (
          <CardLink key={cs.slug} href={`/case-studies/${cs.slug}`}>
            <p className="text-xs font-medium uppercase tracking-wide text-primary">{cs.industry}</p>
            <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{cs.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{cs.excerpt}</p>
            <span className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Read case study →
            </span>
          </CardLink>
        ))}
      </div>
    </div>
  );
}
