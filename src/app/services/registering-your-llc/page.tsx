import Image from "next/image";
import { site } from "@/data/site";

export default function RegisteringYourLLCPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-extrabold">Registering Your LLC</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        If you do not have an LLC, we can help you register one. If you’re planning to start a business
        that involves selling alcohol in Texas, it is recommended you create an LLC before applying
        for a TABC license.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Benefits of having an LLC</h2>

          <ol className="mt-4 grid gap-3 text-white/75">
            <li><span className="font-semibold text-white">1. Buying/Selling with a TABC License:</span> An LLC can streamline transfer by allowing ownership of the LLC and its assets (including the license) to be assumed.</li>
            <li><span className="font-semibold text-white">2. Personal Asset Protection:</span> Separates personal assets from business liabilities.</li>
            <li><span className="font-semibold text-white">3. Liability Protection:</span> Helps reduce personal liability for business-related incidents.</li>
            <li><span className="font-semibold text-white">4. Credibility:</span> Shows you’re serious and structured as a business.</li>
            <li><span className="font-semibold text-white">5. Tax Flexibility:</span> LLCs often operate as pass-through entities (potential tax advantages).</li>
            <li><span className="font-semibold text-white">6. Easier Financing:</span> Lenders may be more willing to finance LLCs than sole proprietorships.</li>
            <li><span className="font-semibold text-white">7. Ease of Management:</span> Minimal paperwork vs. corporations (no mandatory meetings/minutes).</li>
          </ol>

          <a
            href={site.calendlyUrl}
            className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-2 text-sm font-semibold hover:opacity-95 transition"
          >
            Book Consultation
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative h-[340px]">
            <Image
              src="/services/llc-registration.png"
              alt="LLC Registration"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 35%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-transparent" />
          </div>

          <div className="p-6 text-white/75">
            <div className="text-lg font-semibold text-white">We’ll walk you through the entire process</div>
            <p className="mt-2">
              Once everything is in order, we can apply for your TABC license on your behalf.
              The application process can take several weeks — plan ahead and allow enough time.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}