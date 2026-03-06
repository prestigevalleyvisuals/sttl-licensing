import Image from "next/image";

export default function BackgroundWatermark() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base background gradient (less “pure black”) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c10] via-[#050607] to-black" />

      {/* Soft accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,0,80,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,140,255,0.10),transparent_55%)]" />

      {/* Logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/brand/logo.png"
          alt=""
          width={1100}
          height={1100}
          priority={false}
          className="select-none opacity-[0.14]"
          style={{
            filter: "saturate(1.35) brightness(1.1) contrast(1.05)",
          }}
        />
      </div>

      {/* Edge fade so watermark looks intentional */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />
    </div>
  );
}