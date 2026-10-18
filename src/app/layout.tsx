import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  // variable font: optical size axis makes large headlines tighter, as in the design
  axes: ["opsz"],
  variable: "--font-bricolage",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dinify — Stop deciding what to cook every day",
    template: "%s · Dinify",
  },
  description: site.description,
  applicationName: site.name,
  // pages add their own canonical URL and Open Graph tags via `pageMetadata` (src/lib/seo.ts)
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    title: "Dinify — Family food, organized",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinify — Family food, organized",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#2F9E5B",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${manrope.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
