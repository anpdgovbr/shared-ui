# 🔄 Guia de Migração - Arquitetura Híbrida

> 📚 **Documentos Relacionados:**
>
> - [🏛️ ARQUITETURA.md](../ARQUITETURA.md) - **LEIA PRIMEIRO** - Fundamentos da arquitetura híbrida
> - [📝 Adicionar Componente](./ADICIONAR_COMPONENTE.md) - Guia para criar novos componentes
> - [📖 README Principal](../README.md) - Visão geral do projeto
> - [🚨 Contribuindo](../CONTRIBUTING.md) - Processo de contribuição
> - [📊 CHANGELOG](../CHANGELOG.md) - Histórico de mudanças

---

## 📋 Sobre a Biblioteca shared-ui

A `shared-ui` é uma **biblioteca de componentes compartilháveis da ANPD** construída com:

- **React + TypeScript** como base
- **Material-UI (MUI)** como framework de componentes
- **Gov.br Design System** como padrão visual
- **Arquitetura híbrida** para flexibilidade de uso

### 🏛️ Arquitetura Híbrida Implementada

Para atender aos requisitos da biblioteca, foi definida uma **arquitetura de modo duplo**:

**Modo Padrão** (`strictgovbr={false}` - padrão):

- Renderiza componente MUI estilizado pelo `govbrTheme.ts`
- Componente é "burro" - só repassa props
- Uso principal da biblioteca

**Modo Estrito** (`strictgovbr={true}`):

- Renderiza elemento HTML puro com classes Gov.br DS
- Para casos que necessitam 100% de fidelidade visual
- Complementa o modo padrão

### ✨ Novos Padrões Implementados

1. **📁 Estrutura kebab-case**: `src/components/ui/component-name/`
2. **🌳 Tree shaking otimizado**: Exports nomeados e imports específicos do MUI
3. **🧩 Separação de responsabilidades**: Arquivos dedicados (`index.tsx`, `types.ts`, `index.stories.tsx`)
4. **🎯 Path aliases configurados**: `@components`, `@theme`, `@helpers`, `@govbr-types`
5. **⚡ SharedUIComponentProps universal**: Todos os componentes GovBR herdam automaticamente
6. **🔧 Hooks isolados**: Lógica reutilizável em arquivos específicos quando necessário
7. **📱 Client-side dedicado**: Arquivos `.client.tsx` quando necessário

## 🚀 Componentes Atualizados (Seguindo Arquitetura Híbrida)

### AutoSyncButton

```tsx
// ✅ NOVO (Arquitetura híbrida implementada)
import { AutoSyncButton } from '@anpdgovbr/shared-ui'

// Modo Padrão: MUI estilizado pelo govbrTheme
;<AutoSyncButton onSync={handleSync} size="medium" tooltipEnabled />

// Modo Estrito: HTML puro (não aplicável - componente customizado ANPD)
// AutoSyncButton não tem modo estrito (componente específico da ANPD)
```

### GovBRButton

```tsx
// ✅ NOVO (Modo duplo implementado)
import { GovBRButton } from '@anpdgovbr/shared-ui'

// Modo Padrão: Componente MUI estilizado
<GovBRButton variant="contained" color="primary" size="large">
  Clique aqui
</GovBRButton>

// Modo Estrito: HTML puro com classes Gov.br DS
<GovBRButton strictgovbr inverted>
  Gov.br DS Puro
</GovBRButton>
```

### GovBRAvatar

```tsx
// ✅ NOVO (Arquitetura híbrida implementada)
import { GovBRAvatar } from '@anpdgovbr/shared-ui'

// Modo Padrão: MUI customizado
;<GovBRAvatar name="João Silva" menuItems={menuItems} onNavigate={handleNavigate} size="medium" />

// Modo Estrito: Não aplicável (componente específico da ANPD)
```

## 🔄 Componentes em Transição (Funcionam, mas serão atualizados)

```tsx
// ⚠️ FUNCIONANDO (Será migrado em breve)
import {
  GovBRInput,
  GovBRRadio,
  GovBRSignIn,
  GovBRFormInput,
  GovBRFormCheckbox,
} from '@anpdgovbr/shared-ui'

// Estes componentes continuam funcionando normalmente
// Não é necessário alterar código existente
```

## 📈 Benefícios da Arquitetura Híbrida

### � Resolução de Conflitos de Estilo

````tsx
## 📈 Benefícios da Arquitetura Híbrida

### 🎯 Para a Biblioteca de Componentes ANPD

```tsx
// Flexibilidade de uso conforme necessidade do projeto
<GovBRButton variant="contained" color="primary"> // ✅ Uso padrão - MUI + tema
  Modo Principal
</GovBRButton>

<GovBRButton strictgovbr inverted> // ✅ Quando precisar de fidelidade total
  Modo Específico
</GovBRButton>
````

### 🏗️ Arquitetura Limpa e Manutenível

- **Componentes "burros"**: No modo padrão, só repassam props para MUI
- **Tema centralizado**: Toda estilização MUI controlada pelo `govbrTheme.ts`
- **Flexibilidade técnica**: Escolha entre robustez MUI ou fidelidade Gov.br DS
- **Reutilização**: Componentes servem múltiplos projetos da ANPD

### 🌳 Tree Shaking Mantido

```tsx
// Otimização de bundle preservada
import { GovBRButton } from '@anpdgovbr/shared-ui' // Só importa o necessário
```

````

### 🏗️ Arquitetura Limpa e Manutenível

- **Componentes "burros"**: No modo padrão, só repassam props para MUI
- **Tema centralizado**: Toda estilização MUI controlada pelo `govbrTheme.ts`
- **Flexibilidade**: Escolha entre MUI (robustez) ou Gov.br DS puro (fidelidade)

### 🌳 Tree Shaking Melhorado

```tsx
// Tree shaking otimizado mantido
import { GovBRButton } from '@anpdgovbr/shared-ui' // Só importa o necessário
````

