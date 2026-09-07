import { mkdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  CATEGORIAS,
  seedModelos,
  type BikeModelo,
} from "@/lib/catalogo";

function dataFile() {
  return path.join(process.cwd(), "data", "catalogo.json");
}

function uploadsDir() {
  return path.join(process.cwd(), "public", "uploads", "bikes");
}

async function ensureStore() {
  const file = dataFile();
  await mkdir(path.dirname(file), { recursive: true });
  await mkdir(uploadsDir(), { recursive: true });
  try {
    await readFile(file, "utf8");
  } catch {
    await writeFile(file, JSON.stringify(seedModelos, null, 2), "utf8");
  }
}

function isModelo(value: unknown): value is BikeModelo {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<BikeModelo>;
  return (
    typeof item.id === "string" &&
    typeof item.nome === "string" &&
    CATEGORIAS.includes(item.categoria as BikeModelo["categoria"]) &&
    Array.isArray(item.fotos) &&
    Array.isArray(item.specs) &&
    Array.isArray(item.recursos)
  );
}

function normalizeModelo(item: BikeModelo): BikeModelo {
  return {
    ...item,
    destaque: item.destaque ?? "",
    descricao: item.descricao ?? "",
    preco: item.preco || "Sob consulta",
    publicado: typeof item.publicado === "boolean" ? item.publicado : true,
  };
}

export async function readCatalogo(): Promise<BikeModelo[]> {
  await ensureStore();
  const raw = await readFile(dataFile(), "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (!Array.isArray(parsed)) return seedModelos;
  const modelos = parsed.filter(isModelo).map(normalizeModelo);
  return modelos.length > 0 ? modelos : seedModelos;
}

export async function writeCatalogo(modelos: BikeModelo[]) {
  await ensureStore();
  await writeFile(dataFile(), JSON.stringify(modelos, null, 2), "utf8");
}

export async function saveUploadedFoto(file: File) {
  const type = file.type.toLowerCase();
  const ext =
    type === "image/jpeg"
      ? "jpg"
      : type === "image/png"
        ? "png"
        : type === "image/webp"
          ? "webp"
          : null;
  if (!ext) {
    throw new Error("Envie uma foto JPG, PNG ou WEBP.");
  }
  if (file.size > 6 * 1024 * 1024) {
    throw new Error("A foto deve ter no máximo 6 MB.");
  }

  await mkdir(uploadsDir(), { recursive: true });
  const name = `u-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const dest = path.join(uploadsDir(), name);
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(dest, buffer);
  return `/uploads/bikes/${name}`;
}

export async function deleteUploadedFoto(url: string) {
  const fileName = url.split("/").pop();
  if (!fileName || !fileName.startsWith("u-")) return;
  const dest = path.join(uploadsDir(), fileName);
  try {
    await unlink(dest);
  } catch {
    // already gone
  }
}
