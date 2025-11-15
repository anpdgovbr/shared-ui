# 📊 CHANGELOG

## 0.3.13

### Patch Changes

- chore: manutenção e correções

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

## [0.3.12-beta.0] - 2025-11-02

### 🚀 Adicionado

- Publicação oficial do componente `Homepage` na linha beta.

### 🔧 Ajustado

- `Homepage`: ajustes de tipagem (`mergeSx`, `resolveBorderRadius`) garantindo compatibilidade com temas dinâmicos.
- README atualizado com versão mínima recomendada (`>=0.3.12-beta.0`).

## [0.3.11-beta.1] - 2025-11-02

### 🚀 Adicionado

- **Homepage**: layout completo de landing page com hero, métricas, destaque e rodapé componíveis.
  - Subcomponentes exportados para uso isolado (`HomepageHero`, `HomepageMetricsGrid`, etc).
  - Cobertura de testes garantindo renderização e ações básicas.

### 🔧 Modificado

- Documentação atualizada apontando uso do componente e ações com `GovBRButton`.

---

## [0.3.11-beta.0] - 2025-11-01

### 🐛 Corrigido

- **Problema Crítico de Exports**: Corrigido problema que impedia importação de componentes em projetos TypeScript (#109)
  - Criado arquivo `types/index.d.ts` que re-exporta todos os tipos de `types/src/index.d.ts`
  - Componentes agora são corretamente importáveis: `import { GovBRLoading, GovBRCheckbox } from '@anpdgovbr/shared-ui'`
  - Resolvida incompatibilidade entre campo `types` e `exports['.'].types` do package.json

### 🔧 Modificado

- **Build de tipos**: Script `build:types` agora executa `create-types-index.cjs` automaticamente
- **Package.json**: Atualizada configuração de build para incluir geração automática de arquivo de re-export de tipos

### 🚀 Adicionado

- **Script de validação**: `validate:exports` para verificar integridade dos exports
  - Valida 18 componentes principais
  - Valida 18 interfaces de tipos correspondentes
  - Valida helpers e temas exportados
  - Verifica configuração do package.json

- **Testes**: Adicionados testes unitários para componentes que faltavam:
  - `GovBRDateTimePicker`: Testes de renderização, disabled, required, formatos
  - `GovBRDivider`: Testes de orientação, tamanhos, modo estrito
  - `GovBRItem`: Testes de estados, divider, modo estrito
  - `GovBRTabs`: Testes de variants, ícones, contadores, modo estrito

- **Documentação**:
  - `CORRECAO_EXPORTS.md`: Documentação completa da correção do problema de exports
  - `ISSUE-SHARED-UI-EXPORTS.md`: Análise técnica detalhada do problema e solução aplicada
  - Scripts de automação documentados

### 📦 Scripts Novos

- `scripts/create-types-index.cjs`: Gera automaticamente arquivo `types/index.d.ts`
- `scripts/validate-exports.cjs`: Valida integridade de todos os exports da biblioteca

---

## [0.3.7-beta.1] - 2025-10-13

### 🐛 Corrigido

- **Script preinstall**: Removido script que causava erro MODULE_NOT_FOUND em projetos consumidores
- **Arquivos de publicação**: Criado `.npmignore` para garantir que apenas arquivos necessários sejam publicados

---

## [0.3.7-beta.0] - 2025-10-13

### 🚀 Adicionado

- **Novos Componentes UI**:
  - `GovBRDateTimePicker`: Componente para seleção de data e hora integrado com MUI X Date Pickers
  - `GovBRDivider`: Componente de divisor visual seguindo padrões Gov.br DS
  - `GovBRTabs`: Componente de abas/tabs com suporte aos dois modos (padrão e estrito)
  - `GovBRItem`: Componente genérico para itens de lista e cards
  - `GovBRLoading`: Componente de loading/carregamento com animações Gov.br DS

- **Dependências Atualizadas**:
  - `@mui/x-date-pickers@^8.14.0`: Suporte para componentes de data/hora
  - `dayjs@^1.11.18`: Biblioteca de manipulação de datas leve e moderna
  - `@mui/utils@^7.3.3`: Utilitários MUI atualizados

### 🔧 Modificado

- **Exports**: Adicionados novos componentes ao sistema de exports centralizado
- **Stories**: Criadas documentações interativas completas para os novos componentes no Storybook
- **Tipos**: Interfaces TypeScript completas para todos os novos componentes

### � Documentação

- **Storybook**: Stories detalhadas para GovBRDateTimePicker, GovBRDivider, GovBRTabs, GovBRItem e GovBRLoading
- **Types**: Documentação inline dos tipos e props dos novos componentes

---

## [Não Lançado] - Em Desenvolvimento

### 🚀 Adicionado

- **Path Aliases Configurados**: Implementados aliases `@components`, `@theme`, `@helpers`, `@govbr-types` para imports limpos
- **Sistema de Tipos Unificado**: Todos os componentes GovBR agora herdam `SharedUIComponentProps` automaticamente
- **Tree Shaking Otimizado**: Configuração ESLint personalizada para forçar imports específicos do MUI
- **Estrutura Kebab-case**: Componentes seguem padrão `src/components/ui/nome-componente/` inspirado no shadcn/ui
- **Documentação Completa**: Adicionados guias de desenvolvimento, migração e contribuição
- **GitHub Copilot Instructions**: Instruções personalizadas para desenvolvimento assistido por IA
- **Templates de Issues**: Adaptados para contexto de biblioteca UI com áreas específicas (Componentes UI, Tema/Estilos, Types/TypeScript)
- **Pasta Examples**: Organização centralizada de exemplos de uso com estrutura padronizada
- **ESLint Rule 'use client'**: Regra customizada que força todos os componentes UI a terem diretiva `'use client'` para compatibilidade Next.js
- **Suite de Testes Completa**: Implementados testes básicos para todos os 11 componentes usando Vitest + Testing Library
- **Husky v10+ Ready**: Configuração de git hooks atualizada para versões futuras do Husky

### 🔧 Corrigido

- **Husky Compatibility**: Removidas linhas depreciadas dos hooks pre-commit e pre-push
- **ESLint Custom Plugin**: Implementado plugin inline com análise AST para validação de diretivas
- **Test Environment**: Configurado jsdom com suporte completo a MUI e React Testing Library

### 🧪 Testes

- **40 testes implementados** cobrindo:
  - GovBRButton (1 teste)
  - GovBRInput (3 testes)
  - GovBRCheckbox (3 testes)
  - GovBRRadio (4 testes)
  - GovBRAvatar (4 testes)
  - GovBRBreadcrumb (4 testes)
  - AutoSyncButton (4 testes)
  - GovBRFormInput (4 testes)
  - GovBRFormCheckbox (3 testes)
  - GovBRSignIn (5 testes)
  - GovBRSwitch (5 testes)
- **Template PR Atualizado**: Refletindo novos padrões kebab-case e checklist de qualidade
- **Testes Básicos**: Criados testes unitários básicos para todos os componentes com Vitest + Testing Library

### 🔧 Modificado

- **SharedUIComponentProps**: Adicionado utility type `GovBRComponentProps<T>` para melhor inferência de tipos
- **GovBRTypes.ts**: Corrigida inconsistência em `GovBRSemanticColor` (unificado uso de "error" vs "danger")
- **TSConfig**: Configuração atualizada para incluir stories no processo de compilação
- **Estrutura de Exports**: Reorganizada para melhor performance de bundle
- **README**: Reestruturado com seções organizadas e links entre documentos
- **CONTRIBUTING**: Atualizado com checklist detalhado e novos padrões
- **Templates GitHub**: Issues e PR adaptados para contexto de biblioteca UI
- **Organização de Arquivos**: Exemplos movidos para `/examples` com estrutura padronizada
- **ESLint Rule 'use client'**: Aprimorada regra customizada para verificar diretiva 'use client' em componentes UI
- **Husky Configuration**: Removidas linhas deprecadas para compatibilidade com Husky v10+

### 🐛 Corrigido

- **Path Aliases em Stories**: Corrigido problema onde aliases não funcionavam no Storybook
- **Lint Errors**: Resolvidas todas as 20 violações de tree shaking do ESLint
- **MUI Imports**: Convertidos todos os imports genéricos para imports específicos (ex: `@mui/material/Button`)
- **Icon References**: Padronizados sufixos de ícones (ex: `<Add/>` → `<AddIcon/>`)

### 📚 Documentação

- **[ADICIONAR_COMPONENTE.md](./docs/ADICIONAR_COMPONENTE.md)**: Guia completo para criação de componentes
- **[GUIA_MIGRACAO.md](./docs/GUIA_MIGRACAO.md)**: Documentação para migração de componentes
- **[GitHub Copilot Instructions](./.github/copilot/instructions.md)**: Padrões para IA
- **[Examples](./examples/)**: Pasta centralizada com exemplos práticos de uso
- **Templates GitHub**: Issues e PR templates adaptados para contexto de biblioteca
- **CHANGELOG**: Criado para documentar mudanças do projeto
- **Preparação TypeDocs**: Estrutura preparada para futura documentação automática

### ⚡ Performance

- **Bundle Size**: Reduzido através de tree shaking otimizado
- **Build Speed**: Melhorado com configuração de paths e exports otimizada
- **Development**: Path aliases aceleram desenvolvimento com imports mais limpos

---

## [0.2.0-alpha.1] - 2025-08-06

### 🚀 Adicionado

- Atualização das definições de tipos para melhor consistência
- Melhorias na consistência do código entre componentes

### 🔧 Modificado

- Refatoração dos tipos e definições para melhor manutenibilidade

---

## [0.1.x] - 2025-07-04 a 2025-08-06

### 🚀 Adicionado

- **Componentes Base**: GovBRButton, GovBRInput, GovBRAvatar, GovBRRadio, AutoSync
- **Storybook**: Configuração inicial com documentação interativa dos componentes
- **Estrutura do Projeto**: Configuração base com React 19+, MUI v7, TypeScript
- **Temas GovBR**: Implementação de temas baseados no Design System do Governo Federal
- **CI/CD**: GitHub Actions para build e validação automática
- **Testes**: Configuração inicial com Vitest
- **Linting**: ESLint e Prettier para qualidade de código
- **Git Hooks**: Husky para validação pre-commit e pre-push

### 🔧 Modificado

- **Package Name**: Atualizado para `@anpdgovbr/shared-ui`
- **Configuração Storybook**: Melhorias na estrutura e consistência das stories
- **Formatação**: Aplicação consistente do Prettier em todo o código

### 📚 Documentação

- **README**: Documentação inicial do projeto
- **Storybook Stories**: Documentação interativa dos componentes
- **Assets SVG**: Adicionados assets visuais para buttons, headers e páginas

---

## 📝 Legenda

- 🚀 **Adicionado** para novas funcionalidades
- 🔧 **Modificado** para mudanças em funcionalidades existentes
- 🐛 **Corrigido** para correção de bugs
- 📚 **Documentação** para mudanças na documentação
- ⚡ **Performance** para melhorias de performance
- 🔒 **Segurança** para correções relacionadas à segurança
