import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { type PlanDay, weekPlan } from "@/content/weekPlan";
import { ogImage } from "@/lib/seo";

// Link preview for every page (Telegram, messengers, social networks). Rendered once at build time.
export const alt = ogImage.alt;
export const size = { width: ogImage.width, height: ogImage.height };
export const contentType = "image/png";

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

export default async function Image() {
  const [bricolage, manrope, manropeBold, logo] = await Promise.all([
    fontFile(
      "bricolage-grotesque",
      "bricolage-grotesque-latin-800-normal.woff",
    ),
    fontFile("manrope", "manrope-latin-500-normal.woff"),
    fontFile("manrope", "manrope-latin-700-normal.woff"),
    readFile(join(process.cwd(), "public/images/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const days: PlanDay[] = weekPlan.days.slice(0, 3);

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
              fontFamily: "Bricolage",
              fontSize: 70,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: c.ink,
            }}
          >
            Stop deciding what to cook every day.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 27,
              lineHeight: 1.4,
              color: c.text,
            }}
          >
            Family menu, meal plan, shopping list and who cooks — run by an AI
            Chef.
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
          {weekPlan.label}
        </div>
        {days.map((d) => (
          <div
            key={d.day}
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
                {d.weekday}
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "Bricolage",
                  fontSize: 28,
                  color: d.today ? c.greenDark : c.ink,
                }}
              >
                {d.day}
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
                    {s.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 16,
                      color: c.muted,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.note}
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
        { name: "Manrope", data: manrope, weight: 500, style: "normal" },
        { name: "Manrope", data: manropeBold, weight: 700, style: "normal" },
      ],
    },
  );
}
