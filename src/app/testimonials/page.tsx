import type { Metadata } from "next";
import Link from "next/link";
import { getTestimonials } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client testimonials from healthcare, fintech, and e‑commerce organizations we’ve partnered with.",
};

export default function TestimonialsPage() {
  const testimonials = getTestimonials();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Testimonials"
            subtitle="What our clients say about working with FutureEdge Solutions."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.id}
                className="rounded-xl border border-border bg-card p-8 shadow-sm"
              >
                <p className="text-foreground">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6">
                  <cite className="not-italic">
                    <span className="font-semibold text-foreground">{t.name}</span>
                    <span className="text-muted-foreground">
                      , {t.role} at {t.company}
                    </span>
                  </cite>
                  {t.industry && (
                    <p className="mt-1 text-sm text-primary">{t.industry}</p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/contact#form">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
