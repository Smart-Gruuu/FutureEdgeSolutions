import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Link href="/" className="font-heading text-lg font-bold text-foreground">
              {siteConfig.name}
            </Link>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {siteConfig.tagline}. Headquarters in Denver; we work with clients worldwide.
            </p>
            <div className="mt-4 flex gap-4">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
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
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-foreground">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`} className="hover:text-foreground">
                  {siteConfig.contact.phone}
                </a>
              </li>
            </ul>
            <Link
              href={footerLinks.contact.href}
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              {footerLinks.contact.label}
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={footerLinks.about.href} className="text-sm text-muted-foreground hover:text-foreground">
              {footerLinks.about.label}
            </Link>
            <Link href={footerLinks.faq.href} className="text-sm text-muted-foreground hover:text-foreground">
              {footerLinks.faq.label}
            </Link>
            <Link href={footerLinks.careers.href} className="text-sm text-muted-foreground hover:text-foreground">
              {footerLinks.careers.label}
            </Link>
            <Link href={footerLinks.contact.href} className="text-sm text-muted-foreground hover:text-foreground">
              {footerLinks.contact.label}
            </Link>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
