# 🦊 GitLab CI/CD para shared-ui

Este documento descreve a configuração do pipeline GitLab CI/CD para a biblioteca de componentes `@anpdgovbr/shared-ui`.

## 📋 Visão Geral

O pipeline GitLab CI foi configurado para garantir qualidade, segurança e automação do processo de build e deploy da biblioteca.

### 🎯 Objetivos

- **Qualidade**: Lint, type checking e testes automatizados
- **Segurança**: Verificação de vulnerabilidades e permissões mínimas
- **Performance**: Cache otimizado e paralelização de jobs
- **Reprodutibilidade**: Frozen lockfile e versões fixas
- **Visibilidade**: Artefatos e relatórios detalhados

## 🔄 Estágios do Pipeline

O pipeline está organizado em 5 estágios sequenciais:

```
install → lint → test → build → deploy
```

### 1. Install (📦 Instalação)

**Job:** `install`

- Instala dependências usando `pnpm install --frozen-lockfile`
- Configura cache para otimizar execução
- Gera artefatos com `node_modules/` para jobs subsequentes
- **Timeout:** 10 minutos

### 2. Lint (🔍 Verificação)

**Jobs:** `lint` e `type-check`

- `lint`: Executa ESLint para verificar padrões de código
- `type-check`: Executa TypeScript compiler para verificar tipos
- Executam em paralelo para otimizar tempo
- **Timeout:** 10 minutos cada

### 3. Test (🧪 Testes)

**Jobs:** `test` e `security-check`

- `test`: Executa suite de testes com Vitest
  - Gera relatórios de cobertura
  - Exporta métricas em formato JUnit
  - Calcula cobertura de código
- `security-check`: Verifica vulnerabilidades com `pnpm audit`
  - Executado apenas em MRs e branch main
  - Permite falha (informativo)
- **Timeout:** 15 minutos (test), 10 minutos (security)

### 4. Build (🏗️ Construção)

**Jobs:** `build`, `build-storybook`, `bundle-analysis`

- `build`: Compila a biblioteca
  - Gera arquivos em `dist/` e `types/`
  - Valida que arquivos essenciais foram criados
  - Executa validação de exports
  - Depende de: install, lint, type-check, test
- `build-storybook`: Compila documentação Storybook
  - Executado apenas na branch `main`
  - Gera site estático em `storybook-static/`
- `bundle-analysis`: Análise de tamanho do bundle (informativo)
  - Executado apenas na branch `main`
  - Permite falha

- **Timeout:** 15-20 minutos

### 5. Deploy (🚀 Implantação)

**Job:** `deploy-storybook`

- Deploy manual do Storybook
- Executado apenas na branch `main`
- Requer aprovação manual
- Usa script `deploy-storybook.sh` se disponível
- **Timeout:** 10 minutos

## 🔧 Configuração

### Variáveis de Ambiente

```yaml
NODE_VERSION: '22' # Versão do Node.js
PNPM_VERSION: '10.22.0' # Versão do pnpm (sincronizada com package.json)
FROZEN_LOCKFILE: 'true' # Garante reprodutibilidade
DISABLE_TELEMETRY: 'true' # Desabilita telemetria em CI
CI: 'true' # Flag de ambiente CI
```

### Cache

O pipeline utiliza cache inteligente baseado no hash do `pnpm-lock.yaml`:

```yaml
cache:
  key:
    files:
      - pnpm-lock.yaml
  paths:
    - .pnpm-store
    - node_modules/
```

**Estratégias:**

- Job `install`: `policy: push` (popula cache)
- Demais jobs: `policy: pull` (apenas lê cache)

### Artefatos

Os artefatos gerados ficam disponíveis para download:

| Artefato            | Origem          | Retenção  | Descrição               |
| ------------------- | --------------- | --------- | ----------------------- |
| `node_modules/`     | install         | 1 hora    | Dependências instaladas |
| `dist/`             | build           | 30 dias   | Build da biblioteca     |
| `types/`            | build           | 30 dias   | Tipos TypeScript        |
| `coverage/`         | test            | 1 semana  | Relatórios de cobertura |
| `storybook-static/` | build-storybook | 7-30 dias | Site do Storybook       |

## 🚦 Regras de Execução

O pipeline é executado nas seguintes situações:

1. **Push para `main`**: Pipeline completo
2. **Merge Requests**: Pipeline completo (exceto build-storybook)
3. **Tags**: Pipeline completo

```yaml
workflow:
  rules:
    - if: $CI_COMMIT_BRANCH == "main"
    - if: $CI_PIPELINE_SOURCE == "merge_request_event"
    - if: $CI_COMMIT_TAG
```

## 📊 Relatórios

### Cobertura de Testes

O job `test` gera relatórios de cobertura em múltiplos formatos:

