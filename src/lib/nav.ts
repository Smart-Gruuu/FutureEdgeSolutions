export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/process", label: "Our Process" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
] as const;

export const footerLinks = {
  main: [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/process", label: "Our Process" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export const siteConfig = {
  name: "FutureEdge Solutions",
  tagline: "Consulting for Healthcare, Fintech & E‑commerce",
  contact: {
    email: "hello@futureedge.io",
    phone: "+1 (555) 123-4567",
    address: "1401 Lawrence St Suite 1600",
  },
  social: {
    linkedin: "https://linkedin.com/company/futureedge",
    twitter: "https://twitter.com/futureedge",
  },
};
