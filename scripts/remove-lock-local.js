#!/usr/bin/env node
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'

// Don't run in CI
if (process.env.CI) {
  console.log('CI environment detected — skipping package-lock removal')
  process.exit(0)
}

const p = path.resolve(process.cwd(), 'package-lock.json')
if (fs.existsSync(p)) {
  try {
    // Se o arquivo estiver trackeado no git, não remova — isso faz o status mostrar deleted
    let isTracked = false
    try {
      execSync('git ls-files --error-unmatch package-lock.json', { stdio: 'ignore' })
      isTracked = true
    } catch {
      isTracked = false
    }

    if (isTracked) {
      console.log('package-lock.json is tracked by git — skipping removal to avoid deleted status')
    } else {
      fs.rmSync(p, { force: true })
      console.log('Removed package-lock.json to force regeneration on install')
    }
  } catch (err) {
    console.error('Failed to remove package-lock.json:', err.message)
    process.exit(1)
  }
} else {
  console.log('No package-lock.json found — nothing to remove')
}
