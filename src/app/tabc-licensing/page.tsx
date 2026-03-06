import Image from "next/image";
import Link from "next/link";

function Feature({
  title,
  desc,
  bullets,
  img,
  flip = false,
}: {
  title: string;
  desc: string;
  bullets: string[];
  img: string;
  flip?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className={`grid gap-0 md:grid-cols-2 ${flip ? "md:[&>div:first-child]:order-2" : ""}`}>
        <div className="p-7 md:p-9">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-3 text-sm text-white/80">{desc}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/78">
            {bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>

          <div className="mt-6">
            <Link
              href="/contact#book-consultation"
              className="inline-flex rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Book Consultation
            </Link>
          </div>
        </div>

        <div className="relative min-h-[240px] bg-black/25 md:min-h-[340px]">
          <Image
            src={img}
            alt={title}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default function TabcLicensingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">TABC Licensing</h1>
      <p className="mt-3 max-w-3xl text-white/80">
        We’re knowledgeable in all aspects of TABC licensing — from initial application to renewals —
        and provide personalized service so you can navigate the process with confidence.
      </p>

      <div className="mt-8 space-y-6">
        <Feature
          title="New Liquor License"
          desc="We handle the process from start to finish — helping you obtain the proper permits to legally serve alcohol in Texas."
          bullets={[
            "Application guidance and filing support",
            "Clear steps and timelines",
            "Communication through the process",
          ]}
          img="/services/tabc-new-license.webp"
        />

        <Feature
          title="License Transfers"
          desc="Buying or taking over a business? We help guide the transfer process and help you avoid delays and compliance issues."
          bullets={[
            "Transfer requirements review",
            "Document preparation support",
            "Filing and follow-up assistance",
          ]}
          img="/services/license-transfers.webp"
          flip
        />

        <Feature
          title="Sell Your Existing Liquor License"
          desc="Selling a license can be complex. We help you understand requirements and handle the steps so it’s done correctly."
          bullets={[
            "Process guidance and documentation support",
            "Help coordinating the sale steps",
            "Reduce common transfer delays",
          ]}
          img="/services/tabc-sell-license.webp"
        />

        <Feature
          title="Buy an Existing Liquor License"
          desc="If you’re purchasing an existing license, we help you understand what’s needed and guide you through the process."
          bullets={[
            "Eligibility and checklist guidance",
            "Filing support and timelines",
            "Clear communication end-to-end",
          ]}
          img="/services/tabc-buy-license.webp"
          flip
        />
      </div>

      <div className="h-10" />
    </div>
  );
}