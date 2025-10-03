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

  // If dependencies changed, pnpm-lock.yaml must be staged/updated as well
  if (dependencyChange) {
    if (!staged.includes('pnpm-lock.yaml')) {
      console.error(
        '\nDetectadas alterações nas dependências em package.json, mas pnpm-lock.yaml NÃO está staged.',
      )
      console.error('Por favor rode `pnpm install` e adicione o pnpm-lock.yaml ao commit.')
      console.error('Se a alteração de dependência foi intencional, faça:')
      console.error('  pnpm install')
      console.error('  git add pnpm-lock.yaml')
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
