import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-lg border border-border bg-card p-6 transition-colors hover:border-border/80",
        className
      )}
    >
      {children}
    </Tag>
  );
}

interface CardLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CardLink({ href, children, className }: CardLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "block rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-card/95",
        className
      )}
    >
      {children}
    </Link>
  );
}
