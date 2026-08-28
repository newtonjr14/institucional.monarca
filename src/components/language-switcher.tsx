import { Check, Globe } from "lucide-react";

import { LOCALES, localeMeta } from "@/i18n/messages";
import { useI18n } from "@/i18n/locale-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t.languageLabel}
          className="inline-flex w-[4.75rem] shrink-0 items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-3 py-2 text-sm font-semibold text-muted-foreground backdrop-blur transition-colors hover:border-gold hover:text-gold"
        >
          <Globe className="h-4 w-4" strokeWidth={1.8} />
          <span>{localeMeta[locale].short}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[13.5rem]">
        {LOCALES.map((id) => (
          <DropdownMenuItem
            key={id}
            onSelect={() => setLocale(id)}
            className="cursor-pointer justify-between focus:bg-gold/15 focus:text-foreground"
          >
            <span>
              <span className="font-semibold text-gold">
                {localeMeta[id].short}
              </span>
              <span className="ml-2 text-muted-foreground">
                {localeMeta[id].label}
              </span>
            </span>
            {locale === id && <Check className="h-4 w-4 text-gold" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
