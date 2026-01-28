import { siteUrl } from "@/lib/seo";
import { siteConfig } from "@/lib/nav";

/**
 * Renders Organization + WebSite JSON-LD for search engines.
 * Placed in body; valid and recommended by Google.
 */
export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.tagline,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1401 Lawrence St, Suite 1600",
      addressLocality: "Denver",
      addressRegion: "CO",
      postalCode: "80202",
      addressCountry: "US",
    },
    sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter],
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.tagline,
    publisher: { "@id": `${siteUrl}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", url: `${siteUrl}/contact` },
      "query-input": "required name=subject",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  );
}
