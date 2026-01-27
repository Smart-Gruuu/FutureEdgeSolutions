import Link from "next/link";
import { getProcessSteps } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export function ProcessTeaser() {
  const steps = getProcessSteps();

  return (
    <div className="container mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            title="Our process"
            subtitle="From discovery and strategy to implementation and ongoing support. Clear steps, measurable outcomes."
          />
          <Button asChild variant="outline" size="sm" className="w-fit">
            <Link href="/process">See full process</Link>
          </Button>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.id}>
              <div className="flex items-baseline gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  {step.order}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="mt-3 pl-[52px] text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
