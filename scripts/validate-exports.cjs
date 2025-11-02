#!/usr/bin/env node

/**
 * Script de validação de exports da biblioteca @anpdgovbr/shared-ui
 *
 * Verifica se todos os componentes mencionados no ISSUE estão sendo exportados corretamente
 * nos arquivos de tipos gerados.
 */

const fs = require('fs')
const path = require('path')

const COMPONENTS_TO_CHECK = [
  'GovBRLoading',
  'GovBRCheckbox',
  'GovBRButton',
  'GovBRInput',
  'GovBRFormInput',
  'GovBRAvatar',
  'GovBRCard',
  'GovBRBreadcrumb',
  'GovBRRadio',
  'GovBRSwitch',
  'GovBRItem',
  'GovBRDateTimePicker',
  'GovBRDivider',
  'GovBRTabs',
  'SideMenu',
  'Chip',
  'ChipsList',
  'AutoSync',
]

const TYPES_TO_CHECK = [
  'LoadingAnimationProps',
  'GovBRCheckboxProps',
  'GovBRButtonProps',
  'GovBRInputProps',
  'GovBRFormInputProps',
  'GovBRAvatarProps',
  'GovBRCardProps',
  'GovBRBreadcrumbProps',
  'GovBRRadioProps',
  'GovBRSwitchProps',
  'GovBRItemProps',
  'GovBRDateTimePickerProps',
  'GovBRDividerProps',
  'GovBRTabsProps',
  'SideMenuProps',
  'ChipProps',
  'ChipsListProps',
  'AutoSyncProps',
]

const HELPERS_TO_CHECK = ['IconMap', 'mapMuiColorToGovbrClass']

const THEMES_TO_CHECK = ['govbrTheme', 'GovBRThemeProvider', 'anpdTheme', 'ANPDThemeProvider']

console.log('🔍 Validando exports da biblioteca @anpdgovbr/shared-ui\n')

// Verificar se os arquivos de tipo foram gerados
const typesDir = path.join(__dirname, '..', 'types', 'src')
const mainTypeFile = path.join(typesDir, 'index.d.ts')
const componentsTypeFile = path.join(typesDir, 'components', 'index.d.ts')

if (!fs.existsSync(mainTypeFile)) {
  console.error('❌ Arquivo types/src/index.d.ts não encontrado!')
  console.error('   Execute: pnpm run build:types')
  process.exit(1)
}

if (!fs.existsSync(componentsTypeFile)) {
  console.error('❌ Arquivo types/src/components/index.d.ts não encontrado!')
  console.error('   Execute: pnpm run build:types')
  process.exit(1)
}

// Ler os arquivos de tipo
const mainTypeContent = fs.readFileSync(mainTypeFile, 'utf-8')
const componentsTypeContent = fs.readFileSync(componentsTypeFile, 'utf-8')

let errors = 0
let warnings = 0

// Verificar componentes
console.log('📦 Verificando componentes...')
for (const component of COMPONENTS_TO_CHECK) {
  // Verificar se o componente está exportado no arquivo de componentes
  const componentExportPattern = new RegExp(
    `export\\s+(?:\\*\\s+from|\\{[^}]*\\b${component}\\b[^}]*\\}\\s+from)`,
    'm',
  )

  if (!componentExportPattern.test(componentsTypeContent)) {
    console.error(`   ❌ ${component} não encontrado em types/src/components/index.d.ts`)
    errors++
  } else {
    console.log(`   ✅ ${component}`)
  }
}

// Verificar tipos
console.log('\n🔤 Verificando tipos...')
for (const type of TYPES_TO_CHECK) {
  const typeExportPattern = new RegExp(
    `export\\s+type\\s+\\{[^}]*\\b${type}\\b[^}]*\\}|export\\s+(?:type\\s+)?{[^}]*\\b${type}\\b[^}]*}`,
    'm',
  )

  if (!typeExportPattern.test(componentsTypeContent)) {
    console.error(`   ⚠️  ${type} não encontrado explicitamente (pode estar em export *)`)
    warnings++
  } else {
    console.log(`   ✅ ${type}`)
  }
}

// Verificar helpers
console.log('\n🛠️  Verificando helpers...')
for (const helper of HELPERS_TO_CHECK) {
  const helperExportPattern = new RegExp(
    `export\\s+(?:\\*\\s+from\\s+['"']\\./helpers|\\{[^}]*${helper}[^}]*\\})`,
    'm',
  )

  if (!helperExportPattern.test(mainTypeContent)) {
    console.error(`   ❌ ${helper} não encontrado em types/src/index.d.ts`)
    errors++
  } else {
    console.log(`   ✅ ${helper}`)
  }
}

// Verificar temas
console.log('\n🎨 Verificando temas...')
for (const theme of THEMES_TO_CHECK) {
  const themeExportPattern = new RegExp(`export\\s+\\{\\s*${theme}\\s*\\}`, 'm')

  if (!themeExportPattern.test(mainTypeContent)) {
    console.error(`   ❌ ${theme} não encontrado em types/src/index.d.ts`)
    errors++
  } else {
    console.log(`   ✅ ${theme}`)
  }
}

// Verificar arquivo types/index.d.ts (re-export)
console.log('\n📝 Verificando re-export principal...')
const mainReExportFile = path.join(__dirname, '..', 'types', 'index.d.ts')
if (!fs.existsSync(mainReExportFile)) {
  console.error('   ❌ Arquivo types/index.d.ts não encontrado!')
  errors++
} else {
  const mainReExportContent = fs.readFileSync(mainReExportFile, 'utf-8')
  if (!mainReExportContent.includes("export * from './src/index'")) {
    console.error('   ❌ types/index.d.ts não re-exporta de ./src/index')
    errors++
  } else {
    console.log('   ✅ types/index.d.ts está correto')
  }
}

// Verificar package.json
console.log('\n📦 Verificando package.json...')
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'))

const typesField = packageJson.types
const exportsTypes = packageJson.exports?.['.']?.types

console.log(`   types: ${typesField}`)
console.log(`   exports['.'].types: ${exportsTypes}`)

if (typesField !== './types/index.d.ts') {
  console.error('   ⚠️  Campo "types" deveria apontar para ./types/index.d.ts')
  warnings++
} else {
  console.log('   ✅ Campo "types" está correto')
}

if (exportsTypes !== './types/src/index.d.ts') {
  console.error('   ⚠️  Campo "exports[\'.\'].types" deveria apontar para ./types/src/index.d.ts')
  warnings++
} else {
  console.log('   ✅ Campo "exports[\'.\'].types" está correto')
}

// Resumo
console.log('\n' + '='.repeat(60))
if (errors === 0 && warnings === 0) {
  console.log('✅ SUCESSO! Todos os exports estão corretos.')
  console.log('\n💡 Os componentes devem ser importáveis com:')
  console.log('   import { GovBRLoading, GovBRCheckbox } from "@anpdgovbr/shared-ui"')
  process.exit(0)
} else {
  console.error(`\n❌ Validação falhou com ${errors} erro(s) e ${warnings} aviso(s)`)
  if (errors > 0) {
    console.error('\n🔧 Para corrigir:')
    console.error('   1. Execute: pnpm run build:types')
    console.error(
      '   2. Verifique se todos os componentes estão exportados em src/components/index.ts',
    )
    console.error('   3. Execute este script novamente')
  }
  process.exit(errors > 0 ? 1 : 0)
}
