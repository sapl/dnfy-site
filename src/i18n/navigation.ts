import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/** Locale-aware versions of Next's navigation APIs: `href="/faq"` becomes `/ru/faq` on Russian pages. */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
