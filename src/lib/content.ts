import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  Service,
  Industry,
  CaseStudy,
  TeamMember,
  Testimonial,
  ProcessStep,
  FaqItem,
  Career,
} from "@/types/content";

const contentDir = path.join(process.cwd(), "src", "content");

function loadJson<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getServices(): Service[] {
  return loadJson<Service[]>("services.json");
}

export function getServiceBySlug(slug: string): Service | undefined {
  return getServices().find((s) => s.slug === slug);
}

export function getIndustries(): Industry[] {
  return loadJson<Industry[]>("industries.json");
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return getIndustries().find((i) => i.slug === slug);
}

export function getCaseStudies(): CaseStudy[] {
  return loadJson<CaseStudy[]>("case-studies.json");
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getCaseStudies().find((c) => c.slug === slug);
}

export function getTeam(): TeamMember[] {
  return loadJson<TeamMember[]>("team.json");
}

export function getTestimonials(): Testimonial[] {
  return loadJson<Testimonial[]>("testimonials.json");
}

export function getProcessSteps(): ProcessStep[] {
  const steps = loadJson<ProcessStep[]>("process.json");
  return steps.sort((a, b) => a.order - b.order);
}

export function getFaq(): FaqItem[] {
  return loadJson<FaqItem[]>("faq.json");
}

export function getCareers(): Career[] {
  return loadJson<Career[]>("careers.json");
}

export function getCareerBySlug(slug: string): Career | undefined {
  return getCareers().find((c) => c.slug === slug);
}

export function getBlogSlugs(): string[] {
  const blogDir = path.join(contentDir, "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
}

export function getBlogPosts(): BlogPostMeta[] {
  const slugs = getBlogSlugs();
  return slugs
    .map((slug) => {
      const filePath = path.join(contentDir, "blog", `${slug}.mdx`);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      return { slug, ...data } as BlogPostMeta;
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getBlogPost(slug: string): { meta: BlogPostMeta; content: string } | null {
  const filePath = path.join(contentDir, "blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const meta: BlogPostMeta = { slug, ...data };
  return { meta, content };
}
