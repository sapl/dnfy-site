export const people = {
  anna: { name: "Anna", avatar: "/images/avatar-anna.png" },
  david: { name: "David", avatar: "/images/avatar-david.png" },
} as const;

export type PersonId = keyof typeof people;
