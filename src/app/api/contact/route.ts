import { NextResponse } from "next/server";
import { z } from "zod";
import { sendContactEmail } from "@/lib/email";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email("Invalid email"),
  company: z.string().max(200).optional(),
  subject: z.string().min(1, "Subject is required").max(200),
  message: z.string().min(1, "Message is required").max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const messages = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        { success: false, error: "Validation failed", details: messages },
        { status: 400 }
      );
    }
    const result = await sendContactEmail(parsed.data);
    if (!result.ok) {
      return NextResponse.json(
        { success: false, error: result.error ?? "Failed to send email" },
        { status: 500 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
