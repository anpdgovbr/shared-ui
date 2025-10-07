# 🤝 Contribuindo com o `shared-ui`

Obrigado pelo interesse em contribuir com a **biblioteca de componentes compartilháveis da ANPD**!

Este projeto centraliza componente```bash
pnpm add react@^19 react-dom@^19 @mui/material@^7 @mui/icons-material@^7 \
	@emotion/react@^11 @emotion/styled@^11 react-hook-form@^7 @govbr-ds/core@^3
```

Se precisar forçar uma mudança no `pnpm-lock.yaml`, siga este processo:

1. Atualize dependências localmente com `pnpm install`.
2. Rode `pnpm run check` e `pnpm run build` para validar.
3. Commit `package.json` e `pnpm-lock.yaml` juntos com uma mensagem clara (ex: `chore(deps): upgrade MUI to 7.x`).utilizáveis, construídos com Material-UI e seguindo os padrões visuais do Gov.br Design System, para uso em todos os projetos da ANPD.

> 📖 **LEIA PRIMEIRO:** [ARQUITETURA.md](./ARQUITETURA.md) - Entenda a arquitetura híbrida da biblioteca

---

## � Objetivo da Biblioteca

A `shared-ui` é uma **biblioteca de componentes compartilháveis da ANPD** que visa:

- **Centralizar** componentes reutilizáveis entre projetos
- **Padronizar** interfaces seguindo Gov.br Design System
- **Acelerar** desenvolvimento com componentes prontos
- **Manter** consistência visual e funcional

### 🏛️ Arquitetura Híbrida

Para atender aos objetivos da biblioteca, utilizamos uma **arquitetura de modo duplo**:

1. **Modo Padrão** (`strictgovbr={false}`): Componente MUI estilizado pelo `govbrTheme.ts`
2. **Modo Estrito** (`strictgovbr={true}`): Elemento HTML puro com classes Gov.br DS

```tsx
// Modo Padrão: Uso principal da biblioteca
<GovBRButton variant="contained" color="primary">Botão</GovBRButton>

// Modo Estrito: Quando precisar de 100% fidelidade Gov.br DS
<GovBRButton strictgovbr inverted>Botão</GovBRButton>
```

---

## 📚 Documentação Essencial

Antes de contribuir, consulte nossa documentação na seguinte ordem:

1. 🏛️ **[ARQUITETURA.md](./ARQUITETURA.md)** - **LEIA PRIMEIRO** - Fundamentos da arquitetura híbrida
2. 📝 **[ADICIONAR_COMPONENTE.md](./docs/ADICIONAR_COMPONENTE.md)** - Guia para criar componentes seguindo a arquitetura
3. 🎨 **[COMO_USAR_TEMA.md](./docs/COMO_USAR_TEMA.md)** - Como o tema resolve conflitos de estilo
4. 🔄 **[GUIA_MIGRACAO.md](./docs/GUIA_MIGRACAO.md)** - Como migrar componentes existentes
5. 📊 **[CHANGELOG.md](./CHANGELOG.md)** - Histórico de mudanças do projeto

---

## 🧭 Como começar

1. **Faça um fork** deste repositório ou clone diretamente via SSH/HTTPS.
2. Instale as dependências:

```bash
pnpm install
```

3. Rode o Storybook para visualizar os componentes:

```bash
pnpm run storybook
```

4. Crie uma branch a partir da `main`:

```bash
git checkout -b feat/nome-do-componente
```

---

## 📦 Estrutura de Componentes (Arquitetura Híbrida)

Todo novo componente deve implementar o **padrão de modo duplo**:

```
src/components/ui/nome-do-componente/
├── index.tsx              # Implementação com modo duplo + exports
├── types.ts               # Interface estendendo SharedUIComponentProps
└── index.stories.tsx      # Stories mostrando ambos os modos
```

### Implementação Obrigatória do Modo Duplo

```tsx
export const GovBRComponente: React.FC<Props> = ({ strictgovbr, ...props }) => {
  // Modo Estrito: HTML puro com classes Gov.br DS
  if (strictgovbr) {
    return <div className="br-component">...</div>
  }

  // Modo Padrão: Componente MUI estilizado pelo tema
  return <MuiComponent {...props}>...</MuiComponent>
}
```

├── index.stories.tsx # Stories do Storybook
└── hooks.ts # Hooks específicos (opcional)

````

> 📖 **Documentação Completa:** [docs/ADICIONAR_COMPONENTE.md](./docs/ADICIONAR_COMPONENTE.md)

---

## ✅ Checklist antes de abrir o PR

### �️ Arquitetura Híbrida

- [ ] **Modo duplo implementado**: Componente detecta `strictgovbr` e renderiza MUI ou HTML puro
- [ ] **Modo Padrão funciona**: Componente MUI estilizado pelo `govbrTheme.ts`
- [ ] **Modo Estrito funciona**: HTML puro com classes CSS do Gov.br DS
- [ ] **Componente "burro"**: No modo padrão, apenas repassa props para MUI
- [ ] **Tema atualizado**: `govbrTheme.ts` contém styleOverrides para o componente MUI correspondente

### 🎨 Estilização

- [ ] **Tokens CSS utilizados**: Usa `var(--token-name)` em vez de valores fixos no tema
- [ ] **DevTools inspecionado**: Verificado componente oficial Gov.br DS para obter tokens corretos
- [ ] **Slots MUI mapeados**: styleOverrides aplicados nos slots corretos do componente MUI
- [ ] **Classe base Gov.br DS**: Modo estrito usa classe correta (ex: `.br-button`)

### 🏗️ Estrutura e Código

- [ ] Componente segue estrutura **kebab-case**: `src/components/ui/nome-componente/`
- [ ] **Interface estende SharedUIComponentProps** para prop `strictgovbr` automática
- [ ] Usa **imports específicos do MUI** para tree shaking (ex: `@mui/material/Button`)
- [ ] Usa **path aliases** (@components, @theme, @helpers, @govbr-types)
- [ ] Biblioteca **classnames** usada para lógica de classes no modo estrito

### 📖 Documentação

- [ ] **Stories do Storybook** mostram ambos os modos (padrão e estrito)
- [ ] Stories incluem `tags: ['autodocs']` para documentação automática
- [ ] **Comparação visual**: Verificado que ambos os modos têm aparência similar
- [ ] Comentários JSDoc adequados no código

### 🧪 Qualidade

- [ ] Branch está atualizada com a `main` (use `git pull --rebase`)
- [ ] **Build** passa sem erros: `pnpm run build`
- [ ] **Testes** executados com sucesso: `pnpm run test`
- [ ] **Linter** passa sem erros: `pnpm run lint -- --fix`
- [ ] **Verificação completa**: `pnpm run check`

### 📋 Exports e Tipagem

- [ ] Componente exportado no `src/index.ts` principal
- [ ] Tipos exportados corretamente para consumidores externos
- [ ] Arquivo `.d.ts` gerado corretamente no build

---

## 📦 Peer dependencies e gerenciamento de dependências

Esta biblioteca declara dependências como _peerDependencies_ para que o projeto consumidor controle as versões principais de runtime (React, MUI e GovBR-DS). Antes de instalar/atualizar dependências, siga este fluxo:

- Mantenha `pnpm-lock.yaml` versionado — o CI usa `pnpm install --frozen-lockfile`.
- Ao atualizar/instalar dependências localmente, atualize `package.json` e `pnpm-lock.yaml` e commit ambos.
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
````

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
pnpm run lint
```

Para corrigir os erros de lint automaticamente, use o comando:

```bash
pnpm run lint -- --fix
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
