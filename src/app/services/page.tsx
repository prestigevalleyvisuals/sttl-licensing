import Link from "next/link";
import Image from "next/image";

function Category({
  title,
  desc,
  href,
  imageSrc,
  imageFit = "contain",
}: {
  title: string;
  desc: string;
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
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>
      <div className="p-6">
        <div className="text-xl font-bold">{title}</div>
        <p className="mt-2 text-sm text-white/80">{desc}</p>
        <div className="mt-5 text-sm font-semibold text-white/90 group-hover:text-white">
          View details →
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-10">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Services</h1>
      <p className="mt-3 max-w-3xl text-white/80">
        Choose a premium service category below. Each page includes clear service breakdowns and a
        consultation button.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Category
          title="TABC Licensing"
          desc="New licenses, transfers, and buying/selling existing licenses."
          href="/tabc-licensing"
          imageSrc="/services/tabc-new-license.webp"
          imageFit="contain"
        />
        <Category
          title="LLC Services"
          desc="Registration, reinstatement, and termination support."
          href="/llc-services"
          imageSrc="/services/llc-registration.png"
          imageFit="contain"
        />
        <Category
          title="Additional Services"
          desc="Site plans, floor plans, bonds, and compliance assistance."
          href="/additional-services"
          imageSrc="/services/site-plans.webp"
          imageFit="cover"
        />
      </div>

      <div className="h-10" />
    </div>
  );
}