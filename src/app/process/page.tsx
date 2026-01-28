import type { Metadata } from "next";
import Link from "next/link";
import { getProcessSteps } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How we work: discovery, strategy, implementation, and ongoing support. Clear steps and measurable outcomes.",
};

export default function ProcessPage() {
  const steps = getProcessSteps();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Our process"
            subtitle="From discovery and strategy through implementation and ongoing support. We work alongside your teams to ensure sustainable ownership and capability transfer."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-16">
            {steps.map((step) => (
              <article key={step.id} className="flex gap-8">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-primary-foreground">
                  {step.order}
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{step.title}</h2>
                  <p className="mt-4 text-muted-foreground">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-20 rounded-xl border border-border bg-muted/40 p-8 text-center">
            <h2 className="font-heading text-xl font-bold text-foreground">
              Ready to move forward?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Share your objectives and we’ll outline how we can help.
            </p>
            <Button asChild size="lg" className="mt-6">
              <Link href="/contact#form">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
