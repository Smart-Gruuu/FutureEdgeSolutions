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
        "rounded-xl border-2 border-border bg-card p-6 shadow-heavy transition-shadow hover:shadow-heavy-lg",
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
        "block rounded-xl border-2 border-border bg-card p-6 shadow-heavy transition-shadow hover:shadow-heavy-lg hover:border-primary/50",
        className
      )}
    >
      {children}
    </Link>
  );
}
