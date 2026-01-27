import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CardLink } from "@/components/shared/Card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, industry trends, and thought leadership from FutureEdge Solutions.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div>
      <section className="border-b border-border bg-muted/30 px-4 py-16 md:py-24">
        <div className="container mx-auto">
          <SectionHeading
            title="Blog & insights"
            subtitle="Articles, industry trends, and thought leadership from our team."
          />
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <CardLink key={post.slug} href={`/blog/${post.slug}`} className="p-8">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h2 className="mt-2 font-heading text-xl font-bold text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{post.excerpt}</p>
                  <span className="mt-6 inline-block font-medium text-primary hover:underline">
                    Read more
                  </span>
                </CardLink>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
