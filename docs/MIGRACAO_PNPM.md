# 🔄 Migração de npm para pnpm - Guia Completo

Este documento descreve a migração do projeto `shared-ui` de **npm** para **pnpm**.

## ✅ O que foi alterado

### 1. Arquivos de Configuração Criados

- **`.npmrc`**: Configurações do pnpm (engine-strict, auto-install-peers)
- **`pnpm-workspace.yaml`**: Configuração de workspace (necessário mesmo para monorepo único)
- **`scripts/check-package-manager.js`**: Script que bloqueia npm/yarn e força uso de pnpm

### 2. package.json Atualizado

- ✅ Adicionado `"packageManager": "pnpm@9.15.4"`
- ✅ Alterado `engines.npm` para `engines.pnpm`
- ✅ Adicionado script `preinstall` que executa verificação
- ✅ Todos os scripts atualizados para usar `pnpm` em vez de `npm`
- ✅ Adicionado script `test:ci` e `typecheck` (alias)

### 3. CI/CD Atualizado

- **`.github/workflows/ci.yml`**:
  - Usa `pnpm/action-setup@v4`
  - Define variável de ambiente `PNPM_VERSION: 9`
  - Usa `cache: 'pnpm'` no setup-node
  - Comandos substituídos: `pnpm install --frozen-lockfile`, `pnpm run build`, etc.

### 4. Scripts Atualizados

- `scripts/check-lock-commit.js`: Verifica `pnpm-lock.yaml` em vez de `package-lock.json`
- `scripts/add-specific-fallbacks.cjs`: Mensagens com `pnpm run build`
- `scripts/add-known-fallbacks.cjs`: Mensagens com `pnpm run build/test`

### 5. Documentação Atualizada

Todos os comandos `npm` foram substituídos por `pnpm` em:

- `README.md`
- `CONTRIBUTING.md`
- `.github/copilot-instructions.md`
- `docs/ADICIONAR_COMPONENTE.md`
- `docs/COMO_USAR_TEMA.md`
- `examples/README.md`

## 🚀 Como usar agora

### Para Desenvolvedores (primeira vez)

1. **Instalar pnpm globalmente** (recomendado):

   ```bash
   npm install -g pnpm
   ```

2. **OU usar via npx** (sem instalar):

   ```bash
   npx pnpm install
   ```

3. **Depois de ter pnpm instalado**:
   ```bash
   pnpm install
   ```

### Comandos do Dia a Dia

```bash
# Instalar dependências
pnpm install

# Desenvolvimento (Storybook)
pnpm run dev
# ou
pnpm run storybook

# Build
pnpm run build

# Testes
pnpm test

# Lint
pnpm run lint

# Type check
pnpm run typecheck

# Verificação completa (lint + typecheck)
pnpm run check
```

## 🛡️ Proteções Implementadas

### 1. Script preinstall

Se alguém tentar usar `npm install` ou `yarn install`, verá:

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   ❌  ERRO: Este projeto usa pnpm, não npm ou yarn!           ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### 2. engine-strict no .npmrc

Garante que apenas pnpm >= 9.0.0 e node >= 20.0.0 sejam aceitos.

### 3. packageManager field

Define explicitamente `pnpm@9.15.4` como gerenciador obrigatório.

### 4. Git hooks

O hook de pre-commit (`scripts/check-lock-commit.js`) foi atualizado para:

- Verificar se `pnpm-lock.yaml` está presente quando `package.json` muda
- Mostrar mensagens com comandos `pnpm` corretos

## 📦 Para Consumidores da Biblioteca

### Instalação no projeto consumidor

```bash
# Instalar a biblioteca
pnpm add @anpdgovbr/shared-ui

# Instalar peer dependencies
pnpm add react@^19 react-dom@^19 @mui/material@^7 @mui/icons-material@^7 \
  @emotion/react@^11 @emotion/styled@^11 react-hook-form@^7 @govbr-ds/core@^3
```

> **Nota:** Projetos consumidores podem continuar usando npm/yarn. A exigência de pnpm é apenas para desenvolvimento da biblioteca `shared-ui`.

## ⚙️ CI/CD (GitHub Actions)

O workflow `.github/workflows/ci.yml` agora:

1. Usa `pnpm/action-setup@v4` para instalar pnpm
2. Configura cache do pnpm no `setup-node`
3. Executa `pnpm install --frozen-lockfile` (equivalente ao antigo `npm ci`)
4. Todos os comandos usam `pnpm run <script>`

## 🔄 Migração de Dependências

### Adicionar nova dependência

```bash
# Dependência de produção
pnpm add <pacote>

# Dependência de desenvolvimento
pnpm add -D <pacote>

# Peer dependency (apenas declarar no package.json)
```

### Atualizar dependências

```bash
# Atualizar uma dependência específica
pnpm update <pacote>

# Atualizar todas
pnpm update

# Verificar outdated
pnpm outdated
```

### Remover dependência

```bash
pnpm remove <pacote>
```

## 📝 Checklist para PRs

Ao fazer commits que alteram dependências:

- [ ] `package.json` alterado
- [ ] `pnpm-lock.yaml` atualizado (rode `pnpm install`)
- [ ] Ambos os arquivos commitados juntos
- [ ] `pnpm run check` passou
- [ ] `pnpm run build` passou
- [ ] `pnpm test` passou

## 🎯 Benefícios da Migração

### Performance

- ✅ Instalação **3x mais rápida** que npm
- ✅ Usa **hard links** - menos espaço em disco
- ✅ **Strict mode** - evita phantom dependencies

### Segurança

- ✅ Lockfile mais determinístico
- ✅ Resolução de dependências mais rigorosa
- ✅ Menos conflitos entre versões

### Developer Experience

- ✅ Comandos mais curtos (`pnpm` vs `npm run`)
- ✅ Workspaces nativos (para futuro monorepo)
- ✅ Suporte a `node_modules/.pnpm` estruturado

## 🆘 Troubleshooting

### "Não consigo instalar, mostra erro de package manager"

**Solução**: Você precisa usar pnpm neste projeto.

```bash
npm install -g pnpm
pnpm install
```

### "O lockfile está quebrado/desatualizado"

**Solução**: Delete e recrie o lockfile.

```bash
rm pnpm-lock.yaml
pnpm install
```

### "Estou tendo problemas com peer dependencies"

**Solução**: O pnpm é mais rigoroso. Verifique se todas as peer deps estão instaladas.

```bash
pnpm install --strict-peer-dependencies=false  # temporário para debug
```

## 📚 Recursos

- [Documentação oficial do pnpm](https://pnpm.io)
- [Migração de npm/yarn para pnpm](https://pnpm.io/installation)
- [pnpm CLI](https://pnpm.io/cli/install)

---

**Data da migração**: 25 de setembro de 2025  
**Responsável**: Equipe de desenvolvimento ANPD
