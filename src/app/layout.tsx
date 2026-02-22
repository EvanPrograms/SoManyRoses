import type { Metadata } from "next";
import { Outfit, Fraunces } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sparkle & Shine Maid Services | Professional House Cleaning",
  description:
    "Professional maid and house cleaning services. Trusted, reliable, and thorough. Book a one-time deep clean or recurring service. Free quotes.",
  keywords: [
    "maid service",
    "house cleaning",
    "professional cleaning",
    "deep clean",
    "recurring cleaning",
  ],
  openGraph: {
    title: "Sparkle & Shine Maid Services",
    description: "Professional house cleaning you can trust.",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
