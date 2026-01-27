import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/nav";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with FutureEdge Solutions. Contact form, address, phone, email, and social links.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Contact us"
            subtitle="Tell us about your goals. We'll help you navigate complexity and deliver measurable results."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">Send a message</h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and we&apos;ll get back to you shortly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-foreground">Get in touch</h2>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Email</span>
                <br />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-primary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">Phone</span>
                <br />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="hover:text-primary hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <span className="font-medium text-foreground">Address</span>
                <br />
                {siteConfig.contact.address}
              </li>
            </ul>

            <div className="mt-8 flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="Twitter"
              >
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-muted/30 px-4 py-16">
        <div className="container mx-auto">
          <h2 className="font-heading text-xl font-bold text-foreground">Office location</h2>
          <p className="mt-2 text-muted-foreground">
            We are headquartered in Denver and work with clients globally.
          </p>
          <div className="mt-6 aspect-video w-full max-w-3xl overflow-hidden rounded-xl border border-border">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
              title="Office location at 1401 Lawrence St Suite 1600"
            />
          </div>
          <Button asChild variant="outline" className="mt-4">
            <a
              href="https://maps.google.com/?q=1401+Lawrence+St+Suite+1600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
