import type { Metadata } from "next";
import Link from "next/link";
import { getCareers } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CardLink } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join FutureEdge Solutions. Open positions in consulting for healthcare, fintech, e‑commerce, and AI integration.",
};

export default function CareersPage() {
  const careers = getCareers();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Careers"
            subtitle="We’re growing. Join our team and help organizations navigate complexity and achieve measurable results."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Why join us</h2>
          <p className="mt-4 text-muted-foreground">
            We offer meaningful work across healthcare, fintech, e‑commerce, and AI integration and development; flexible,
            remote-friendly arrangements; and a culture that values integrity, rigor, and
            collaboration.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl font-bold text-foreground">Open positions</h2>
          {careers.length === 0 ? (
            <p className="mt-6 text-muted-foreground">
              No open positions at the moment. Check back later or email{" "}
              <a href="mailto:hello@futureedge.it.com" className="text-primary hover:underline">
                hello@futureedge.it.com
              </a>{" "}
              to express your interest.
            </p>
          ) : (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {careers.map((job) => (
                <CardLink key={job.slug} href={`/careers/${job.slug}`} className="p-8">
                  <h3 className="font-heading text-xl font-bold text-foreground">{job.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {job.location} · {job.type}
                  </p>
                  <p className="mt-4 text-muted-foreground line-clamp-2">{job.description}</p>
                  <span className="mt-6 inline-block font-medium text-primary hover:underline">
                    View role
                  </span>
                </CardLink>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
