import type { Metadata } from "next";
import { Inter, Archivo_Black } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import AppOverlays from "@/components/app-overlays";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  metadataBase: new URL(config.site),
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [{ url: config.ogImg, width: 1200, height: 630, alt: "RAYZN preview" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: { index: true, follow: true },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const umamiDomain = process.env.UMAMI_DOMAIN;
  const umamiSiteId = process.env.UMAMI_SITE_ID;

  return (
    <html lang="tr" className={[inter.variable, archivoBlack.variable, "font-display"].join(" ")} suppressHydrationWarning>
      <head>
        {umamiDomain && umamiSiteId ? (
          <Script defer src={umamiDomain} data-website-id={umamiSiteId}></Script>
        ) : null}
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <Providers>
          <Header />
          {children}
          <Footer />
          <AppOverlays />
        </Providers>
      </body>
    </html>
  );
}
