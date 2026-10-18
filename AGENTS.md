<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read
the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next`
package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at
`node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted
change; committing it with your work keeps the tree clean.

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

- Язык сайта — **английский** (общение с пользователем и доки — на русском).
- Тексты, цены, FAQ, навигация — в `src/content/*.ts`, а не в компонентах. Факты о продукте сверяй с `CONTEXT.md`.
- Стили: CSS Modules + токены из `src/app/globals.css`; новых цветов и шрифтов без нужды не вводить.
- SEO: у каждой страницы свой `metadata` через `pageMetadata()` из `src/lib/seo.ts` (title, description, canonical,
  Open Graph); новую страницу добавляй в `src/app/sitemap.ts` с датой `updated`. Основной домен — `www.dinify.me`.
- Кнопки Log In / Join ведут в приложение (`site.appUrl`), отдельной регистрации на сайте нет.
- Проверка перед сдачей: `npm run typecheck` и `npm run build`.
- Сайт будет пополняться (новые страницы, секции, SEO-контент). Если меняется позиционирование, тарифы или
  функционал — обнови `CONTEXT.md`.
