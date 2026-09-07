import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useI18n } from "@/i18n/locale-provider";
import { empresas, projetos } from "@/lib/empresas";

export const Route = createFileRoute("/governanca")({
  head: () => ({
    meta: [
      { title: "Governança — Grupo Monarca" },
      {
        name: "description",
        content:
          "Razões sociais, país e papel das operações, estruturas de gestão e memória empresarial do Grupo Monarca.",
      },
    ],
  }),
  component: GovernancaPage,
});

function GovernancaPage() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = `${t.navGovernanca} — ${t.metaTitle}`;
  }, [t.metaTitle, t.navGovernanca]);

  const operacoes = empresas.filter((e) => e.estagio === "operacao");
  const memorias = empresas.filter((e) => e.estagio === "memoria");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 pb-10 pt-32">
        <p className="eyebrow">{t.governancaEyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black md:text-6xl">
          {t.governancaPageTitle}{" "}
          <span className="text-gradient-gold">{t.governancaPageGold}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {t.governancaLead}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-black">{t.governancaOperacoesTitle}</h2>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border">
          {operacoes.map((e) => {
            const copy = t.empresas[e.slug];
            return (
              <Link
                key={e.slug}
                to="/empresas/$slug"
                params={{ slug: e.slug }}
                className="flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-gold/5 md:flex-row md:items-center md:justify-between"
              >
                <span>
                  <span className="block font-semibold">{copy.nome}</span>
                  {e.razaoSocial ? (
                    <span className="text-sm text-muted-foreground">
                      {e.razaoSocial}
                    </span>
                  ) : null}
                </span>
                <span className="text-sm text-gold">
                  {e.pais} · {t.estagioOperacao}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-black">{t.governancaGestaoTitle}</h2>
        <div className="mt-6 space-y-4">
          {t.governancaGestao.map((item) => (
            <div key={item.nome} className="surface-panel rounded-2xl p-6">
              <p className="font-semibold">{item.nome}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.papel}</p>
              <p className="mt-3 text-xs uppercase tracking-wider text-gold">
                {t.estagioGestao}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-black">{t.governancaMemoriaTitle}</h2>
        <div className="mt-6 space-y-4">
          {memorias.map((e) => {
            const copy = t.empresas[e.slug];
            return (
              <Link
                key={e.slug}
                to="/empresas/$slug"
                params={{ slug: e.slug }}
                className="surface-panel block rounded-2xl p-6 transition-colors hover:border-gold/50"
              >
                <p className="font-semibold">{copy.nome}</p>
                <p className="mt-2 text-sm text-muted-foreground">{copy.desc}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-gold">
                  {t.estagioMemoria}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-black">{t.projetosEyebrow}</h2>
        <div className="mt-6 space-y-4">
          {projetos.map((p) => {
            const copy = t.projetos[p.slug];
            return (
              <Link
                key={p.slug}
                to="/projetos/$slug"
                params={{ slug: p.slug }}
                className="surface-panel block rounded-2xl p-6 transition-colors hover:border-gold/50"
              >
                <p className="font-semibold">{copy.nome}</p>
                <p className="mt-2 text-sm text-muted-foreground">{copy.desc}</p>
                <p className="mt-3 text-xs uppercase tracking-wider text-gold">
                  {t.estagioProjeto}
                </p>
              </Link>
            );
          })}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {t.governancaDisclaimer}
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
