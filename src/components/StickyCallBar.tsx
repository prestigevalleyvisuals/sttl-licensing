import Link from "next/link";
import { site } from "@/data/site";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur sm:hidden">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <a
          href={site.phoneHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black"
        >
          <PhoneIcon />
          <span>Call</span>
        </a>

        <Link
          href="/contact"
          className="flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-blue-500 px-4 py-3 text-sm font-semibold text-white"
        >
          Book
        </Link>
      </div>
    </div>
  );
}