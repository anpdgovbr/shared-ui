# 🤝 Contribuindo com o `shared-ui`

Obrigado pelo interesse em contribuir com a biblioteca de componentes `shared-ui` da ANPD!

Este projeto é **público**, mas voltado principalmente a **desenvolvedores internos da ANPD e parceiros institucionais**. Nosso objetivo é manter uma base de componentes React robusta, reutilizável e compatível com o design system **GovBR-DS**. 

---

## 📚 Documentação Rápida

Antes de começar, consulte nossa documentação:

- 📝 **[Adicionar Componente](./docs/ADICIONAR_COMPONENTE.md)** - Guia completo para novos componentes
- 🔄 **[Guia de Migração](./docs/GUIA_MIGRACAO.md)** - Como migrar componentes existentes
- 📊 **[CHANGELOG](./CHANGELOG.md)** - Histórico de mudanças do projeto
- 🤖 **[Instruções Copilot](./.github/copilot/instructions.md)** - Padrões para IA

---

## 🧭 Como começar

1. **Faça um fork** deste repositório ou clone diretamente via SSH/HTTPS.
2. Instale as dependências:

```bash
npm install
```

3. Rode o Storybook para visualizar os componentes:

```bash
npm run storybook
```

4. Crie uma branch a partir da `main`:

```bash
git checkout -b feat/nome-do-componente
```

---

## 📦 Estrutura de componentes

Todo novo componente deve seguir a estrutura **kebab-case** padronizada:

```
src/components/ui/nome-do-componente/
├── index.tsx              # Implementação principal + exports
├── types.ts               # Tipagens e interfaces
├── index.stories.tsx      # Stories do Storybook
└── hooks.ts               # Hooks específicos (opcional)
```

> 📖 **Documentação Completa:** [docs/ADICIONAR_COMPONENTE.md](./docs/ADICIONAR_COMPONENTE.md)

---

## ✅ Checklist antes de abrir o PR

### 🏗️ Estrutura e Código

- [ ] Componente segue a estrutura **kebab-case**: `src/components/ui/nome-componente/`
- [ ] Usa **path aliases** (@components, @theme, @helpers, @govbr-types)
- [ ] **Herda SharedUIComponentProps** para inclusão automática de `strictGovBr`
- [ ] Usa **imports específicos do MUI** para tree shaking (ex: `@mui/material/Button`)
- [ ] Segue padrões visuais do **GovBR-DS** quando `strictGovBr=true`

### 📖 Documentação

- [ ] Foi criado **Storybook** representando os estados do componente
- [ ] Stories incluem `tags: ['autodocs']` para documentação automática
- [ ] Casos de uso com `strictGovBr=true` e `false` documentados
- [ ] Comentários JSDoc adequados para futura integração com TypeDocs

### 🧪 Qualidade

- [ ] Branch está atualizada com a `main` (use `git pull --rebase`)
- [ ] **Build** passa sem erros: `npm run build`
- [ ] **Testes** executados com sucesso: `npm run test`
- [ ] **Linter** passa sem erros: `npm run lint -- --fix`
- [ ] **Verificação completa**: `npm run check`

### 📋 Exports e Tipagem

- [ ] Componente exportado no `src/index.ts` principal
- [ ] Tipos exportados corretamente para consumidores externos
- [ ] Arquivo `.d.ts` gerado corretamente no build

---

## 📦 Peer dependencies e gerenciamento de dependências

Esta biblioteca declara dependências como _peerDependencies_ para que o projeto consumidor controle as versões principais de runtime (React, MUI e GovBR-DS). Antes de instalar/atualizar dependências, siga este fluxo:

- Mantenha `package-lock.json` versionado — o CI usa `npm ci`.
- Ao atualizar/instalar dependências localmente, atualize `package.json` e `package-lock.json` e commit ambos.
- Dependências recomendadas que o consumidor deve instalar:
  - `react@^19`
  - `react-dom@^19`
  - `@mui/material@^7`
  - `@mui/icons-material@^7`
  - `@emotion/react@^11`
  - `@emotion/styled@^11`
  - `react-hook-form@^7`
  - `@govbr-ds/core@^3`

Exemplo de instalação no projeto consumidor:

```bash
npm install react@^19 react-dom@^19 @mui/material@^7 @mui/icons-material@^7 \
	@emotion/react@^11 @emotion/styled@^11 react-hook-form@^7 @govbr-ds/core@^3
```

Se precisar forçar uma mudança no `package-lock.json`, siga este processo:

1. Atualize dependências localmente com `npm install`.
2. Rode `npm run check` e `npm run build` para validar.
3. Commit `package.json` e `package-lock.json` juntos com uma mensagem clara (ex: `chore(deps): upgrade MUI to 7.x`).

Se houver dúvidas sobre ranges compatíveis do `@govbr-ds/core`, prefira usar `^3.0.0` para aceitar compatibilidade com qualquer 3.x; se necessitar um mínimo absoluto (ex.: recursos adicionados em 3.6.2), utilize `^3.6.2`.

---

## 🧪 Testes

Todos os componentes devem ter testes automatizados. Estamos usando `vitest` e `@testing-library/react` para os testes.

- **Testes de Renderização:** Verificam se o componente renderiza corretamente sem quebrar.
- **Testes de Funcionalidade:** Verificam o comportamento do componente (ex: cliques, eventos).
- **Testes de Snapshot:** Verificam se a estrutura do componente não foi alterada inesperadamente.

### `'use client';`

Todos os componentes de UI devem ser marcados com a diretiva `'use client';` no topo do arquivo. Isso garante que eles sejam renderizados apenas no cliente, o que é essencial para a compatibilidade com frameworks de renderização do lado do servidor (SSR) como o Next.js.

---

## 🧼 Linting

O projeto usa `eslint` e `prettier` para garantir a qualidade e a consistência do código. As regras de lint são executadas automaticamente antes de cada commit e push.

Para executar o linter manualmente, use o comando:

```bash
npm run lint
```

Para corrigir os erros de lint automaticamente, use o comando:

```bash
npm run lint -- --fix
```

---

## 🚀 Pull Request

- Nomeie o PR de forma clara e objetiva, por exemplo:

```
feat: adiciona componente govbr-badge
fix: corrige alinhamento do govbr-card
docs: atualiza exemplos de uso
```

- Vincule a issue correspondente (se houver) usando `Closes #num`.

- Após a aprovação, o PR será squashado e mesclado na `main`.

---

## 🗂️ Projetos e Automação

Todas as issues e PRs devem ser vinculados ao projeto **Base compartilhada**. Campos como:

- `Status`: 🟡 Em andamento, ✅ Concluído etc.
- `Complexidade`: Pequena, Média, Grande
- `Iteração`: Iteração atual (opcional)

são utilizados para **acompanhamento interno** e devem ser mantidos atualizados sempre que possível.

---

## 📞 Contato

Para dúvidas ou sugestões internas, entre em contato com a **Coordenação-Geral de TI (CGTI/ANPD)** ou abra uma issue com a label `dúvida`.

---

**Bons commits e obrigado por contribuir com a ANPD!**
