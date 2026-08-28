import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Bike,
  Mountain,
  Truck,
  Landmark,
  Fuel,
  Beef,
} from "lucide-react";

import educacao from "@/assets/educacao.jpg";
import mobilidade from "@/assets/mobilidade.jpg";
import mineracao from "@/assets/mineracao.jpg";
import heroAgro from "@/assets/hero-agro.jpg";
import type { Messages } from "@/i18n/messages";

export type EmpresaSlug = keyof Messages["empresas"];
export type EmpresaLinkKey = "linkContato" | "linkEmpresas" | "linkVanbank";

export interface Empresa {
  slug: EmpresaSlug;
  icon: LucideIcon;
  nome: string;
  imagem?: string;
  links: { key: EmpresaLinkKey; href: string }[];
}

export const empresas: Empresa[] = [
  {
    slug: "universidade-interamericana",
    icon: Stethoscope,
    nome: "Universidade Interamericana",
    imagem: educacao,
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "monarca-bike",
    icon: Bike,
    nome: "Monarca Bike",
    imagem: mobilidade,
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "monte-karlo-mineradora",
    icon: Mountain,
    nome: "Monte Karlo Mineradora",
    imagem: mineracao,
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "interamericano-transportes",
    icon: Truck,
    nome: "Interamericano Transportes",
    imagem: heroAgro,
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "karla-sophya",
    icon: Beef,
    nome: "Karla Sophya",
    imagem: heroAgro,
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "vanbank",
    icon: Landmark,
    nome: "VanBank",
    links: [
      { key: "linkVanbank", href: "https://playstore.vanbank.com" },
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
  {
    slug: "posto-futurista",
    icon: Fuel,
    nome: "Posto Futurista",
    links: [
      { key: "linkContato", href: "/#contato" },
      { key: "linkEmpresas", href: "/#empresas" },
    ],
  },
];

export function getEmpresa(slug: string) {
  return empresas.find((e) => e.slug === slug);
}
