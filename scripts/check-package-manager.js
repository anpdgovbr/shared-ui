#!/usr/bin/env node

/**
 * Script que força o uso de pnpm e bloqueia npm/yarn
 *
 * Este script é executado automaticamente via hook "preinstall" do package.json
 * antes de qualquer instalação de dependências.
 *
 * Se alguém tentar usar npm ou yarn, o script exibirá uma mensagem de erro
 * e abortará a instalação.
 *
 * @security Valida process.env.npm_config_user_agent antes de usar
 * @resilience Tratamento robusto de casos edge (CI, undefined, etc)
 */

// ✅ Segurança: validação e sanitização do user agent
const userAgent = process.env.npm_config_user_agent
const packageManager = typeof userAgent === 'string' ? userAgent.trim() : ''

// ✅ Resiliência: permitir em ambientes CI específicos
const isCIEnvironment = process.env.CI === 'true' || process.env.GITHUB_ACTIONS === 'true'

// ✅ Resiliência: permitir se for execução direta (node script.js)
const isDirectExecution = !packageManager && process.argv[1]?.includes('check-package-manager.js')

// Permite se estiver rodando via pnpm
if (packageManager.startsWith('pnpm/')) {
  // ✅ Usando pnpm - tudo certo!
  process.exit(0)
}

// ✅ Resiliência: em CI, apenas avisar (não bloquear)
if (isCIEnvironment && !packageManager.startsWith('npm/') && !packageManager.startsWith('yarn/')) {
  console.warn('\n⚠️  CI detectado sem user agent específico - permitindo instalação')
  process.exit(0)
}

// Se for npm ou yarn, bloqueia
if (packageManager.startsWith('npm/') || packageManager.startsWith('yarn/')) {
  console.error('\n')
  console.error('╔════════════════════════════════════════════════════════════════╗')
  console.error('║                                                                ║')
  console.error('║   ❌  ERRO: Este projeto usa pnpm, não npm ou yarn!           ║')
  console.error('║                                                                ║')
  console.error('╚════════════════════════════════════════════════════════════════╝')
  console.error('\n')
  console.error('Por favor, use pnpm para instalar as dependências:\n')
  console.error('  📦 Instalar pnpm globalmente:')
  console.error('     npm install -g pnpm\n')
  console.error('  📦 Ou usar via npx (sem instalar):')
  console.error('     npx pnpm install\n')
  console.error('  📦 Depois de instalar pnpm, execute:')
  console.error('     pnpm install\n')
  console.error('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')
  console.error('Por que pnpm?')
  console.error('  • Instalação mais rápida e eficiente')
  console.error('  • Usa menos espaço em disco (hard links)')
  console.error('  • Melhor gerenciamento de dependências')
  console.error('  • Evita phantom dependencies\n')

  process.exit(1)
}

// ✅ Resiliência: Se não detectou o package manager, avisar mas permitir
// (pode ser execução direta, testes, ou ambiente não padrão)
if (!packageManager || isDirectExecution) {
  console.warn('\n⚠️  AVISO: Não foi possível detectar o package manager.')
  console.warn('   Certifique-se de estar usando pnpm para instalar dependências.\n')
  console.warn('   User agent detectado:', packageManager || '(vazio)')
  console.warn('   Ambiente CI:', isCIEnvironment ? 'Sim' : 'Não')
  console.warn('   Execução direta:', isDirectExecution ? 'Sim' : 'Não')
  console.warn('\n   Continuando instalação... Use "pnpm install" se houver problemas.\n')
  process.exit(0)
}

// ✅ Fallback final: permitir por segurança (evitar bloqueios em casos não mapeados)
process.exit(0)
