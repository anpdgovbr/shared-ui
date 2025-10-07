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
├── index.stories.tsx      # Stories mostrando ambos os modos
└── hooks.ts               # Hooks específicos (opcional)
```

### Padrão de Implementação

```tsx
'use client'

import React from 'react'
import MuiButton from '@mui/material/Button' // ✅ Import específico (tree-shaking)
import classnames from 'classnames'
import type { ComponentProps } from './types'

export const GovBRComponente: React.FC<Readonly<ComponentProps>> = ({
  strictgovbr,
  className,
  ...props
}) => {
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

// ✅ SEMPRE exportar tipos
export type { ComponentProps } from './types'
```

### Template de Tipos (types.ts)

```typescript
import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { ButtonProps } from '@mui/material/Button'

export interface ComponentNameProps extends ButtonProps, SharedUIComponentProps {
  // Props específicas do componente
  customProp?: string
  govbrSize?: 'small' | 'medium' | 'large'
}
```

### Template de Stories (index.stories.tsx)

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { ComponentName } from './index'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'], // ✅ SEMPRE incluir
  decorators: [
    (Story) => (
      <GovBRThemeProvider>
        <div style={{ padding: '2rem' }}>
          <Story />
        </div>
      </GovBRThemeProvider>
    ),
  ],
  argTypes: {
    strictgovbr: {
      control: 'boolean',
      description: 'Ativa modo estrito com renderização HTML puro e classes CSS oficiais do GovBR-DS',
      table: {
        category: 'Configuração',
        defaultValue: { summary: 'false' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: {
    strictgovbr: false,
  },
}

export const StrictMode: Story = {
  args: {
    strictgovbr: true,
  },
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

### Regras Críticas (OBRIGATÓRIAS)

- **Modo duplo obrigatório**: Todo componente GovBR deve implementar `strictgovbr` conforme definido na arquitetura
- **SharedUIComponentProps**: Todos os componentes devem estender para ter `strictgovbr` automático
- **Diretiva "use client"**: Obrigatória em `src/components/ui/**/*.tsx`
- **Tree-shaking obrigatório**: Imports MUI específicos (`import Button from '@mui/material/Button'`) nunca desestruturados
- **Stories obrigatórias**: Todo componente deve incluir `tags: ['autodocs']` e ambos os modos
- **Readonly Props**: Use `React.FC<Readonly<Props>>` para definir componentes

### Padrões de Nomenclatura

- **Componentes**: `PascalCase` (GovBRButton)
- **Diretórios**: `kebab-case` (govbr-button/)
- **Props**: `camelCase`
- **Classes CSS**: `kebab-case` com prefixo `br-` quando `strictgovbr`

### Path Aliases Obrigatórios

```typescript
// ✅ USAR path aliases
import { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { IconMap } from '@helpers/IconMap'

// ❌ NUNCA usar paths relativos longos
import { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'
```

### Tree-Shaking MUI (CRÍTICO)

```typescript
// ✅ SEMPRE imports específicos
import MuiButton from '@mui/material/Button'
import MuiTextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'

// ❌ NUNCA imports genéricos (quebra tree-shaking)
import { Button, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'
```

### Exports Padrão

```typescript
// No final do index.tsx do componente
export type { ComponentNameProps } from './types'

// No src/index.ts principal
export { ComponentName } from './components/ui/component-name'
export type { ComponentNameProps } from './components/ui/component-name'
```

### Outras Convenções

- **Componentes "burros"**: No modo padrão, apenas repassam props para MUI
- **Tema centralizado**: Estilização MUI controlada exclusivamente pelo `govbrTheme.ts`
- **Tokens CSS**: Use `var(--token-name)` para integração com Gov.br DS

## 5. Descobrindo Tokens CSS Gov.br DS

1. **DevTools (método preferido)**: Inspecione componente oficial Gov.br DS
2. **Arquivo fonte**: `node_modules/@govbr-ds/core/dist/core-tokens.min.css`
3. **Mapeamento**: Tokens → slots MUI no `govbrTheme.ts`

## 6. Workflows e comandos essenciais

### Desenvolvimento Local

- **Instalação**: `pnpm install` (devs) — CI deve usar `pnpm install --frozen-lockfile` para instalação reproduzível
- **Storybook**: `pnpm run dev` ou `pnpm run storybook` (porta 6006) — ambiente principal de desenvolvimento
- **Setup inicial**: `pnpm run prepare` (husky hooks)
- **Testes**: `pnpm run test` (Vitest + @testing-library/react)
- **Build**: `pnpm run build` (types + vite build)
- **Qualidade**: `pnpm run check` (lint + type-check)
- **Lint**: `pnpm run lint -- --fix` (corrigir erros automaticamente)

### Git Hooks Automáticos

- **Pre-commit**: executa `scripts/check-lock-commit.js` e `npx lint-staged`
- **Pre-push**: roda `pnpm run check && pnpm test && pnpm run build`

### Publicação Beta

- `pnpm run version:beta` → `pnpm run publish:beta` ou `pnpm run release:beta` (combina ambos)
- Versioning: `version:beta-patch`, `version:beta-minor`, `version:beta-major`

### Comandos de Manutenção

- `pnpm run clean` - Limpa arquivos temporários
- `pnpm run reset` - Reset completo do projeto

## 7. Regras de dependências e lockfile

- PeerDependencies: React 19, MUI v7, Emotion, GovBR core; o consumidor deve fornecer essas dependências. Ver `package.json` → `peerDependencies`.
- Política de lockfile: mantenha `pnpm-lock.yaml` versionado para CI; há um hook (`scripts/check-lock-commit.js`) que bloqueia commits onde `package.json` muda nas dependências sem `pnpm-lock.yaml` staged.

## 8. Padrões de qualidade do repositório

- Antes de PR: `pnpm run check` (lint + type-check), `pnpm run test`, `pnpm run build`.
- Lint: regras específicas em `eslint.config.mjs`. Atenção à regra customizada `use-client/required` para componentes UI.
- **Tree-shaking obrigatório**: Imports MUI devem ser específicos (`import Button from '@mui/material/Button'`) nunca desestruturados.
- **Stories obrigatórias**: Todo componente deve ter `index.stories.tsx` mostrando ambos os modos (`strictgovbr: true/false`).

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
- Para atualizar dependências: rode localmente `pnpm install`, valide `pnpm run check` e `pnpm run build`, commit `package.json` + `pnpm-lock.yaml` juntos.
- **Storybook local**: `pnpm run dev` para ver componentes interativamente durante desenvolvimento.
- **Testar componente**: Sempre teste ambos os modos nos stories: `args: { strictgovbr: false }` e `args: { strictgovbr: true }`.

## 12. Quando pedir ajuda ao humano

- Se uma mudança afeta `exports` no `package.json` ou o contrato de tipos em `types/`, solicite revisão de mantenedor sênior.
- Para mudanças de design tokens no tema, peça revisão de designer/UX.

Se algo estiver ambíguo, peça contexto (feature branch, objetivo do PR, e se é breaking change na API pública) antes de qualquer refatoração ampla.

## 📋 Referências e Documentação

### Arquivos de Referência

- **[ARQUITETURA.md](../ARQUITETURA.md)** - Guia completo da arquitetura híbrida
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Como contribuir com o projeto
- **[docs/ADICIONAR_COMPONENTE.md](../docs/ADICIONAR_COMPONENTE.md)** - Tutorial para novos componentes
- **[docs/GUIA_MIGRACAO.md](../docs/GUIA_MIGRACAO.md)** - Guia de migração entre versões
- **[docs/COMO_USAR_TEMA.md](../docs/COMO_USAR_TEMA.md)** - Documentação do sistema de temas

### Stack Tecnológico

- **React 19+** com TypeScript
- **MUI v7** (Material-UI)
- **GovBR Design System** integration
- **Storybook** para documentação
- **Vite** como build tool
- **Vitest** para testes
- **ESLint** com regras customizadas

---

**Desenvolvido por:** Divisão de Desenvolvimento e Sustentação de Sistemas - ANPD
