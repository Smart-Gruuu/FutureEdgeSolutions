import type { Metadata } from "next";
import Link from "next/link";
import { getServices } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CardLink } from "@/components/shared/Card";

const iconMap: Record<string, React.ReactNode> = {
  health: (
    <svg className="size-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  fintech: (
    <svg className="size-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ecommerce: (
    <svg className="size-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  digital: (
    <svg className="size-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Healthcare consulting, fintech consulting, e‑commerce solutions, and digital transformation. Strategy, implementation, and ongoing support.",
};

export default function ServicesPage() {
  const services = getServices();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Our services"
            subtitle="Strategy, implementation, and ongoing support across healthcare, fintech, and e‑commerce."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((s) => (
              <CardLink key={s.slug} href={`/services/${s.slug}`} className="p-8">
                <div className="mb-6">
                  {iconMap[s.icon ?? "digital"] ?? iconMap.digital}
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.excerpt}</p>
                <span className="mt-6 inline-block font-medium text-primary hover:underline">
                  Learn more →
                </span>
              </CardLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
