import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { CATEGORIAS, type BikeModelo } from "@/lib/catalogo";

const bikeSchema = z.object({
  id: z.string().min(1),
  nome: z.string(),
  categoria: z.enum(CATEGORIAS),
  destaque: z.string(),
  descricao: z.string(),
  fotos: z.array(z.string()),
  specs: z.array(
    z.object({
      rotulo: z.string(),
      valor: z.string(),
    }),
  ),
  recursos: z.array(z.string()),
  preco: z.string(),
  publicado: z.boolean(),
});

export const listPublicBikes = createServerFn({ method: "GET" }).handler(
  async () => {
    const { readCatalogo } = await import("@/server/catalogo-store");
    return (await readCatalogo()).filter((m) => m.publicado);
  },
);

export const listAdminBikes = createServerFn({ method: "GET" }).handler(
  async () => {
    const { assertAdmin } = await import("@/server/admin-auth");
    assertAdmin();
    const { readCatalogo } = await import("@/server/catalogo-store");
    return readCatalogo();
  },
);

export const adminStatus = createServerFn({ method: "GET" }).handler(
  async () => {
    const { isAdmin } = await import("@/server/admin-auth");
    return { ok: isAdmin() };
  },
);

export const loginAdmin = createServerFn({ method: "POST" })
  .validator(z.object({ password: z.string() }))
  .handler(async ({ data }) => {
    const { loginWithPassword } = await import("@/server/admin-auth");
    if (!loginWithPassword(data.password)) {
      return { ok: false as const, error: "Senha incorreta." };
    }
    return { ok: true as const };
  });

export const logoutAdmin = createServerFn({ method: "POST" }).handler(
  async () => {
    const { logoutAdminSession } = await import("@/server/admin-auth");
    logoutAdminSession();
    return { ok: true as const };
  },
);

export const saveBike = createServerFn({ method: "POST" })
  .validator(bikeSchema)
  .handler(async ({ data }) => {
    const { assertAdmin } = await import("@/server/admin-auth");
    assertAdmin();
    const { readCatalogo, writeCatalogo } = await import(
      "@/server/catalogo-store"
    );
    const modelos = await readCatalogo();
    const index = modelos.findIndex((m) => m.id === data.id);
    const next: BikeModelo = data;
    if (index === -1) modelos.unshift(next);
    else modelos[index] = next;
    await writeCatalogo(modelos);
    return next;
  });

export const deleteBike = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const { assertAdmin } = await import("@/server/admin-auth");
    assertAdmin();
    const { readCatalogo, writeCatalogo, deleteUploadedFoto } = await import(
      "@/server/catalogo-store"
    );
    const modelos = await readCatalogo();
    const atual = modelos.find((m) => m.id === data.id);
    if (atual) {
      for (const foto of atual.fotos) {
        await deleteUploadedFoto(foto);
      }
    }
    await writeCatalogo(modelos.filter((m) => m.id !== data.id));
    return { ok: true as const };
  });

export const uploadBikeFoto = createServerFn({ method: "POST" })
  .validator((data: FormData) => data)
  .handler(async ({ data }) => {
    const { assertAdmin } = await import("@/server/admin-auth");
    assertAdmin();
    const file = data.get("file");
    if (!(file instanceof File)) {
      throw new Error("Selecione uma foto.");
    }
    const { saveUploadedFoto } = await import("@/server/catalogo-store");
    const url = await saveUploadedFoto(file);
    return { url };
  });

export const deleteBikeFoto = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string(), url: z.string() }))
  .handler(async ({ data }) => {
    const { assertAdmin } = await import("@/server/admin-auth");
    assertAdmin();
    const { readCatalogo, writeCatalogo, deleteUploadedFoto } = await import(
      "@/server/catalogo-store"
    );
    const modelos = await readCatalogo();
    const index = modelos.findIndex((m) => m.id === data.id);
    const modelo = modelos[index];
    if (!modelo) throw new Error("Modelo não encontrado.");
    modelo.fotos = modelo.fotos.filter((f) => f !== data.url);
    await deleteUploadedFoto(data.url);
    await writeCatalogo(modelos);
    return modelo;
  });
