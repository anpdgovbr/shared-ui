# 📊 CHANGELOG

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/spec/v2.0.0.html).

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
- **Template PR Atualizado**: Refletindo novos padrões kebab-case e checklist de qualidade

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
