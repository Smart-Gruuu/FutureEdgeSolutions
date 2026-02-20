"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const CAREER_APPLICATION_EMAIL = "taylor@futureedge.it.com";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required").max(200),
  email: z.string().email("Invalid email"),
  phone: z.string().max(50).optional(),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  sex: z.string().min(1, "Please select sex").max(20),
  address: z.string().max(500).optional(),
  resumeUrl: z.string().max(1000).optional(),
  coverLetter: z.string().max(5000).optional(),
});

type FormData = z.infer<typeof schema>;

function buildApplicationEmailBody(jobTitle: string, data: FormData): string {
  const lines = [
    `Application for: ${jobTitle}`,
    "",
    "--- Candidate details ---",
    `Full name: ${data.fullName}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : "",
    `Date of birth: ${data.dateOfBirth}`,
    `Sex: ${data.sex}`,
    data.address ? `Address: ${data.address}` : "",
    data.resumeUrl ? `Resume / CV link: ${data.resumeUrl}` : "",
    "",
    "--- Cover letter ---",
    data.coverLetter || "(No cover letter provided)",
  ];
  return lines.filter(Boolean).join("\n");
}

export interface JobApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
}

export function JobApplicationModal({ open, onOpenChange, jobTitle }: JobApplicationModalProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    setStatus("idle");
    const body = buildApplicationEmailBody(jobTitle, data);
    const subject = `Job application: ${jobTitle}`;
    // Open Gmail compose in a new tab so it uses the user's signed-in Gmail in the browser.
    // Use encodeURIComponent for su/body so spaces are %20 (URLSearchParams uses '+' which can show literally)
    const query = `view=cm&fs=1&to=${encodeURIComponent(CAREER_APPLICATION_EMAIL)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(`https://mail.google.com/mail/?${query}`, "_blank", "noopener,noreferrer");
    setStatus("success");
    reset();
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Apply for this role</DialogTitle>
          <DialogDescription>
            Apply for: {jobTitle}. Gmail will open in a new tab with a draft to send to us.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <Label htmlFor="fullName">Full name *</Label>
            <Input id="fullName" className="mt-2" {...register("fullName")} placeholder="e.g. John Smith" />
            {errors.fullName && (
              <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" className="mt-2" {...register("email")} placeholder="you@example.com" />
            {errors.email && (
              <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" className="mt-2" {...register("phone")} placeholder="+1 (555) 000-0000" />
          </div>
          <div>
            <Label htmlFor="dateOfBirth">Date of birth *</Label>
            <Input id="dateOfBirth" type="date" className="mt-2" {...register("dateOfBirth")} />
            {errors.dateOfBirth && (
              <p className="mt-1 text-sm text-destructive">{errors.dateOfBirth.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="sex">Sex *</Label>
            <select
              id="sex"
              className="mt-2 flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              {...register("sex")}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Non-binary">Non-binary</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {errors.sex && (
              <p className="mt-1 text-sm text-destructive">{errors.sex.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" className="mt-2" {...register("address")} placeholder="City, State, ZIP" />
          </div>
          <div>
            <Label htmlFor="resumeUrl">Resume / CV (link)</Label>
            <Input
              id="resumeUrl"
              type="url"
              className="mt-2"
              {...register("resumeUrl")}
              placeholder="https://... or LinkedIn profile"
            />
          </div>
          <div>
            <Label htmlFor="coverLetter">Cover letter</Label>
            <Textarea
              id="coverLetter"
              className="mt-2"
              {...register("coverLetter")}
              placeholder="Why you're interested and how you're a good fit..."
              rows={4}
            />
          </div>
          {status === "success" && (
            <p className="rounded-lg bg-green-500/10 p-3 text-sm text-green-700 dark:text-green-400">
              Gmail has opened in a new tab with a draft. Send it to complete your application.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Open Gmail to apply
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
