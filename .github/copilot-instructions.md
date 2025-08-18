# Instruções para agentes de codificação (Copilot / AI)

**IMPORTANTE** sempre responder em português pt-BR.

Siga estas instruções para ser imediatamente produtivo neste repositório `shared-ui`, que é uma **biblioteca de componentes compartilháveis da ANPD**.

## � Objetivo e Arquitetura da Biblioteca

**LEIA PRIMEIRO:** `ARQUITETURA.md` - documento que define a arquitetura híbrida implementada para atender aos requisitos da biblioteca.

### Biblioteca de Componentes ANPD

A `shared-ui` é uma **biblioteca de componentes compartilháveis** que:

- Centraliza componentes React reutilizáveis entre projetos ANPD
- Utiliza Material-UI como base técnica robusta
- Segue padrões visuais do Gov.br Design System
- Garante consistência e manutenibilidade

### Arquitetura Híbrida Implementada

Para atender aos objetivos da biblioteca, foi definida uma **arquitetura de modo duplo**:

1. **Modo Padrão** (`strictgovbr={false}` - padrão): Componente MUI estilizado pelo `govbrTheme.ts`
2. **Modo Estrito** (`strictgovbr={true}`): Elemento HTML puro com classes CSS do Gov.br DS

```tsx
// Modo Padrão: Uso principal da biblioteca
<GovBRButton variant="contained" color="primary">Botão</GovBRButton>

// Modo Estrito: Quando necessário 100% fidelidade Gov.br DS
<GovBRButton strictgovbr inverted>Botão</GovBRButton>
```

## 1. Estrutura e Contratos

- **Objetivo**: Biblioteca de componentes compartilháveis ANPD com React + TypeScript + MUI v7 + Gov.br DS
- **Exports**: `src/index.ts` e build em `dist/`
- **Arquitetura**: Modo duplo conforme definido em `ARQUITETURA.md`

## 2. Implementação Obrigatória do Modo Duplo

### Estrutura de Componentes

```
src/components/ui/nome-componente/
├── index.tsx              # Implementação com modo duplo obrigatório
├── types.ts               # Interface estendendo SharedUIComponentProps
└── index.stories.tsx      # Stories mostrando ambos os modos
```

### Padrão de Implementação

```tsx
'use client'

export const GovBRComponente: React.FC<Props> = ({ strictgovbr, className, ...props }) => {
  // Modo Estrito: HTML puro com classes Gov.br DS
  if (strictgovbr) {
    const classes = classnames('br-component', className, {
      'modifier-class': props.someCondition,
    })
    return <div className={classes}>...</div>
  }

  // Modo Padrão: Componente "burro" que repassa props para MUI
  // Estilização controlada inteiramente pelo govbrTheme.ts
  return (
    <MuiComponent className={className} {...props}>
      ...
    </MuiComponent>
  )
}
```

## 3. Estilização: Tema e Tokens CSS

### govbrTheme.ts - Ponto Central

- **Função**: Faz componentes MUI se parecerem com Gov.br DS automaticamente
- **Como**: `styleOverrides` aplicam tokens CSS do Gov.br DS nos slots corretos do MUI
- **Prioridade**: Use `var(--token-name)` em vez de valores fixos

```tsx
// govbrTheme.ts
MuiButton: {
  styleOverrides: {
    root: {
      backgroundColor: 'var(--interactive)', // ✅ Token CSS
      borderRadius: 'var(--surface-rounder-md)', // ✅ Token CSS
      // backgroundColor: '#1351B4', // ❌ Valor fixo
    }
  }
}
```

## 4. Convenções da Arquitetura

- **Modo duplo obrigatório**: Todo componente GovBR deve implementar `strictgovbr` conforme definido na arquitetura
- **Componentes "burros"**: No modo padrão, apenas repassam props para MUI
- **Tema centralizado**: Estilização MUI controlada exclusivamente pelo `govbrTheme.ts`
- **Tokens CSS**: Use `var(--token-name)` para integração com Gov.br DS
- **SharedUIComponentProps**: Todos os componentes devem estender para ter `strictgovbr` automático
- **Diretiva "use client"**: Obrigatória em `src/components/ui/**/*.tsx`
- **Imports específicos MUI**: `import Button from '@mui/material/Button'` (tree-shaking)
- **Path aliases**: `@components/*`, `@theme/*`, `@helpers/*`, `@govbr-types/*`

## 5. Descobrindo Tokens CSS Gov.br DS

1. **DevTools (método preferido)**: Inspecione componente oficial Gov.br DS
2. **Arquivo fonte**: `node_modules/@govbr-ds/core/dist/core-tokens.min.css`
3. **Mapeamento**: Tokens → slots MUI no `govbrTheme.ts`

## 6. Workflows e comandos essenciais

- Instalação: `npm install` (devs) — CI deve usar `npm ci` para instalação reproduzível.
- Hooks: instale com `npm run prepare` (husky). Pre-commit executa `scripts/check-lock-commit.js` e `npx lint-staged`; pre-push roda `npm run check && npm test && npm run build`.
- Testes: `npm run test` (Vitest + @testing-library/react). Build: `npm run build` (types + vite build).

## 7. Regras de dependências e lockfile

- PeerDependencies: React, MUI, Emotion, GovBR core; o consumidor deve fornecer essas dependências. Ver `package.json` → `peerDependencies`.
- Política de lockfile: mantenha `package-lock.json` versionado para CI; há um hook (`scripts/check-lock-commit.js`) que bloqueia commits onde `package.json` muda nas dependências sem `package-lock.json` staged.

## 8. Padrões de qualidade do repositório

- Antes de PR: `npm run check` (lint + type-check), `npm run test`, `npm run build`.
- Lint: regras específicas em `eslint.config.mjs`. Atenção à regra customizada `use-client/required` para componentes UI.

## 9. Pontos de integração e risco

- Exports públicos: ver `exports` em `package.json` e `src/index.ts` — alterar isso muda a API pública.
- Alterações no tema (`src/theme/*`) afetam todos os componentes; prefira alterar tokens com cuidado e adicionar exemplos no Storybook.

## 10. Arquivos a revisar ao trabalhar em mudanças

- `package.json` (scripts, peerDependencies)
- `eslint.config.mjs` (regras, exceptions)
- `.husky/pre-commit` e `.husky/pre-push` (ganchos que rodam validações)
- `scripts/check-lock-commit.js`, `scripts/clean.js`, `scripts/reset.js` (utilitários de manutenção)
- `src/components/ui/**/index.tsx` (cada componente), `src/index.ts` (exports)

## 11. Exemplos rápidos

- Para adicionar componente novo: crie `src/components/ui/nome-componente/index.tsx`, `types.ts`, `index.stories.tsx`; comece o arquivo com `"use client"`.
- Para atualizar dependências: rode localmente `npm install`, valide `npm run check` e `npm run build`, commit `package.json` + `package-lock.json` juntos.

## 12. Quando pedir ajuda ao humano

- Se uma mudança afeta `exports` no `package.json` ou o contrato de tipos em `types/`, solicite revisão de mantenedor sênior.
- Para mudanças de design tokens no tema, peça revisão de designer/UX.

Se algo estiver ambíguo, peça contexto (feature branch, objetivo do PR, e se é breaking change na API pública) antes de qualquer refatoração ampla.
