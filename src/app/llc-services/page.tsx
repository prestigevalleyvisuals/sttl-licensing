import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

interface FeatureProps {
  title: string;
  desc: string;
  bullets?: string[];
  img: string;
  flip?: boolean;
  imageFit?: "contain" | "cover";
  imageBg?: string;
}

function Feature({
  title,
  desc,
  bullets = [] as string[],
  img,
  flip = false,
  imageFit = "contain", // contain for icons so they DON'T crop
  imageBg = "bg-white", // icons look best on white
}: FeatureProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div
        className={[
          "grid gap-0 md:grid-cols-2",
          flip ? "md:[&>div:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* Text */}
        <div className="p-7 md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            {title}
          </h2>

          <p className="mt-3 text-base text-white/80 md:text-lg">{desc}</p>

          {bullets?.length ? (
            <ul className="mt-5 space-y-2 text-sm text-white/75 md:text-base">
              {bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-[2px] text-white/70">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#book-consultation"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-600 px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Book Consultation
            </Link>

            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
            >
              Call / Text: {site.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[260px] md:min-h-[420px]">
          <div className="absolute inset-0">
            <div className={["absolute inset-0", imageBg].join(" ")} />

            <Image
              src={img}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={imageFit === "cover" ? "object-cover" : "object-contain"}
              style={{
                padding: imageFit === "cover" ? 0 : "48px", // padding fixes cropping for icons
              }}
              priority={false}
            />

            {/* Subtle overlay so it matches your site */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/25 via-transparent to-black/25" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LlcServicesPage() {
  const items = [
    {
      title: "LLC Registration",
      desc: "Start your business the right way with compliant filing and guidance from day one.",
      bullets: [
        "Name availability check (compliant with state regulations)",
        "Preparation and filing of required documents",
        "Compliance assistance so you start on the right foot",
      ],
      img: "/services/llc-registration.png",
    },
    {
      title: "LLC Reinstatement",
      desc: "Reinstate a terminated LLC with the correct documentation and a clean, organized process.",
      bullets: [
        "Comprehensive review of termination documents",
        "Documentation support for reinstatement filing",
        "Timely submission for a smooth reinstatement process",
      ],
      img: "/services/llc-reinstatement.png",
      flip: true,
    },
    {
      title: "LLC Termination",
      desc: "Close your LLC properly to avoid future issues and keep everything in good standing.",
      bullets: [
        "Guidance through dissolution steps",
        "Submission assistance to the proper authorities",
        "Final compliance check before closing out",
      ],
      img: "/services/llc-termination.png",
    },

    // ✅ NEW: LLC Amendments
    {
      title: "LLC Amendments",
      desc:
        "An LLC amendment (Articles of Amendment) updates information from your original Articles of Organization — like name changes, address updates, or management structure changes.",
      bullets: [
        "Update business name, address, or management structure",
        "Typically requires member approval",
        "Filed with the Texas Secretary of State",
      ],
      img: "/services/llc-amendments.png",
      flip: true,
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          LLC Services
        </h1>
        <p className="mt-3 text-base text-white/80 md:text-lg">
          Whether you’re starting a new business, reinstating a terminated LLC, filing amendments, or
          properly terminating — we help you do it correctly and confidently.
        </p>
      </header>

      <div className="mt-10 grid gap-6">
        {items.map((item) => (
          <Feature
            key={item.title}
            title={item.title}
            desc={item.desc}
            bullets={item.bullets}
            img={item.img}
            flip={item.flip}
            imageFit="contain"
            imageBg="bg-white"
          />
        ))}
      </div>

      <div className="h-10" />
    </main>
  );
}