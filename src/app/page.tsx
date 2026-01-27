import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { ProcessTeaser } from "@/components/home/ProcessTeaser";
import { TestimonialsStrip } from "@/components/home/TestimonialsStrip";
import { CTABlock } from "@/components/home/CTABlock";
import { AnimateSection } from "@/components/shared/AnimateSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimateSection className="px-4 py-20 md:py-28">
        <ServicesPreview />
      </AnimateSection>
      <AnimateSection className="bg-muted/40 px-4 py-20 md:py-28">
        <ProcessTeaser />
      </AnimateSection>
      <AnimateSection className="px-4 py-20 md:py-28">
        <TestimonialsStrip />
      </AnimateSection>
      <AnimateSection className="bg-navy-950 px-4 py-20 text-white md:py-28">
        <CTABlock />
      </AnimateSection>
    </>
  );
}
