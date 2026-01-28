import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteUrl } from "@/lib/seo";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
});

const defaultTitle = "FutureEdge Solutions | Strategic Consulting for Healthcare, Fintech & E‑commerce";
const defaultDescription =
  "FutureEdge Solutions helps organizations in healthcare, fintech, and e‑commerce navigate complexity, drive digital transformation, and achieve measurable results. Digital strategy, AI integration, and implementation. Headquarters in Denver; we work with clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | FutureEdge Solutions",
  },
  description: defaultDescription,
  keywords: [
    "consulting",
    "healthcare consulting",
    "fintech consulting",
    "ecommerce consulting",
    "digital transformation",
    "AI integration",
    "strategic consulting",
    "Denver consulting",
  ],
  authors: [{ name: "FutureEdge Solutions", url: siteUrl }],
  creator: "FutureEdge Solutions",
  publisher: "FutureEdge Solutions",
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "FutureEdge Solutions",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "FutureEdge Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
