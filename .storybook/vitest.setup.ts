import '@testing-library/jest-dom'

import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Ensure JSDOM is cleaned between tests to prevent cross-test leakage
afterEach(() => {
  cleanup()
})
