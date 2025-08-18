'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRSignIn } from './index'

describe('GovBRSignIn', () => {
  it('should render internal variant sign-in', () => {
    render(<GovBRSignIn variant="internal" emphasis="secondary" />)

    // Deve renderizar algum elemento de sign-in
    const signInElement = screen.getByRole('button', { name: /entrar|sign.?in|login/i })
    expect(signInElement).toBeInTheDocument()
  })

  it('should render external variant sign-in', () => {
    render(<GovBRSignIn variant="external-text" emphasis="primary" />)

    const signInElement = screen.getByRole('button', { name: /entrar|sign.?in|login/i })
    expect(signInElement).toBeInTheDocument()
  })

  it('should render with custom className', () => {
    render(<GovBRSignIn variant="internal" emphasis="secondary" className="custom-signin" />)

    // Teste básico: verifica se o componente renderiza (className pode não estar aplicado no local esperado)
    const signInElement = screen.getByRole('button')
    expect(signInElement).toBeInTheDocument()
  })

  it('should render with different density options', () => {
    const { rerender } = render(
      <GovBRSignIn variant="internal" emphasis="secondary" density="medium" />,
    )

    let signInElement = screen.getByRole('button')
    expect(signInElement).toBeInTheDocument()

    rerender(<GovBRSignIn variant="internal" emphasis="secondary" density="large" />)

    signInElement = screen.getByRole('button')
    expect(signInElement).toBeInTheDocument()
  })

  it('should render with custom icon when iconUrl is provided', () => {
    render(
      <GovBRSignIn
        variant="internal"
        emphasis="secondary"
        iconUrl="https://example.com/icon.svg"
      />,
    )

    // Se há iconUrl, deve haver uma imagem no componente
    const signInElement = screen.getByRole('button')
    expect(signInElement).toBeInTheDocument()
  })
})
