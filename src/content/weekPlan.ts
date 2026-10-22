import type { Messages } from "@/i18n/messages";
import { people, type PersonId } from "./people";

// Sample week shown in the hero and the link preview. Texts live in the `WeekPlan` messages;
// weekday names and the date range are formatted for each language.

export type SlotKind = "cook" | "restaurant" | "delivery" | "ready";
export type Swatch = "peach" | "pink" | "butter";
export type NoteTone = "muted" | "accent" | "strong" | "brand";
export type DishKey = keyof Messages["WeekPlan"]["dishes"];

export type PlanSlot = {
  meal: "lunch" | "dinner";
  dish: DishKey;
  kind: SlotKind;
  /** Cooking time, for `cook` slots. */
  minutes?: number;
  /** After the time: "Your turn" for the viewer (Anna), "<name> cooks" for someone else. */
  turn?: "yours" | "theirs";
  noteTone?: NoteTone;
  swatch?: Swatch;
  cook?: PersonId;
  hint?: DishKey;
};

export type PlanDay = {
  /** ISO date; the weekday name and day number are derived from it. */
  date: string;
  today?: boolean;
  slots: [PlanSlot, PlanSlot];
};

export const weekPlan = {
  range: ["2026-07-13", "2026-07-19"] as const,
  ready: 8,
  assignments: [
    { person: "anna" as const, count: 4 },
    { person: "david" as const, count: 3 },
  ],
  days: [
    {
      date: "2026-07-15",
      slots: [
        { meal: "lunch", dish: "businessLunch", kind: "restaurant", noteTone: "brand", hint: "businessLunchHint" },
        { meal: "dinner", dish: "tunaPasta", kind: "cook", minutes: 20, swatch: "peach", cook: "anna" },
      ],
    },
    {
      date: "2026-07-16",
      today: true,
      slots: [
        { meal: "lunch", dish: "lasagna", kind: "cook", minutes: 60, turn: "yours", noteTone: "accent", swatch: "peach", cook: "anna" },
        { meal: "dinner", dish: "salmon", kind: "cook", minutes: 30, turn: "theirs", noteTone: "strong", swatch: "pink", cook: "david" },
      ],
    },
    {
      date: "2026-07-17",
      slots: [
        { meal: "lunch", dish: "lasagna", kind: "ready", noteTone: "brand" },
        { meal: "dinner", dish: "dinnerOut", kind: "restaurant", noteTone: "brand", hint: "dinnerOut" },
      ],
    },
    {
      date: "2026-07-18",
      slots: [
        { meal: "lunch", dish: "risotto", kind: "cook", minutes: 30, turn: "theirs", noteTone: "strong", swatch: "butter", cook: "david" },
        { meal: "dinner", dish: "pizza", kind: "delivery", noteTone: "brand" },
      ],
    },
  ] satisfies PlanDay[] as PlanDay[],
};

/** Weekday and day of month for a plan day, in the given language. */
export function planDate(date: string, locale: string) {
  const d = new Date(`${date}T12:00:00Z`);
  return {
    weekday: new Intl.DateTimeFormat(locale, { weekday: "short", timeZone: "UTC" }).format(d),
    day: d.getUTCDate(),
  };
}

/** "Jul 13–19" in the given language. */
export function planRange(locale: string) {
  const [from, to] = weekPlan.range.map((d) => new Date(`${d}T12:00:00Z`));
  return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", timeZone: "UTC" }).formatRange(from, to);
}

type NoteKey = "restaurant" | "delivery" | "readyNote" | "minutes" | "yourTurn" | "cooks";

/** Small grey line under the dish: cooking time and whose turn, or the slot type. `t` is the `WeekPlan` translator. */
export function slotNote(slot: PlanSlot, t: (key: NoteKey, values?: Record<string, string | number>) => string) {
  if (slot.kind === "restaurant") return t("restaurant");
  if (slot.kind === "delivery") return t("delivery");
  if (slot.kind === "ready") return t("readyNote");
  const time = t("minutes", { count: slot.minutes ?? 0 });
  if (slot.turn === "yours") return `${time} · ${t("yourTurn")}`;
  if (slot.turn === "theirs" && slot.cook) return `${time} · ${t("cooks", { name: people[slot.cook].name })}`;
  return time;
}
