import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

// internal links in MDX ("/terms#ai") get the current language prefix
function MdxLink({ href = "", ...props }: ComponentProps<"a">) {
  return href.startsWith("/") ? <Link href={href} {...props} /> : <a href={href} {...props} />;
}

const components: MDXComponents = { a: MdxLink };

export function useMDXComponents(): MDXComponents {
  return components;
}
