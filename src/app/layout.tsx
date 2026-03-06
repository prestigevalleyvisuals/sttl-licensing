import "./globals.css";
import type { Metadata } from "next";

import BackgroundWatermark from "@/components/BackgroundWatermark";
import Header from "@/components/Header";
import FooterCalendly from "@/components/FooterCalendly";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: "South Texas Liquor Licensing",
  description: "Liquor licensing and business compliance made simple.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#05060a] text-white antialiased">
        <BackgroundWatermark />
        <Header />

        {/* Offset for sticky header */}
        <main className="mx-auto w-full max-w-7xl px-4 pb-28 pt-24 sm:px-6 lg:px-8">
          {children}
        </main>

        <FooterCalendly />
        <MobileCallBar />
      </body>
    </html>
  );
}