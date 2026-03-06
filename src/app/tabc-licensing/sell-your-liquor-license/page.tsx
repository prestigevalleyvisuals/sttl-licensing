import Image from "next/image";
import { site } from "@/data/site";

export default function SellLiquorLicensePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-extrabold">Sell Your Liquor License</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        Selling a liquor license in Texas can be complex. We help guide you through the steps so the transfer is handled properly
        and you can focus on your business.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative h-[340px]">
            <Image
              src="/services/tabc-sell-license.webp"
              alt="Sell Your Liquor License"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-transparent" />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Steps</h2>
          <ol className="mt-4 grid gap-3 text-white/75">
            <li><span className="font-semibold text-white">1. Understand your license type:</span> Each license has its own rules and restrictions.</li>
            <li><span className="font-semibold text-white">2. Determine value:</span> Value depends on license type, location, and demand.</li>
            <li><span className="font-semibold text-white">3. Advertise the license for sale:</span> We help leverage our network to find buyers.</li>
            <li><span className="font-semibold text-white">4. Complete the transfer application:</span> Buyer info + sale details + transfer fee.</li>
            <li><span className="font-semibold text-white">5. Wait for approval:</span> Process can take several weeks.</li>
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