import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

import carlosBernardo from "@/assets/carlos-bernardo.jpg";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useI18n } from "@/i18n/locale-provider";

export const Route = createFileRoute("/fundador-carlos-bernardo")({
  head: () => ({
    meta: [
      { title: "Carlos Bernardo — Grupo Monarca" },
      {
        name: "description",
        content:
          "Trajetória de Carlos Bernardo, fundador e CEO do Grupo Monarca: do Bairro Carajá à educação médica na fronteira Brasil–Paraguai.",
      },
    ],
  }),
  component: FundadorPage,
});

function FundadorPage() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = `Carlos Bernardo — ${t.metaTitle}`;
  }, [t.metaTitle]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <img
          src={carlosBernardo}
          alt={t.fundadorPhotoAlt}
          width={1600}
          height={1067}
          className="absolute inset-0 h-full w-full object-cover object-[80%_center] md:object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/35" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32">
          <p className="eyebrow">{t.fundadorEyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.02] md:text-6xl">
            {t.fundadorPageTitle}{" "}
            <span className="text-gradient-gold">{t.fundadorPageGold}</span>
          </h1>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {t.fundadorRole}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="surface-panel rounded-3xl p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                {t.fundadorRole}
              </p>
              <p className="mt-4 text-lg leading-relaxed">{t.fundadorCard}</p>
            </div>
            {t.fundadorBody.map((paragrafo) => (
              <p
                key={paragrafo.slice(0, 48)}
                className="mt-6 leading-relaxed text-foreground/88"
              >
                {paragrafo}
              </p>
            ))}
            <h2 className="mt-14 text-2xl font-black">{t.fundadorMetodoTitle}</h2>
            <p className="mt-4 leading-relaxed text-foreground/88">
              {t.fundadorMetodo}
            </p>
          </div>
          <aside>
            <p className="eyebrow">{t.fundadorTimelineEyebrow}</p>
            <h2 className="mt-3 text-3xl font-black">
              {t.fundadorTimelineTitle}{" "}
              <span className="text-gradient-gold">
                {t.fundadorTimelineGold}
              </span>
            </h2>
            <ol className="mt-8 space-y-5">
              {t.fundadorTimeline.map((item) => (
                <li
                  key={item.periodo}
                  className="surface-panel rounded-2xl p-5"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {item.periodo}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {item.marco}
                  </p>
                </li>
              ))}
            </ol>
            <Link
              to="/"
              hash="empresas"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-soft"
            >
              {t.navEmpresas} <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
