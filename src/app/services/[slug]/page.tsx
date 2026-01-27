import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getServices } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ReactNode> = {
  health: (
    <svg className="size-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  fintech: (
    <svg className="size-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ecommerce: (
    <svg className="size-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  digital: (
    <svg className="size-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.excerpt,
  };
}

export async function generateStaticParams() {
  return getServices().map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="mb-6">
            {iconMap[service.icon ?? "digital"] ?? iconMap.digital}
          </div>
          <SectionHeading title={service.title} subtitle={service.excerpt} />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground">{service.description}</p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">Benefits</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            {service.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {service.deliverables && service.deliverables.length > 0 && (
            <>
              <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
                Typical deliverables
              </h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                {service.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-16">
            <Button asChild size="lg">
              <Link href="/contact#form">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
