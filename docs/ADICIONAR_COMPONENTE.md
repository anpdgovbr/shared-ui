# 📝 Guia para Adicionar Novos Componentes

Este guia detalha o processo para criar componentes React na **biblioteca de componentes compartilháveis da ANPD**, seguindo a arquitetura híbrida definida no documento ARQUITETURA.md.

> 📚 **Documentos Relacionados:**
>
> - [🏛️ Arquitetura](../ARQUITETURA.md) - **LEIA PRIMEIRO** - Fundamentos da arquitetura híbrida
> - [🔄 Guia de Migração](./GUIA_MIGRACAO.md) - Migrar componentes existentes
> - [📖 README Principal](../README.md) - Visão geral do projeto
> - [🚨 Contribuindo](../CONTRIBUTING.md) - Processo de contribuição

---

## 🎯 Objetivo da Biblioteca

A `shared-ui` é uma **biblioteca de componentes compartilháveis da ANPD** que:

- Centraliza componentes reutilizáveis entre projetos
- Mantém consistência visual com Gov.br Design System
- Utiliza Material-UI como base técnica robusta
- Garante manutenibilidade e padrões de qualidade

## 🏛️ Arquitetura Definida

Para atender aos objetivos da biblioteca, utilizamos uma **arquitetura de modo duplo**:

### 🔄 Modo Padrão (`strictgovbr={false}`)

- Renderiza componente MUI estilizado via `govbrTheme.ts`
- Componente é "burro" - só repassa props para o MUI
- Estilização controlada inteiramente pelo tema
- **Modo principal** para uso geral

### ⚡ Modo Estrito (`strictgovbr={true}`)

- Renderiza elemento HTML puro com classes CSS do Gov.br DS
- Usado quando necessário 100% de fidelidade visual ao Gov.br DS
- Complementa o modo padrão para casos específicos

---

## 🏛️ Arquitetura de um Componente

Cada componente deve seguir uma estrutura de arquivos padronizada baseada no padrão **kebab-case** para manter a organização e a escalabilidade do projeto.

**Exemplo para um componente `GovBRCard`:**

```
src/components/ui/
└── govbr-card/
    ├── index.tsx              # Lógica e JSX do componente + exports
    ├── types.ts               # Interfaces e tipos do componente
    ├── index.stories.tsx      # Histórias do Storybook
    └── hooks.ts               # Hooks específicos (se necessário)
```

> 🔧 **Nota sobre Estrutura:** Seguimos o padrão `kebab-case` para nomes de pastas e arquivos, com estrutura inspirada no shadcn/ui, mas adaptada para o contexto GovBR.

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

- Em `src/components/ui`, crie uma nova pasta para o seu componente em `kebab-case` (ex: `govbr-card`).
- Dentro dessa pasta, crie os arquivos necessários conforme a arquitetura descrita acima.

> 💡 **Dica:** Use o comando para criar a estrutura rapidamente:
>
> ```bash
> mkdir -p "src/components/ui/govbr-card"
> touch "src/components/ui/govbr-card/index.tsx"
> touch "src/components/ui/govbr-card/types.ts"
> touch "src/components/ui/govbr-card/index.stories.tsx"
> ```

### 3. Defina os Tipos (`types.ts`)

- Crie uma interface `NomeDoComponenteProps`.
- Herde de `SharedUIComponentProps` para incluir a prop `strictGovBr`.
- Se o componente for baseado em MUI, estenda suas props (`ButtonProps`, `TextFieldProps` etc).
- Use os **path aliases** configurados para imports limpos.

```ts
import type { SharedUIComponentProps } from '@govbr-types/SharedUIComponentProps'
import type { ButtonProps } from '@mui/material/Button'

export interface GovBRCardProps extends ButtonProps, SharedUIComponentProps {
  title: string
  content?: string
  govbrSize?: 'small' | 'medium' | 'large'
}
```

> 🎯 **Path Aliases Disponíveis:**
>
> - `@components/*` → `src/components/*`
> - `@theme/*` → `src/theme/*`
> - `@helpers/*` → `src/helper/*`
> - `@govbr-types/*` → `src/types/*`

### 4. Implemente o Componente (`index.tsx`)

- Use `React.FC<Readonly<...>>` para definição do componente.
- Use `classnames` para aplicar classes condicionais.
- Respeite os estilos e estruturas do `@govbr-ds/core` quando `strictGovBr` for `true`.
- **Exporte o componente no mesmo arquivo** seguindo o novo padrão.

```tsx
import React from 'react'
import MuiCard from '@mui/material/Card'
import MuiCardContent from '@mui/material/CardContent'
import MuiTypography from '@mui/material/Typography'
import classnames from 'classnames'
import type { GovBRCardProps } from './types'

export const GovBRCard: React.FC<Readonly<GovBRCardProps>> = ({
  title,
  content,
  govbrSize = 'medium',
  strictGovBr = false,
  className,
  children,
  ...props
}) => {
  const cardClasses = classnames(className, {
    'br-card': strictGovBr,
    [`govbr-card--${govbrSize}`]: govbrSize,
  })

  return (
    <MuiCard className={cardClasses} {...props}>
      <MuiCardContent>
        <MuiTypography variant="h5" component="h2">
          {title}
        </MuiTypography>
        {content && (
          <MuiTypography variant="body2" color="text.secondary">
            {content}
          </MuiTypography>
        )}
        {children}
      </MuiCardContent>
    </MuiCard>
  )
}

// Exports nomeados para tree shaking
export type { GovBRCardProps } from './types'
```

