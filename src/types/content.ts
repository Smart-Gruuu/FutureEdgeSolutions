export interface Service {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  benefits: string[];
  deliverables?: string[];
  icon?: string;
}

export interface Industry {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  challenges: string[];
  howWeHelp: string[];
  caseStudySlugs?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  challenge: string;
  approach: string;
  results: { metric: string; value: string }[];
  testimonial?: { quote: string; name: string; role: string; company: string };
  image?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  industry?: string;
  logo?: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  order: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Career {
  slug: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements?: string[];
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
}
