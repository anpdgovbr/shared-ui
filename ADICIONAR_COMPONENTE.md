# Checklist para criação de novos componentes no projeto `@anpdgovbr/shared-ui`

Este documento serve como guia passo a passo para os estagiários adicionarem **novos componentes** à biblioteca `@anpdgovbr/shared-ui`.

---

## 🚀 Passo a passo detalhado

### 1. Criar a pasta do componente

- Navegue até `src/components`.
- Crie uma nova pasta com o nome do componente em PascalCase. Exemplo para um componente `MyButton`:

```
src/components/MyButton
```

---

### 2. Criar o arquivo do componente

- Dentro da pasta criada, crie o arquivo do componente, ex: `MyButton.tsx`.
- Sempre use **componente funcional** com `React.FC` e tipagem explícita.

---

### 3. Extender o tipo base do projeto

- Todos os componentes devem receber `strictGovBr` herdando o tipo:

```ts
import type { SharedUIComponentProps } from '@/types/SharedUIComponentProps'

export interface MyButtonProps extends SharedUIComponentProps {
  label: string
}
```

---

### 4. Implementar o componente

- Sempre mantenha o `strictGovBr` controlando classes/styles padrão do govbr-ds.

```tsx
export const MyButton: React.FC<MyButtonProps> = ({ label, strictGovBr = false }) => {
  return <button className={strictGovBr ? 'br-button' : 'br-button custom'}>{label}</button>
}
```

---

### 5. Exportar o componente

- No `src/index.ts`, exporte o novo componente:

```ts
export * from './components/MyButton/MyButton'
```

---

### 6. Criar a história no Storybook

- Crie o arquivo `MyButton.stories.tsx` dentro de `src/components/MyButton` ou em `stories/`:

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { MyButton } from '@/components/MyButton/MyButton'

const meta: Meta<typeof MyButton> = {
  title: 'Components/MyButton',
  component: MyButton,
}
export default meta

export const Default: StoryObj<typeof MyButton> = {
  args: { label: 'Clique aqui', strictGovBr: false },
}

export const StrictGovBr: StoryObj<typeof MyButton> = {
  args: { label: 'Clique aqui', strictGovBr: true },
}
```

---

### 7. Rodar o Storybook local

```bash
npm run storybook
```

Verifique se o novo componente aparece corretamente.

---

### 8. Rodar o lint

Antes de subir qualquer alteração, rode:

```bash
npm run lint
```

Corrija todos os erros apontados.

---

### 9. Rodar os testes (caso já existam)

```bash
npm run test
```

---

✅ **Parabéns! Seu novo componente está pronto para ser revisado e integrado.**
