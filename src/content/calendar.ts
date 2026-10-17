export type DayType = "cook" | "free" | "out";

/** Sample month shown in "The result" block: c = cook session, f = free day, o = night out. */
const pattern = "cfcoffc".repeat(4);

export const sampleMonth = {
  title: "July 2026",
  weekdays: ["M", "T", "W", "T", "F", "S", "S"],
  days: pattern.split("").map((c, i) => ({
    day: i + 1,
    type: ({ c: "cook", f: "free", o: "out" } as const)[c as "c" | "f" | "o"],
  })),
  stats: [
    { value: 12, label: ["free", "evenings"], tone: "brand" },
    { value: 6, label: ["cook", "sessions"], tone: "ink" },
    { value: 5, label: ["nights", "out"], tone: "accent" },
  ] as const,
};
