import { Fragment } from "react";

/** Renders `_word_` as an emphasized word and `**word**` as bold. */
export function Emphasis({ text, emClassName }: { text: string; emClassName?: string }) {
  const parts = text.split(/(_[^_]+_|\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("_") && part.endsWith("_"))
          return (
            <em key={i} className={emClassName}>
              {part.slice(1, -1)}
            </em>
          );
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
