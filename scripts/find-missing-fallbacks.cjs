const fs = require('fs')
const path = require('path')

/**
 * Script para identificar tokens CSS do GovBR que não possuem fallbacks
 */

// Tokens conhecidos com seus fallbacks
const KNOWN_FALLBACKS = {
  // Core colors
  '--interactive': '#1351B4',
  '--interactive-dark': '#0c326f',
  '--interactive-darker': '#0a2756',
  '--interactive-light': '#5992ed',
  '--color': '#333333',
  '--color-dark': '#000000',
  '--color-lightest': '#ffffff',
  '--focus': '#1351B4',

  // Gray scale
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

  // Feedback colors
  '--feedback-error-vivid': '#D04F4F',
  '--feedback-success-vivid': '#168821',
  '--feedback-warning-vivid': '#F29F05',
  '--feedback-info-vivid': '#007FA3',

  // Blue variations
  '--blue-cool-vivid-50': '#007FA3',
  '--blue-cool-vivid-60': '#074b69',
  '--blue-cool-vivid-70': '#074b69',
  '--blue-warm-vivid-70': '#1351B4',
  '--blue-warm-vivid-40': '#5992ed',
  '--blue-warm-vivid-80': '#0c326f',

  // Spacing
  '--spacing-scale-half': '0.5rem',
  '--spacing-scale-base': '1rem',
  '--spacing-scale-1xh': '0.75rem',
  '--spacing-scale-2xh': '1.5rem',
  '--spacing-scale-4x': '2rem',

  // Typography
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

  // Surface
  '--surface-rounder-sm': '4px',
  '--surface-rounder-md': '8px',
  '--surface-rounder-lg': '16px',
}

function findTokensInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const tokenRegex = /var\(--([^,)]+)(?:,\s*([^)]+))?\)/g
    const tokensFound = []

    let match
    while ((match = tokenRegex.exec(content)) !== null) {
      const tokenName = `--${match[1]}`
      const fallback = match[2]

      tokensFound.push({
        token: tokenName,
        hasFallback: !!fallback,
        fallback: fallback?.trim(),
        line: content.substring(0, match.index).split('\n').length,
        context: content.substring(
          Math.max(0, match.index - 30),
          match.index + match[0].length + 30,
        ),
      })
    }

    return tokensFound
  } catch (error) {
    console.error(`❌ Erro ao processar ${filePath}:`, error.message)
    return []
  }
}

function scanDirectory(dirPath) {
  const results = {
    filesScanned: 0,
    tokensFound: 0,
    tokensWithoutFallbacks: [],
    tokensMissingKnownFallbacks: [],
  }

  function scanRecursively(currentPath) {
    const items = fs.readdirSync(currentPath)

    for (const item of items) {
      const fullPath = path.join(currentPath, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        scanRecursively(fullPath)
      } else if (item.endsWith('.ts') && !item.endsWith('.d.ts')) {
        results.filesScanned++
        const tokens = findTokensInFile(fullPath)
        results.tokensFound += tokens.length

        for (const tokenInfo of tokens) {
          if (!tokenInfo.hasFallback) {
            results.tokensWithoutFallbacks.push({
              ...tokenInfo,
              file: fullPath.replace(process.cwd(), '').replace(/\\/g, '/'),
            })

            // Verificar se temos um fallback conhecido para este token
            if (KNOWN_FALLBACKS[tokenInfo.token]) {
              results.tokensMissingKnownFallbacks.push({
                ...tokenInfo,
                file: fullPath.replace(process.cwd(), '').replace(/\\/g, '/'),
                suggestedFallback: KNOWN_FALLBACKS[tokenInfo.token],
              })
            }
          }
        }
      }
    }
  }

  scanRecursively(dirPath)
  return results
}

// Executar análise
console.log('🔍 Analisando tokens CSS sem fallbacks...\n')

const themeDir = path.join(process.cwd(), 'src', 'theme')
const results = scanDirectory(themeDir)

console.log(`📊 Resumo da análise:`)
console.log(`  📁 Arquivos escaneados: ${results.filesScanned}`)
console.log(`  🏷️  Total de tokens encontrados: ${results.tokensFound}`)
console.log(`  ⚠️  Tokens sem fallbacks: ${results.tokensWithoutFallbacks.length}`)
console.log(
  `  🔧 Tokens com fallbacks conhecidos disponíveis: ${results.tokensMissingKnownFallbacks.length}\n`,
)

if (results.tokensMissingKnownFallbacks.length > 0) {
  console.log('🔧 Tokens que podem ter fallbacks adicionados automaticamente:')

  const grouped = {}
  for (const token of results.tokensMissingKnownFallbacks) {
    if (!grouped[token.file]) {
      grouped[token.file] = []
    }
    grouped[token.file].push(token)
  }

  for (const [file, tokens] of Object.entries(grouped)) {
    console.log(`\n📄 ${file}:`)
    for (const token of tokens) {
      console.log(`   Linha ${token.line}: ${token.token} → ${token.suggestedFallback}`)
    }
  }
}

if (results.tokensWithoutFallbacks.length > results.tokensMissingKnownFallbacks.length) {
  console.log('\n❓ Tokens sem fallbacks conhecidos (precisam de investigação manual):')

  const unknownTokens = results.tokensWithoutFallbacks.filter(
    (token) => !KNOWN_FALLBACKS[token.token],
  )

  const groupedUnknown = {}
  for (const token of unknownTokens) {
    if (!groupedUnknown[token.token]) {
      groupedUnknown[token.token] = []
    }
    groupedUnknown[token.token].push(token)
  }

  for (const [tokenName, occurrences] of Object.entries(groupedUnknown)) {
    console.log(`\n🏷️  ${tokenName} (${occurrences.length} ocorrências):`)
    for (const occurrence of occurrences) {
      console.log(`   📄 ${occurrence.file}:${occurrence.line}`)
    }
  }
}

if (results.tokensWithoutFallbacks.length === 0) {
  console.log('✅ Todos os tokens possuem fallbacks!')
} else {
  console.log(`\n⚠️  Total de ${results.tokensWithoutFallbacks.length} tokens necessitam atenção.`)
}
