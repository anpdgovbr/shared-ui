# 📦 @anpdgovbr/shared-ui

> Biblioteca de componentes React, desenvolvida para a ANPD, baseada em MUI v7 e alinhada ao padrão govbr-ds.

---

## 🚀 Sobre o projeto

O `@anpdgovbr/shared-ui` é uma biblioteca modular e escalável de componentes UI, construída para padronizar e acelerar o desenvolvimento de aplicações front-end da Autoridade Nacional de Proteção de Dados (ANPD).

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

### 🚀 Instalação

No momento (fase de desenvolvimento interno), use via `git+ssh`:

```bash
npm install git+ssh://git@github.com:anpdgovbr/shared-ui.git
```

No futuro, via npm:

```bash
npm install @anpdgovbr/shared-ui
```

### 💻 Importando e usando no seu projeto React / Next.js

```tsx
import { GovBRAvatar } from '@anpdgovbr/shared-ui'

export function Example() {
  return <GovBRAvatar />
}
```

> 📝 **Nota:** O projeto que consome deve ter `react`, `react-dom`, `@mui/material` e `@mui/icons-material` instalados, conforme `peerDependencies`.

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

- 📌 Suporte completo ao **govbr-ds**, com opções `strict` (100% govbr) ou `custom` (theme e props avançados)
- 📌 Componentes core adicionais: `GovBRModal`, `GovBRBreadcrumb`, `GovBRNotification`
- 📌 Storybook Docs com exemplos específicos govbr-ds
- 📌 Integração futura com `MS Qualifica`, `backlog-dim` e outros sistemas da ANPD

---

## ✍️ Licença

Este projeto está licenciado sob os termos da **ISC License**.

---

## 🚀 Contribuições

Contribuições são bem-vindas! Para propor melhorias ou relatar problemas, abra uma [Issue](https://github.com/anpdgovbr/shared-ui/issues) ou envie um Pull Request seguindo nosso padrão.

---

## 🛡 Desenvolvido pela

> **Divisão de Desenvolvimento e Sustentação de Sistemas**  
> Autoridade Nacional de Proteção de Dados - ANPD

### Time

@lucianoedipo
@gustavolimaf
