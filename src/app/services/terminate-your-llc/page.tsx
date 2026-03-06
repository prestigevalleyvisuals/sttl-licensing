import Image from "next/image";
import { site } from "@/data/site";

export default function ReinstateYourLLCPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-extrabold">Reinstate Your LLC</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        Reinstating a terminated LLC can feel overwhelming. We guide you through the process and help
        ensure a seamless revival of your business entity.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative h-[340px]">
            <Image
              src="/services/llc-reinstatement.png"
              alt="LLC Reinstatement"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 40%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-transparent" />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">The Reinstatement Process</h2>
          <ol className="mt-4 grid gap-3 text-white/75">
            <li><span className="font-semibold text-white">1. Review termination documents:</span> Understand why the LLC was terminated and what’s required.</li>
            <li><span className="font-semibold text-white">2. Rectify delinquent filings:</span> Fix missed reports and unpaid fees.</li>
            <li><span className="font-semibold text-white">3. Prepare required documents:</span> Application for Reinstatement + any outstanding filings.</li>
            <li><span className="font-semibold text-white">4. Submit the application:</span> Ensure everything is accurate and complete.</li>
            <li><span className="font-semibold text-white">5. Pay required fees:</span> We help you understand the fee structure and timing.</li>
            <li><span className="font-semibold text-white">6. Await approval:</span> We stay on top of requests for more info.</li>
            <li><span className="font-semibold text-white">7. Resume operations:</span> Move forward knowing you’re compliant.</li>
          </ol>

          <a
            href={site.calendlyUrl}
            className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-2 text-sm font-semibold hover:opacity-95 transition"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </main>
  );
}