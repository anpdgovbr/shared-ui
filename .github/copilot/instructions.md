# 🤖 GitHub Copilot Instructions - shared-ui

Este arquivo define instruções personalizadas para o GitHub Copilot trabalhar efetivamente no projeto `shared-ui` da ANPD.

## 📋 Contexto do Projeto

### Tecnologias Principais

- **React 19+** com TypeScript
- **MUI v7** (Material-UI)
- **GovBR Design System** integration
- **Storybook** para documentação
- **Vite** como build tool
- **Vitest** para testes
- **ESLint** com regras customizadas

### Arquitetura de Componentes

- Estrutura **kebab-case**: `src/components/ui/nome-componente/`
- Pattern inspirado no **shadcn/ui**
- **Tree shaking** otimizado
- **Path aliases** configurados

## 🎯 Instruções Específicas

### 1. Criação de Componentes

Quando criar novos componentes:

```typescript
// ✅ SEMPRE seguir este padrão
import React from 'react'
import MuiButton from '@mui/material/Button' // Import específico
import classnames from 'classnames'
import type { ComponentProps } from './types'

export const ComponentName: React.FC<Readonly<ComponentProps>> = ({
  prop1,
  strictGovBr = false,
  className,
  ...props
}) => {
  const componentClasses = classnames(className, {
    'br-component': strictGovBr,
  })

  return <MuiButton className={componentClasses} {...props} />
}

export type { ComponentProps } from './types'
```

### 2. Definição de Tipos

```typescript
// types.ts - SEMPRE incluir SharedUIComponentProps
import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { ButtonProps } from '@mui/material/Button'

export interface ComponentNameProps extends ButtonProps, SharedUIComponentProps {
  // Props específicas aqui
  customProp?: string
  govbrSize?: 'small' | 'medium' | 'large'
}
```

### 3. Stories do Storybook

```typescript
// index.stories.tsx - Template padrão
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from './index'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'], // SEMPRE incluir
  argTypes: {
    strictGovBr: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>
```

### 4. Path Aliases (OBRIGATÓRIO)

```typescript
// ✅ USAR path aliases
import { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { IconMap } from '@helpers/IconMap'

// ❌ NÃO usar paths relativos longos
import { SharedUIComponentProps } from '../../../types/SharedUIComponentProps'
```

### 5. MUI Tree Shaking (CRÍTICO)

```typescript
// ✅ SEMPRE imports específicos
import MuiButton from '@mui/material/Button'
import MuiTextField from '@mui/material/TextField'
import AddIcon from '@mui/icons-material/Add'

// ❌ NUNCA imports genéricos
import { Button, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'
```

### 6. Estrutura de Diretórios

Para cada novo componente, criar:

```
src/components/ui/nome-componente/
├── index.tsx              # Componente principal + exports
├── types.ts               # Interfaces e tipos
├── index.stories.tsx      # Stories do Storybook
└── hooks.ts               # Hooks específicos (opcional)
```

## 🚨 Regras Críticas

1. **SEMPRE** usar `SharedUIComponentProps` em todos os componentes GovBR
2. **SEMPRE** usar imports específicos do MUI (tree shaking)
3. **SEMPRE** usar path aliases ao invés de paths relativos
4. **SEMPRE** incluir `tags: ['autodocs']` nas stories
5. **SEMPRE** usar `React.FC<Readonly<Props>>` para definir componentes
6. **SEMPRE** incluir prop `strictGovBr?: boolean` através de SharedUIComponentProps

## 🎨 Padrões de Código

### Nomenclatura

- Componentes: `PascalCase` (GovBRButton)
- Arquivos: `kebab-case` (govbr-button/)
- Props: `camelCase`
- Classes CSS: `kebab-case` com prefixo `br-` quando strictGovBr

### Exports

```typescript
// No final do index.tsx do componente
export type { ComponentNameProps } from './types'

// No src/index.ts principal
export { ComponentName } from './components/ui/component-name'
export type { ComponentNameProps } from './components/ui/component-name'
```

## 📝 Comandos Úteis

- `npm run storybook` - Visualizar componentes
- `npm run lint -- --fix` - Corrigir lint errors
- `npm run build` - Build completo
- `npm run check` - Lint + types + tests

## 🔗 Documentação de Referência

- [Guia de Componentes](../docs/ADICIONAR_COMPONENTE.md)
- [Guia de Migração](../docs/GUIA_MIGRACAO.md)
- [Como Contribuir](../CONTRIBUTING.md)

---

**Desenvolvido por:** Divisão de Desenvolvimento e Sustentação de Sistemas - ANPD
