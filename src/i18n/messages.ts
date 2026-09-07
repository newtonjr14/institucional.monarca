import { enUS } from "./en-US";
import { es } from "./es";
import { ptBR } from "./pt-BR";
import type { Messages } from "./types";

export const LOCALES = ["pt-BR", "es", "en-US"] as const;
export type Locale = (typeof LOCALES)[number];

export const localeMeta: Record<
  Locale,
  { short: string; label: string; htmlLang: string }
> = {
  "pt-BR": { short: "PT", label: "Português", htmlLang: "pt-BR" },
  es: { short: "ES", label: "Español", htmlLang: "es" },
  "en-US": { short: "EN", label: "English", htmlLang: "en-US" },
};

export type { Messages } from "./types";
export type { EmpresaCopy } from "./types";

export const messages: Record<Locale, Messages> = {
  "pt-BR": ptBR,
  es,
  "en-US": enUS,
};
