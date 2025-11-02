'use client'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Section } from './index'

describe('Section', () => {
  it('exibe título, conteúdo e ações', () => {
    render(
      <Section title="Informações" subtitle="Detalhes" actions={<button>Editar</button>}>
        <p>Conteúdo da seção</p>
      </Section>,
    )

    expect(screen.getByText('Informações')).toBeInTheDocument()
    expect(screen.getByText('Detalhes')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo da seção')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Editar' })).toBeInTheDocument()
  })

  it('permite colapsar quando configurada como collapsible', () => {
    render(
      <Section title="Configurações" collapsible defaultExpanded>
        <span>Config interna</span>
      </Section>,
    )

    const toggleButton = screen.getByRole('button', { name: /recolher seção/i })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
