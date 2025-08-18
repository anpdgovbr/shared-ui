# Instruções para agentes de codificação (Copilot / AI)

**IMPORTANTE** sempre responder em português pt-BR.

Siga estas instruções para ser imediatamente produtivo neste repositório `shared-ui` (biblioteca de componentes React + MUI v7 usada pela ANPD).

1. Objetivo do projeto

- Biblioteca de componentes React (TypeScript) baseada em MUI v7 e no padrão GovBR-DS. Exports principais em `src/index.ts` e build em `dist/`.

2. Árvore e contratos importantes

- Componentes: `src/components/ui/*` (cada componente em kebab-case com `index.tsx`, `types.ts` e `index.stories.tsx`).
- Tema: `src/theme/govbrTheme.ts` e `src/theme/GovBRThemeProvider.tsx` — customize apenas aqui para alterar tokens do design system.
- Tipos: `src/types/*` e `types/` gerado pelo build (`tsc --emitDeclarationOnly`).

3. Convenções críticas

- Todos os arquivos em `src/components/ui/**/*.tsx` devem começar com a diretiva `"use client"` (regras ESLint em `eslint.config.mjs`).
- Use imports MUI específicos para preservar tree-shaking. Ex.: `import Button from '@mui/material/Button'` (não `import { Button } from '@mui/material'`).
- Componentes expõem props via `SharedUIComponentProps` e usam aliases de path configurados no `tsconfig.json` (ex: `@components/*`, `@theme/*`).

4. Workflows e comandos essenciais

- Instalação: `npm install` (devs) — CI deve usar `npm ci` para instalação reproduzível.
- Hooks: instale com `npm run prepare` (husky). Pre-commit executa `scripts/check-lock-commit.js` e `npx lint-staged`; pre-push roda `npm run check && npm test && npm run build`.
- Testes: `npm run test` (Vitest + @testing-library/react). Build: `npm run build` (types + vite build).

5. Regras de dependências e lockfile

- PeerDependencies: React, MUI, Emotion, GovBR core; o consumidor deve fornecer essas dependências. Ver `package.json` → `peerDependencies`.
- Política de lockfile: mantenha `package-lock.json` versionado para CI; há um hook (`scripts/check-lock-commit.js`) que bloqueia commits onde `package.json` muda nas dependências sem `package-lock.json` staged.

6. Padrões de qualidade do repositório

- Antes de PR: `npm run check` (lint + type-check), `npm run test`, `npm run build`.
- Lint: regras específicas em `eslint.config.mjs`. Atenção à regra customizada `use-client/required` para componentes UI.

7. Pontos de integração e risco

- Exports públicos: ver `exports` em `package.json` e `src/index.ts` — alterar isso muda a API pública.
- Alterações no tema (`src/theme/*`) afetam todos os componentes; prefira alterar tokens com cuidado e adicionar exemplos no Storybook.

8. Arquivos a revisar ao trabalhar em mudanças

- `package.json` (scripts, peerDependencies)
- `eslint.config.mjs` (regras, exceptions)
- `.husky/pre-commit` e `.husky/pre-push` (ganchos que rodam validações)
- `scripts/check-lock-commit.js`, `scripts/clean.js`, `scripts/reset.js` (utilitários de manutenção)
- `src/components/ui/**/index.tsx` (cada componente), `src/index.ts` (exports)

9. Exemplos rápidos

- Para adicionar componente novo: crie `src/components/ui/nome-componente/index.tsx`, `types.ts`, `index.stories.tsx`; comece o arquivo com `"use client"`.
- Para atualizar dependências: rode localmente `npm install`, valide `npm run check` e `npm run build`, commit `package.json` + `package-lock.json` juntos.

10. Quando pedir ajuda ao humano

- Se uma mudança afeta `exports` no `package.json` ou o contrato de tipos em `types/`, solicite revisão de mantenedor sênior.
- Para mudanças de design tokens no tema, peça revisão de designer/UX.

Se algo estiver ambíguo, peça contexto (feature branch, objetivo do PR, e se é breaking change na API pública) antes de qualquer refatoração ampla.
