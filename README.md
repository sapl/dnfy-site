# Dinify — marketing site

Public site `dinify.me`, built with Next.js 16, React 19 and TypeScript. Localized with next-intl
(en, es, de, fr, ru; pt and ja show English for now): texts in `src/content/messages/*.json`, long pages in
`src/content/pages/<locale>/*.mdx`.

## Getting started

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build
npm run typecheck
```

## Context

- [`CONTEXT.md`](CONTEXT.md) — product, audience, features, pricing, SEO.
- [`AGENTS.md`](AGENTS.md) — rules for AI agents working on the site.
