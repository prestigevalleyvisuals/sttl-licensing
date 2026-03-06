import Image from "next/image";
import { site } from "@/data/site";

export default function NewLiquorLicensePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-4xl font-extrabold">New Liquor License</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        If you’re starting a business that sells alcohol, you’ll need a Texas Alcoholic Beverage Commission (TABC) license.
        We make the process smoother by ensuring the fundamentals are ready before filing.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="relative h-[340px]">
            <Image
              src="/services/tabc-new-license.webp"
              alt="New Liquor License"
              fill
              className="object-cover"
              style={{ objectPosition: "50% 45%" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/35 via-transparent to-transparent" />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">What we recommend before applying</h2>

          <div className="mt-4 grid gap-4 text-white/75">
            <div>
              <div className="font-semibold text-white">Business Entity</div>
              <p className="mt-1">
                You need a legal business entity established in Texas (sole prop, partnership, LLC, or corporation),
                registered with the Texas Secretary of State, plus an EIN from the IRS.
              </p>
            </div>

            <div>
              <div className="font-semibold text-white">Location</div>
              <p className="mt-1">
                Your location must meet TABC requirements (zoning, safety, permits). If you’re leasing, make sure the lease
                explicitly allows alcohol sales to avoid issues later.
              </p>
            </div>

            <div>
              <div className="font-semibold text-white">Fees</div>
              <p className="mt-1">
                There are application, licensing, and renewal fees depending on license type and business size.
              </p>
            </div>
          </div>

          <a
            href={site.calendlyUrl}
            className="mt-6 inline-flex rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-2 text-sm font-semibold hover:opacity-95 transition"
          >
            Book Consultation
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75">
        <p>
          We’ll walk you through the entire process. Once everything is in order, we can apply for your TABC license on your behalf.
          The application process can take several weeks — plan ahead and allow enough time.
        </p>
      </div>
    </main>
  );
}