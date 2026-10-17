import type { PersonId } from "./people";

export type SlotKind = "cook" | "restaurant" | "delivery" | "ready";
export type Swatch = "peach" | "pink" | "butter";
export type NoteTone = "muted" | "accent" | "strong" | "brand";

export type PlanSlot = {
  meal: "Breakfast" | "Lunch" | "Dinner";
  title: string;
  kind: SlotKind;
  note: string;
  noteTone?: NoteTone;
  swatch?: Swatch;
  cook?: PersonId;
  hint?: string;
};

export type PlanDay = {
  weekday: string;
  day: number;
  today?: boolean;
  slots: [PlanSlot, PlanSlot];
};

export const weekPlan = {
  label: "This week · Jul 13–19",
  ready: 8,
  assignments: [
    { person: "anna" as const, count: 4 },
    { person: "david" as const, count: 3 },
  ],
  days: [
    {
      weekday: "Wed",
      day: 15,
      slots: [
        { meal: "Lunch", title: "Business lunch", kind: "restaurant", note: "Restaurant", noteTone: "brand", hint: "Business lunch at work" },
        { meal: "Dinner", title: "Tuna pasta", kind: "cook", note: "20 min", swatch: "peach", cook: "anna" },
      ],
    },
    {
      weekday: "Thu",
      day: 16,
      today: true,
      slots: [
        { meal: "Lunch", title: "Lasagna", kind: "cook", note: "60 min · Your turn", noteTone: "accent", swatch: "peach", cook: "anna" },
        { meal: "Dinner", title: "Grilled salmon", kind: "cook", note: "30 min · David cooks", noteTone: "strong", swatch: "pink", cook: "david" },
      ],
    },
    {
      weekday: "Fri",
      day: 17,
      slots: [
        { meal: "Lunch", title: "Lasagna", kind: "ready", note: "Ready", noteTone: "brand" },
        { meal: "Dinner", title: "Dinner with the Millers", kind: "restaurant", note: "Restaurant", noteTone: "brand", hint: "Dinner with the Millers" },
      ],
    },
    {
      weekday: "Sat",
      day: 18,
      slots: [
        { meal: "Lunch", title: "Risotto", kind: "cook", note: "30 min · David cooks", noteTone: "strong", swatch: "butter", cook: "david" },
        { meal: "Dinner", title: "Pizza", kind: "delivery", note: "Delivery", noteTone: "brand" },
      ],
    },
  ] satisfies PlanDay[],
};
