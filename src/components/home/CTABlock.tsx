import Link from "next/link";
import { Button } from "@/components/ui/button";

/** Light-theme CTA — Contact */
export function CTABlock() {
  return (
    <div className="container mx-auto text-center">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Ready to move forward?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
        Share your objectives and we’ll outline how we can help.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/contact#form">Contact us</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/about">About us</Link>
        </Button>
      </div>
    </div>
  );
}
