import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTABlock() {
  return (
    <div className="container mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Tell us about your goals. We&apos;ll help you navigate complexity and deliver measurable
          results.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact#form">Get a Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
    </div>
  );
}
