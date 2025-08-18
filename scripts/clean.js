#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const root = path.resolve(__dirname, '..')
const targets = [
  'dist',
  'types',
  '.vite',
  '.vite-temp',
  'storybook-static',
  'coverage',
  '.cache',
  '.turbo',
  'node_modules/.cache',
]

function rm(target) {
  const p = path.join(root, target)
  try {
    if (fs.existsSync(p)) {
      fs.rmSync(p, { recursive: true, force: true })
      console.log(`removed: ${path.relative(root, p)}`)
    }
  } catch (err) {
    console.error(`failed to remove ${p}:`, err.message)
  }
}

function main() {
  const args = process.argv.slice(2)
  const isFull = args.includes('--full') || args.includes('-f')

  console.log('clean: starting')

  // Quando solicitar remoção completa, pedir confirmação interativa
  if (isFull) {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    const question = (q) => new Promise((res) => rl.question(q, (ans) => res(ans)))
    // pergunta ao usuário
    console.log('\nWARNING: --full will remove node_modules and other persistent caches.')
    question('Are you sure you want to continue? Type "yes" to proceed: ').then((answer) => {
      rl.close()
      if (answer && answer.toLowerCase() === 'yes') {
        targets.forEach((t) => rm(t))
        console.log('clean: --full specified — removing node_modules')
        rm('node_modules')
        console.log('clean: done')
      } else {
        console.log('clean: aborted by user')
      }
    })
    return
  }

  targets.forEach((t) => rm(t))

  console.log('clean: done')
}

// Em ESM, determine se o arquivo foi chamado diretamente
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  // main() pode ser assíncrono quando precisa de input; chamamos sem await pois tratamos internamente
  main()
}

export { main, rm }
