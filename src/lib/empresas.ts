import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Bike,
  Mountain,
  Truck,
  Landmark,
  Fuel,
  Beef,
  Plane,
  Newspaper,
  Factory,
  Handshake,
} from "lucide-react";

import educacao from "@/assets/educacao.jpg";
import mobilidade from "@/assets/mobilidade.jpg";
import mineracao from "@/assets/mineracao.jpg";
import heroAgro from "@/assets/hero-agro.jpg";

export const EMPRESA_SLUGS = [
  "universidad-interamericana",
  "interamericano-transportes",
  "monte-karlo-calcario",
  "vanbank",
  "mobilidade-eletrica",
  "karla-sophya",
  "confinamento-itamarati",
  "cooperativa-copa-100",
  "posto-futurista",
  "ks-taxi-aereo",
  "diario-campo-grande",
] as const;

export type EmpresaSlug = (typeof EMPRESA_SLUGS)[number];
export type ProjetoSlug = "monarca-premium" | "monarca-alimentos";
export type Estagio = "operacao" | "projeto" | "memoria" | "gestao";
export type EmpresaLinkKey =
  | "linkContato"
  | "linkEmpresas"
  | "linkVanbank"
  | "linkAppStore"
  | "linkCatalogo"
  | "linkCones";

export interface Empresa {
  slug: EmpresaSlug;
  icon: LucideIcon;
  nome: string;
  razaoSocial?: string;
  pais: string;
  estagio: Exclude<Estagio, "projeto" | "gestao">;
  imagem?: string;
  links: { key: EmpresaLinkKey; href: string }[];
}

export interface Projeto {
  slug: ProjetoSlug;
  icon: LucideIcon;
  nome: string;
  estagio: "projeto";
  links: { key: EmpresaLinkKey; href: string }[];
}

const SLUG_ALIASES: Record<string, EmpresaSlug> = {
  "universidade-interamericana": "universidad-interamericana",
  "monarca-bike": "mobilidade-eletrica",
  "monte-karlo-mineradora": "monte-karlo-calcario",
  agropecuaria: "karla-sophya",
};

export function resolveEmpresaSlug(slug: string): EmpresaSlug | undefined {
  if ((EMPRESA_SLUGS as readonly string[]).includes(slug)) {
    return slug as EmpresaSlug;
  }
  return SLUG_ALIASES[slug];
}

export const empresas: Empresa[] = [
  {
    slug: "universidad-interamericana",
    icon: Stethoscope,
    nome: "Universidad Interamericana",
    pais: "Paraguai",
    estagio: "operacao",
    imagem: educacao,
    links: [
      {
        key: "linkCones",
        href: "https://cones.gov.py/universidad-interamericana/",
      },
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "interamericano-transportes",
    icon: Truck,
    nome: "Interamericano Transportes",
    razaoSocial: "Interamericano Transportes Ltda",
    pais: "Brasil",
    estagio: "operacao",
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "monte-karlo-calcario",
    icon: Mountain,
    nome: "Mineradora Monte Karlo",
    razaoSocial: "Mineradora Monte Carlo Ltda",
    pais: "Brasil",
    estagio: "operacao",
    imagem: mineracao,
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "vanbank",
    icon: Landmark,
    nome: "VanBank",
    razaoSocial: "Vanguardabank Gestão e Pagamentos Inteligentes Ltda",
    pais: "Brasil",
    estagio: "operacao",
    links: [
      { key: "linkVanbank", href: "https://playstore.vanbank.com" },
      {
        key: "linkAppStore",
        href: "https://apps.apple.com/br/app/vanbank/id6714449444",
      },
      { key: "linkContato", href: "/#contato" },
    ],
  },
  {
    slug: "mobilidade-eletrica",
    icon: Bike,
    nome: "Monarca Mobilidade Elétrica",
    pais: "Brasil e Paraguai",
    estagio: "operacao",
    imagem: mobilidade,
    links: [
      { key: "linkCatalogo", href: "/catalogo/monarca-bike" },
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "karla-sophya",
    icon: Beef,
    nome: "Karla Sophya",
    pais: "Brasil e Paraguai",
    estagio: "operacao",
    imagem: heroAgro,
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "confinamento-itamarati",
    icon: Factory,
    nome: "Confinamento Monarca Itamarati e Fábrica de Ração",
    pais: "Brasil",
    estagio: "operacao",
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "posto-futurista",
    icon: Fuel,
    nome: "Posto Futurista",
    pais: "Paraguai",
    estagio: "operacao",
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "ks-taxi-aereo",
    icon: Plane,
    nome: "KS Táxi Aéreo",
    razaoSocial: "KS Táxi Aéreo Ltda",
    pais: "Brasil",
    estagio: "operacao",
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "diario-campo-grande",
    icon: Newspaper,
    nome: "Diário de Campo Grande",
    razaoSocial: "Bernardo & Bernardo Ltda",
    pais: "Brasil",
    estagio: "operacao",
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "cooperativa-copa-100",
    icon: Handshake,
    nome: "Cooperativa Copa 100",
    pais: "Paraguai",
    estagio: "memoria",
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
];

export const projetos: Projeto[] = [
  {
    slug: "monarca-premium",
    icon: Beef,
    nome: "Monarca Premium",
    estagio: "projeto",
    links: [{ key: "linkContato", href: "/#contato" }],
  },
  {
    slug: "monarca-alimentos",
    icon: Factory,
    nome: "Monarca Alimentos",
    estagio: "projeto",
    links: [{ key: "linkContato", href: "/#contato" }],
  },
];

export const governancaGestao = [
  {
    nome: "Monarca Group Gestão Empresarial Ltda",
    pais: "Brasil",
    desde: "2026",
  },
  {
    nome: "Bernardo Administração e Participações Ltda",
    pais: "Brasil",
    desde: "2020",
  },
  {
    nome: "Sabedoria Administração e Participações Ltda",
    pais: "Brasil",
    desde: "2023",
  },
  {
    nome: "UCP Medicina PY Adm. Gestão Acadêmica e Assessoria Ltda",
    pais: "Brasil",
    desde: "2020",
  },
] as const;

export function getEmpresa(slug: string) {
  const canonical = resolveEmpresaSlug(slug);
  if (!canonical) return undefined;
  return empresas.find((e) => e.slug === canonical);
}

export function getProjeto(slug: string) {
  return projetos.find((p) => p.slug === slug);
}

export function operacoes() {
  return empresas.filter((e) => e.estagio === "operacao");
}

export function memorias() {
  return empresas.filter((e) => e.estagio === "memoria");
}
