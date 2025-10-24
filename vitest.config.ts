import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './.storybook/vitest.setup.ts',
    isolate: true,
    // Increase timeouts to avoid flakes on slower CI machines
    testTimeout: 15000,
    hookTimeout: 15000,
    teardownTimeout: 15000,
    // Be conservative with parallelism to avoid worker starvation/timeouts
    maxWorkers: 1,
    // Use a safer worker pool in CI environments that restrict threads
    // Threads are faster locally; forks are safer for some sandboxes/CI
    // Nota: process.env.CI é avaliado em runtime; não é necessária diretiva @ts-expect-error aqui
    pool: process.env.CI ? 'forks' : 'threads',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})
