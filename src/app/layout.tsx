import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "So Many Roses Maid Services LLC | Denver House Cleaning",
  description:
    "Professional maid services in the Denver, Colorado area. Move-out cleans, deep cleans, one-time, biweekly, monthly & regular cleaning. Free quotes.",
  keywords: [
    "maid service Denver",
    "house cleaning Denver",
    "move out cleaning",
    "deep clean",
    "biweekly cleaning",
    "So Many Roses",
  ],
  openGraph: {
    title: "So Many Roses Maid Services LLC | Denver",
    description: "Rose-quality cleaning in the Denver, Colorado area.",
    type: "website",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorant.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
