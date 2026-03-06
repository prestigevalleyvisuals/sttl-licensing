"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/70 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 px-4 py-2">
        <a
          href={site.phoneHref}
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-semibold text-white/90"
        >
          Call Now
        </a>
        <Link
          href="/contact#book-consultation"
          className="rounded-xl bg-gradient-to-r from-red-600 to-blue-600 px-3 py-2 text-center text-sm font-semibold text-white"
        >
          Book
        </Link>
      </div>
    </div>
  );
}