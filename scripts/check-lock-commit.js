#!/usr/bin/env node
import { execSync } from 'child_process'

function getStagedFiles() {
  const stdout = execSync('git diff --name-only --cached', { encoding: 'utf8' })
  return stdout
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
}

function safeParse(jsonString) {
  try {
    return JSON.parse(jsonString)
  } catch {
    return null
  }
}

function depsChanged(oldPkg, newPkg) {
  const keys = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']
  for (const k of keys) {
    const a = oldPkg?.[k] || {}
    const b = newPkg?.[k] || {}
    if (JSON.stringify(a) !== JSON.stringify(b)) return true
  }
  return false
}

try {
  const staged = getStagedFiles()

  // If package.json is not staged, nothing to check
  if (!staged.includes('package.json')) {
    process.exit(0)
  }

  // Get staged version of package.json
  let stagedPkgRaw = ''
  try {
    stagedPkgRaw = execSync('git show :package.json', { encoding: 'utf8' })
  } catch (err) {
    console.error('Não foi possível ler a versão staged de package.json:', err.message)
    process.exit(1)
  }

  const stagedPkg = safeParse(stagedPkgRaw)

  // Get HEAD version of package.json to compare; if no HEAD (initial commit), treat as empty
  let headPkgRaw = ''
  try {
    headPkgRaw = execSync('git show HEAD:package.json', { encoding: 'utf8' })
  } catch {
    headPkgRaw = '{}'
  }
  const headPkg = safeParse(headPkgRaw)

  const dependencyChange = depsChanged(headPkg, stagedPkg)

  // If dependencies changed, package-lock.json must be staged/updated as well
  if (dependencyChange) {
    if (!staged.includes('package-lock.json')) {
      console.error(
        '\nDetectadas alterações nas dependências em package.json, mas package-lock.json NÃO está staged.',
      )
      console.error(
        'Por favor rode `npm install` (ou `npm install --package-lock-only`) e adicione o package-lock.json ao commit.',
      )
      console.error('Se a alteração de dependência foi intencional, faça:')
      console.error('  npm install')
      console.error('  git add package-lock.json')
      console.error('  git commit --amend --no-edit (ou refazer o commit)')
      process.exit(1)
    }
  }

  // All checks passed
  process.exit(0)
} catch (err) {
  console.error('Erro ao verificar staged files:', err.message)
  process.exit(1)
}
