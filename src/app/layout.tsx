import "./globals.css";
import type { Metadata } from "next";

import BackgroundWatermark from "@/components/BackgroundWatermark";
import Header from "@/components/Header";
import FooterCalendly from "@/components/FooterCalendly";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: "South Texas Liquor License LLC.",
  description: "Liquor licensing and business compliance made simple.",

  openGraph: {
    title: "South Texas Liquor License LLC.",
    description: "Liquor licensing and business compliance made simple.",
    url: "https://southtexasliquorlicense.com",
    siteName: "South Texas Liquor License LLC.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "South Texas Liquor License LLC logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "South Texas Liquor License LLC.",
    description: "Liquor licensing and business compliance made simple.",
    images: ["/og-image.jpg"],
  },
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