## 🛡️ Garantia de Compatibilidade

### ✅ Código Existente Continua Funcionando

```tsx
// Este código continuará funcionando perfeitamente
import { GovBRButton, GovBRAvatar } from '@anpdgovbr/shared-ui'

function MyComponent() {
  return (
    <div>
      {/* Modo padrão é mantido automaticamente */}
      <GovBRButton variant="contained" color="primary">
        Funciona como antes
      </GovBRButton>

      {/* Nova funcionalidade opcional */}
      <GovBRButton strictgovbr inverted>
        100% Gov.br DS quando necessário
      </GovBRButton>
    </div>
  )
}
```

### 🔄 Migração Gradual

- **Não é obrigatório** migrar código existente imediatamente
- **Modo padrão funciona** exatamente como antes da arquitetura híbrida
- **Modo estrito é opcional** - use apenas quando precisar de 100% fidelidade Gov.br DS
- **Compatibilidade garantida** durante período de transição

## 📊 Performance e Bundle Size

### Antes da Reestruturação

```bash
# Bundle incluía código não utilizado
Import completo: ~245KB
Tree shaking: Parcial
```

### Depois da Reestruturação

```bash
# Bundle otimizado com tree shaking eficaz
Import específico: ~45KB (exemplo)
Tree shaking: Completo
Redução: ~80% para imports específicos
```

## 🎨 Novos Recursos Disponíveis

### 1. Melhor Experiência de Desenvolvimento

- **IntelliSense** aprimorado
- **Auto-complete** mais preciso
- **Documentação** integrada no código

### 2. Storybook Atualizado

- Stories organizadas por nova estrutura
- Documentação automática melhorada
- Exemplos mais claros

### 3. TypeScript Otimizado

- Tipos mais granulares
- Melhor inferência de tipos
- Detecção de erros aprimorada

## 🚧 Roadmap de Migração

### Fase Atual (✅ Completa)

- [x] AutoSyncButton
- [x] GovBRAvatar
- [x] GovBRButton
- [x] GovBRBreadcrumb
- [x] GovBRCheckbox

### Próxima Fase (📋 Planejada)

- [ ] GovBRInput
- [ ] GovBRRadio
- [ ] GovBRFormInput (client-side)
- [ ] GovBRFormCheckbox
- [ ] GovBRSignIn

### Fase Final (🎯 Objetivo)

- [ ] Remoção de estruturas antigas
- [ ] Documentação completa atualizada
- [ ] Guias de migration finalizados

## ❓ Dúvidas Frequentes

### P: Preciso alterar meu código imediatamente?

**R:** Não. O código existente continua funcionando perfeitamente.

### P: Como sei se um componente foi migrado?

**R:** Consulte o arquivo `MIGRACAO_STATUS.md` para status atualizado.

### P: Os componentes migrados têm a mesma API?

**R:** Sim. Todas as props e comportamentos foram mantidos.

### P: Como reportar problemas?

**R:** Abra uma issue no GitHub ou consulte nossa documentação de contribuição.

---

## 🔗 Links Relacionados

- 📝 **[Guia de Componentes](./ADICIONAR_COMPONENTE.md)** - Para criar novos componentes seguindo os padrões atuais
- 📖 **[README Principal](../README.md)** - Visão geral do projeto e instalação
- 🚨 **[Como Contribuir](../CONTRIBUTING.md)** - Processo detalhado de contribuição
- 📊 **[CHANGELOG](../CHANGELOG.md)** - Histórico de todas as mudanças implementadas
- 🤖 **[Instruções GitHub Copilot](../.github/copilot/instructions.md)** - Padrões para desenvolvimento assistido por IA

---

## 📞 Suporte

Para dúvidas específicas sobre migração ou desenvolvimento:

- **Issues GitHub**: [github.com/anpdgovbr/shared-ui/issues](https://github.com/anpdgovbr/shared-ui/issues)
- **Documentação Storybook**: [http://localhost:6006](http://localhost:6006)
- **Equipe de Desenvolvimento**: Divisão de Desenvolvimento e Sustentação de Sistemas - ANPD

---

✅ **Migração concluída com sucesso!** Os novos padrões garantem melhor performance, manutenibilidade e experiência de desenvolvimento.

**R:** Abra uma issue no repositório com detalhes do problema encontrado.

## 📞 Suporte

Para dúvidas sobre a migração:

- 📧 Equipe de desenvolvimento da ANPD
- 📖 Consulte a documentação atualizada no Storybook
- 🐛 Issues no repositório para bugs ou sugestões
