import { hasLocale } from "next-intl";
import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { LOCALE_COOKIE, routing } from "./i18n/routing";

const intl = createMiddleware(routing);

/**
 * URLs without a language (`/`, `/faq`) redirect to a localized one: the language picked in the switcher if there
 * is one, otherwise the browser's `Accept-Language`, otherwise English. Localized URLs are served as is.
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const hasPrefix = routing.locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));

  if (!hasPrefix && hasLocale(routing.locales, saved)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${saved}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }
  return intl(request);
}

export const config = {
  // everything except API, Next internals and files with an extension (sitemap.xml, robots.txt, icons)
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
