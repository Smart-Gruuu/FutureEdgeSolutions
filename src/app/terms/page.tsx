import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for the FutureEdge Solutions website and services.",
};

export default function TermsPage() {
  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Terms of Service"
            subtitle={`Last updated: ${new Date().toLocaleDateString("en-US")}. Placeholder legal copy. Replace with your actual terms.`}
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
          <h2 className="font-heading text-xl font-bold text-foreground">1. Acceptance</h2>
          <p className="text-muted-foreground">
            By using the {siteConfig.name} website and services, you agree to these Terms. If you
            do not agree, do not use our website or services.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
            2. Use of the website
          </h2>
          <p className="text-muted-foreground">
            You may use our website for lawful purposes only. Do not violate applicable laws,
            infringe others rights, or disrupt our systems.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
            3. Consulting services
          </h2>
          <p className="text-muted-foreground">
            Consulting engagements are governed by separate agreements. The terms of those
            agreements apply. This website does not form a consulting contract.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">4. Disclaimers</h2>
          <p className="text-muted-foreground">
            Our website and content are provided as is. We do not warrant uninterrupted or
            error-free service. Nothing here constitutes professional, legal, or regulatory advice.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
            5. Limitation of liability
          </h2>
          <p className="text-muted-foreground">
            To the fullest extent permitted by law, {siteConfig.name} and its affiliates are not
            liable for indirect, incidental, special, consequential, or punitive damages arising
            from your use of the website.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">6. Contact</h2>
          <p className="text-muted-foreground">
            Questions about these Terms? Contact us at {siteConfig.contact.email}.
          </p>

          <p className="mt-12 text-sm text-muted-foreground">
            Placeholder content. Consult legal counsel for terms tailored to your firm.
          </p>
        </div>
      </section>
    </div>
  );
}
