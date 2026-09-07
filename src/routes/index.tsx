import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  GraduationCap,
  Sprout,
  Landmark,
  Truck,
  ArrowRight,
  MapPin,
  Phone,
  CalendarRange,
  Award,
  HeartPulse,
  Users,
  Globe,
} from "lucide-react";

import heroAgro from "@/assets/hero-agro.jpg";
import carlosBernardo from "@/assets/carlos-bernardo.jpg";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useI18n } from "@/i18n/locale-provider";
import {
  governancaGestao,
  memorias,
  operacoes,
  projetos,
} from "@/lib/empresas";

const ogImage =
  "https://id-preview--61a3e68d-1c13-4650-922f-3210fdb86d58.lovable.app/og-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Monarca | Negócios construídos na fronteira" },
      {
        name: "description",
        content:
          "Conheça as operações e os projetos do Grupo Monarca em educação, agropecuária, mineração, logística, serviços financeiros e mobilidade elétrica entre Brasil e Paraguai.",
      },
      { property: "og:title", content: "Grupo Monarca" },
      {
        property: "og:description",
        content:
          "Educação, agropecuária, mineração, logística, serviços financeiros, mobilidade e comunicação na fronteira Brasil–Paraguai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

const pilarIcons = [GraduationCap, Sprout, Truck, Landmark] as const;
const provaIcons = [
  CalendarRange,
  GraduationCap,
  Award,
  HeartPulse,
  Users,
  Globe,
] as const;

function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative flex h-svh max-h-svh flex-col overflow-hidden">
      <img
        src={heroAgro}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-end px-6 pb-8 pt-24 md:pb-10 md:pt-32">
        <p className="eyebrow min-h-[1rem]">{t.heroEyebrow}</p>
        <h1 className="mt-4 max-w-5xl text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl xl:text-7xl">
          <span className="block lg:whitespace-nowrap">{t.heroTitle}</span>
          <span className="mt-1 block text-gradient-gold lg:whitespace-nowrap">
            {t.heroTitleGold}
          </span>
        </h1>
        <p className="mt-6 min-h-[6.5rem] max-w-xl text-base leading-relaxed text-foreground/88 md:min-h-[7.25rem] md:text-lg">
          {t.heroLead}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#quem-somos"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            {t.heroCtaGroup} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#empresas"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-gold hover:text-gold"
          >
            {t.heroCtaEmpresas}
          </a>
        </div>
      </div>
      <Provas />
    </section>
  );
}

