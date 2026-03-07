import Link from "next/link";
import Image from "next/image";
import HeroCarousel, { HeroSlide } from "@/components/HeroCarousel";
import { site } from "@/data/site";

function ServiceCard({
  title,
  desc,
  bullets,
  href,
  imageSrc,
  imageFit = "contain",
}: {
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  imageSrc: string;
  imageFit?: "cover" | "contain";
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:bg-white/7"
    >
      <div className="relative aspect-[16/9] bg-black/25">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={imageFit === "cover" ? "object-cover" : "object-contain p-4"}
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>

      <div className="p-6">
        <div className="text-lg font-semibold">{title}</div>
        <p className="mt-2 text-sm text-white/75">{desc}</p>
        <ul className="mt-4 space-y-1 text-sm text-white/75">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
        <div className="mt-5 text-sm font-semibold text-white/90 group-hover:text-white">
          View details →
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const slides: HeroSlide[] = [
    { src: "/hero/business-1.png", alt: "Restaurant storefront", objectPosition: "50% 18%" },
    { src: "/hero/business-5.jpg", alt: "Mula Cantina", objectPosition: "10% 10%" },
    { src: "/hero/business-2.png", alt: "Nightclub exterior", objectPosition: "50% 40%" },
    { src: "/hero/business-3.png", alt: "Restaurant patio", objectPosition: "50% 45%" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-10">
      {/* HERO TEXT (above carousel) */}
      <section className="rounded-3xl border border-white/10 bg-black/35 p-7 backdrop-blur-md md:p-10">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          South Texas Liquor License LLC.
        </h1>

        <p className="mt-3 text-base text-white/85 md:text-lg">
          Business compliance made simple — clear guidance, fast communication, and professional support
          across Texas.
        </p>

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
      </section>

      {/* HERO CAROUSEL (no overlay box) */}
      <section className="mt-5">
        <HeroCarousel slides={slides} heightClassName="h-[320px] md:h-[420px]" />
      </section>

      {/* Services */}
      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Services</h2>
            <p className="mt-1 text-sm text-white/70">
              Three premium service categories — click to view details.
            </p>
          </div>

          <Link
            href="/services"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 md:inline-flex"
          >
            View All
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <ServiceCard
            title="TABC Licensing"
            desc="New licenses, transfers, and buying/selling existing licenses — handled the right way."
            bullets={["New Liquor License", "License Transfers", "Buy Existing License"]}
            href="/tabc-licensing"
            imageSrc="/services/tabc-new-license.webp"
            imageFit="contain"
          />

          <ServiceCard
            title="LLC Services"
            desc="Registration, reinstatement, and proper termination support."
            bullets={["LLC Registration", "LLC Reinstatement", "Proper Termination Support"]}
            href="/llc-services"
            imageSrc="/services/llc-registration.png"
            imageFit="contain"
          />

          <ServiceCard
            title="Additional Services"
            desc="Site plans, floor plans, bonds, and compliance assistance."
            bullets={["Site Plans", "Floor Plans", "Bonds"]}
            href="/additional-services"
            imageSrc="/services/floor-plans.webp"
            imageFit="cover"
          />
        </div>
      </section>

      {/* Businesses we serve */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold">Businesses We Serve</h2>
        <p className="mt-2 text-sm text-white/70">
          We work with businesses across Texas — from first-time owners to multi-location operators.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/hero/business-1.png", alt: "Business 1", pos: "50% 18%" },
            { src: "/hero/business-2.png", alt: "Business 2", pos: "50% 45%" },
            { src: "/hero/business-3.png", alt: "Business 3", pos: "50% 45%" },
            { src: "/hero/business-4.jpg", alt: "Business 4", pos: "50% 50%" },
            { src: "/hero/business-5.jpg", alt: "Business 5", pos: "10% 10%" },
            { src: "/hero/business-6.png", alt: "Business 6", pos: "50% 50%" },
            { src: "/hero/business-7.png", alt: "Business 7", pos: "50% 50%" },
            { src: "/hero/business-8.webp", alt: "Business 8", pos: "50% 45%" },
            { src: "/hero/business-9.png", alt: "Business 9", pos: "50% 50%" },
          ].map((b) => (
            <div
              key={b.src}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={b.src}
                  alt={b.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  style={{ objectPosition: b.pos }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-10" />
    </div>
  );
}