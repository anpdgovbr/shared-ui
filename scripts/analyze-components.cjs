const fs = require('fs')
const path = require('path')

/**
 * Análise completa de fallbacks e propriedades faltando nos componentes
 */

// Tokens conhecidos que devem ter fallbacks
const EXPECTED_TOKENS = {
  // Core tokens
  '--interactive': '#1351B4',
  '--interactive-dark': '#0c326f',
  '--interactive-darker': '#0a2756',
  '--interactive-light': '#5992ed',
  '--color': '#333333',
  '--color-dark': '#000000',
  '--color-lightest': '#ffffff',
  '--focus': '#1351B4',

  // Feedback
  '--feedback-error-vivid': '#D04F4F',
  '--feedback-error-dark': '#B73E3E',
  '--feedback-error-darker': '#9E2B2B',
  '--feedback-error-light': '#F8A8A8',
  '--feedback-success-vivid': '#168821',
  '--feedback-success-dark': '#0F5E1A',
  '--feedback-success-darker': '#0A4A15',
  '--feedback-success-light': '#7ED788',
  '--feedback-warning-vivid': '#F29F05',
  '--feedback-warning-dark': '#C8850A',
  '--feedback-warning-darker': '#9F6B08',
  '--feedback-warning-light': '#FFD966',

  // Gray scale
  '--gray-10': '#eeeeee',
  '--gray-20': '#cccccc',
  '--gray-30': '#bbbbbb',
  '--gray-40': '#999999',
  '--gray-50': '#888888',
  '--gray-60': '#777777',
  '--gray-70': '#666666',
  '--gray-80': '#444444',

  // Typography
  '--font-family-base': '"Rawline", "Raleway", sans-serif',
  '--font-weight-light': '300',
  '--font-weight-regular': '400',
  '--font-weight-medium': '500',
  '--font-weight-semi-bold': '600',
  '--font-weight-bold': '700',
  '--font-weight-extra-bold': '800',
  '--font-size-scale-down-02': '0.75rem',
  '--font-size-scale-down-01': '0.875rem',
  '--font-size-scale-base': '1rem',
  '--font-size-scale-up-01': '1.125rem',
  '--font-size-scale-up-02': '1.25rem',
  '--font-size-scale-up-03': '1.5rem',
  '--font-size-scale-up-04': '2rem',
  '--font-size-scale-up-05': '2.5rem',
  '--font-size-scale-up-06': '3rem',
  '--font-line-height-tight': '1.2',
  '--font-line-height-medium': '1.45',
  '--font-line-height-loose': '1.6',
  '--font-line-height-low': '1.15',
  '--font-line-height-high': '1.75',

  // Spacing
  '--spacing-scale-quarter': '0.125rem',
  '--spacing-scale-half': '0.5rem',
  '--spacing-scale-base': '1rem',
  '--spacing-scale-1xh': '0.75rem',
  '--spacing-scale-2xh': '1.5rem',
  '--spacing-scale-2x': '2rem',
  '--spacing-scale-3x': '3rem',
  '--spacing-scale-4x': '4rem',
  '--spacing-scale-5x': '5rem',
  '--spacing-scale-6x': '6rem',
  '--spacing-scale-7x': '7rem',
  '--spacing-scale-8x': '8rem',

  // Surface
  '--surface-rounder-sm': '4px',
  '--surface-rounder-md': '8px',
  '--surface-rounder-lg': '16px',

  // Shadows
  '--shadow-level-1': '0 2px 4px rgba(0,0,0,0.1)',
  '--shadow-level-2': '0 4px 8px rgba(0,0,0,0.12)',
  '--shadow-level-3': '0 8px 16px rgba(0,0,0,0.15)',
  '--shadow-level-4': '0 12px 24px rgba(0,0,0,0.18)',
  '--shadow-level-5': '0 16px 32px rgba(0,0,0,0.2)',

  // Background
  '--background': '#ffffff',
  '--background-light': '#f8f8f8',
  '--background-alternative': '#f6f6f6',
}