> 🌳 **Tree Shaking:** Sempre use imports específicos do MUI (`@mui/material/Button`) ao invés de imports gerais (`@mui/material`) para otimizar o bundle.

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

### 5. Registre no Sistema de Exports

#### No `src/components/ui/index.ts`

```ts
export * from './govbr-card'
```

#### No `src/index.ts` (raiz do projeto)

```ts
// Componentes
export { GovBRCard } from './components/ui/govbr-card'

// Tipos
export type { GovBRCardProps } from './components/ui/govbr-card'
```

> ⚡ **Performance:** O novo sistema de exports permite melhor tree shaking e carregamento otimizado.

### 6. Crie as Histórias no Storybook (`index.stories.tsx`)

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { GovBRCard } from './index'

const meta: Meta<typeof GovBRCard> = {
  title: 'Components/GovBRCard',
  component: GovBRCard,
  tags: ['autodocs'],
  argTypes: {
    govbrSize: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    strictGovBr: {
      control: { type: 'boolean' },
    },
  },
}

export default meta
type Story = StoryObj<typeof GovBRCard>

export const Default: Story = {
  args: {
    title: 'Card Padrão',
    content: 'Este é um exemplo de card com conteúdo.',
    govbrSize: 'medium',
  },
}

export const WithStrictGovBr: Story = {
  args: {
    title: 'Card GovBR',
    content: 'Card seguindo rigorosamente o padrão GovBR-DS.',
    strictGovBr: true,
    govbrSize: 'large',
  },
}
```

> 📊 **Storybook:** Use sempre `tags: ['autodocs']` para gerar documentação automática.

#### Padrão dos Stories dos Componentes para que sejam considerados BOMs:

- Descrições detalhadas em cada argType
- Parameters.docs.description.component com markdown rico
- Características Principais com emojis e detalhes técnicos
- Mock functions/data para demonstrações realistas
- Múltiplas stories cobrindo diferentes casos de uso
- Stories de integração mostrando uso real
- Comentários explicativos no código

---

## ✅ Checklist Final (Antes do Commit e PR)

### 🎯 1. Validação da Arquitetura Híbrida

- [ ] **Modo Padrão funciona**: Componente MUI renderizado corretamente
- [ ] **Modo Estrito funciona**: HTML puro com classes Gov.br DS aplicadas
- [ ] **Prop `strictgovbr`**: Implementada e testada nos dois estados
- [ ] **Componente "burro"**: No modo padrão, apenas repassa props para MUI
- [ ] **Estilização pelo tema**: Verificar se `govbrTheme.ts` controla a aparência no modo padrão

### 🔧 2. Implementação dos Estilos no Tema

- [ ] **govbrTheme.ts atualizado**: Adicionada entrada para o componente MUI correspondente
- [ ] **styleOverrides configurado**: Slots corretos mapeados com tokens Gov.br DS
- [ ] **Variáveis CSS utilizadas**: Usado `var(--token-name)` em vez de valores fixos
- [ ] **DevTools testado**: Inspecionado o componente Gov.br DS oficial para obter os tokens corretos

### 📦 3. Validação Técnica

1. **Atualize a branch com a main:**

```bash
git pull origin main --rebase
```

2. **Execute o build para verificar tipos:**

```bash
pnpm run build
```

3. **Visualize no Storybook:**

```bash
pnpm run storybook
```

4. **Execute o Linter e verifique tree shaking:**

```bash
pnpm run lint -- --fix
```

5. **Execute os Testes:**

```bash
pnpm run test
```

6. **Confirme que os tipos `.d.ts` foram gerados corretamente** em `types/src`

7. **Verifique se o componente aparece corretamente no export principal:**
   - Teste importação: `import { GovBRCard } from '@anpdgovbr/shared-ui'`

8. **Adicione, commit e envie as alterações:**

```bash
git add .
git commit -m "feat: adiciona govbr-card component seguindo arquitetura híbrida"
git push origin feat/govbr-card
```

### 🎨 4. Testes de Integração Visual

- [ ] **Storybook - Modo Padrão**: Story default renderiza componente MUI com tema
- [ ] **Storybook - Modo Estrito**: Story `WithStrictGovBr` renderiza HTML puro
- [ ] **Comparação Visual**: Ambos os modos têm aparência similar mas arquiteturas diferentes
- [ ] **Responsividade**: Componente funciona em diferentes breakpoints

---

## 🔗 Recursos Essenciais

- 📖 **[ARQUITETURA.md](../ARQUITETURA.md)** - Fundamentos da arquitetura híbrida
- 🎨 **[Gov.br DS](https://gov.br/ds)** - Documentação oficial do Design System
- 🧩 **[MUI Customization](https://mui.com/material-ui/customization/theme-components/)** - Como customizar componentes MUI
- 🔧 **[CSS Tokens DevTools](https://gov.br/ds)** - Inspecione componentes para encontrar variáveis CSS
  - Faça push para a branch.
  - Crie o PR com título e descrição claros.
  - Solicite revisão se necessário.

---

## 🔗 Links Relacionados

- 📚 **[README Principal](../README.md)** - Visão geral e instalação
- 🔄 **[Guia de Migração](./GUIA_MIGRACAO.md)** - Migrar componentes antigos
- 🚨 **[Como Contribuir](../CONTRIBUTING.md)** - Processo detalhado de contribuição
- 📖 **[Documentação no Storybook](http://localhost:6006)** - Visualizar componentes

---

✅ **Pronto!** Seu componente está padronizado, documentado e pronto para ser utilizado seguindo as melhores práticas de tree shaking e performance.
