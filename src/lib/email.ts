import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactEmailPayload {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<{ ok: boolean; error?: string }> {
  const to = process.env.CONTACT_EMAIL ?? "hello@futureedge.io";
  const from = process.env.EMAIL_FROM ?? "onboarding@resend.dev";

  if (!process.env.RESEND_API_KEY) {
    return { ok: false, error: "Email not configured. Set RESEND_API_KEY and CONTACT_EMAIL." };
  }

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject: `[FutureEdge Contact] ${payload.subject}`,
    reply_to: payload.email,
    html: `
      <h2>New contact form submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      ${payload.company ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>` : ""}
      <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
      <h3>Message</h3>
      <pre style="white-space: pre-wrap; font-family: sans-serif;">${escapeHtml(payload.message)}</pre>
    `,
  });

  if (error) return { ok: false, error: error.message };
  return { ok: true };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
