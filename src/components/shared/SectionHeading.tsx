import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  as?: "h2" | "h3";
}

export function SectionHeading({ title, subtitle, className, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <Tag className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
