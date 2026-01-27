import type { Metadata } from "next";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FutureEdge Solutions collects, uses, and protects your data.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Privacy Policy"
            subtitle={`Last updated: ${new Date().toLocaleDateString("en-US")}. This is placeholder legal copy. Replace with your actual privacy policy.`}
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl prose prose-slate dark:prose-invert">
          <h2 className="font-heading text-xl font-bold text-foreground">1. Introduction</h2>
          <p className="text-muted-foreground">
            {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our website or services.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
            2. Information we collect
          </h2>
          <p className="text-muted-foreground">
            We may collect personal information you provide directly, such as name, email address,
            company, and message content when you use our contact form or otherwise communicate with
            us. We may also collect usage data (e.g. pages visited, referral source) via cookies and
            similar technologies.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
            3. How we use your information
          </h2>
          <p className="text-muted-foreground">
            We use your information to respond to inquiries, provide consulting services, improve our
            website and services, and comply with legal obligations. We do not sell your personal
            information.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">4. Cookies</h2>
          <p className="text-muted-foreground">
            We may use cookies and similar technologies to enhance your experience, analyze traffic,
            and support functionality. You can control cookie preferences through your browser
            settings.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">
            5. Data retention and security
          </h2>
          <p className="text-muted-foreground">
            We retain your information only as long as necessary for the purposes described in this
            policy. We implement appropriate technical and organizational measures to protect your
            data against unauthorized access, loss, or misuse.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">6. Your rights</h2>
          <p className="text-muted-foreground">
            Depending on your jurisdiction, you may have rights to access, correct, delete, or
            restrict processing of your personal data. To exercise these rights or ask questions,
            contact us at {siteConfig.contact.email}.
          </p>

          <h2 className="mt-12 font-heading text-xl font-bold text-foreground">7. Updates</h2>
          <p className="text-muted-foreground">
            We may update this Privacy Policy from time to time. We will post the revised policy on
            this page and update the &quot;Last updated&quot; date.
          </p>

          <p className="mt-12 text-sm text-muted-foreground">
            This is placeholder content. Consult legal counsel to prepare a privacy policy tailored
            to your firm and applicable laws (e.g. GDPR, CCPA).
          </p>
        </div>
      </section>
    </div>
  );
}
