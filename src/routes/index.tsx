import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Sprout,
  Landmark,
  Zap,
  ArrowRight,
  MapPin,
  Phone,
  Users,
  Briefcase,
  Award,
} from "lucide-react";

import heroAgro from "@/assets/hero-agro.jpg";
import carlosBernardo from "@/assets/carlos-bernardo.jpg";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useI18n } from "@/i18n/locale-provider";
import { empresas } from "@/lib/empresas";

const ogImage =
  "https://id-preview--61a3e68d-1c13-4650-922f-3210fdb86d58.lovable.app/og-cover.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Monarca — Ecossistema de Negócios" },
      {
        name: "description",
        content:
          "O Grupo Monarca é um ecossistema empresarial que une educação, transporte, mineração, agronegócio e serviços financeiros para impulsionar o desenvolvimento da fronteira Brasil-Paraguai.",
      },
      { property: "og:title", content: "Grupo Monarca — Ecossistema de Negócios" },
      {
        property: "og:description",
        content:
          "Educação, agro & indústria, serviços financeiros e mobilidade elétrica: um ecossistema integrado que transforma regiões.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
    ],
  }),
  component: Index,
});

const pilarIcons = [GraduationCap, Sprout, Landmark, Zap] as const;

function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden">
      <img
        src={heroAgro}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.02] md:text-7xl">
          {t.heroTitle}{" "}
          <span className="text-gradient-gold">{t.heroTitleGold}</span>
        </h1>
        <p className="mt-6 min-h-[4.5rem] max-w-xl text-lg text-muted-foreground">
          {t.heroLead}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#empresas"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            {t.heroCtaGroup} <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#quem-somos"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-background/40 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-gold hover:text-gold"
          >
            {t.heroCtaAbout}
          </a>
        </div>
      </div>
    </section>
  );
}

function QuemSomos() {
  const { t } = useI18n();
  const numeros = [
    { icon: Users, valor: "+2.500", label: t.numerosAlunos },
    { icon: Briefcase, valor: "+500", label: t.numerosEmpregos },
    { icon: Award, valor: "3", label: t.numerosSetores },
  ];

  return (
    <section id="quem-somos" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <p className="eyebrow">{t.quemSomosEyebrow}</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            {t.quemSomosTitle}{" "}
            <span className="text-gradient-gold">{t.quemSomosTitleGold}</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {t.quemSomosP1}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.quemSomosP2}
          </p>
          <a
            href="#fundador"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            {t.quemSomosTrajetoria} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-4">
          {numeros.map((n) => (
            <div
              key={n.valor}
              className="surface-panel flex min-h-[5.5rem] items-center gap-5 rounded-2xl p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <n.icon className="h-6 w-6" strokeWidth={1.8} />
              </span>
              <div>
                <p className="font-display text-3xl font-black text-gold-soft">
                  {n.valor}
                </p>
                <p className="text-sm text-muted-foreground">{n.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fundador() {
  const { t } = useI18n();

  return (
    <section id="fundador" className="relative overflow-hidden scroll-mt-24">
      <img
        src={carlosBernardo}
        alt={t.fundadorPhotoAlt}
        width={1600}
        height={1067}
        className="absolute inset-0 h-full w-full object-cover object-[80%_center] md:object-[68%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/40 md:via-background/78 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-end px-6 pb-20 pt-28 md:items-center md:py-28">
        <div className="max-w-xl md:min-h-[26rem]">
          <p className="eyebrow">{t.fundadorEyebrow}</p>
          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            {t.fundadorTitle}{" "}
            <span className="text-gradient-gold">{t.fundadorTitleGold}</span>
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {t.fundadorRole}
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            {t.fundadorP1}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.fundadorP2}
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {t.fundadorP3}
          </p>
        </div>
      </div>
    </section>
  );
}

function Pilares() {
  const { t } = useI18n();

  return (
    <section id="pilares" className="scroll-mt-24 border-y border-border bg-surface/40">
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
                key={index}
                className="surface-panel group flex min-h-[13.5rem] flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-leaf/15 text-leaf transition-colors group-hover:bg-gold/20 group-hover:text-gold">
                  <Icon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
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

  return (
    <section id="empresas" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <p className="eyebrow">{t.empresasEyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">
        {t.empresasTitle}{" "}
        <span className="text-gradient-gold">{t.empresasTitleGold}</span>
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {empresas.map((e) => {
          const copy = t.empresas[e.slug];
          return (
            <article
              key={e.slug}
              className="surface-panel group flex h-full min-h-[22rem] flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1.5"
            >
              {e.imagem && (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={e.imagem}
                    alt={e.nome}
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
                <h3 className="text-xl font-bold">{e.nome}</h3>
                <p className="mt-2 line-clamp-3 min-h-[3.75rem] flex-1 text-sm leading-relaxed text-muted-foreground">
                  {copy.desc}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-leaf">
                  <span className="h-px w-5 bg-leaf/60" /> {copy.detalhe}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contato() {
  const { t } = useI18n();

  return (
    <section id="contato" className="scroll-mt-24 border-t border-border bg-surface/40">
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
      <Fundador />
      <Pilares />
      <Empresas />
      <Contato />
      <SiteFooter />
    </main>
  );
}