- **Cobertura GitLab**: Integração nativa com interface GitLab
- **Formato Cobertura XML**: `coverage/cobertura-coverage.xml`
- **JUnit XML**: `coverage/junit.xml`
- **HTML**: `coverage/index.html`

A cobertura é extraída automaticamente usando regex:

```yaml
coverage: '/All files[^|]*\|[^|]*\s+([\d\.]+)/'
```

### Code Quality

O job `lint` pode gerar relatórios de qualidade de código:

```yaml
artifacts:
  reports:
    codequality: gl-code-quality-report.json
```

## 🔒 Segurança

### Princípios Implementados

1. **Frozen Lockfile**: Garante versões exatas de dependências
2. **Audit de Segurança**: Verificação automática de vulnerabilidades
3. **Timeouts**: Previne jobs travados
4. **Dependências Mínimas**: Apenas ferramentas essenciais

### Security Check

```bash
pnpm audit --audit-level=moderate
```

- Verifica vulnerabilidades de severidade moderada ou superior
- Executado em MRs e branch main
- Permite falha (informativo) para não bloquear pipeline

## ⚡ Performance

### Otimizações Implementadas

1. **Cache de Dependências**: Reduz tempo de instalação em ~80%
2. **Paralelização**: Jobs independentes executam em paralelo
3. **Artefatos Compartilhados**: Evita reinstalação de dependências
4. **Timeouts Ajustados**: Valores realistas baseados em medições

### Tempos Esperados

| Job             | Tempo (cache frio) | Tempo (cache quente) |
| --------------- | ------------------ | -------------------- |
| install         | ~5-8 min           | ~1-2 min             |
| lint            | ~1-2 min           | ~30-60 seg           |
| type-check      | ~1-2 min           | ~30-60 seg           |
| test            | ~3-5 min           | ~2-3 min             |
| build           | ~3-5 min           | ~2-3 min             |
| build-storybook | ~5-10 min          | ~3-5 min             |

**Pipeline completo:** ~15-25 minutos (primeira execução), ~8-12 minutos (com cache)

## 🛠️ Customização

### Variáveis GitLab CI/CD

Você pode definir variáveis no GitLab em `Settings > CI/CD > Variables`:

```bash
# Exemplo: customizar URL de deploy
STORYBOOK_URL=https://seu-dominio.gov.br/shared-ui

# Exemplo: habilitar features específicas
ENABLE_BUNDLE_ANALYSIS=true
```

### Adicionar Jobs Customizados

Para adicionar jobs específicos do seu ambiente:

```yaml
# Exemplo: job de publicação no NPM privado
publish-npm:
  stage: deploy
  only:
    - tags
  when: manual
  script:
    - echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
    - pnpm publish --no-git-checks
```

## 🐛 Troubleshooting

### Pipeline Falha no Install

**Problema:** Erro ao instalar dependências

**Solução:**

```bash
# Limpar cache do GitLab CI
# Settings > CI/CD > Clear runner caches

# Verificar pnpm-lock.yaml está atualizado
git status pnpm-lock.yaml
```

### Build Falha

**Problema:** Erro durante build

**Solução:**

```bash
# Testar localmente
pnpm install --frozen-lockfile
pnpm run build

# Verificar logs no GitLab
# Job build > View logs
```

### Storybook não Abre Após Deploy

**Problema:** Deploy concluído mas site não abre

**Solução:**

1. Verificar configuração de `basePath` em `.storybook/main.ts`
2. Verificar permissões do servidor web
3. Verificar logs do script `deploy-storybook.sh`

### Testes Falham no CI mas Passam Localmente

**Problema:** Comportamento diferente entre local e CI

**Solução:**

```bash
# Executar testes com mesmas variáveis de ambiente
CI=true pnpm test

# Verificar diferenças de timezone/locale
TZ=UTC pnpm test
```

## 📚 Recursos Adicionais

- 📖 **[GitLab CI/CD Docs](https://docs.gitlab.com/ee/ci/)** - Documentação oficial
- 🔧 **[pnpm in CI](https://pnpm.io/continuous-integration)** - Boas práticas pnpm
- 🚀 **[CONTRIBUTING.md](../CONTRIBUTING.md)** - Como contribuir
- 📝 **[CHANGELOG.md](../CHANGELOG.md)** - Histórico de mudanças

## 🤝 Contribuindo

Para melhorias no pipeline CI/CD:

1. Teste mudanças localmente quando possível
2. Documente novos jobs ou variáveis
3. Mantenha timeouts realistas
4. Preserve princípios de segurança
5. Atualize este documento com mudanças significativas

---

**Desenvolvido por:** Divisão de Desenvolvimento e Sustentação de Sistemas - ANPD
