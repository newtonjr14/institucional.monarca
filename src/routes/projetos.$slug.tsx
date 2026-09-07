import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useI18n } from "@/i18n/locale-provider";
import { messages } from "@/i18n/messages";
import { getProjeto, projetos } from "@/lib/empresas";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    const projeto = getProjeto(params.slug);
    if (!projeto) throw notFound();
    return { slug: projeto.slug };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Projeto não encontrado — Grupo Monarca" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const copy = messages["pt-BR"].projetos[loaderData.slug];
    return {
      meta: [
        { title: `${copy.nome} — Grupo Monarca` },
        { name: "description", content: copy.desc },
      ],
    };
  },
  component: ProjetoPage,
});

function ProjetoPage() {
  const { slug } = Route.useLoaderData();
  const projeto = getProjeto(slug);
  const { t } = useI18n();
  if (!projeto) return null;

  const copy = t.projetos[projeto.slug];
  const outros =
    projeto.slug === "monarca-premium"
      ? []
      : projetos.filter((p) => p.slug !== projeto.slug);
  const galeria = projeto.galeria ?? [];

  useEffect(() => {
    document.title = `${copy.nome} — ${t.metaTitle}`;
  }, [copy.nome, t.metaTitle]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        {projeto.imagem ? (
          <>
            <img
              src={projeto.imagem}
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
        ) : null}
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32">
          <span className="inline-flex w-fit rounded-full bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
            {copy.tag}
          </span>
          <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[1.02] md:text-6xl">
            {copy.nome}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            {copy.desc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">{t.projetoSobre}</p>
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
          </div>
        </div>

        {copy.fases?.length ? (
          <div className="mt-16">
            <h2 className="text-2xl font-black md:text-3xl">
              {copy.protocoloTitulo}
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {copy.fases.map((fase, index) => (
                <div key={fase.titulo} className="surface-panel rounded-2xl p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-bold">{fase.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {fase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {galeria.length > 0 ? (
          <div className="mt-16">
            <h2 className="text-2xl font-black md:text-3xl">
              {copy.galeriaTitulo}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {galeria.map((src, index) => (
                <figure
                  key={src}
                  className="surface-panel overflow-hidden rounded-2xl"
                >
                  <img
                    src={src}
                    alt={copy.galeriaAlts?.[index] ?? copy.nome}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-52 w-full object-cover"
                  />
                  {copy.galeriaAlts?.[index] ? (
                    <figcaption className="p-4 text-sm text-muted-foreground">
                      {copy.galeriaAlts[index]}
                    </figcaption>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        ) : null}

        {outros.length > 0 ? (
          <div className="mt-16">
            <p className="eyebrow">{t.empresaExplorar}</p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {outros.map((p) => {
                const related = t.projetos[p.slug];
                return (
                  <Link
                    key={p.slug}
                    to="/projetos/$slug"
                    params={{ slug: p.slug }}
                    className="surface-panel rounded-2xl p-6 hover:border-gold/50"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {related.tag}
                    </p>
                    <h3 className="mt-3 text-xl font-bold">{related.nome}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {related.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </section>

      <SiteFooter />
    </main>
  );
}
