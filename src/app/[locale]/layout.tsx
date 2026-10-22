import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";
import { contentLocale, ogLocales, routing } from "@/i18n/routing";
import "../globals.css";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "Meta" });
  return {
    metadataBase: new URL(site.url),
    title: {
      default: t("homeTitle"),
      template: "%s · Dinify",
    },
    description: t("description"),
    applicationName: site.name,
    // pages add their own canonical URL, hreflang and Open Graph tags via `pageMetadata` (src/lib/seo.ts)
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: ogLocales[contentLocale(locale)],
      title: t("ogTitle"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("description"),
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#2F9E5B",
};

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  // client components (header menu, language switcher) only need these namespaces
  const { Nav, Footer: footer } = await getMessages();

  return (
    <html lang={contentLocale(locale)} className={`${bricolage.variable} ${manrope.variable}`}>
      <body>
        <NextIntlClientProvider messages={{ Nav, Footer: footer }}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId={site.gaId} />
    </html>
  );
}
