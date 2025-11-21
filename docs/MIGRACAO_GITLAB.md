# 🔄 Guia de Migração para GitLab

Este documento descreve como migrar o projeto `@anpdgovbr/shared-ui` de GitHub para GitLab, mantendo todas as funcionalidades de CI/CD.

## 📋 Pré-requisitos

Antes de iniciar a migração, certifique-se de ter:

- [ ] Acesso administrativo ao repositório GitLab de destino
- [ ] GitLab Runner configurado (self-hosted ou GitLab.com)
- [ ] Variáveis de ambiente configuradas (se necessário)
- [ ] Permissões para criar branches e merge requests

## 🚀 Processo de Migração

### 1. Criar Repositório no GitLab

```bash
# No GitLab, crie um novo projeto
# Settings > General > Project name: shared-ui
# Settings > General > Visibility: Internal/Private (conforme política)
```

### 2. Adicionar Remote do GitLab

```bash
cd /home/luciano/anpdgovbr/shared-ui

# Adicionar remote do GitLab (ajuste a URL conforme seu servidor)
git remote add gitlab git@gitlab.anpd.gov.br:anpdgovbr/shared-ui.git

# Verificar remotes
git remote -v
# origin    git@github.com:anpdgovbr/shared-ui.git (fetch)
# origin    git@github.com:anpdgovbr/shared-ui.git (push)
# gitlab    git@gitlab.anpd.gov.br:anpdgovbr/shared-ui.git (fetch)
# gitlab    git@gitlab.anpd.gov.br:anpdgovbr/shared-ui.git (push)
```

### 3. Push do Código

```bash
# Push da branch main
git push gitlab main

# Push de todas as branches
git push gitlab --all

# Push de todas as tags
git push gitlab --tags
```

### 4. Configurar GitLab CI/CD

O arquivo `.gitlab-ci.yml` já está presente no repositório. Configure as variáveis necessárias:

#### Variáveis Obrigatórias

Acesse: `Settings > CI/CD > Variables`

| Variável | Descrição           | Exemplo | Protegida |
| -------- | ------------------- | ------- | --------- |
| `CI`     | Flag de ambiente CI | `true`  | Não       |

#### Variáveis Opcionais

| Variável         | Descrição                 | Exemplo                                | Protegida |
| ---------------- | ------------------------- | -------------------------------------- | --------- |
| `STORYBOOK_URL`  | URL do Storybook          | `https://seu-dominio.gov.br/shared-ui` | Não       |
| `NPM_TOKEN`      | Token para publicação NPM | `npm_***`                              | Sim       |
| `DEPLOY_SSH_KEY` | Chave SSH para deploy     | `-----BEGIN...`                        | Sim       |

### 5. Configurar GitLab Runner

#### Self-hosted Runner (Recomendado para ANPD)

```bash
# Instalar GitLab Runner no servidor
curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash
sudo apt-get install gitlab-runner

# Registrar runner
sudo gitlab-runner register

# Configurar para usar Docker (opcional)
# Editar /etc/gitlab-runner/config.toml
```

#### Configuração Mínima do Runner

```toml
[[runners]]
  name = "shared-ui-runner"
  url = "https://gitlab.anpd.gov.br/"
  token = "SEU_TOKEN_AQUI"
  executor = "docker"
  [runners.docker]
    image = "node:22-alpine"
    privileged = false
    volumes = ["/cache"]
```

### 6. Validar Pipeline

```bash
# Fazer uma pequena alteração para testar
git checkout -b test/gitlab-ci
echo "# Test" >> README.md
git add README.md
git commit -m "test: validar pipeline GitLab CI"
git push gitlab test/gitlab-ci

# Criar Merge Request no GitLab
# O pipeline deve executar automaticamente
```

### 7. Proteger Branch Main

Acesse: `Settings > Repository > Protected branches`

```
Branch: main
Allowed to merge: Maintainers
Allowed to push: No one
Allowed to force push: No
Require approval: Yes (1-2 approvals)
```

### 8. Configurar Merge Request Templates

Crie `.gitlab/merge_request_templates/Default.md`:

```markdown
## 📝 Descrição

<!-- Descreva as mudanças realizadas -->

## 🔗 Issue Relacionada

<!-- Closes #123 -->

## ✅ Checklist

- [ ] Código segue padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] CHANGELOG.md atualizado
- [ ] Build passa sem erros
- [ ] Lint passa sem erros
- [ ] Testes passam

## 🧪 Como Testar

<!-- Descreva como testar as mudanças -->

## 📸 Screenshots (se aplicável)

<!-- Adicione screenshots se relevante -->
```

## 🔄 Workflow de Desenvolvimento no GitLab

### Criar Feature Branch

```bash
git checkout main
git pull gitlab main
git checkout -b feat/nova-funcionalidade
```

