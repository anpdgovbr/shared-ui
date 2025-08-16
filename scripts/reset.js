#!/usr/bin/env node
import { spawnSync } from 'child_process'
import path from 'path'
import readline from 'readline'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  return new Promise((res) =>
    rl.question(question, (ans) => {
      rl.close()
      res(ans)
    }),
  )
}

function run(cmd, args, opts = {}) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', shell: true, ...opts })
  if (res.status !== 0) throw new Error(`${cmd} ${args.join(' ')} failed with ${res.status}`)
}

async function main() {
  console.log('\nWARNING: This is a DESTRUCTIVE action.')
  const answer = (await ask('Type "RESET" to proceed: ')) || ''
  if (answer !== 'RESET') {
    console.log('Aborted by user')
    process.exit(0)
  }

  try {
    // Clean fully
    run('node', ['./scripts/clean.js', '--full'])

    // Git cleanup
    run('git', ['clean', '-fdx'])
    run('git', ['reset', '--hard'])

    // Reinstall deps
    run('npm', ['ci'])

    console.log('Reset completed')
  } catch (err) {
    console.error('Reset failed:', err.message)
    process.exit(1)
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  main()
}
