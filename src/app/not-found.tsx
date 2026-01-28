import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/nav";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="font-heading text-6xl font-bold text-foreground">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
      <p className="mt-2 max-w-md text-center text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-10 flex gap-4">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </div>
  );
}
