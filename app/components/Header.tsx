"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { resolveNavHref } from "@/lib/navigation";

interface HeaderProps {
  overlay?: boolean;
}

export default function Header({ overlay = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const homeHref = resolveNavHref(pathname, "#home");

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-50 bg-transparent"
          : "sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={homeHref} className="flex items-center gap-2.5">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white shadow-sm ${
              overlay
                ? "bg-red-700 ring-2 ring-white/20"
                : "bg-red-700"
            }`}
          >
            57
          </span>
          <div className="leading-tight">
            <span
              className={`block text-lg font-bold tracking-tight ${
                overlay ? "text-white" : "text-zinc-900"
              }`}
            >
              57Lelong
            </span>
            <span
              className={`hidden text-xs sm:block ${
                overlay ? "text-white/70" : "text-zinc-500"
              }`}
            >
              Malaysia Lelong Hub
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={resolveNavHref(pathname, link.href)}
              className={
                overlay
                  ? "nav-item nav-item-overlay text-sm font-medium text-white"
                  : "nav-item text-sm font-medium text-zinc-600"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 md:hidden ${
            overlay
              ? "text-white hover:bg-white/10"
              : "text-zinc-600 hover:bg-zinc-100"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <nav
          className={`px-4 py-4 md:hidden ${
            overlay
              ? "border-t border-white/10 bg-black/80 backdrop-blur-md"
              : "border-t border-zinc-100 bg-white"
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={resolveNavHref(pathname, link.href)}
                onClick={() => setMobileOpen(false)}
                className={
                  overlay
                    ? "nav-item nav-item-overlay rounded-lg px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                    : "nav-item rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
