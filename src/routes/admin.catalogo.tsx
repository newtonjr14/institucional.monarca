import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Plus, Trash2, Upload } from "lucide-react";

import {
  CATEGORIAS,
  type BikeModelo,
} from "@/lib/catalogo";
import {
  adminStatus,
  deleteBike,
  deleteBikeFoto,
  listAdminBikes,
  loginAdmin,
  logoutAdmin,
  saveBike,
  uploadBikeFoto,
} from "@/lib/catalogo-fn";

export const Route = createFileRoute("/admin/catalogo")({
  head: () => ({
    meta: [
      { title: "Admin catálogo — Monarca Bike" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminCatalogoPage,
});

function emptyModelo(): BikeModelo {
  return {
    id: crypto.randomUUID(),
    nome: "",
    categoria: "Urbana",
    destaque: "",
    descricao: "",
    fotos: [],
    specs: [
      { rotulo: "Autonomia", valor: "" },
      { rotulo: "Velocidade", valor: "" },
    ],
    recursos: [""],
    preco: "Sob consulta",
    publicado: true,
  };
}

function AdminCatalogoPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modelos, setModelos] = useState<BikeModelo[]>([]);
  const [atual, setAtual] = useState<BikeModelo | null>(null);
  const [saving, setSaving] = useState(false);

  async function load() {
    const lista = await listAdminBikes();
    setModelos(lista);
  }

  useEffect(() => {
    void adminStatus().then((s) => {
      setAuthed(s.ok);
      if (s.ok) void load();
    });
  }, []);

  async function onLogin(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    const result = await loginAdmin({ data: { password } });
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setAuthed(true);
    setPassword("");
    await load();
  }

  async function onLogout() {
    await logoutAdmin();
    setAuthed(false);
    setModelos([]);
    setAtual(null);
  }

  async function persist(modelo: BikeModelo) {
    setSaving(true);
    try {
      const saved = await saveBike({ data: modelo });
      await load();
      setAtual(saved);
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm("Remover este modelo e as fotos enviadas?")) return;
    await deleteBike({ data: { id } });
    await load();
    setAtual((cur) => (cur?.id === id ? null : cur));
  }

  async function onUpload(file: File) {
    if (!atual) return;
    const fd = new FormData();
    fd.append("file", file);
    const { url } = await uploadBikeFoto({ data: fd });
    const next = { ...atual, fotos: [...atual.fotos, url] };
    setAtual(next);
    await persist(next);
  }

  async function onRemoveFoto(url: string) {
    if (!atual) return;
    const next = await deleteBikeFoto({ data: { id: atual.id, url } });
    setAtual(next);
    await load();
  }

  if (authed === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        Carregando…
      </main>
    );
  }

  if (!authed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
        <form
          onSubmit={(e) => void onLogin(e)}
          className="surface-panel w-full max-w-sm rounded-2xl p-8"
        >
          <p className="eyebrow">Admin</p>
          <h1 className="mt-3 text-2xl font-black">Catálogo Monarca Bike</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Entre para incluir, editar ou remover modelos e fotos.
          </p>
          <label className="mt-6 block text-sm font-medium">
            Senha
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2"
              autoFocus
            />
          </label>
          {error ? <p className="mt-3 text-sm text-destructive">{error}</p> : null}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-gradient-to-r from-gold to-gold-soft py-2.5 text-sm font-bold text-primary-foreground"
          >
            Entrar
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 className="text-xl font-black">Catálogo Monarca Bike</h1>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link
              to="/catalogo/monarca-bike"
              className="text-muted-foreground hover:text-gold"
            >
              Ver vitrine
            </Link>
            <button
              type="button"
              onClick={() => void onLogout()}
              className="text-muted-foreground hover:text-gold"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[0.9fr_1.2fr]">
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-bold">Modelos</h2>
            <button
              type="button"
              onClick={() => setAtual(emptyModelo())}
              className="inline-flex items-center gap-1.5 rounded-md bg-gold/15 px-3 py-1.5 text-sm font-semibold text-gold"
            >
              <Plus className="h-4 w-4" /> Novo
            </button>
          </div>
          <div className="space-y-3">
            {modelos.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setAtual(m)}
                className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                  atual?.id === m.id
                    ? "border-gold bg-gold/10"
                    : "border-border hover:border-gold/50"
                }`}
              >
                {m.fotos[0] ? (
                  <img
                    src={m.fotos[0]}
                    alt=""
                    className="h-14 w-16 rounded-md object-cover"
                  />
                ) : (
                  <span className="flex h-14 w-16 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">
                    sem foto
                  </span>
                )}
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-semibold">{m.nome || "Sem nome"}</span>
                  <span className="text-xs text-muted-foreground">
                    {m.categoria} · {m.publicado ? "publicado" : "oculto"}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section className="surface-panel rounded-2xl p-6">
          {!atual ? (
            <p className="text-sm text-muted-foreground">
              Escolha um modelo à esquerda ou crie um novo.
            </p>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                void persist({
                  ...atual,
                  nome: atual.nome.trim(),
                  specs: atual.specs.filter((s) => s.rotulo.trim() || s.valor.trim()),
                  recursos: atual.recursos.filter((r) => r.trim()),
                });
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-bold">
                  {atual.nome || "Novo modelo"}
                </h2>
                <button
                  type="button"
                  onClick={() => void onDelete(atual.id)}
                  className="inline-flex items-center gap-1 text-sm text-destructive"
                >
                  <Trash2 className="h-4 w-4" /> Remover
                </button>
              </div>

              <label className="block text-sm">
                Nome
                <input
                  value={atual.nome}
                  onChange={(e) => setAtual({ ...atual, nome: e.target.value })}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                  required
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  Categoria
                  <select
                    value={atual.categoria}
                    onChange={(e) =>
                      setAtual({
                        ...atual,
                        categoria: e.target.value as BikeModelo["categoria"],
                      })
                    }
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                  >
                    {CATEGORIAS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm">
                  Preço
                  <input
                    value={atual.preco}
                    onChange={(e) => setAtual({ ...atual, preco: e.target.value })}
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                  />
                </label>
              </div>

              <label className="block text-sm">
                Destaque
                <input
                  value={atual.destaque}
                  onChange={(e) => setAtual({ ...atual, destaque: e.target.value })}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                />
              </label>

              <label className="block text-sm">
                Detalhes
                <textarea
                  value={atual.descricao}
                  onChange={(e) => setAtual({ ...atual, descricao: e.target.value })}
                  rows={4}
                  className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
                />
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={atual.publicado}
                  onChange={(e) =>
                    setAtual({ ...atual, publicado: e.target.checked })
                  }
                />
                Publicado no catálogo
              </label>

              <div>
                <p className="text-sm font-medium">Fotos</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  {atual.fotos.map((url) => (
                    <div key={url} className="relative">
                      <img
                        src={url}
                        alt=""
                        className="h-24 w-32 rounded-md object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => void onRemoveFoto(url)}
                        className="absolute right-1 top-1 rounded bg-background/80 p-1 text-destructive"
                        aria-label="Remover foto"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                  <label className="flex h-24 w-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-border text-xs text-muted-foreground hover:border-gold hover:text-gold">
                    <Upload className="mb-1 h-4 w-4" />
                    Enviar
                    <input
                      type="file"
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        e.target.value = "";
                        if (file) void onUpload(file);
                      }}
                    />
                  </label>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Especificações</p>
                <div className="mt-2 space-y-2">
                  {atual.specs.map((spec, index) => (
                    <div key={index} className="grid grid-cols-[1fr_1fr_auto] gap-2">
                      <input
                        placeholder="Ex: Autonomia"
                        value={spec.rotulo}
                        onChange={(e) => {
                          const specs = atual.specs.map((s, i) =>
                            i === index ? { ...s, rotulo: e.target.value } : s,
                          );
                          setAtual({ ...atual, specs });
                        }}
                        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                      />
                      <input
                        placeholder="Ex: até 65 km"
                        value={spec.valor}
                        onChange={(e) => {
                          const specs = atual.specs.map((s, i) =>
                            i === index ? { ...s, valor: e.target.value } : s,
                          );
                          setAtual({ ...atual, specs });
                        }}
                        className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setAtual({
                            ...atual,
                            specs: atual.specs.filter((_, i) => i !== index),
                          })
                        }
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setAtual({
                        ...atual,
                        specs: [...atual.specs, { rotulo: "", valor: "" }],
                      })
                    }
                    className="text-sm font-semibold text-gold"
                  >
                    + especificação
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Recursos</p>
                <div className="mt-2 space-y-2">
                  {atual.recursos.map((recurso, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        value={recurso}
                        onChange={(e) => {
                          const recursos = atual.recursos.map((r, i) =>
                            i === index ? e.target.value : r,
                          );
                          setAtual({ ...atual, recursos });
                        }}
                        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setAtual({
                            ...atual,
                            recursos: atual.recursos.filter((_, i) => i !== index),
                          })
                        }
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      setAtual({ ...atual, recursos: [...atual.recursos, ""] })
                    }
                    className="text-sm font-semibold text-gold"
                  >
                    + recurso
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  to="/catalogo/monarca-bike"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-gold"
                >
                  <ArrowLeft className="h-4 w-4" /> Voltar à vitrine
                </Link>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-md bg-gradient-to-r from-gold to-gold-soft px-5 py-2 text-sm font-bold text-primary-foreground disabled:opacity-60"
                >
                  {saving ? "Salvando…" : "Salvar"}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
