"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export default function FooterCalendly() {
  const pathname = usePathname();
  const showCalendar = pathname !== "/"; // ✅ not on Home, yes on everything else

  const calendlyEmbed = `${site.calendlyUrl}?hide_gdpr_banner=1`;

  return (
    <footer className="mt-16 border-t border-white/10 bg-black/35">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">{site.name}</div>
            <p className="mt-2 text-sm text-white/75">{site.tagline}</p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/90">Quick Links</div>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link href="/services" className="text-white/75 hover:text-white">
                Services
              </Link>
              <Link href="/about" className="text-white/75 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-white/75 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white/90">Book a Consultation</div>
            <p className="mt-2 text-sm text-white/75">
              Ready to get started? Book a consultation and we’ll guide you through the next steps.
            </p>
            <div className="mt-4">
              <Link
                href="/contact#book-consultation"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* ✅ Calendly embed (NOT on Home) */}
        {showCalendar && (
          <div
            id="book-consultation"
            className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <div className="p-6 md:p-8">
              <div className="text-xl font-semibold">Schedule a Consultation</div>
              <p className="mt-2 text-sm text-white/75">
                Pick a time that works for you — we’ll confirm details and help you move forward.
              </p>
            </div>

            <div className="border-t border-white/10 bg-black/30">
              <iframe
                title="Calendly Scheduling"
                src={calendlyEmbed}
                className="h-[700px] w-full"
                frameBorder="0"
              />
            </div>
          </div>
        )}

        <div className="mt-10 text-xs text-white/55">
          © {new Date().getFullYear()} South Texas Liquor License LLC. All rights reserved Powered by PRESTIGE VALLEY VISUALS 
          CALL 956-935-7771 FOR YOUR NEW WEBSITE!
        </div>
      </div>
    </footer>
  );
}