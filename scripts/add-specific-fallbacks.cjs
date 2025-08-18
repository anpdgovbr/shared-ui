const fs = require('fs')
const path = require('path')

/**
 * Script para adicionar fallbacks específicos identificados na análise
 */

const FALLBACKS_TO_ADD = {
  // Feedback variations
  '--feedback-error-dark': '#B73E3E',
  '--feedback-error-darker': '#9E2B2B',
  '--feedback-error-light': '#F8A8A8',
  '--feedback-success-dark': '#0F5E1A',
  '--feedback-success-darker': '#0A4A15',
  '--feedback-success-light': '#7ED788',
  '--feedback-warning-dark': '#C8850A',
  '--feedback-warning-darker': '#9F6B08',
  '--feedback-warning-light': '#FFD966',

  // Background
  '--background': '#ffffff',
  '--background-light': '#f8f8f8',

  // Spacing extended
  '--spacing-scale-8x': '8rem',

  // Yellow variants (estimated based on other scales)
  '--yellow-vivid-10': '#ffe396',
  '--yellow-vivid-20': '#FFD200',
  '--yellow-vivid-30': '#ddaa01',

  // Blue variants
  '--blue-cool-vivid-10': '#59b9de',

  // Gray variants
  '--gray-5': '#f6f6f6',
}

function addFallbacksToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')
    let modifications = 0

    // Buscar por tokens específicos sem fallbacks
    for (const [token, fallback] of Object.entries(FALLBACKS_TO_ADD)) {
      const regex = new RegExp(
        `var\\(${token.replace(/[-[\]{}()*+?.,\\\\^$|#\s]/g, '\\\\$&')}\\)`,
        'g',
      )
      const replacement = `var(${token}, ${fallback})`

      if (content.match(regex)) {
        content = content.replace(regex, replacement)
        modifications++
      }
    }

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

// Processar arquivos de componentes
console.log('🔧 Adicionando fallbacks específicos identificados...')

const componentsDir = path.join(process.cwd(), 'src', 'theme', 'components')
const componentFiles = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
  .map((file) => path.join(componentsDir, file))

let totalModifications = 0

for (const filePath of componentFiles) {
  const modifications = addFallbacksToFile(filePath)
  totalModifications += modifications
}

console.log(`\\n✨ Total de ${totalModifications} fallbacks adicionados!`)

if (totalModifications > 0) {
  console.log('\\n🎯 Próximo passo: Execute npm run build para verificar')
}
