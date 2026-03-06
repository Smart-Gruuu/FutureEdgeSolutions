import Link from "next/link";

const services = [
  { label: "Cybersecurity Training", href: "https://nextlearnaisec.org/" },
  { label: "AI & Machine Learning", href: "https://nextlearnaisec.org/" },
  { label: "Robotics & Automation", href: "https://nextlearnaisec.org/" },
  { label: "Enterprise Consulting", href: "https://nextlearnaisec.org/" },
];

const company = [
  { label: "About Us", href: "https://nextlearnaisec.org/about" },
  { label: "Leadership", href: "https://nextlearnaisec.org/" },
  { label: "Case Studies", href: "https://nextlearnaisec.org/" },
  { label: "Careers", href: "/" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      <div className="container mx-auto px-6 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description + social */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-white">
                  <span className="h-2 w-2 rounded-sm bg-white" />
                </span>
              </span>
              <span className="text-xl font-bold">Nextlearnaisec</span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Democratizing AI and Cybersecurity education for rural communities in the United States and India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white transition-colors hover:bg-slate-700"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white transition-colors hover:bg-slate-700"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-white transition-colors hover:bg-slate-700"
                aria-label="YouTube"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10 15 5-3-5-3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-cyan-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              {company.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith("http") ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-cyan-400"
                    >
                      {label}
                    </a>
                  ) : (
                    <Link href={href} className="transition-colors hover:text-cyan-400">
                      {label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:patrick@futureedge.it.com" className="transition-colors hover:text-cyan-400">
                  patrick@futureedge.it.com
                </a>
              </li>
              <li>
                <a href="tel:+16016024033" className="transition-colors hover:text-cyan-400">
                  +1 (601) 602-4033
                </a>
              </li>
              <li>
                100 Innovation Drive
                <br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nextlearnaisec. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-slate-300">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-slate-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