function Provas() {
  const { t } = useI18n();

  return (
    <div className="relative shrink-0 border-t border-gold/25 bg-background/60 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background/80 to-transparent lg:hidden" />
      <div className="mx-auto grid max-w-6xl grid-flow-col grid-cols-[repeat(6,minmax(13.5rem,1fr))] snap-x snap-mandatory overflow-x-auto px-6 py-4 [scrollbar-width:none] md:py-5 lg:grid-cols-6 lg:overflow-visible lg:py-5 [&::-webkit-scrollbar]:hidden">
        {t.provas.map((prova, index) => {
          const Icon = provaIcons[index] ?? Globe;
          return (
            <div
              key={prova.selo}
              className="flex snap-start flex-col gap-2 border-r border-gold/20 px-4 py-1 first:pl-0 last:border-r-0 last:pr-0 lg:min-w-0 lg:border-l lg:border-r-0 lg:px-4 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                  {prova.selo}
                </p>
              </div>
              <p className="text-[12px] leading-snug text-foreground/90 lg:text-[13px]">
                {prova.texto}
                {prova.detalhe ? (
                  <span className="mt-0.5 block text-foreground/75">{prova.detalhe}</span>
                ) : null}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuemSomos() {
  const { t } = useI18n();

  return (
    <section id="quem-somos" className="mx-auto max-w-6xl px-6 py-24">
      <p className="eyebrow">{t.quemSomosEyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">
        {t.quemSomosTitle}{" "}
        <span className="text-gradient-gold">{t.quemSomosTitleGold}</span>
      </h2>
      <div className="mt-8 max-w-3xl space-y-4 text-foreground/88">
        <p className="leading-relaxed">{t.quemSomosP1}</p>
        <p className="leading-relaxed">{t.quemSomosP2}</p>
        <p className="leading-relaxed">{t.quemSomosP3}</p>
      </div>
    </section>
  );
}

function Fundador() {
  const { t } = useI18n();

  return (
    <section id="fundador" className="relative overflow-hidden">
      <img
        src={carlosBernardo}
        alt={t.fundadorPhotoAlt}
        width={1600}
        height={1067}
        className="absolute inset-0 h-full w-full object-cover object-[78%_center] md:object-[82%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background from-5% via-background/88 via-36% to-background/10 to-72% md:to-transparent" />
      <div className="relative mx-auto flex min-h-[68vh] max-w-6xl items-center px-6 py-24 md:min-h-[78vh] md:py-0">
        <div className="max-w-xl">
          <p className="eyebrow">{t.fundadorEyebrow}</p>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] md:text-5xl">
            <span className="block">{t.fundadorTitle}</span>
            <span className="mt-1 block text-gradient-gold">
              {t.fundadorTitleGold}
            </span>
          </h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {t.fundadorRole}
          </p>
          <p className="mt-6 max-w-md leading-relaxed text-foreground/90">
            {t.fundadorHome}
          </p>
          <Link
            to="/fundador-carlos-bernardo"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            {t.fundadorCta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  const { t } = useI18n();

  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">{t.pilaresEyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">
          {t.pilaresTitle}{" "}
          <span className="text-gradient-gold">{t.pilaresTitleGold}</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.pilares.map((p, index) => {
            const Icon = pilarIcons[index] ?? GraduationCap;
            return (
              <div
                key={p.titulo}
                className="surface-panel group flex min-h-[13.5rem] flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/15 text-leaf transition-colors group-hover:bg-gold/20 group-hover:text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Empresas() {
  const { t } = useI18n();
  const lista = operacoes();

  return (
    <section id="empresas" className="mx-auto max-w-6xl px-6 py-24">
      <p className="eyebrow">{t.empresasEyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">
        {t.empresasTitle}{" "}
        <span className="text-gradient-gold">{t.empresasTitleGold}</span>
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {lista.map((e) => {
          const copy = t.empresas[e.slug];
          return (
            <Link
              key={e.slug}
              to="/empresas/$slug"
              params={{ slug: e.slug }}
              className="surface-panel group flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5"
            >
              {e.imagem && (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.imagem}
                    alt={copy.nome}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                    {copy.tag}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {!e.imagem && (
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    <e.icon className="h-3.5 w-3.5" /> {copy.tag}
                  </span>
                )}
                <h3 className="text-xl font-bold">{copy.nome}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {copy.desc}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-leaf">
                  <span className="h-px w-5 bg-leaf/60" /> {copy.detalhe}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Mapa() {
  const { t } = useI18n();
  const grupos = [
    {
      titulo: t.estagioOperacao,
      itens: operacoes().map((e) => ({
        nome: t.empresas[e.slug].nome,
        extra: e.pais,
      })),
    },
    {
      titulo: t.estagioProjeto,
      itens: projetos.map((p) => ({
        nome: t.projetos[p.slug].nome,
        extra: t.estagioProjeto,
      })),
    },
    {
      titulo: t.estagioMemoria,
      itens: memorias().map((e) => ({
        nome: t.empresas[e.slug].nome,
        extra: e.pais,
      })),
    },
    {
      titulo: t.estagioGestao,
      itens: governancaGestao.map((g) => ({
        nome: g.nome,
        extra: g.pais,
      })),
    },
  ];

  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow">{t.mapaEyebrow}</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">
          {t.mapaTitle}{" "}
          <span className="text-gradient-gold">{t.mapaTitleGold}</span>
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {grupos.map((grupo) => (
            <div key={grupo.titulo} className="surface-panel rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {grupo.titulo}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                {grupo.itens.map((item) => (
                  <li key={item.nome}>
                    {item.nome}
                    <span className="text-muted-foreground"> · {item.extra}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projetos() {
  const { t } = useI18n();

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
      <p className="eyebrow">{t.projetosEyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">
        {t.projetosTitle}{" "}
        <span className="text-gradient-gold">{t.projetosTitleGold}</span>
      </h2>
      <p className="mt-5 max-w-2xl text-muted-foreground">{t.projetosLead}</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projetos.map((p) => {
          const copy = t.projetos[p.slug];
          return (
            <Link
              key={p.slug}
              to="/projetos/$slug"
              params={{ slug: p.slug }}
              className="surface-panel group rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                {copy.tag}
              </span>
              <h3 className="mt-5 text-2xl font-bold">{copy.nome}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {copy.desc}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                {t.projetosCta} <ArrowRight className="h-4 w-4" />
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function GovernancaTeaser() {
  const { t } = useI18n();

  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="surface-panel flex flex-col gap-6 rounded-3xl p-10 md:flex-row md:items-center md:justify-between md:p-14">
          <div className="max-w-xl">
            <p className="eyebrow">{t.governancaEyebrow}</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              {t.governancaHomeTitle}{" "}
              <span className="text-gradient-gold">{t.governancaHomeGold}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{t.governancaHomeLead}</p>
          </div>
          <Link
            to="/governanca"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            {t.governancaCta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Contato() {
  const { t } = useI18n();

  return (
    <section id="contato">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="surface-panel grid gap-10 rounded-3xl p-10 md:grid-cols-[1.2fr_1fr] md:p-14">
          <div>
            <p className="eyebrow">{t.contatoEyebrow}</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              {t.contatoTitle}{" "}
              <span className="text-gradient-gold">{t.contatoTitleGold}</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{t.contatoLead}</p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a
              href="tel:+556796770757"
              className="flex items-center gap-4 rounded-xl border border-border bg-background/40 p-4 transition-colors hover:border-gold"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-leaf/15 text-leaf">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t.contatoPhone}
                </p>
                <p className="font-semibold">+55 67 9677-0757</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-background/40 p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t.contatoAtuacao}
                </p>
                <p className="font-semibold">{t.contatoRegiao}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t.metaTitle;
  }, [t.metaTitle]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <QuemSomos />
      <Pilares />
      <Empresas />
      <Mapa />
      <Fundador />
      <Projetos />
      <GovernancaTeaser />
      <Contato />
      <SiteFooter />
    </main>
  );
}
