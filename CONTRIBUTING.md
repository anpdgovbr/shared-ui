# 🤝 Contribuindo com o `shared-ui`

Obrigado pelo interesse em contribuir com a biblioteca de componentes `shared-ui` da ANPD!

Este projeto é **público**, mas voltado principalmente a **desenvolvedores internos da ANPD e parceiros institucionais**. Nosso objetivo é manter uma base de componentes React robusta, reutilizável e compatível com o design system **govbr-ds**.

---

## 🧭 Como começar

1. **Faça um fork** deste repositório ou clone diretamente via SSH/HTTPS.
2. Instale as dependências:

```bash
npm install
```

3. Rode o Storybook para visualizar os componentes:

```bash
npm run storybook
```

4. Crie uma branch a partir da `main`:

```bash
git checkout -b feat/NOME-DO-COMPONENTE
```

---

## 📦 Estrutura de componentes

Todo novo componente deve seguir a seguinte estrutura:

```
src/components/NomeDoComponente/
├── NomeDoComponente.tsx       # Implementação principal
├── types.ts                   # Tipagens e interfaces
├── index.ts                   # Exports locais
└── NomeDoComponente.stories.tsx  # Storybook
```

> Use o guia [ADICIONAR_COMPONENTE.md](./ADICIONAR_COMPONENTE.md) para mais detalhes.

---

## ✅ Checklist antes de abrir o PR

- [ ] O componente segue os padrões visuais do govbr-ds.
- [ ] Foi criado um Storybook representando os estados do componente.
- [ ] A branch está atualizada com a `main` (use `git pull --rebase`).
- [ ] Os testes foram executados com sucesso: `npm run test`.
- [ ] O código passou no linter: `npm run lint -- --fix`.

---

## 🧪 Testes

Estamos estruturando testes automatizados gradualmente. Sempre que possível, adicione testes ao seu componente usando `jest` + `@testing-library/react`.

---

## 🚀 Pull Request

- Nomeie o PR de forma clara e objetiva, por exemplo:

```
feat: adiciona componente GovBRBadge
fix: corrige alinhamento do GovBRCard
```

- Vincule a issue correspondente (se houver) usando `Closes #num`.

- Após a aprovação, o PR será squashado e mesclado na `main`.

---

## 🗂️ Projetos e Automação

Todas as issues e PRs devem ser vinculados ao projeto **Base compartilhada**. Campos como:

- `Status`: 🟡 Em andamento, ✅ Concluído etc.
- `Complexidade`: Pequena, Média, Grande
- `Iteração`: Iteração atual (opcional)

são utilizados para **acompanhamento interno** e devem ser mantidos atualizados sempre que possível.

---

## 📞 Contato

Para dúvidas ou sugestões internas, entre em contato com a **Coordenação-Geral de TI (CGTI/ANPD)** ou abra uma issue com a label `dúvida`.

---

**Bons commits e obrigado por contribuir com a ANPD!**
