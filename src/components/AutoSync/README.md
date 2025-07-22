# AutoSyncButton - Componente GovBR-DS

## Visão Geral

O `AutoSyncButton` é um componente reutilizável que foi adaptado para seguir as diretrizes visuais do GovBR Design System. Ele fornece funcionalidade de sincronização automática com feedback visual consistente.

## Melhorias Aplicadas ao GovBR-DS

### 🎨 **Sistema de Cores**

- ✅ **Success**: Usa `theme.palette.success.main` (#168821 - green-cool-vivid-50)
- ✅ **Error**: Usa `theme.palette.error.main` (#D04F4F - red-vivid-50)
- ✅ **Critical Error**: Usa `theme.palette.grey[600]` (#adadad - gray-30)
- ✅ **Default**: Usa `theme.palette.primary.main` (#1351B4 - blue-warm-vivid-70)

### 🔍 **Acessibilidade**

- ✅ **Foco GovBR**: Outline dashed dourado (`#F29F05`) com offset de 4px
- ✅ **Tooltips Contextuais**: Textos explicativos para cada estado
- ✅ **ARIA Labels**: `aria-label="Auto Sync"` para leitores de tela

### 🎭 **Interações Visuais**

- ✅ **Hover Effect**: Gradient com RGB da cor primária e 16% de opacidade
- ✅ **Transições Suaves**: Usa `theme.transitions` para mudanças de cor
- ✅ **Animação de Loading**: Rotação suave com easing do GovBR

### 📏 **Espaçamento e Tamanhos**

- ✅ **Spacing System**: Usa `theme.spacing(1)` em vez de valores fixos
- ✅ **Herança do MUI**: Utiliza o sistema de tamanhos padrão do IconButton
- ✅ **Customização no Tema**: Tamanhos definidos no `govbrTheme.ts`:
  - **Small**: 32×32px com ícone 16px
  - **Medium**: 40×40px com ícone 20px (padrão)
  - **Large**: 48×48px com ícone 24px
- ✅ **Consistência**: Todos os IconButtons da aplicação seguem o mesmo padrão

## Props Interface

```typescript
interface AutoSyncButtonProps<T = unknown> {
  onSync: () => Promise<void> // Função de sincronização
  syncInterval?: number // Intervalo em ms (padrão: 30000)
  maxErrorCount?: number // Máximo de erros (padrão: 3)
  syncAnimationDuration?: number // Duração da animação (padrão: 3000)
  successDuration?: number // Duração do estado success (padrão: 3000)
  errorDuration?: number // Duração do estado error (padrão: 3000)
  tooltipEnabled?: boolean // Habilitar tooltips (padrão: true)
  resetTrigger?: T // Trigger para reset do estado
  disabled?: boolean // Desabilitar componente
  size?: 'small' | 'medium' | 'large' // Tamanho do botão (padrão: 'medium')
}
```

## Estados do Componente

| Estado           | Ícone                     | Cor     | Descrição                  |
| ---------------- | ------------------------- | ------- | -------------------------- |
| `idle`           | `SyncIcon`                | Primary | Estado padrão              |
| `loading`        | `SyncIcon` (rotacionando) | Primary | Sincronizando              |
| `success`        | `CheckCircleIcon`         | Success | Sincronização bem-sucedida |
| `error`          | `ErrorOutlineIcon`        | Error   | Erro na sincronização      |
| `critical-error` | `SyncDisabledIcon`        | Grey    | Muitos erros, desabilitado |

## Arquitetura da Solução

### 🎯 **Abordagem Professional**

- **Separation of Concerns**: Estilos base no tema, lógica de negócio no componente
- **Theme-First**: Utiliza `MuiIconButton` customizado no `govbrTheme.ts`
- **Reusabilidade**: Outros IconButtons na aplicação herdam os mesmos estilos
- **Manutenibilidade**: Mudanças de design centralizadas no tema

### 🔧 **Customizações no Tema**

```typescript
// govbrTheme.ts - MuiIconButton
styleOverrides: {
  root: {
    // Foco padrão GovBR-DS para todos os IconButtons
    '&.Mui-focusVisible': { ... },
    '&:hover:not(:disabled)': { ... }
  },
  sizeSmall: { width: '32px', ... },
  sizeMedium: { width: '40px', ... },
  sizeLarge: { width: '48px', ... }
}
```

### ⚡ **Customizações no Componente**

- **Cores Dinâmicas**: Baseadas no estado da sincronização
- **Animação**: Loading state com keyframes CSS
- **Hover Inteligente**: Usa a cor atual do estado, não apenas primary

## Especificações de Tamanho

| Tamanho  | Dimensões | Ícone | Padding | Uso Recomendado              |
| -------- | --------- | ----- | ------- | ---------------------------- |
| `small`  | 32×32px   | 16px  | 4px     | Headers, barras laterais     |
| `medium` | 40×40px   | 20px  | 8px     | Conteúdo principal (padrão)  |
| `large`  | 48×48px   | 24px  | 12px    | Dashboards, áreas principais |

## Exemplo de Uso

```tsx
import { AutoSyncButton } from '@/components/AutoSync'

function MyComponent() {
  const handleSync = async () => {
    // Lógica de sincronização
    await fetch('/api/sync')
  }

  return (
    <AutoSyncButton
      onSync={handleSync}
      syncInterval={30000}
      maxErrorCount={3}
      size="medium"
      tooltipEnabled={true}
    />
  )
}
```

## Storybook

O componente possui um conjunto completo de stories demonstrando todos os estados e funcionalidades:

### 📖 **Stories Disponíveis:**

- **Default**: Configuração padrão com sincronização bem-sucedida
- **SmallSize/LargeSize**: Demonstração dos tamanhos disponíveis
- **Disabled**: Estado desabilitado
- **FastSync**: Sincronização rápida para demonstração
- **ErrorProne**: Simula erros constantes
- **RandomResults**: Resultados aleatórios (sucesso/erro)
- **NoTooltips**: Versão sem tooltips
- **AllSizes**: Comparação visual de todos os tamanhos
- **StateDemo**: Demonstração interativa de todos os estados
- **InHeaderContext**: Exemplo de uso em contexto real

### 🎮 **Como Visualizar:**

```bash
npm run storybook
# ou
yarn storybook
```

Navegue para `GovBR/AutoSyncButton` no Storybook para ver todas as demonstrações interativas.

## Conformidade GovBR-DS

✅ **Cores**: Todas as cores seguem a paleta oficial  
✅ **Tipografia**: Usa sistema tipográfico do tema  
✅ **Espaçamento**: Segue escala de spacing  
✅ **Transições**: Usa durações e easings oficiais  
✅ **Acessibilidade**: Cumpre diretrizes WCAG 2.1  
✅ **Interações**: Padrão de hover e foco consistente  
✅ **Arquitetura**: Theme-first approach para reutilização
✅ **Profissionalismo**: Separação clara de responsabilidades

## Benefícios da Abordagem

### 🎨 **Para Designers**

- Todos os IconButtons da app seguem o mesmo padrão
- Mudanças de design são feitas em um local central
- Consistência visual garantida

### 👨‍💻 **Para Desenvolvedores**

- Componente limpo e focado na lógica de negócio
- Reutilização automática dos estilos do tema
- Fácil manutenção e debug

### 🏢 **Para a Organização**

- Conformidade completa com GovBR-DS
- Redução de código duplicado
- Escalabilidade garantida

## Próximas Melhorias

- [ ] Adicionar variante "compact" para headers
- [ ] Suporte a temas dark/light
- [ ] Integração com sistema de notificações
- [ ] Métricas de sincronização (tempo médio, taxa de sucesso)
