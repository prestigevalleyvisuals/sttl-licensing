"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";
import { site } from "@/data/site";

type NavItem = {
  label: string;
  href: string;
};

const servicesDropdown: NavItem[] = [
  { label: "TABC Licensing", href: "/tabc-licensing" },
  { label: "LLC Services", href: "/llc-services" },
  { label: "Additional Services", href: "/additional-services" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const nav: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          {/* ✅ NO CIRCLE. Logo bigger but header height stays normal. */}
          <div className="relative h-12 w-16 md:h-14 md:w-20">
            <Image
              src="/brand/logo.png"
              alt="South Texas Liquor Licensing"
              fill
              priority
              sizes="80px"
              className="object-contain"
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold md:text-base">South Texas Liquor</div>
            <div className="text-sm font-semibold md:text-base">Licensing</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={`text-sm transition ${
              isActive("/") ? "text-white" : "text-white/80 hover:text-white"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm transition ${
              isActive("/about") ? "text-white" : "text-white/80 hover:text-white"
            }`}
          >
            About
          </Link>

          {/* Services dropdown */}
          <div className="relative group">
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 text-sm transition ${
                isActive("/services") ||
                isActive("/tabc-licensing") ||
                isActive("/llc-services") ||
                isActive("/additional-services")
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Services
              <span className="text-white/70">▾</span>
            </Link>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible pointer-events-none transition group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto">
              <div className="w-60 overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-xl shadow-xl">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className={`text-sm transition ${
              isActive("/contact") ? "text-white" : "text-white/80 hover:text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            <span className="text-white/80">📞</span>
            <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Call Now
            </span>
            <span className="font-semibold">{site.phoneDisplay}</span>
          </a>

          <Link
            href="/contact#book-consultation"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 py-3">
            <div className="flex flex-col gap-2">
              {nav
                .filter((n) => n.label !== "Services")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-2 text-white/85 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}

              <button
                className="flex items-center justify-between rounded-xl px-3 py-2 text-white/85 hover:bg-white/10 hover:text-white"
                onClick={() => setMobileServicesOpen((v) => !v)}
              >
                <span>Services</span>
                <span className="text-white/70">{mobileServicesOpen ? "▴" : "▾"}</span>
              </button>

              {mobileServicesOpen && (
                <div className="ml-2 flex flex-col gap-1 border-l border-white/10 pl-3">
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                  >
                    Services Overview
                  </Link>
                  {servicesDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-xl px-3 py-2 text-white/80 hover:bg-white/10 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href={site.phoneHref}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm text-white/90"
                >
                  Call
                </a>
                <Link
                  href="/contact#book-consultation"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
                >
                  Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}