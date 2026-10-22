<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Dinify — маркетинговый сайт

Этот репозиторий — **только публичный сайт** `dinify.me` (лендинг, About, FAQ, Contact, Privacy, Terms).
Само приложение (`app.dinify.me`) и бэкенд живут в других репозиториях; здесь их не трогаем.

## Прежде чем писать тексты или секции

- **`CONTEXT.md`** — суть продукта, боли, аудитория, УТП, реальный функционал, ограничения, тарифы, конкуренты, SEO.
  Читай его первым. Не обещай на сайте то, что там помечено как «не обещать» или «будущее».
- `Dinify. Планирование еды.md` — исходный документ с идеей (подробнее, если в CONTEXT.md не хватает).
- `README.md` — команды запуска.
- Нужны детали работы приложения — смотри доки (только чтение):
  `../../backend/pet/dinify/dinify-backend/docs/features/*.md`, `../dinify-ui/docs/features/*.md`.

## Правила

- Сайт многоязычный: `en` (эталон), `es`, `de`, `fr`, `ru`; `pt` и `ja` пока показывают английский текст.
  Язык всегда в пути: `/en/faq`, `/ru/faq`. Подробности — раздел «Локализация» ниже.
- Тексты, цены, FAQ, навигация — не в компонентах: строки в `src/content/messages/<locale>.json`, длинные страницы
  (About, Privacy, Terms) в `src/content/pages/<locale>/*.mdx`, структура (id, иконки, цены) в `src/content/*.ts`.
  Факты о продукте сверяй с `CONTEXT.md`.
- Стили: CSS Modules + токены из `src/app/globals.css`; новых цветов и шрифтов без нужды не вводить.
- SEO: у каждой страницы `generateMetadata` через `pageMetadata()` из `src/lib/seo.ts` (title, description, canonical,
  hreflang, Open Graph); новую страницу добавляй в `staticRoutes` в `src/app/sitemap.ts` с датой `updated`.
  Основной домен — `www.dinify.me`.
- Кнопки Log In / Join ведут в приложение (`site.appUrl`), отдельной регистрации на сайте нет.
- Проверка перед сдачей: `npm run typecheck` и `npm run build`.
- Сайт будет пополняться (новые страницы, секции, SEO-контент). Если меняется позиционирование, тарифы или
  функционал — обнови `CONTEXT.md`.

## Локализация

- next-intl (`src/i18n/`): `routing.ts` — список языков, `translatedLocales`, названия для переключателя;
  `request.ts` — какие сообщения грузить; `navigation.ts` — `Link`, `usePathname` и т. п. **Внутренние ссылки — только
  через `Link` из `@/i18n/navigation`**, он сам добавляет префикс языка.
- Все страницы лежат в `src/app/[locale]/`. В каждой странице — `setRequestLocale(locale)`, тексты через
  `getTranslations` / `useTranslations`.
- Меняешь или добавляешь текст — правь `en.json` и **все** переведённые языки. `npm run typecheck` упадёт, если
  в переводе нет ключа из `en.json`. В MDX сохраняй `id` у `<Section>` — это якоря, на них ссылаются другие страницы.
- `/` и пути без языка редиректит `src/proxy.ts`: сначала язык, выбранный в переключателе в футере (localStorage +
  cookie `NEXT_LOCALE`), потом `Accept-Language` браузера, иначе `en`. Просто заход на `/ru/…` язык не запоминает.
- Непереведённые языки (`pt`, `ja`): canonical ведёт на английскую страницу, в hreflang и sitemap их нет.
  Чтобы включить язык: добавь `<locale>.json` и `src/content/pages/<locale>/*.mdx`, впиши его в `translatedLocales`,
  `ogLocales` и `src/i18n/messages.ts`.
