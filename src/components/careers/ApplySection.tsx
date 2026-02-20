"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobApplicationModal } from "@/components/forms/JobApplicationModal";

export interface ApplySectionProps {
  jobTitle: string;
}

export function ApplySection({ jobTitle }: ApplySectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="mt-16 flex flex-wrap gap-4">
        <Button size="lg" onClick={() => setModalOpen(true)}>
          Apply now
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/careers">All openings</Link>
        </Button>
      </div>
      <JobApplicationModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        jobTitle={jobTitle}
      />
    </>
  );
}
