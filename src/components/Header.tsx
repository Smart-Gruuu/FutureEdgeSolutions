"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/", label: "Careers" },
  { href: "/jobs", label: "Open Roles" },
  { href: "/#why-join", label: "Why Join Us" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLightHeader = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isLightHeader
          ? "border-b border-slate-100 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Logo variant={isLightHeader ? "dark" : "light"} />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = (href === "/" && pathname === "/") || (href === "/jobs" && pathname.startsWith("/jobs"));
              return (
                <Link
                  key={href}
                  href={href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isLightHeader
                      ? isActive
                        ? "bg-cyan-50 text-cyan-600"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      : isActive
                        ? "bg-white/10 text-white"
                        : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500"
            >
              View Open Roles
            </Link>
          </div>

          <button
            type="button"
            className={`rounded-lg p-2 lg:hidden ${isLightHeader ? "text-slate-900" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className={`border-t px-6 py-4 lg:hidden ${
            isLightHeader ? "border-slate-100 bg-white" : "border-white/10 bg-[#0A1628]/95"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isLightHeader
                    ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/jobs"
              className="mt-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              View Open Roles
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}