import { Link } from "@tanstack/react-router";

import logoMonarca from "@/assets/logo-monarca.png";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useI18n } from "@/i18n/locale-provider";
import { cn } from "@/lib/utils";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoMonarca}
      alt="Grupo Monarca"
      width={1024}
      height={1007}
      className={cn("h-12 w-auto object-contain md:h-14", className)}
    />
  );
}

const navItems = [
  { to: "/", hash: "quem-somos", key: "navQuemSomos" },
  { to: "/fundador-carlos-bernardo", hash: undefined, key: "navFundador" },
  { to: "/", hash: "empresas", key: "navEmpresas" },
  { to: "/", hash: "projetos", key: "navProjetos" },
  { to: "/governanca", hash: undefined, key: "navGovernanca" },
  { to: "/", hash: "contato", key: "navContato" },
] as const;

export function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          to="/"
          className="shrink-0 font-display text-lg font-bold tracking-wide"
        >
          GRUPO <span className="text-gold">MONARCA</span>
        </Link>
        <nav className="hidden items-center gap-5 whitespace-nowrap text-sm font-medium text-muted-foreground xl:flex">
          {navItems.map((item) =>
            item.hash ? (
              <Link
                key={item.key}
                to="/"
                hash={item.hash}
                className="transition-colors hover:text-gold"
              >
                {t[item.key]}
              </Link>
            ) : (
              <Link
                key={item.key}
                to={item.to}
                className="transition-colors hover:text-gold"
              >
                {t[item.key]}
              </Link>
            ),
          )}
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
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <Link to="/" className="shrink-0">
          <BrandLogo className="h-16 md:h-[4.5rem]" />
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/fundador-carlos-bernardo" className="hover:text-gold">
            {t.navFundador}
          </Link>
          <Link to="/" hash="empresas" className="hover:text-gold">
            {t.navEmpresas}
          </Link>
          <Link to="/governanca" className="hover:text-gold">
            {t.navGovernanca}
          </Link>
          <Link to="/" hash="contato" className="hover:text-gold">
            {t.navContato}
          </Link>
        </nav>
        <p className="md:text-right">
          © {new Date().getFullYear()} {t.footerRights}
          <span className="mt-1 block text-xs">{t.footerSignature}</span>
        </p>
      </div>
    </footer>
  );
}
