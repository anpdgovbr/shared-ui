#!/bin/bash
# Script de validação local do pipeline GitLab CI
# Simula a execução dos jobs do .gitlab-ci.yml localmente

set -e  # Encerra em caso de erro

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para imprimir com cor
print_status() {
    echo -e "${2}${1}${NC}"
}

print_stage() {
    echo ""
    echo "======================================"
    echo -e "${BLUE}$1${NC}"
    echo "======================================"
    echo ""
}

print_job() {
    echo -e "${YELLOW}▶ $1${NC}"
}

# Verificar se está no diretório correto
if [ ! -f "package.json" ]; then
    print_status "❌ Erro: Execute este script na raiz do projeto shared-ui" "$RED"
    exit 1
fi

# Configurar variáveis de ambiente simulando CI
export CI=true
export FROZEN_LOCKFILE=true
export DISABLE_TELEMETRY=true

# Iniciar validação
print_status "🚀 Iniciando validação do pipeline GitLab CI" "$BLUE"
print_status "Simulando execução local dos jobs..." "$BLUE"
echo ""

# ==============================================
# STAGE: INSTALL
# ==============================================
print_stage "📦 STAGE: Install"

print_job "Job: install"
print_status "Instalando dependências com pnpm..." "$YELLOW"
if pnpm install --frozen-lockfile; then
    print_status "✅ Dependências instaladas com sucesso" "$GREEN"
else
    print_status "❌ Falha ao instalar dependências" "$RED"
    exit 1
fi

# ==============================================
# STAGE: LINT
# ==============================================
print_stage "🔍 STAGE: Lint"

print_job "Job: lint"
print_status "Executando ESLint..." "$YELLOW"
if pnpm run lint; then
    print_status "✅ Lint passou" "$GREEN"
else
    print_status "❌ Lint falhou" "$RED"
    exit 1
fi

print_job "Job: type-check"
print_status "Executando verificação de tipos..." "$YELLOW"
if pnpm run typecheck; then
    print_status "✅ Type check passou" "$GREEN"
else
    print_status "❌ Type check falhou" "$RED"
    exit 1
fi

# ==============================================
# STAGE: TEST
# ==============================================
print_stage "🧪 STAGE: Test"

print_job "Job: test"
print_status "Executando testes..." "$YELLOW"
if pnpm test; then
    print_status "✅ Testes passaram" "$GREEN"
else
    print_status "❌ Testes falharam" "$RED"
    exit 1
fi

print_job "Job: security-check (informativo)"
print_status "Executando auditoria de segurança..." "$YELLOW"
if pnpm audit --audit-level=moderate; then
    print_status "✅ Sem vulnerabilidades" "$GREEN"
else
    print_status "⚠️  Vulnerabilidades encontradas (não crítico)" "$YELLOW"
fi

# ==============================================
# STAGE: BUILD
# ==============================================
print_stage "🏗️  STAGE: Build"

print_job "Job: build"
print_status "Executando build da biblioteca..." "$YELLOW"
if pnpm run build; then
    print_status "✅ Build concluído" "$GREEN"
else
    print_status "❌ Build falhou" "$RED"
    exit 1
fi

# Validar arquivos de saída
print_status "Validando arquivos de saída..." "$YELLOW"
if [ ! -d "dist" ]; then
    print_status "❌ Erro: diretório dist/ não foi criado" "$RED"
    exit 1
fi
if [ ! -d "types" ]; then
    print_status "❌ Erro: diretório types/ não foi criado" "$RED"
    exit 1
fi
print_status "✅ Arquivos de saída validados" "$GREEN"

# Validar exports
print_job "Validando exports..."
if pnpm run validate:exports; then
    print_status "✅ Exports validados" "$GREEN"
else
    print_status "⚠️  Validação de exports falhou (não crítico)" "$YELLOW"
fi

# ==============================================
# RESUMO FINAL
# ==============================================
echo ""
echo "======================================"
print_status "✅ VALIDAÇÃO COMPLETA" "$GREEN"
echo "======================================"
echo ""
print_status "Todos os jobs do pipeline passaram com sucesso!" "$GREEN"
echo ""
echo "Pipeline simulado:"
echo "  ✅ install"
echo "  ✅ lint"
echo "  ✅ type-check"
echo "  ✅ test"
echo "  ⚠️  security-check (informativo)"
echo "  ✅ build"
echo ""
print_status "O código está pronto para push!" "$GREEN"
echo ""

# Estatísticas
if [ -d "dist" ]; then
    echo "📊 Estatísticas:"
    echo "   Tamanho do build: $(du -sh dist | cut -f1)"
    if [ -d "coverage" ]; then
        echo "   Cobertura: $(grep -o '[0-9.]*%' coverage/index.html | head -1 || echo 'N/A')"
    fi
fi

exit 0
