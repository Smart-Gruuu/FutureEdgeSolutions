import type { Metadata } from "next";
import Link from "next/link";
import { getIndustries } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CardLink } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Healthcare, fintech, and e‑commerce. We serve organizations worldwide with dedicated practice expertise and AI integration.",
};

export default function IndustriesPage() {
  const industries = getIndustries();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Industries we serve"
            subtitle="Healthcare, fintech, and e‑commerce—with deep expertise in each. We also deliver AI integration and AI development. We understand your challenges and help you achieve measurable results."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i) => (
              <CardLink key={i.slug} href={`/industries/${i.slug}`} className="p-8">
                <h2 className="font-heading text-2xl font-bold text-foreground">{i.title}</h2>
                <p className="mt-3 text-muted-foreground">{i.excerpt}</p>
                <span className="mt-6 inline-block font-medium text-primary hover:underline">
                  View industry →
                </span>
              </CardLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
