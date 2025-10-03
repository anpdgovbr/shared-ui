const fs = require('fs')
const path = require('path')

/**
 * Script para adicionar automaticamente fallbacks conhecidos aos tokens CSS
 */

// Mapeamento de tokens conhecidos com seus fallbacks
const KNOWN_FALLBACKS = {
  '--interactive': '#1351B4',
  '--interactive-dark': '#0c326f',
  '--interactive-darker': '#0a2756',
  '--interactive-light': '#5992ed',
  '--color': '#333333',
  '--color-dark': '#000000',
  '--color-lightest': '#ffffff',
  '--focus': '#1351B4',
  '--gray-1': '#fcfcfc',
  '--gray-2': '#f8f8f8',
  '--gray-3': '#f6f6f6',
  '--gray-10': '#eeeeee',
  '--gray-20': '#cccccc',
  '--gray-30': '#bbbbbb',
  '--gray-40': '#999999',
  '--gray-50': '#888888',
  '--gray-60': '#777777',
  '--gray-70': '#666666',
  '--gray-80': '#444444',
  '--gray-90': '#222222',
  '--feedback-error-vivid': '#D04F4F',
  '--feedback-success-vivid': '#168821',
  '--feedback-warning-vivid': '#F29F05',
  '--feedback-info-vivid': '#007FA3',
  '--blue-cool-vivid-50': '#007FA3',
  '--blue-cool-vivid-60': '#074b69',
  '--blue-cool-vivid-70': '#074b69',
  '--blue-warm-vivid-70': '#1351B4',
  '--blue-warm-vivid-40': '#5992ed',
  '--blue-warm-vivid-80': '#0c326f',
  '--spacing-scale-half': '0.5rem',
  '--spacing-scale-base': '1rem',
  '--spacing-scale-1xh': '0.75rem',
  '--spacing-scale-2xh': '1.5rem',
  '--spacing-scale-4x': '2rem',
  '--font-family-base': '"Rawline", "Raleway", sans-serif',
  '--font-weight-regular': '400',
  '--font-weight-medium': '500',
  '--font-weight-semi-bold': '600',
  '--font-weight-bold': '700',
  '--font-weight-extra-bold': '800',
  '--font-size-scale-base': '1rem',
  '--font-size-scale-down-01': '0.875rem',
  '--font-size-scale-up-01': '1.125rem',
  '--font-size-scale-up-02': '1.25rem',
  '--font-size-scale-up-03': '1.5rem',
  '--font-size-scale-up-04': '2rem',
  '--font-size-scale-up-05': '2.5rem',
  '--font-size-scale-up-06': '3rem',
  '--font-line-height-tight': '1.2',
  '--font-line-height-medium': '1.45',
  '--font-line-height-loose': '1.6',
  '--surface-rounder-sm': '4px',
  '--surface-rounder-md': '8px',
  '--surface-rounder-lg': '16px',
}

function addFallbacksToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modifications = 0

    // Buscar por tokens sem fallbacks e adicionar fallbacks conhecidos
    const tokenRegex = /var\(--([^,)]+)\)/g

    content = content.replace(tokenRegex, (match, tokenName) => {
      const fullTokenName = `--${tokenName}`
      if (KNOWN_FALLBACKS[fullTokenName]) {
        modifications++
        return `var(${fullTokenName}, ${KNOWN_FALLBACKS[fullTokenName]})`
      }
      return match
    })

    if (modifications > 0) {
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(
        `  ✅ ${modifications} fallbacks adicionados: ${path.relative(process.cwd(), filePath)}`,
      )
      return modifications
    } else {
      console.log(`  ℹ️  Nenhuma modificação necessária: ${path.relative(process.cwd(), filePath)}`)
      return 0
    }
  } catch (error) {
    console.error(`  ❌ Erro ao processar ${filePath}:`, error.message)
    return 0
  }
}

function processDirectory(dirPath, description) {
  console.log(`\\n${description}:`)

  let totalModifications = 0
  const files = fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.ts') && !file.endsWith('.d.ts'))
    .map((file) => path.join(dirPath, file))

  for (const filePath of files) {
    const modifications = addFallbacksToFile(filePath)
    totalModifications += modifications
  }

  return totalModifications
}

// Executar adição de fallbacks
console.log('🔧 Adicionando fallbacks automáticos aos tokens conhecidos...')

const themeDir = path.join(process.cwd(), 'src', 'theme')
let totalModifications = 0

// Processar foundations
const foundationsDir = path.join(themeDir, 'foundations')
if (fs.existsSync(foundationsDir)) {
  totalModifications += processDirectory(foundationsDir, '📁 Foundations')
}

// Processar components
const componentsDir = path.join(themeDir, 'components')
if (fs.existsSync(componentsDir)) {
  totalModifications += processDirectory(componentsDir, '🧩 Components')
}

// Processar arquivo principal do tema
const govbrThemePath = path.join(themeDir, 'govbrTheme.ts')
if (fs.existsSync(govbrThemePath)) {
  console.log('\\n🎨 Tema principal:')
  totalModifications += addFallbacksToFile(govbrThemePath)
}

console.log(`\\n✨ Processo concluído!`)
console.log(`📊 Total de ${totalModifications} fallbacks adicionados.`)

if (totalModifications > 0) {
  console.log('\\n🎯 Próximos passos:')
  console.log('1. Execute pnpm run build para verificar se não há erros')
  console.log('2. Execute pnpm run test para garantir compatibilidade')
  console.log('3. Revise tokens não-conhecidos manualmente se necessário')
}
