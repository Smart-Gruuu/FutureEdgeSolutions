import Link from "next/link";
import { getTestimonials } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export function TestimonialsStrip() {
  const testimonials = getTestimonials().slice(0, 3);

  return (
    <div className="container mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="What our clients say"
            subtitle="Selected feedback on collaboration, delivery, and outcomes."
          />
          <Button asChild variant="outline" size="sm" className="w-fit">
            <Link href="/testimonials">View all testimonials</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <p className="text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span className="text-muted-foreground">, {t.role} at {t.company}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
    </div>
  );
}
