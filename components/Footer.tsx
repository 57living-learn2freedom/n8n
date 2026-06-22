"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { resolveNavHref } from "@/lib/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-900 text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-700 text-sm font-bold text-white">
                57
              </span>
              <span className="text-lg font-bold text-white">57Lelong</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Your trusted partner for bank lelong and auction properties across
              Malaysia. Updated listings, expert guidance, zero hassle.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={resolveNavHref(pathname, link.href)}
                    className="text-sm transition-colors hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Agent Disclaimer
            </h3>
            <p className="mt-4 text-xs leading-relaxed">
              The information provided on this website is for general reference
              only and does not constitute an offer or contract. All property
              details, reserve prices, and auction dates are subject to change
              without prior notice. Prospective buyers are advised to conduct
              their own due diligence and verify all information with the
              respective financial institutions and appointed auctioneers before
              participating in any auction. 57Lelong is a registered real estate
              negotiator (REN) operating under a licensed real estate agency in
              Malaysia. We do not guarantee the accuracy, completeness, or
              availability of any listing displayed on this platform.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800 pt-8 text-center text-xs">
          <p>
            &copy; {currentYear} 57Lelong (Malaysia Lelong Hub). All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
