import Link from "next/link";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Contact</h1>
      <p className="mt-3 text-white/80">
        Call, email, or schedule a consultation below (Calendly is in the footer).
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">Call / Text</div>
          <div className="mt-1 text-xl font-semibold">{site.phoneDisplay}</div>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            Call now
          </a>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">Email</div>
          <div className="mt-1 text-xl font-semibold">{site.emailDisplay}</div>
          <a
            href={site.emailHref}
            className="mt-4 inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
          >
            Send email
          </a>
        </div>

        <div className="md:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">Service Area</div>
          <div className="mt-1 text-xl font-semibold">{site.serviceAreaShort}</div>
          <p className="mt-2 text-sm text-white/75">{site.serviceAreaLong}</p>

          <div className="mt-5">
            <Link
              href="#book-consultation"
              className="inline-flex rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Jump to Booking Calendar ↓
            </Link>
          </div>
        </div>
      </div>

      <div className="h-10" />
    </div>
  );
}