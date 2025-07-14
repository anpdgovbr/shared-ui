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

Siga estas etapas para garantir que seu componente seja criado corretamente.

### 1. Crie a Estrutura de Arquivos

- Em `src/components`, crie uma nova pasta para o seu componente em `PascalCase` (ex: `GovBRCard`).
- Dentro dessa pasta, crie os quatro arquivos descritos na arquitetura acima.

### 2. Defina os Tipos (`types.ts`)

- Defina a interface de props para o seu componente.
- Herde de `SharedUIComponentProps` para incluir a prop `strictGovBr`.
- Se o seu componente for um wrapper de um componente MUI, estenda as props do MUI para herdar suas funcionalidades (ex: `ButtonProps` do `@mui/material/Button`).

**Exemplo (`types.ts`):**

```ts
import type { SharedUIComponentProps } from '@/types/SharedUIComponentProps'
import type { ButtonProps } from '@mui/material/Button'

export interface GovBRButtonProps extends ButtonProps, SharedUIComponentProps {
  // Adicione props customizadas aqui
  label: string
}
```

### 3. Implemente o Componente (`GovBRCard.tsx`)

- Utilize componentes do MUI como base sempre que possível.
- Use a prop `strictGovBr` para aplicar as classes do Design System do Governo (`@govbr-ds/core`).
- Utilize a biblioteca `classnames` para gerenciar classes dinamicamente.

**Exemplo (`GovBRButton.tsx`):**

```tsx
import React from 'react'
import MuiButton from '@mui/material/Button'
import classnames from 'classnames'
import type { GovBRButtonProps } from './types'

export const GovBRButton: React.FC<GovBRButtonProps> = ({
  label,
  strictGovBr = false,
  className,
  ...props
}) => {
  const buttonClasses = classnames(className, {
    'br-button': strictGovBr,
    // Adicione outras classes condicionais aqui
  })

  return (
    <MuiButton className={buttonClasses} {...props}>
      {label}
    </MuiButton>
  )
}
```

### 4. Exporte o Componente (`index.ts` e `src/index.ts`)

- **No `index.ts` do componente:** Exporte o componente e seus tipos para facilitar a importação.

```ts
// src/components/GovBRButton/index.ts
export * from './GovBRButton'
export * from './types'
```

- **No `src/index.ts` principal:** Adicione uma linha para exportar tudo do seu novo componente.

```ts
// src/index.ts
export * from './components/GovBRButton'
// ... outros exports
```

### 5. Crie as Histórias no Storybook (`.stories.tsx`)

- Crie histórias para documentar e visualizar os diferentes estados e variações do seu componente.

**Exemplo (`GovBRButton.stories.tsx`):**

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRButton } from './GovBRButton'

const meta: Meta<typeof GovBRButton> = {
  title: 'Components/GovBRButton',
  component: GovBRButton,
  tags: ['autodocs'],
  argTypes: {
    // Configure os controles do Storybook aqui
    variant: {
      control: { type: 'select' },
      options: ['text', 'outlined', 'contained'],
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Botão Padrão',
    variant: 'contained',
    color: 'primary',
  },
}

export const StrictGovBr: Story = {
  args: {
    label: 'Botão Estilo GovBR',
    variant: 'contained',
    strictGovBr: true,
  },
}
```

---

## ✅ Checklist Final (Antes do Commit e PR)

1.  **Visualize no Storybook:**

    ```bash
    npm run storybook
    ```

    - Verifique se o componente renderiza corretamente em todas as sua variações.

2.  **Execute o Linter:**

    ```bash
    npm run lint -- --fix
    ```

    - Garanta que não há erros de lint e que o código segue os padrões do projeto.

3.  **Execute os Testes:**

    ```bash
    npm run test
    ```

    - Adicione testes unitários para o seu componente e garanta que todos os testes estão passando.

4.  **Crie o Pull Request (PR):**
    - Após commitar suas alterações, abra um Pull Request para o repositório principal.
    - Descreva as alterações feitas e aguarde a revisão do time.

---

✅ **Pronto!** Seguindo esses passos, seu componente estará pronto para ser integrado à biblioteca.
