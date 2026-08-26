import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "IRON TV — Streaming Premium Nouvelle Génération | +18 000 chaînes & VOD 4K",
  description:
    "IRON TV, l'abonnement streaming premium pensé pour la France : plus de 18 000 chaînes en direct et 40 000 films & séries en HD/4K. Activation instantanée, support francophone 7j/7, sans engagement.",
  keywords: [
    "IPTV France",
    "abonnement IPTV",
    "IRON TV",
    "streaming premium",
    "streaming 4K",
    "chaînes TV en direct",
  ],
  openGraph: {
    title: "IRON TV — Streaming Premium Nouvelle Génération",
    description:
      "+18 000 chaînes en direct et 40 000 films & séries en HD/4K. Activation instantanée, support francophone 7j/7.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-white selection:bg-primary">
        {children}
      </body>
    </html>
  );
}
