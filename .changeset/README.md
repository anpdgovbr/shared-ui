# Changesets - Controle de Versionamento Automatizado

Este diretório contém os **changesets** que controlam o versionamento semântico da biblioteca `@anpdgovbr/shared-ui`.

## 📋 O que são Changesets?

Changesets são arquivos que descrevem mudanças no código e o tipo de versão que deve ser incrementada (patch, minor ou major).

## 🔄 Fluxo Automatizado no GitLab CI

### ⚠️ **IMPORTANTE: Sem Changeset = Sem Publicação**

O pipeline foi projetado para **NUNCA publicar** sem um changeset (manual ou automático).

### 1️⃣ **Em Merge Requests (MRs)**

Quando você cria um MR, o pipeline verifica se existe um changeset. **Se não existir**, cria automaticamente baseado no título do MR:

- **Título começa com `feat:`, `feature:`, `add:`** → `minor` (0.x.0)
- **Título contém `BREAKING CHANGE` ou `breaking:`** → `major` (x.0.0)
- **Qualquer outro título** → `patch` (0.0.x)

**Exemplo:**

```
Título: feat: adiciona componente GovBRModal
Resultado: changeset tipo "minor" criado automaticamente
```

### 2️⃣ **Após Merge na Main**

Quando o MR é mergeado:

**COM changeset:**

1. **Job `version-bump`** detecta changesets pendentes
2. Aplica os changesets com `changeset version`
3. Atualiza `package.json` e `CHANGELOG.md`
4. Faz commit com `[skip ci]` para evitar loop
5. Cria tag de versão (ex: `v0.3.14`)
6. Tag dispara job `publish` automaticamente

**SEM changeset:**

1. **Job `version-bump`** detecta que não há changesets
2. Exibe: `"ℹ️ Nenhum changeset pendente. Pulando bump de versão."`
3. Exibe: `"⚠️ IMPORTANTE: Sem changeset não haverá publicação!"`
4. Pipeline termina SEM criar tag
5. Job `publish` **NÃO É EXECUTADO**

### 3️⃣ **Publicação no Verdaccio**

**Só executa se:**

- ✅ Tag de versão foi criada (`v1.2.3`)
- ✅ Tag segue padrão semver (`v\d+\.\d+\.\d+`)

**Quando executa:**

1. **Job `publish`** verifica se a versão já existe no Verdaccio
2. Valida que versão da tag = versão do package.json
3. Se **não existe**: publica a nova versão
4. Se **já existe**: pula publicação (evita erro 409)

## 🎯 Como Usar

### Opção 1: Deixar o CI Criar Automaticamente (Recomendado)

Simplesmente use títulos descritivos nos seus MRs:

```bash
# Para feature nova (minor)
git commit -m "feat: adiciona suporte a dark mode"

# Para correção (patch)
git commit -m "fix: corrige alinhamento do botão"

# Para breaking change (major)
git commit -m "feat!: remove suporte ao React 18

BREAKING CHANGE: agora requer React 19+"
```

### Opção 2: Criar Changeset Manualmente

Se preferir ter mais controle:

```bash
# Criar changeset interativamente
pnpm changeset

# Seguir o prompt:
# - Selecione o tipo (patch/minor/major)
# - Descreva a mudança
```

Isso criará um arquivo `.changeset/random-name.md`:

```markdown
---
'@anpdgovbr/shared-ui': minor
---

Adiciona componente GovBRModal para exibir diálogos acessíveis
```

## 📊 Tipos de Mudança

| Tipo              | Quando Usar                        | Exemplo                         |
| ----------------- | ---------------------------------- | ------------------------------- |
| **patch** (0.0.x) | Correções de bugs, ajustes menores | `fix: corrige cor do botão`     |
| **minor** (0.x.0) | Novas features, adições            | `feat: adiciona GovBRModal`     |
| **major** (x.0.0) | Breaking changes                   | `feat!: remove prop deprecated` |

## 🛠️ Scripts Disponíveis

```bash
# Criar changeset manualmente
pnpm changeset

# Aplicar changesets (atualizar versão)
pnpm changeset:version

# Publicar (local - use com cuidado)
pnpm changeset:publish
```

## ⚠️ Importante

- **Não edite** `package.json` manualmente para mudar versão
- **Não edite** `CHANGELOG.md` diretamente
- Use changesets ou deixe o CI gerenciar automaticamente
- Commits de version bump incluem `[skip ci]` para evitar loop infinito

## 🔍 Verificar Changesets Pendentes

```bash
# Listar changesets que serão aplicados
ls -la .changeset/*.md | grep -v README | grep -v config.json
```

## 📚 Documentação Completa

- [Changesets Documentation](https://github.com/changesets/changesets)
- [Common Questions](https://github.com/changesets/changesets/blob/main/docs/common-questions.md)
- [Pipeline GitLab CI](../docs/GITLAB_CI.md)

---

**Desenvolvido por:** Divisão de Desenvolvimento e Sustentação de Sistemas - ANPD
