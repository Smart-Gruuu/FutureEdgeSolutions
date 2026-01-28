import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogSlugs } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { siteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post not found" };
  const url = `${siteUrl}/blog/${slug}`;
  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: { url, title: `${post.meta.title} | FutureEdge Solutions` },
    alternates: { canonical: url },
  };
}

export async function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  return (
    <div>
      <article className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-2xl">
          <header>
            <p className="text-sm text-muted-foreground">{post.meta.date}</p>
            <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {post.meta.title}
            </h1>
            <p className="mt-2 text-muted-foreground">By {post.meta.author}</p>
          </header>
          <div className="prose prose-slate mt-12 dark:prose-invert prose-headings:font-heading prose-a:text-primary">
            {content}
          </div>
          <footer className="mt-16 flex gap-4">
            <Button asChild variant="outline">
              <Link href="/blog">Back to blog</Link>
            </Button>
          </footer>
        </div>
      </article>
    </div>
  );
}
