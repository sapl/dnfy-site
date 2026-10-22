import de from "@/content/messages/de.json";
import en from "@/content/messages/en.json";
import es from "@/content/messages/es.json";
import fr from "@/content/messages/fr.json";
import ru from "@/content/messages/ru.json";
import type { ContentLocale } from "./routing";

export type Messages = typeof en;

// English is the reference: `npm run typecheck` fails if a translation misses a key.
export const messages: Record<ContentLocale, Messages> = { en, es, de, fr, ru };
