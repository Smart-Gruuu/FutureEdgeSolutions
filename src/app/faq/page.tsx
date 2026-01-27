import type { Metadata } from "next";
import { getFaq } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqAccordion } from "@/components/faq/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about FutureEdge Solutions services, process, and engagement.",
};

export default function FaqPage() {
  const items = getFaq();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Frequently asked questions"
            subtitle="Common queries about our services, pricing, process, and how we work."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <FaqAccordion items={items} />
        </div>
      </section>
    </div>
  );
}
