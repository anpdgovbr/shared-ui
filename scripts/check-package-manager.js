#!/usr/bin/env node

/**
 * Script que força o uso de pnpm e bloqueia npm/yarn
 *
 * Este script é executado automaticamente via hook "preinstall" do package.json
 * antes de qualquer instalação de dependências.
 *
 * Se alguém tentar usar npm ou yarn, o script exibirá uma mensagem de erro
 * e abortará a instalação.
 */

const packageManager = process.env.npm_config_user_agent || ''

// Permite se estiver rodando via pnpm ou se for CI do npm (npx, etc)
if (packageManager.startsWith('pnpm/')) {
  // ✅ Usando pnpm - tudo certo!
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

// Se não detectou o package manager (caso raro), permite continuar
// mas exibe um aviso
if (!packageManager) {
  console.warn('\n⚠️  AVISO: Não foi possível detectar o package manager.')
  console.warn('   Este projeto foi configurado para usar pnpm.\n')
}

process.exit(0)
