import type { Metadata } from "next";
import Link from "next/link";
import { getTeam, getIndustries } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FutureEdge Solutions — mission, values, history, and team. We serve healthcare, fintech, and e‑commerce with digital transformation and AI integration. Headquarters in Denver; we work with clients worldwide.",
};

export default function AboutPage() {
  const team = getTeam();
  const industries = getIndustries();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="About FutureEdge Solutions"
            subtitle="We combine deep industry expertise with strategy, technology, and AI to help organizations achieve measurable results. Headquarters in Denver; we work with clients worldwide."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Mission & values</h2>
          <p className="mt-4 text-muted-foreground">
            Our mission is to help organizations navigate complexity, drive digital transformation,
            integrate and develop AI solutions, and achieve lasting impact. We operate as partners, not vendors—we work
            alongside your teams, transfer capability, and leave you stronger.
          </p>
          <ul className="mt-6 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Integrity and transparency in every engagement</li>
            <li>Evidence-based strategy, not trends</li>
            <li>Execution discipline with measurable outcomes</li>
            <li>Long-term relationships over short-term gains</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-foreground">Our history</h2>
          <p className="mt-4 text-muted-foreground">
            FutureEdge was founded by practitioners from leading consultancies and industry. We saw a
            need for consulting that blends strategic rigor with hands-on implementation—and that
            speaks the language of healthcare, fintech, e‑commerce, and AI. Today we work with
            startups, scale-ups, and enterprises across the US and worldwide, including digital transformation and AI integration.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Industries we serve"
            subtitle="Healthcare, fintech, and e‑commerce—plus AI integration and development—with dedicated practice expertise."
          />
          <div className="mt-12 flex flex-wrap gap-4">
            {industries.map((i) => (
              <Button key={i.slug} asChild variant="outline" size="sm">
                <Link href={`/industries/${i.slug}`}>{i.title}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Leadership team"
              subtitle="Practitioners with deep industry and consulting experience."
            />
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/careers">Careers</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.slug}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex aspect-square w-24 items-center justify-center overflow-hidden rounded-full bg-muted font-heading text-2xl font-bold text-muted-foreground">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
