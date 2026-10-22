import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { planDate, planRange, slotNote, weekPlan } from "@/content/weekPlan";
import { contentLocale, routing, type Locale } from "@/i18n/routing";

// Link preview for every page of a language (Telegram, messengers, social networks). Rendered at build time.
// The alt text comes from `pageMetadata` (src/lib/seo.ts), which lists this image explicitly.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// colors mirror the tokens in globals.css
const c = {
  bg: "#f1f8f3",
  surface: "#ffffff",
  ink: "#16211b",
  text: "#4a5450",
  muted: "#8a928d",
  green: "#2f9e5b",
  greenDark: "#1e7a43",
  line: "rgba(20, 40, 25, 0.08)",
  peach: "#f1ce9e",
  pink: "#f3c3cf",
  butter: "#efe0a0",
};

const fontFile = (pkg: string, file: string) =>
  readFile(join(process.cwd(), "node_modules/@fontsource", pkg, "files", file));

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const lang = contentLocale(locale);
  const t = await getTranslations({ locale, namespace: "Hero" });
  const meta = await getTranslations({ locale, namespace: "Meta" });
  const plan = await getTranslations({ locale, namespace: "WeekPlan" });

  // Bricolage has no Cyrillic: Russian headlines use Manrope ExtraBold; glyphs missing in one file fall back to the next
  const [bricolage, bricolageExt, manrope, manropeBold, manropeCyr, manropeCyrBold, manropeCyrHeavy, logo] =
    await Promise.all([
      fontFile("bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff"),
      fontFile("bricolage-grotesque", "bricolage-grotesque-latin-ext-800-normal.woff"),
      fontFile("manrope", "manrope-latin-500-normal.woff"),
      fontFile("manrope", "manrope-latin-700-normal.woff"),
      fontFile("manrope", "manrope-cyrillic-500-normal.woff"),
      fontFile("manrope", "manrope-cyrillic-700-normal.woff"),
      fontFile("manrope", "manrope-cyrillic-800-normal.woff"),
      readFile(join(process.cwd(), "public/images/logo.png")),
    ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const days = weekPlan.days.slice(0, 3);
  const headline = lang === "ru" ? "Manrope" : "Bricolage";
  const title = t("title");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: c.bg,
        padding: 64,
        fontFamily: "Manrope",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 560,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={56}
            height={56}
            style={{ borderRadius: 14 }}
            alt=""
          />
          <div
            style={{
              display: "flex",
              fontFamily: "Bricolage",
              fontSize: 40,
              color: c.ink,
            }}
          >
            Dinify
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontFamily: headline,
              fontWeight: 800,
              // translations run longer than "Stop deciding what to cook every day."
              fontSize: title.length > 44 ? 58 : 70,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: c.ink,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              lineHeight: 1.4,
              color: c.text,
            }}
          >
            {meta("ogLead")}
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              padding: "12px 26px",
              borderRadius: 99,
              background: c.green,
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            dinify.me
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          alignSelf: "center",
          width: 470,
          padding: 28,
          gap: 14,
          borderRadius: 24,
          background: c.surface,
          boxShadow: "0 30px 60px -30px rgba(20, 40, 25, 0.4)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            color: c.muted,
          }}
        >
          {plan("label", { range: planRange(lang) })}
        </div>
        {days.map((d) => (
          <div
            key={d.date}
            style={{
              display: "flex",
              gap: 14,
              paddingTop: 14,
              borderTop: `1px solid ${c.line}`,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 52,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  fontWeight: 700,
                  color: d.today ? c.greenDark : c.muted,
                }}
              >
                {planDate(d.date, lang).weekday}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Bricolage",
                  fontSize: 28,
                  color: d.today ? c.greenDark : c.ink,
                }}
              >
                {planDate(d.date, lang).day}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                flex: 1,
              }}
            >
              {d.slots.map((s) => (
                <div
                  key={s.meal}
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <div
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 99,
                      background: s.swatch ? c[s.swatch] : c.green,
                    }}
                  />
                  <div
                    style={{
                      display: "block",
                      flex: 1,
                      fontSize: 19,
                      fontWeight: 700,
                      color: c.ink,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {plan(`dishes.${s.dish}`)}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 16,
                      color: c.muted,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {slotNote(s, plan)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Bricolage", data: bricolage, weight: 800, style: "normal" },
        { name: "Bricolage", data: bricolageExt, weight: 800, style: "normal" },
        { name: "Manrope", data: manrope, weight: 500, style: "normal" },
        { name: "Manrope", data: manropeBold, weight: 700, style: "normal" },
        { name: "Manrope", data: manropeCyr, weight: 500, style: "normal" },
        { name: "Manrope", data: manropeCyrBold, weight: 700, style: "normal" },
        { name: "Manrope", data: manropeCyrHeavy, weight: 800, style: "normal" },
      ],
    },
  );
}
