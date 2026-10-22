import { notFound } from "next/navigation";

// any unknown path inside a language (/ru/whatever) shows the localized 404 from ../not-found.tsx
export default function CatchAll() {
  notFound();
}