// Propriedades comuns por tipo de componente
const COMMON_PROPERTIES = {
  Button: [
    'padding',
    'margin',
    'fontSize',
    'fontWeight',
    'fontFamily',
    'lineHeight',
    'borderRadius',
    'border',
    'backgroundColor',
    'color',
    'boxShadow',
    'cursor',
    'textTransform',
    'letterSpacing',
    'minWidth',
    'minHeight',
    'transition',
    'outline',
    'outlineOffset',
  ],
  Input: [
    'padding',
    'margin',
    'fontSize',
    'fontWeight',
    'fontFamily',
    'lineHeight',
    'borderRadius',
    'border',
    'backgroundColor',
    'color',
    'placeholder',
    'outline',
    'boxShadow',
    'width',
    'height',
    'minHeight',
  ],
  Typography: [
    'fontSize',
    'fontWeight',
    'fontFamily',
    'lineHeight',
    'color',
    'letterSpacing',
    'textTransform',
    'margin',
    'padding',
  ],
  Card: [
    'padding',
    'margin',
    'borderRadius',
    'border',
    'backgroundColor',
    'boxShadow',
    'overflow',
    'minHeight',
    'width',
  ],
  Table: [
    'borderCollapse',
    'borderSpacing',
    'border',
    'backgroundColor',
    'color',
    'fontSize',
    'fontFamily',
    'padding',
  ],
}

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const fileName = path.basename(filePath, '.ts')

    // Encontrar tokens sem fallbacks
    const tokensWithoutFallbacks = []
    const tokenRegex = /var\(--([^,)]+)\)/g
    let match

    while ((match = tokenRegex.exec(content)) !== null) {
      const tokenName = `--${match[1]}`
      tokensWithoutFallbacks.push({
        token: tokenName,
        line: content.substring(0, match.index).split('\\n').length,
        hasKnownFallback: !!EXPECTED_TOKENS[tokenName],
        suggestedFallback: EXPECTED_TOKENS[tokenName],
      })
    }

    // Propriedades implementadas
    const implementedProperties = []
    const propertyRegex = /\\s*([a-zA-Z][a-zA-Z0-9]*(?:[A-Z][a-z]*)*?)\\s*:/g
    let propMatch

    while ((propMatch = propertyRegex.exec(content)) !== null) {
      const propName = propMatch[1]
      if (!propName.includes('&') && !propName.includes('.') && propName !== 'styleOverrides') {
        implementedProperties.push(propName)
      }
    }

    // Determinar tipo de componente
    let componentType = 'Other'
    if (fileName.includes('Button')) componentType = 'Button'
    else if (
      fileName.includes('Input') ||
      fileName.includes('TextField') ||
      fileName.includes('Form')
    )
      componentType = 'Input'
    else if (fileName.includes('Typography')) componentType = 'Typography'
    else if (fileName.includes('Card')) componentType = 'Card'
    else if (fileName.includes('Table')) componentType = 'Table'

    // Propriedades esperadas mas não implementadas
    const expectedProps = COMMON_PROPERTIES[componentType] || []
    const missingProperties = expectedProps.filter(
      (prop) =>
        !implementedProperties.some((impl) => impl.toLowerCase().includes(prop.toLowerCase())),
    )

    return {
      file: fileName,
      componentType,
      tokensWithoutFallbacks: tokensWithoutFallbacks.filter((t) => !t.hasKnownFallback),
      tokensNeedingFallbacks: tokensWithoutFallbacks.filter((t) => t.hasKnownFallback),
      implementedProperties: [...new Set(implementedProperties)],
      missingProperties,
      totalTokens: tokensWithoutFallbacks.length,
    }
  } catch (error) {
    return {
      file: path.basename(filePath, '.ts'),
      error: error.message,
    }
  }
}

// Analisar todos os arquivos de componentes
const componentsDir = path.join(process.cwd(), 'src', 'theme', 'components')
const componentFiles = fs
  .readdirSync(componentsDir)
  .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
  .map((file) => path.join(componentsDir, file))

console.log('📊 ANÁLISE COMPLETA DE COMPONENTES\\n')

let totalTokensWithoutFallbacks = 0
let totalTokensNeedingFallbacks = 0

for (const filePath of componentFiles) {
  const analysis = analyzeFile(filePath)

  if (analysis.error) {
    console.log(`❌ ${analysis.file}: ${analysis.error}`)
    continue
  }

  console.log(`\\n🔍 **${analysis.file}** (${analysis.componentType})`)
  console.log(`   📊 Tokens totais: ${analysis.totalTokens}`)

  if (analysis.tokensNeedingFallbacks.length > 0) {
    console.log(`   ⚠️  Tokens sem fallbacks (${analysis.tokensNeedingFallbacks.length}):`)
    analysis.tokensNeedingFallbacks.forEach((token) => {
      console.log(`      ${token.token} → ${token.suggestedFallback}`)
    })
    totalTokensNeedingFallbacks += analysis.tokensNeedingFallbacks.length
  }

  if (analysis.tokensWithoutFallbacks.length > 0) {
    console.log(`   ❓ Tokens desconhecidos (${analysis.tokensWithoutFallbacks.length}):`)
    analysis.tokensWithoutFallbacks.forEach((token) => {
      console.log(`      ${token.token}`)
    })
    totalTokensWithoutFallbacks += analysis.tokensWithoutFallbacks.length
  }

  if (analysis.missingProperties.length > 0) {
    console.log(`   🔧 Propriedades comuns faltando (${analysis.missingProperties.length}):`)
    analysis.missingProperties.forEach((prop) => {
      console.log(`      ${prop}`)
    })
  }

  if (
    analysis.tokensNeedingFallbacks.length === 0 &&
    analysis.tokensWithoutFallbacks.length === 0 &&
    analysis.missingProperties.length === 0
  ) {
    console.log('   ✅ Componente completo!')
  }
}

console.log(`\\n📈 **RESUMO GERAL:**`)
console.log(`   ⚠️  Total de tokens precisando fallbacks: ${totalTokensNeedingFallbacks}`)
console.log(`   ❓ Total de tokens desconhecidos: ${totalTokensWithoutFallbacks}`)
console.log(`   📁 Arquivos analisados: ${componentFiles.length}`)