### Fazer Commits

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push gitlab feat/nova-funcionalidade
```

### Criar Merge Request

1. Acesse o GitLab
2. Vá para o projeto `shared-ui`
3. Clique em "Create merge request"
4. Preencha template
5. Assign para reviewer
6. Aguarde pipeline passar
7. Aguarde aprovação
8. Merge!

## 🔍 Diferenças GitHub vs GitLab

| Recurso            | GitHub                    | GitLab                  |
| ------------------ | ------------------------- | ----------------------- |
| Pull/Merge Request | Pull Request              | Merge Request           |
| CI/CD Config       | `.github/workflows/*.yml` | `.gitlab-ci.yml`        |
| Actions            | GitHub Actions            | GitLab CI/CD            |
| Packages           | GitHub Packages           | GitLab Package Registry |
| Pages              | GitHub Pages              | GitLab Pages            |
| Artifact Storage   | Actions Artifacts         | Job Artifacts           |

## 📦 Publicação de Pacotes

### NPM Registry (Público)

```bash
# Login no NPM
npm login

# Publicar versão
pnpm run prepublishOnly
pnpm publish
```

### GitLab Package Registry (Privado)

```yaml
# Adicionar ao .gitlab-ci.yml
publish:
  stage: deploy
  only:
    - tags
  script:
    - echo "@anpdgovbr:registry=https://gitlab.anpd.gov.br/api/v4/projects/${CI_PROJECT_ID}/packages/npm/" > .npmrc
    - echo "//gitlab.anpd.gov.br/api/v4/projects/${CI_PROJECT_ID}/packages/npm/:_authToken=${CI_JOB_TOKEN}" >> .npmrc
    - pnpm publish
```

## 🚀 Deploy do Storybook

### Opção 1: GitLab Pages

```yaml
pages:
  stage: deploy
  dependencies:
    - build-storybook
  script:
    - mv storybook-static public
  artifacts:
    paths:
      - public
  only:
    - main
```

Acessível em: `https://anpdgovbr.gitlab.io/shared-ui`

### Opção 2: Servidor Próprio (ANPD)

O script `deploy-storybook.sh` existente continua funcionando:

```bash
# Job deploy-storybook no .gitlab-ci.yml já está configurado
# Executar manualmente após aprovação
```

## 🔒 Segurança

### Secrets e Variáveis Protegidas

```bash
# Marcar variáveis como "Protected"
Settings > CI/CD > Variables > Protected: Yes

# Variáveis protegidas só estão disponíveis em:
# - Protected branches (main)
# - Protected tags
```

### Dependency Scanning

```yaml
# Adicionar ao .gitlab-ci.yml (GitLab Ultimate/Gold)
include:
  - template: Security/Dependency-Scanning.gitlab-ci.yml
  - template: Security/SAST.gitlab-ci.yml
```

## 📊 Monitoramento

### Pipeline Analytics

Acesse: `CI/CD > Analytics > Repository Analytics`

Métricas disponíveis:

- Tempo médio de pipeline
- Taxa de sucesso/falha
- Jobs mais lentos
- Consumo de minutos CI/CD

### Performance Optimization

```bash
# Ver tempo de cada job
CI/CD > Pipelines > [Pipeline ID] > Jobs

# Identificar gargalos
# Otimizar cache
# Paralelizar jobs quando possível
```

## 🐛 Troubleshooting

### Pipeline Não Inicia

**Sintomas:** MR criado mas pipeline não executa

**Soluções:**

1. Verificar que `.gitlab-ci.yml` está na raiz
2. Verificar sintaxe YAML: `Settings > CI/CD > CI Lint`
3. Verificar que runner está disponível: `Settings > CI/CD > Runners`

### Runner Offline

**Sintomas:** Pipeline fica pendente

**Soluções:**

```bash
# Verificar status do runner
sudo gitlab-runner status

# Reiniciar runner
sudo gitlab-runner restart

# Ver logs
sudo gitlab-runner --debug run
```

### Cache Não Funciona

**Sintomas:** Jobs sempre reinstalam dependências

**Soluções:**

1. Verificar configuração de cache no `.gitlab-ci.yml`
2. Limpar cache: `Settings > CI/CD > Clear runner caches`
3. Verificar política de cache (pull/push)

### Artefatos Não Disponíveis

**Sintomas:** Job subsequente não encontra artefatos

**Soluções:**

1. Verificar configuração de `artifacts.paths`
2. Adicionar `dependencies: [job-anterior]` no job
3. Verificar retenção de artefatos

## 📚 Recursos

- 📖 **[GitLab CI/CD](https://docs.gitlab.com/ee/ci/)** - Documentação oficial
- 🔧 **[.gitlab-ci.yml Reference](https://docs.gitlab.com/ee/ci/yaml/)** - Referência completa
- 🚀 **[GitLab Runner](https://docs.gitlab.com/runner/)** - Configuração de runners
- 📦 **[Package Registry](https://docs.gitlab.com/ee/user/packages/npm_registry/)** - NPM no GitLab
- 📄 **[GITLAB_CI.md](./GITLAB_CI.md)** - Documentação do pipeline

## ✅ Checklist de Migração

- [ ] Repositório criado no GitLab
- [ ] Código migrado (branches + tags)
- [ ] `.gitlab-ci.yml` funcionando
- [ ] Variáveis de ambiente configuradas
- [ ] Runner configurado e online
- [ ] Pipeline testado com sucesso
- [ ] Branch main protegida
- [ ] Merge request template criado
- [ ] Equipe notificada sobre mudança
- [ ] Documentação atualizada

## 🤝 Próximos Passos

Após migração bem-sucedida:

1. **Comunicar equipe**: Enviar email sobre nova URL do repositório
2. **Atualizar README**: Links e badges para GitLab
3. **Configurar webhooks**: Se integrado com outros sistemas
4. **Treinar equipe**: Workshop sobre workflow GitLab
5. **Documentar processo**: Adicionar este guia ao onboarding

---

**Desenvolvido por:** Divisão de Desenvolvimento e Sustentação de Sistemas - ANPD
