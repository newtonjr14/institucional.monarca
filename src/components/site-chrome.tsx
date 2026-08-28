import { Link } from "@tanstack/react-router";

import logoMonarca from "@/assets/logo-monarca.png";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useI18n } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoMonarca}
      alt="Monarca Group"
      width={1024}
      height={1007}
      className={cn("h-12 w-auto object-contain md:h-14", className)}
    />
  );
}

const navItems = [
  { hash: "quem-somos", key: "navQuemSomos" },
  { hash: "fundador", key: "navFundador" },
  { hash: "pilares", key: "navPilares" },
  { hash: "empresas", key: "navEmpresas" },
  { hash: "contato", key: "navContato" },
] as const;

export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="shrink-0">
          <BrandLogo className="h-14 md:h-16" />
        </Link>
        <nav className="hidden items-center gap-6 whitespace-nowrap text-sm font-medium text-muted-foreground lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.hash}
              to="/"
              hash={item.hash}
              className="transition-colors hover:text-gold"
            >
              {t[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher />
          <Link
            to="/"
            hash="contato"
            className="hidden min-w-[9.5rem] justify-center rounded-md bg-gradient-to-r from-gold to-gold-soft px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
          >
            {t.ctaFaleConosco}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <Link to="/" className="shrink-0">
          <BrandLogo className="h-16 md:h-[4.5rem]" />
        </Link>
        <p>
          © {new Date().getFullYear()} {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
