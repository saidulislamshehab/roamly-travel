import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serifFont = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ROAMLY — Go Somewhere New | Curated Travel Discovery & Journeys",
  description:
    "Discover extraordinary places, unique stays, and unforgettable curated travel experiences worldwide with ROAMLY.",
  keywords: ["travel", "destinations", "tours", "adventures", "curated trips", "outdoor travel"],
  openGraph: {
    title: "ROAMLY — Go Somewhere New",
    description: "Discover extraordinary places, unique stays, and unforgettable travel experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${sansFont.variable} ${serifFont.variable} font-sans min-h-screen flex flex-col bg-bg-main text-content-primary antialiased selection:bg-brand selection:text-white`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
