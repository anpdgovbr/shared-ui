'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Loader } from './index'

describe('Loader', () => {
  it('renderiza indicador e mensagem', () => {
    render(<Loader message="Carregando dados" size={32} />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.getByText('Carregando dados')).toBeInTheDocument()
  })

  it('aplica layout fullscreen quando solicitado', () => {
    render(<Loader fullscreen message="Aguarde" />)

    const container = screen.getByRole('progressbar').parentElement
    expect(container).toHaveStyle({ minHeight: '40vh' })
  })
})
