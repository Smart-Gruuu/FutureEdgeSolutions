import Link from "next/link";

interface LogoProps {
  /** "light" = for dark/transparent header, "dark" = for white/scrolled header (same icon, dark text) */
  variant?: "light" | "dark";
}

export function Logo({ variant = "light" }: LogoProps) {
  const isDark = variant === "dark";

  // Both variants use the same gradient icon; only the wordmark color changes
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
        <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-white">
          <span className="h-2 w-2 rounded-sm bg-white" />
        </span>
      </span>
      <span className={`text-xl font-bold ${isDark ? "text-slate-900" : "text-white"}`}>
        Nextlearnaisec
      </span>
    </Link>
  );
}
