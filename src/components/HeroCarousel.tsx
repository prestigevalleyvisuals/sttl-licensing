"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
  objectPosition?: string; // e.g. "50% 20%"
};

export default function HeroCarousel({
  slides,
  intervalMs = 6500,
  className = "",
  heightClassName = "h-[320px] md:h-[420px]",
}: {
  slides: HeroSlide[];
  intervalMs?: number;
  className?: string;
  heightClassName?: string;
}) {
  const safeSlides = useMemo(() => (slides?.length ? slides : []), [slides]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % safeSlides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [safeSlides.length, intervalMs]);

  return (
    <section
      className={[
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5",
        className,
      ].join(" ")}
    >
      <div className={["relative w-full", heightClassName].join(" ")}>
        {/* Slides */}
        <div className="absolute inset-0">
          {safeSlides.map((s, i) => {
            const isOn = i === active;
            return (
              <div
                key={`${s.src}-${i}`}
                className={[
                  "absolute inset-0 transition-opacity duration-700",
                  isOn ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    objectPosition: s.objectPosition || "50% 50%",
                    filter: "brightness(1.18) contrast(1.08) saturate(1.12)",
                  }}
                />

                {/* Light overlay (keeps images visible) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/12 to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/16 via-transparent to-black/28" />
              </div>
            );
          })}
        </div>

        {/* Dots */}
        {safeSlides.length > 1 && (
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={[
                  "h-2.5 w-2.5 rounded-full border border-white/25 transition",
                  i === active ? "bg-white/80" : "bg-white/25 hover:bg-white/45",
                ].join(" ")}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}