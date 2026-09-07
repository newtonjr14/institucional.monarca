import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BatteryCharging,
  Check,
  Gauge,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

import logoBike from "@/assets/monarca-bike-logo.png";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useI18n } from "@/i18n/locale-provider";
import {
  CATALOGO_WHATSAPP,
  CATEGORIAS,
  capaDoModelo,
  type BikeCategoria,
} from "@/lib/catalogo";
import { listPublicBikes } from "@/lib/catalogo-fn";

export const Route = createFileRoute("/catalogo/monarca-bike")({
  loader: () => listPublicBikes(),
  head: () => ({
    meta: [
      { title: "Catálogo — Monarca Mobilidade Elétrica" },
      {
        name: "description",
        content:
          "Catálogo Monarca Mobilidade Elétrica: scooters e motocicletas elétricas urbanas, clássicas, off-road e cargo.",
      },
    ],
  }),
  component: CatalogoPage,
});

const beneficioIcons = [Leaf, Zap, BatteryCharging, ShieldCheck] as const;

function CatalogoPage() {
  const modelos = Route.useLoaderData();
  const { t } = useI18n();
  const [filtro, setFiltro] = useState<"Todas" | BikeCategoria>("Todas");
  const lista = useMemo(
    () =>
      filtro === "Todas"
        ? modelos
        : modelos.filter((m) => m.categoria === filtro),
    [filtro, modelos],
  );

  const filtros = [
    { id: "Todas" as const, label: t.catalogoFiltroTodas },
    ...CATEGORIAS.map((c) => ({
      id: c,
      label:
        c === "Urbana"
          ? t.catalogoFiltroUrbana
          : c === "Clássica"
            ? t.catalogoFiltroClassica
            : c === "Off-Road"
              ? t.catalogoFiltroOffRoad
              : t.catalogoFiltroCargo,
    })),
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-32 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="eyebrow">{t.catalogoEyebrow}</p>
            <h1 className="mt-4 text-5xl font-black leading-[1.03] md:text-6xl">
              {t.catalogoTitle}{" "}
              <span className="text-gradient-gold">{t.catalogoTitleGold}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              {t.catalogoLead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CATALOGO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> {t.catalogoCtaConsultor}
              </a>
              <a
                href="#modelos"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
              >
                {t.catalogoVerModelos}
              </a>
            </div>
          </div>
          <div className="surface-panel flex items-center justify-center rounded-3xl p-10">
            <img
              src={logoBike}
              alt="Monarca Bike"
              width={1024}
              height={1024}
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.catalogoBeneficios.map((b, index) => {
            const Icon = beneficioIcons[index] ?? Leaf;
            return (
              <div key={b.titulo} className="surface-panel rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-leaf/15 text-leaf">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-bold">{b.titulo}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="modelos" className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">{t.catalogoModelosEyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">
          {t.catalogoModelosTitle}{" "}
          <span className="text-gradient-gold">{t.catalogoModelosTitleGold}</span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {filtros.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFiltro(c.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                filtro === c.id
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-border text-muted-foreground hover:border-gold/60 hover:text-gold"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {lista.length === 0 ? (
          <p className="mt-10 text-muted-foreground">{t.catalogoVazio}</p>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {lista.map((m) => {
              const capa = capaDoModelo(m);
              return (
                <article
                  key={m.id}
                  className="surface-panel group flex flex-col overflow-hidden rounded-3xl transition-transform duration-300 hover:-translate-y-1.5"
                >
                  {capa ? (
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={capa}
                        alt={m.nome}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                        {filtros.find((f) => f.id === m.categoria)?.label ??
                          m.categoria}
                      </span>
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-7">
                    {m.destaque ? (
                      <p className="text-xs font-semibold uppercase tracking-wider text-leaf">
                        {m.destaque}
                      </p>
                    ) : null}
                    <h3 className="mt-2 text-2xl font-black">{m.nome}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.descricao}
                    </p>
                    {m.specs.length > 0 ? (
                      <dl className="mt-5 grid grid-cols-2 gap-3">
                        {m.specs.map((s) => (
                          <div
                            key={`${s.rotulo}-${s.valor}`}
                            className="rounded-xl border border-border bg-background/40 p-3"
                          >
                            <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              {s.rotulo}
                            </dt>
                            <dd className="mt-0.5 text-sm font-bold">{s.valor}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                    {m.recursos.length > 0 ? (
                      <ul className="mt-5 space-y-2">
                        {m.recursos.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-5">
                      <p className="flex items-center gap-2 text-sm font-semibold">
                        <Gauge className="h-4 w-4 text-gold" /> {m.preco}
                      </p>
                      <a
                        href={`${CATALOGO_WHATSAPP}?text=${encodeURIComponent(
                          `Olá! Tenho interesse na ${m.nome} da Monarca Bike.`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-4 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
                      >
                        <MessageCircle className="h-4 w-4" /> {t.catalogoInteresse}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="border-t border-border bg-surface/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="surface-panel grid gap-8 rounded-3xl p-10 md:grid-cols-[1.2fr_1fr] md:items-center md:p-14">
            <div>
              <p className="eyebrow">{t.catalogoFrotasEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black md:text-4xl">
                {t.catalogoFrotasTitle}{" "}
                <span className="text-gradient-gold">
                  {t.catalogoFrotasTitleGold}
                </span>
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                {t.catalogoFrotasLead}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={CATALOGO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> +55 67 9677-0757
              </a>
              <Link
                to="/empresas/$slug"
                params={{ slug: "mobilidade-eletrica" }}
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-gold hover:text-gold"
              >
                {t.catalogoSobreBike}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
