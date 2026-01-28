import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { SuccessStoriesPreview } from "@/components/home/SuccessStoriesPreview";
import { CTABlock } from "@/components/home/CTABlock";
import { AnimateSection } from "@/components/shared/AnimateSection";

/** Simplified homepage: Hero → Services → Success stories → Get in touch */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AnimateSection className="px-4 py-16 md:py-24">
        <ServicesPreview />
      </AnimateSection>
      <AnimateSection className="bg-muted/40 px-4 py-16 md:py-24">
        <SuccessStoriesPreview />
      </AnimateSection>
      <AnimateSection className="bg-muted/60 px-4 py-16 md:py-24">
        <CTABlock />
      </AnimateSection>
    </>
  );
}
