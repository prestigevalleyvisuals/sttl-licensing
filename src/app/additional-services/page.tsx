import Image from "next/image";
import { pages } from "@/data/pages";
import { site } from "@/data/site";

type FeatureProps = {
  title: string;
  desc: string;
  bullets: string[];
  img: string;
  flip?: boolean;
};

function Feature({ title, desc, bullets, img, flip }: FeatureProps) {
  return (
    <section className="mt-10">
      <div
        className={[
          "rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden",
          "grid gap-0 md:grid-cols-2",
        ].join(" ")}
      >
        {/* Text */}
        <div className={["p-8 md:p-10", flip ? "md:order-2" : ""].join(" ")}>
          <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
          <p className="mt-3 text-white/75 leading-relaxed">{desc}</p>

          <ul className="mt-6 space-y-2 text-white/80">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold text-white bg-gradient-to-r from-red-600 to-blue-600"
            >
              Book Consultation
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              Call / Text: {site.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Image */}
        <div className={["relative min-h-[240px] md:min-h-[360px]", flip ? "md:order-1" : ""].join(" ")}>
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default function AdditionalServicesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-5xl font-black tracking-tight text-white">
        {pages.additional.title}
      </h1>
      <p className="mt-3 text-white/75 max-w-3xl leading-relaxed">
        {pages.additional.intro}
      </p>

      {/* Parking Site Plans */}
      <Feature
        title="Parking Site Plans"
        desc="Some municipalities require site plans and parking layouts as part of the licensing process. We help you get them done correctly."
        bullets={[
          "Site layout + parking counts",
          "Support gathering required details",
          "Help preparing documentation",
        ]}
        img="/services/site-plans.webp"
      />

      {/* Business Floor Plans */}
      <Feature
        title="Business Floor Plans"
        desc="Floor plans are commonly required when applying for certain permits. We help you prepare a clean, compliant layout."
        bullets={[
          "Basic floor layout creation",
          "Revisions based on requirements",
          "Fast turnaround support",
        ]}
        img="/services/floor-plans.webp"
        flip
      />

      {/* Bonds */}
      <Feature
        title="Surety Bonds"
        desc="We help coordinate the bonds required for alcohol-related taxes and licensing so you can stay compliant."
        bullets={[
          "Mixed Beverage Sales Tax bond support",
          "Mixed Beverage Gross Receipts Tax bond support",
          "Guidance on what applies to your business",
        ]}
        img="/services/bonds.webp"
      />

      {/* Compliance Assistance (this is the one you said is missing) */}
      <Feature
        title="Compliance Assistance"
        desc="Ongoing compliance support to help you avoid issues and keep your business in good standing."
        bullets={[
          "Guidance on compliance requirements",
          "Support addressing common reporting needs",
          "Help reducing avoidable delays and problems",
        ]}
        img="/services/sales-tax-reports.webp"
        flip
      />
    </main>
  );
}