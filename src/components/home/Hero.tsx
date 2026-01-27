"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/nav";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-navy-900 to-background px-4 py-24 text-white md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(173_80%_50%_/_.2),transparent)]" />
      <div className="container relative mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 text-lg text-navy-200 md:text-xl">
            We help organizations navigate complexity, drive digital transformation, and achieve
            measurable results. HQ in the US, working globally across healthcare, fintech, and
            e‑commerce.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact#form">Get a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-navy-400 text-white hover:bg-navy-800/50 hover:text-white">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
