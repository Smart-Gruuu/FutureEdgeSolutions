"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="font-heading text-2xl font-bold text-foreground">Something went wrong</h1>
      <p className="mt-4 text-muted-foreground">An error occurred. Please try again.</p>
      <div className="mt-10 flex gap-4">
        <Button onClick={reset}>Try again</Button>
        <Button asChild variant="outline">
          <Link href="/">Home</Link>
        </Button>
      </div>
    </div>
  );
}
