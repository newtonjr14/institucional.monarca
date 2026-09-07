<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Âncoras e header fixo

O header tem altura `--header-h` (`4rem`). O `html` usa `scroll-padding-top: var(--header-h)`, então **todo** clique em `#id` (Conheça o Grupo, menu, rodapé, CTAs de empresa/projeto, catálogo) para no início da seção, sem vazar o bloco de cima.

- Não usar `scroll-mt-*` nas seções: soma com o padding e reaparece a faixa anterior.
- Ar embaixo do header vem do `py`/`pt` da própria seção, não de offset extra.
- Se a altura do header mudar, altere só `--header-h` em `src/styles.css`.
