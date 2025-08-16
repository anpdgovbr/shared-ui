# 📦 shared-ui

> Biblioteca de componentes React com MUI v7 e padrão GovBR-DS para a ANPD.

![CI](https://github.com/anpdgovbr/shared-ui/actions/workflows/ci.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node Version](https://img.shields.io/badge/node-20%2B-brightgreen)
![TypeScript](https://img.shields.io/badge/built%20with-TypeScript-blue)
![Storybook](https://img.shields.io/badge/docs-Storybook-orange)

---

## 📚 Documentação

- 📖 **[Storybook - Documentação Interativa](http://localhost:6006)** - Visualizar componentes
- 🎨 **[Como Usar o Tema](./docs/COMO_USAR_TEMA.md)** - Guia completo para usar o tema GovBR
- 📝 **[Adicionar Componente](./docs/ADICIONAR_COMPONENTE.md)** - Guia para criar novos componentes
- 🔄 **[Guia de Migração](./docs/GUIA_MIGRACAO.md)** - Migrar componentes existentes
- 🚨 **[Como Contribuir](./CONTRIBUTING.md)** - Processo de contribuição detalhado
- 📊 **[CHANGELOG](./CHANGELOG.md)** - Histórico de mudanças
- 📋 **[Exemplos de Uso](./examples/)** - Exemplos práticos de implementação

---

## 🚀 Sobre o Projeto

O `shared-ui` é uma biblioteca de componentes de interface de usuário (UI) modular e escalável, construída para padronizar e acelerar o desenvolvimento de aplicações front-end na Autoridade Nacional de Proteção de Dados (ANPD).

### ✨ Principais Características

- **🚀 Baseado em React 19+**: Utiliza os recursos mais recentes do React.
- **🎨 MUI v7**: Construído sobre o Material-UI para garantir consistência visual e acessibilidade.
- **🏛️ Padrão GovBR-DS**: Inspirado nos princípios do Design System do Governo Federal.
- **📘 TypeScript**: Totalmente tipado para um desenvolvimento mais seguro e robusto.
- **🧪 Testado**: Cobertura de testes com Vitest e Playwright.
- **📖 Documentado com Storybook**: Componentes visualizáveis e documentados interativamente.
- **⚙️ CI com GitHub Actions**: Build e lint automáticos em Pull Requests.
- **🔒 Hooks com Husky**: Pre-commit e pre-push com lint, format e type-check automáticos.
- **🌳 Tree Shaking Otimizado**: Imports específicos para bundle reduzido.
- **🎯 Path Aliases**: Imports limpos com aliases configurados.

---

## 🛠️ Tecnologias Utilizadas

- **⚛️ React 19+** - Framework UI
- **🎨 Material-UI (MUI v7)** - Biblioteca de componentes
- **📘 TypeScript** - Tipagem estática
- **📖 Storybook** - Documentação interativa
- **⚡ Vite** - Build tool e dev server
- **🧪 Vitest** - Framework de testes
- **🔍 ESLint** - Análise de código
- **💅 Prettier** - Formatação de código
- **📋 React Hook Form** - Gerenciamento de formulários
- **🔒 Husky + Lint-Staged** - Git hooks

---

## 🏁 Começando

Siga estas instruções para configurar o ambiente de desenvolvimento local.

### Pré-requisitos

- Node.js (versão 20 ou superior)
- npm (versão 10 ou superior)

### Instalação

1. Clone o repositório:
   ```bash
   git clone git@github.com:anpdgovbr/shared-ui.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd shared-ui
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure os hooks:

   ```bash
   npm run prepare
   ```

5. Mantenha sua branch atualizada com a `main`:
   ```bash
   git checkout -b minha-feature main
   git pull origin main
   ```

### Executando o Storybook

```bash
npm run storybook
```

O Storybook estará disponível em `http://localhost:6006`.

---

## 📚 Como Usar

### Instalação via Git

```bash
npm install git+ssh://git@github.com:anpdgovbr/shared-ui.git
```

### Exemplo de Uso

```tsx
import { GovBRButton, GovBRAvatar } from '@anpdgovbr/shared-ui'

function MyComponent() {
  return (
    <div>
      <GovBRButton size="medium" color="primary">
        Clique Aqui
      </GovBRButton>
      <GovBRAvatar
        name="João Silva"
        menuItems={[{ label: 'Perfil', href: '/perfil' }]}
        onNavigate={(href) => (window.location.href = href)}
      />
    </div>
  )
}
```

Para formulários com `react-hook-form`:

```tsx
import { useForm } from 'react-hook-form'
import { GovBRFormInput, GovBRFormCheckbox } from '@anpdgovbr/shared-ui'

function MyForm() {
  const { control } = useForm()
  return (
    <div>
      <GovBRFormInput
        name="meuInput"
        control={control}
        label="Campo de Texto"
        govbrSize="medium"
        error={errors.meuInput ? true : false}
        feedbackMessage={errors.meuInput?.message}
      />
      <GovBRFormCheckbox name="meuCheckbox" control={control} label="Aceito os termos" />
    </div>
  )
}
```

> **Nota:** O projeto consumidor deve declarar `react`, `@mui/material`, `@mui/icons-material` e `react-hook-form` como dependências.

### ⚠️ Peer dependencies (recomendado)

Como esta biblioteca fornece componentes React baseados em MUI e no GovBR-DS, algumas dependências são esperadas no projeto consumidor. Recomendamos que o projeto consumidor instale as seguintes dependências (ranges compatíveis):

- `react@^19.0.0`
- `react-dom@^19.0.0`
- `@mui/material@^7.0.0`
- `@mui/icons-material@^7.0.0`
- `@emotion/react@^11.0.0`
- `@emotion/styled@^11.0.0`
- `react-hook-form@^7.0.0`
- `@govbr-ds/core@^3.0.0`

Exemplo de instalação (projeto consumidor):

```bash
npm install react@^19 react-dom@^19 @mui/material@^7 @mui/icons-material@^7 \
  @emotion/react@^11 @emotion/styled@^11 react-hook-form@^7 @govbr-ds/core@^3
```

Observações:

- `@emotion/*` e `@govbr-ds/core` são recomendadas como peerDependencies para evitar múltiplas instâncias e conflitos de CSS-in-JS no runtime do consumidor.
- Ajuste o range do `@govbr-ds/core` se o seu projeto exigir uma versão mínima específica (por exemplo `^3.6.2`).

---

## 🏗️ Estrutura de Componentes

```text
src/
├── components/
│   └── ui/                        # Componentes padronizados (kebab-case)
│       ├── auto-sync/            # AutoSyncButton
│       ├── govbr-avatar/         # GovBRAvatar
│       ├── govbr-breadcrumb/     # GovBRBreadcrumb
│       ├── govbr-button/         # GovBRButton
│       ├── govbr-checkbox/       # GovBRCheckbox
│       ├── govbr-form-checkbox/  # GovBRFormCheckbox
│       ├── govbr-form-input/     # GovBRFormInput
│       ├── govbr-input/          # GovBRInput
│       ├── govbr-radio/          # GovBRRadio
│       └── govbr-sign-in/        # GovBRSignIn
├── helpers/                      # Utilitários
│   ├── MuiColorToGovBRClass.ts  # Conversão de cores MUI → GovBR
│   └── IconMap.tsx              # Mapeamento de ícones
├── types/                       # Definições de tipos centralizadas
│   ├── GovBRTypes.ts           # Tipos base do GovBR-DS
│   └── SharedUIComponentProps.ts # Props compartilhados
├── theme/                       # Configuração de tema
│   ├── govbrTheme.ts           # Tema MUI customizado
│   └── GovBRThemeProvider.tsx  # Provider do tema
└── index.ts                     # Exports principais
```

### 📁 Estrutura de Componente Padrão

Cada componente segue a estrutura **kebab-case** inspirada no shadcn/ui:

```text
src/components/ui/nome-componente/
├── index.tsx              # Componente + exports
├── types.ts               # Interfaces e tipos
├── index.stories.tsx      # Histórias do Storybook
└── hooks.ts               # Hooks específicos (opcional)
```

### 🎨 Sistema de Tipos Padronizado

A biblioteca utiliza um sistema de tipos centralizados para garantir consistência:

**🎯 Path Aliases Configurados:**

- `@components/*` → `src/components/*`
- `@theme/*` → `src/theme/*`
- `@helpers/*` → `src/helper/*`
- `@govbr-types/*` → `src/types/*`

**📋 Tipos Base:**

- **`GovBRSize`**: `'small' | 'medium' | 'large'` - Tamanhos padronizados
- **`GovBRColor`**: `'default' | 'primary' | 'secondary'` - Cores básicas
- **`GovBRSemanticColor`**: Inclui cores semânticas como `'success' | 'warning' | 'error' | 'info'`
- **`GovBRStatus`**: Estados de feedback visual

**🧩 Tipos Comuns:**

- **`GovBRMenuItem`**: Interface para itens de menu com ícone
- **`GovBRNavigationItem`**: Interface para navegação (breadcrumbs, tabs)
- **`GovBRNavigationCallback`**: Callback padronizado de navegação
- **`GovBRPosition`**: Posicionamento para componentes flutuantes

**⚡ Props Compartilhadas:**

- **`SharedUIComponentProps`**: Props comuns a todos os componentes
- **`GovBRNavigatable`**: Para componentes com navegação
- **`GovBRSelectable`**: Para componentes com seleção

✅ **Todos os componentes implementam `SharedUIComponentProps`** com:

- `strictGovBr?: boolean` - Para compatibilidade estrita com GovBR-DS

---

## 🔧 Scripts Disponíveis

| Script                    | Descrição                                 |
| ------------------------- | ----------------------------------------- |
| `npm run dev`             | Inicia o Storybook para desenvolvimento.  |
| `npm run build`           | Compila a biblioteca (`types` + `dist`).  |
| `npm run storybook`       | Inicia o Storybook em `localhost:6006`.   |
| `npm run build-storybook` | Gera versão estática do Storybook.        |
| `npm run test`            | Executa os testes com Vitest.             |
| `npm run lint`            | Verifica erros de lint.                   |
| `npm run format`          | Formata com Prettier.                     |
| `npm run type-check`      | Verifica tipos com `tsc --noEmit`.        |
| `npm run check`           | Executa lint, type-check e testes juntos. |

---

## 📝 Roadmap

- [ ] Suporte completo ao govbr-ds com tokens CSS customizáveis.
- [ ] Novos componentes (`GovBRModal`, `GovBRNotification`, `GovBRTable`).
- [ ] Melhoria da documentação com exemplos avançados.
- [ ] Integração com outras aplicações da ANPD.

---

## 🤝 Contribuições

Contribuições são bem-vindas! Siga nosso processo padronizado:

### 🚀 Para Novos Componentes

1. **📖 Leia o [Guia de Adição de Componentes](./docs/ADICIONAR_COMPONENTE.md)**
2. **Crie uma branch a partir da `main`:**
   ```bash
   git checkout -b feat/nome-do-componente main
   git pull origin main
   ```

### 🔄 Para Migrar Componentes Existentes

1. **📖 Consulte o [Guia de Migração](./docs/GUIA_MIGRACAO.md)**

### ✅ Processo Geral

1. **Desenvolva seguindo os padrões estabelecidos**
2. **Valide com:**
   ```bash
   npm run check    # lint + type-check + test
   npm run build    # verifica se compila corretamente
   ```
3. **Faça commit e push:**
   ```bash
   git add .
   git commit -m "feat: adiciona novo componente"
   git push origin feat/nome-do-componente
   ```
4. **📋 Abra um Pull Request** seguindo o template

> 📚 **Documentação Completa:** [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## ✍️ Licença

Este projeto está licenciado sob a **Licença MIT**.

---

## 🛡 Desenvolvido pela

> **Divisão de Desenvolvimento e Sustentação de Sistemas**  
> Autoridade Nacional de Proteção de Dados - ANPD

### Time

- @lucianoedipo
- @gustavolimaf
- @eduHanjos0411
