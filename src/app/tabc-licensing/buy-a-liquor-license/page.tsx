import Image from "next/image";
import { site } from "@/data/site";

export default function BuyLiquorLicensePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-extrabold">Buy a Liquor License</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        Purchasing a liquor license from another business owner requires the right license type, a clean status check,
        and accurate transfer paperwork. We guide you end-to-end.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Steps we will take</h2>
          <ol className="mt-4 grid gap-3 text-white/75">
            <li><span className="font-semibold text-white">1. Research the license type you need:</span> Texas issues multiple license types with different requirements.</li>
            <li><span className="font-semibold text-white">2. Find a seller:</span> We can connect you with owners looking to sell.</li>
            <li><span className="font-semibold text-white">3. Check the license status:</span> Ensure good standing and no violations.</li>
            <li><span className="font-semibold text-white">4. Complete transfer paperwork:</span> Fees + required documentation (insurance, CO, etc.).</li>
            <li><span className="font-semibold text-white">5. Wait for approval:</span> TABC review may take weeks/months depending on complexity.</li>
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
              src="/services/tabc-buy-license.webp"
              alt="Buy a Liquor License"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-transparent" />
          </div>

          <div className="p-6 text-white/75">
            <p>
              Buying a liquor license can be complex — we guide you through every step so you can operate legally with confidence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}