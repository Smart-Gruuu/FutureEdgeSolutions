# FutureEdge Solutions

A modern consulting firm website for **FutureEdge Solutions**, covering healthcare, fintech, e‑commerce, and digital transformation. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Home**: Hero, services preview, process teaser, testimonials strip, CTA
- **About**: Mission, values, history, industries, team
- **Services**: Listing and detail pages (healthcare, fintech, e‑commerce, digital)
- **Industries**: Healthcare, fintech, e‑commerce with challenges and case studies
- **Case Studies**: Client success stories with results and testimonials
- **Our Process**: Discovery → Strategy → Implementation → Support
- **Blog**: MDX-based articles with frontmatter
- **Contact**: Form (React Hook Form + Zod), API route, Resend email, map placeholder
- **FAQ**: Accordion from JSON
- **Testimonials**: Dedicated page
- **Legal**: Privacy Policy, Terms of Service (placeholder copy)
- **Careers**: Open positions and role detail pages

## Tech stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, shadcn-style UI (Radix)
- **Motion**: Framer Motion (scroll-triggered fade-in)
- **Content**: JSON (services, industries, team, etc.) + MDX (blog)
- **Forms**: React Hook Form, Zod, Resend (contact)

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Environment variables**

   Copy `.env.example` to `.env.local` and set:

   - `RESEND_API_KEY`: Resend API key for contact form emails
   - `CONTACT_EMAIL`: Inbox for contact form submissions
   - `EMAIL_FROM`: Sender address (e.g. `onboarding@resend.dev` for Resend sandbox)

3. **Run development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

4. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Project structure

```
src/
├── app/           # App Router pages and API routes
├── components/    # Layout, UI, home, about, forms, etc.
├── content/       # JSON + blog MDX
├── lib/           # Content loaders, email, utils, nav
└── types/         # Content types
```

## Content

- Edit `src/content/*.json` for services, industries, case studies, team, testimonials, process, FAQ, careers.
- Add blog posts as `src/content/blog/*.mdx` with frontmatter: `title`, `date`, `author`, `excerpt`.

## License

Private. All rights reserved.
