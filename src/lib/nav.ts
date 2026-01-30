/** Main nav: Home, Services, About, FAQs, Careers, Contact */
export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQs" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;

/** Footer: About, FAQs, Careers, Contact, Legal */
export const footerLinks = {
  about: { href: "/about", label: "About" },
  faq: { href: "/faq", label: "FAQs" },
  careers: { href: "/careers", label: "Careers" },
  contact: { href: "/contact", label: "Contact" },
  legal: [
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

export const siteConfig = {
  name: "FutureEdge Solutions",
  tagline: "Strategic consulting for healthcare, fintech, and e‑commerce. Digital transformation, AI integration, and measurable outcomes.",
  /** Hero headline */
  heroHeadline: "Strategy and execution that deliver measurable results",
  heroSubline: "We partner with organizations to navigate digital transformation, integrate AI, and drive sustainable growth—from discovery through implementation.",
  contact: {
    email: "hello@futureedge.it.com",
    phone: "+1 (555) 123-4567",
    address: "1401 Lawrence St, Suite 1600, Denver, CO 80202",
  },
  social: {
    linkedin: "https://linkedin.com/company/futureedge",
    twitter: "https://twitter.com/futureedge",
  },
};
