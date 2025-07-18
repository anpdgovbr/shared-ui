# 📝 Guia para Adicionar Novos Componentes

Este guia detalha o processo para criar e adicionar novos componentes React à biblioteca `shared-ui`, garantindo consistência, qualidade e alinhamento com as tecnologias do projeto (MUI, govbr-ds, TypeScript).

---

## 🏛️ Arquitetura de um Componente

Cada componente deve seguir uma estrutura de arquivos padronizada para manter a organização e a escalabilidade do projeto.

**Exemplo para um componente `GovBRCard`:**

```
src/components/
└── GovBRCard/
    ├── GovBRCard.stories.tsx  # Histórias do Storybook
    ├── GovBRCard.tsx          # Lógica e JSX do componente
    ├── index.ts               # Ponto de entrada do componente (exports)
    └── types.ts               # Interfaces e tipos do componente
```

---

## 🚀 Passo a Passo para Criação

### 1. Crie um Branch para sua Tarefa

Antes de começar a codar, **crie uma branch a partir da `main`**:

```bash
git checkout main         # Garante que está na main
git pull origin main      # Atualiza com a versão mais recente da main
git checkout -b feat/NOME-DO-COMPONENTE
```

> Use um nome descritivo para sua branch (ex: `feat/GovBRCard`, `feat/GovBRInputMask`).

### 2. Crie a Estrutura de Arquivos

- Em `src/components`, crie uma nova pasta para o seu componente em `PascalCase` (ex: `GovBRCard`).
- Dentro dessa pasta, crie os quatro arquivos descritos na arquitetura acima.

### 3. Defina os Tipos (`types.ts`)

- Crie uma interface `NomeDoComponenteProps`.
- Herde de `SharedUIComponentProps` para incluir a prop `strictGovBr`.
- Se o componente for baseado em MUI, estenda suas props (`ButtonProps`, `TextFieldProps` etc).

```ts
import type { SharedUIComponentProps } from '@/types/SharedUIComponentProps'
import type { ButtonProps } from '@mui/material/Button'

export interface GovBRButtonProps extends ButtonProps, SharedUIComponentProps {
  label: string
}
```

### 4. Implemente o Componente (`GovBRCard.tsx`)

- Use `React.FC<Readonly<...>>` para definição do componente.
- Use `classnames` para aplicar classes conditionais.
- Respeite os estilos e estruturas do `@govbr-ds/core` quando `strictGovBr` for `true`.

```tsx
import React from 'react'
import MuiButton from '@mui/material/Button'
import classnames from 'classnames'
import type { GovBRButtonProps } from './types'

export const GovBRButton: React.FC<Readonly<GovBRButtonProps>> = ({
  label,
  strictGovBr = false,
  className,
  ...props
}) => {
  const buttonClasses = classnames(className, {
    'br-button': strictGovBr,
  })

  return (
    <MuiButton className={buttonClasses} {...props}>
      {label}
    </MuiButton>
  )
}
```

### 5. Exporte o Componente

#### No `index.ts` da pasta do componente

```ts
export * from './GovBRButton'
export * from './types'
```

#### No `src/index.ts` (raiz do projeto)

```ts
export * from './components/GovBRButton'
export type { GovBRButtonProps } from './components/GovBRButton/types'
```

### 6. Crie as Histórias no Storybook (`.stories.tsx`)

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRButton } from './GovBRButton'

const meta: Meta<typeof GovBRButton> = {
  title: 'Components/GovBRButton',
  component: GovBRButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRButton>

export const Default: Story = {
  args: {
    label: 'Botão Padrão',
    variant: 'contained',
    color: 'primary',
  },
}
```

---

## ✅ Checklist Final (Antes do Commit e PR)

1. **Atualize a branch com a main:**

```bash
git pull origin main --rebase
```

2. **Visualize no Storybook:**

```bash
npm run storybook
```

3. **Execute o Linter:**

```bash
npm run lint -- --fix
```

4. **Execute os Testes:**

```bash
npm run test
```

5. **Confirme que os tipos `.d.ts` foram gerados corretamente** em `types/src` ou `types`

6. **Adicione, commit e envie as alterações:**

```bash
git add .
git commit -m "feat: adiciona GovBRCard"
git push origin feat/NOME-DO-COMPONENTE
```

7. **Abra o PR:**
   - Faça push para a branch.
   - Crie o PR com título e descrição claros.
   - Solicite revisão se necessário.

---

✅ **Pronto!** Seu componente está padronizado, documentado e pronto para ser utilizado.
