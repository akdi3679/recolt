import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
 title: {
  default: "B.E. RECOLT",
  template: "%s · B.E. RECOLT",
},
  description:
    "Bureau d'études en ingénierie nourricière. Diagnostic de sol, potentiel de résilience urbaine, indice de production nourricière. Conforme ZAN et RE2020.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "B.E. RECOLT",
    title: "B.E. RECOLT — Ingénierie Nourricière",
    description:
      "Transformer les espaces urbains en territoires vivants et productifs.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}