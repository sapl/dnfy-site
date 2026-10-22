import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// long-form pages (About, Privacy, Terms) are MDX in src/content/pages/<locale>/; GFM adds tables
const withMDX = createMDX({
  options: { remarkPlugins: ["remark-gfm"] },
});

export default withNextIntl(withMDX(nextConfig));
