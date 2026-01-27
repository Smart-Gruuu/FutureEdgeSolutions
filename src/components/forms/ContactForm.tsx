"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { siteConfig } from "@/lib/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email"),
  company: z.string().max(200).optional(),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(1, "Message is required").max(5000),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    setErrorMessage("");
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : "",
      `Subject: ${data.subject}`,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");
    const params = new URLSearchParams({
      subject: `[FutureEdge Contact] ${data.subject}`,
      body,
    });
    window.location.href = `mailto:${siteConfig.contact.email}?${params.toString()}`;
    setStatus("success");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="form">
      <div>
        <Label htmlFor="name">Name *</Label>
        <Input id="name" className="mt-2" {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email *</Label>
        <Input id="email" type="email" className="mt-2" {...register("email")} />
        {errors.email && (
          <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" className="mt-2" {...register("company")} />
      </div>
      <div>
        <Label htmlFor="subject">Subject *</Label>
        <Input id="subject" className="mt-2" {...register("subject")} />
        {errors.subject && (
          <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" className="mt-2" {...register("message")} />
        {errors.message && (
          <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>
      {status === "success" && (
        <p className="rounded-lg bg-green-500/10 p-4 text-sm text-green-700 dark:text-green-400">
          Your email client should open with a draft. Send it to complete your message.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
          {errorMessage}
        </p>
      )}
      <Button type="submit" disabled={isSubmitting} size="lg">
        Open email to send
      </Button>
    </form>
  );
}
