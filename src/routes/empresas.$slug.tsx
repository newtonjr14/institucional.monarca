import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useI18n } from "@/i18n/locale-provider";
import { messages } from "@/i18n/messages";
import {
  getEmpresa,
  operacoes,
  resolveEmpresaSlug,
} from "@/lib/empresas";

const ogImage =
  "https://id-preview--61a3e68d-1c13-4650-922f-3210fdb86d58.lovable.app/og-cover.jpg";

export const Route = createFileRoute("/empresas/$slug")({
  beforeLoad: ({ params }) => {
    const canonical = resolveEmpresaSlug(params.slug);
    if (canonical && canonical !== params.slug) {
      throw redirect({
        to: "/empresas/$slug",
        params: { slug: canonical },
      });
    }
  },
  loader: ({ params }) => {
    const empresa = getEmpresa(params.slug);
    if (!empresa) throw notFound();
    return { slug: empresa.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Empresa não encontrada — Grupo Monarca" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const copy = messages["pt-BR"].empresas[loaderData.slug];
    return {
      meta: [
        { title: `${copy.nome} — Grupo Monarca` },
        { name: "description", content: copy.desc },
        { property: "og:title", content: `${copy.nome} — Grupo Monarca` },
        { property: "og:description", content: copy.desc },
        { property: "og:type", content: "website" },
        { property: "og:image", content: ogImage },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: ogImage },
      ],
    };
  },
  component: EmpresaPage,
});

function EmpresaPage() {
  const { slug } = Route.useLoaderData();
  const empresa = getEmpresa(slug);
  const { t } = useI18n();
  if (!empresa) return null;

  const Icon = empresa.icon;
  const copy = t.empresas[empresa.slug];
  const relacionadas = operacoes()
    .filter((e) => e.slug !== empresa.slug)
    .slice(0, 3);
  const estagioLabel =
    empresa.estagio === "memoria" ? t.estagioMemoria : t.estagioOperacao;

  useEffect(() => {
    document.title = `${copy.nome} — ${t.metaTitle}`;
  }, [copy.nome, t.metaTitle]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        {empresa.imagem && (
          <>
            <img
              src={empresa.imagem}
              alt={copy.nome}
              width={1920}
              height={1080}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "var(--gradient-hero)" }}
            />
          </>
        )}
        <div className="relative mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
            <Icon className="h-3.5 w-3.5" /> {copy.tag} · {estagioLabel}
          </span>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] md:text-6xl">
            {copy.nome}
          </h1>
          {empresa.razaoSocial ? (
            <p className="mt-3 text-sm text-muted-foreground">
              {t.empresaRazaoSocial}: {empresa.razaoSocial}
            </p>
          ) : null}
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {copy.desc}
          </p>
          {empresa.slug === "mobilidade-eletrica" ? (
            <Link
              to="/catalogo/monarca-bike"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {copy.cta} <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : empresa.slug === "vanbank" ? (
            <a
              href="https://playstore.vanbank.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {copy.cta} <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <a
              href="/#contato"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {copy.cta} <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">{t.empresaSobre}</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              {copy.titulo}
            </h2>
            {copy.sobre.map((paragrafo) => (
              <p
                key={paragrafo.slice(0, 40)}
                className="mt-5 leading-relaxed text-foreground/88"
              >
                {paragrafo}
              </p>
            ))}
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-leaf">
              <span className="h-px w-5 bg-leaf/60" /> {copy.detalhe}
            </p>
          </div>
          <div className="surface-panel rounded-2xl p-8">
            <h3 className="text-lg font-bold">{t.empresaServicos}</h3>
            <ul className="mt-5 space-y-4">
              {copy.servicos.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-foreground/80">{s}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {t.empresaLinks}
              </h3>
              <div className="mt-4 flex flex-col gap-2">
                {empresa.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    {...(l.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-soft"
                  >
                    {t[l.key]} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow">{t.empresaExplorar}</p>
          <h2 className="mt-4 text-3xl font-black md:text-4xl">
            {t.empresaOutras}{" "}
            <span className="text-gradient-gold">{t.empresaOutrasGold}</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relacionadas.map((e) => {
              const relatedCopy = t.empresas[e.slug];
              return (
                <Link
                  key={e.slug}
                  to="/empresas/$slug"
                  params={{ slug: e.slug }}
                  className="surface-panel group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <e.icon className="h-6 w-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{relatedCopy.nome}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {relatedCopy.desc}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    {t.empresaConhecer}{" "}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
