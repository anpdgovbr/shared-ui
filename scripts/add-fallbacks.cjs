#!/usr/bin/env node

/**
 * Script para adicionar fallbacks CSS em todas as variáveis var(--token)
 * do tema modular
 */

const fs = require('fs')
const path = require('path')

// Mapeamento de tokens GovBR com seus valores de fallback
const tokenFallbacks = {
  // Font sizes
  '--font-size-scale-up-04': '2.036rem',
  '--font-size-scale-up-06': '2.986rem',
  '--font-size-scale-up-03': '1.728rem',
  '--font-size-scale-up-05': '2.488rem',
  '--font-size-scale-up-02': '1.44rem',
  '--font-size-scale-up-01': '1.2rem',
  '--font-size-scale-base': '1rem',
  '--font-size-scale-down-01': '0.875rem',
  '--font-size-scale-down-02': '0.75rem',

  // Font weights
  '--font-weight-light': '300',
  '--font-weight-regular': '400',
  '--font-weight-medium': '500',
  '--font-weight-semi-bold': '600',
  '--font-weight-bold': '700',

  // Line heights
  '--font-line-height-low': '1.15',
  '--font-line-height-medium': '1.5',
  '--font-line-height-high': '1.75',
  '--font-line-height-extra-high': '2.66',

  // Spacing
  '--spacing-scale-half': '0.5rem',
  '--spacing-scale-base': '1rem',
  '--spacing-scale-2xh': '1.714rem',
  '--spacing-scale-3xh': '2rem',
  '--spacing-scale-4x': '2.857rem',
  '--spacing-scale-2x': '2rem',
  '--spacing-scale-3x': '3rem',
  '--spacing-scale-4xh': '4rem',
  '--spacing-scale-5x': '5rem',
  '--spacing-scale-6x': '6rem',

  // Surface (border radius)
  '--surface-rounder-sm': '4px',
  '--surface-rounder-md': '8px',
  '--surface-rounder-lg': '12px',
  '--surface-rounder-xl': '16px',

  // Shadows
  '--shadow-level-1': '0px 2px 4px rgba(0, 0, 0, 0.1)',
  '--shadow-level-2': '0px 4px 8px rgba(0, 0, 0, 0.12)',
  '--shadow-level-3': '0px 8px 16px rgba(0, 0, 0, 0.15)',
  '--shadow-level-4': '0px 12px 24px rgba(0, 0, 0, 0.18)',

  // Breakpoints
  '--breakpoint-xs': '0px',
  '--breakpoint-sm': '576px',
  '--breakpoint-md': '768px',
  '--breakpoint-lg': '992px',
  '--breakpoint-xl': '1200px',

  // Font family
  '--font-family-base': '"Rawline", "Raleway", sans-serif',
}

function addFallbacksToFile(filePath) {
  console.log(`Processando: ${filePath}`)

  if (!fs.existsSync(filePath)) {
    console.log(`Arquivo não encontrado: ${filePath}`)
    return
  }

  let content = fs.readFileSync(filePath, 'utf8')
  let modified = false

  // Regex para encontrar var(--token) sem fallback
  const varWithoutFallback = /var\(--([^,)]+)\)(?!,)/g

  content = content.replace(varWithoutFallback, (match, token) => {
    const fullToken = `--${token}`
    if (tokenFallbacks[fullToken]) {
      modified = true
      console.log(`  Adicionando fallback para ${fullToken}: ${tokenFallbacks[fullToken]}`)
      return `var(${fullToken}, ${tokenFallbacks[fullToken]})`
    }
    return match
  })

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`  ✅ Arquivo atualizado: ${filePath}`)
  } else {
    console.log(`  ℹ️  Nenhuma modificação necessária: ${filePath}`)
  }
}

// Listar todos os arquivos do tema modular
const foundationsDir = path.join(__dirname, '..', 'src', 'theme', 'foundations')
const componentsDir = path.join(__dirname, '..', 'src', 'theme', 'components')

console.log('🔧 Adicionando fallbacks CSS aos temas modulares...\n')

// Processar foundations
if (fs.existsSync(foundationsDir)) {
  const foundationFiles = fs.readdirSync(foundationsDir).filter((f) => f.endsWith('.ts'))
  console.log('📁 Foundations:')
  foundationFiles.forEach((file) => {
    addFallbacksToFile(path.join(foundationsDir, file))
  })
  console.log()
}

// Processar components
if (fs.existsSync(componentsDir)) {
  const componentFiles = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.ts'))
  console.log('🧩 Components:')
  componentFiles.forEach((file) => {
    addFallbacksToFile(path.join(componentsDir, file))
  })
  console.log()
}

console.log('✨ Processo concluído!')
