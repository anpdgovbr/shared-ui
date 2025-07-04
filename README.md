# 📦 anpd-shared-ui

> Biblioteca de componentes React, desenvolvida para a ANPD, baseada em MUI v7 e alinhada ao padrão govbr-ds.

---

## 🚀 Sobre o projeto

O `anpd-shared-ui` é uma biblioteca modular e escalável de componentes UI, construída para padronizar e acelerar o desenvolvimento de aplicações front-end da Autoridade Nacional de Proteção de Dados (ANPD).

✔ Baseada em **React 19+**  
✔ Usando **MUI v7** para garantir consistência visual e acessibilidade  
✔ Inspirada nos princípios do **Design System do Governo Federal (govbr-ds)**  
✔ Totalmente **Tipada em TypeScript**  
✔ Testada com **Vitest** + **Playwright**  
✔ Documentada e exibida via **Storybook**

---

## 🏗 Estrutura atual de componentes

```
src/
├── components/
│   └── GovBRAvatar/
│       ├── GovBRAvatar.tsx
│       └── GovBRAvatar.stories.tsx
├── index.ts
```

---

## 📚 Como usar

### 1️⃣ Instale como dependência (ou localmente via `npm link`)

```bash
npm install anpd-shared-ui
```

ou local:

```bash
npm link
```

### 2️⃣ Importe no seu projeto React / Next.js

```tsx
import { GovBRAvatar } from "anpd-shared-ui";

export function Example() {
  return <GovBRAvatar />;
}
```

> 📝 **Nota:** É necessário que o projeto que consome tenha `react`, `react-dom`, `@mui/material` e `@mui/icons-material` instalados, conforme declarados como `peerDependencies`.

---

## 🔧 Scripts disponíveis

| Script                    | Descrição                              |
| ------------------------- | -------------------------------------- |
| `npm run dev`             | Inicia o playground local com Vite     |
| `npm run build`           | Gera o build da biblioteca (`dist/`)   |
| `npm run storybook`       | Inicia o Storybook em `localhost:6006` |
| `npm run build-storybook` | Gera o Storybook estático              |
| `npm run test`            | Executa os testes com Vitest           |
| `npm run lint`            | Roda o ESLint nos arquivos do projeto  |
| `npm run format`          | Formata o código com Prettier          |

---

## 📝 Roadmap futuro

- 📌 Suporte completo ao **govbr-ds**, com opções para `strict` (100% govbr) ou `custom` (theme e props avançados)
- 📌 Mais componentes core: `GovBRModal`, `GovBRBreadcrumb`, `GovBRNotification`
- 📌 Suporte oficial ao **Storybook Docs** com exemplos em govbr-ds
- 📌 Integração futura com `MS Qualifica`, `backlog-dim` e outros sistemas da ANPD

---

## ✍️ Licença

Este projeto é licenciado sob os termos da **ISC License**.

---

## 🚀 Contribuições

Contribuições são muito bem-vindas! Para propor melhorias ou relatar problemas, abra uma [Issue](https://github.com/anpdgovbr/anpd-shared-ui/issues) ou envie um Pull Request seguindo o nosso padrão.

---

## 🛡 Desenvolvido pela

> **Divisão de Desenvolvimento e Sustentação de Sistemas**  
> Autoridade Nacional de Proteção de Dados - ANPD
