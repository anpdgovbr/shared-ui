'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Chip, ChipsList } from './index'
import type { ChipItemData } from './types'

describe('Chip', () => {
  it('renderiza com label simples', () => {
    render(<Chip label="Test Chip" />)
    expect(screen.getByText('Test Chip')).toBeInTheDocument()
  })

  it('renderiza com diferentes tamanhos', () => {
    const { rerender } = render(<Chip label="Small" size="small" />)
    expect(screen.getByText('Small')).toBeInTheDocument()

    rerender(<Chip label="Medium" size="medium" />)
    expect(screen.getByText('Medium')).toBeInTheDocument()
  })

  it('trunca texto longo quando autoTruncate é true', () => {
    const longText = 'Este é um texto muito longo que deveria ser truncado automaticamente'
    render(<Chip label={longText} maxLength={20} autoTruncate={true} />)

    // Verifica se o texto foi truncado (maxLength=20 resulta em "Este é um texto muit...")
    expect(screen.getByText('Este é um texto muit...')).toBeInTheDocument()
  })

  it('não trunca quando autoTruncate é false', () => {
    const longText = 'Este é um texto muito longo'
    render(<Chip label={longText} maxLength={10} autoTruncate={false} />)

    // Texto completo deve estar presente
    expect(screen.getByText(longText)).toBeInTheDocument()
  })

  it('chama onClick quando clicável', async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Chip label="Clickable" clickable onClick={handleClick} />)

    const chip = screen.getByText('Clickable').closest('.MuiChip-root')
    expect(chip).toBeInTheDocument()

    if (chip) {
      await user.click(chip)
      expect(handleClick).toHaveBeenCalledTimes(1)
    }
  })

  it('renderiza com tooltip quando especificado', () => {
    render(<Chip label="With Tooltip" tooltip="Custom tooltip text" />)
    expect(screen.getByText('With Tooltip')).toBeInTheDocument()
  })

  it('renderiza com ReactNode como label', () => {
    const customLabel = <strong>Custom Label</strong>
    render(<Chip label={customLabel} />)
    expect(screen.getByText('Custom Label')).toBeInTheDocument()
  })
})

describe('ChipsList', () => {
  const mockItems: ChipItemData[] = [
    { label: 'Tag 1', value: 1 },
    { label: 'Tag 2', value: 2 },
    { label: 'Tag 3', value: 3 },
  ]

  it('renderiza lista de chips', () => {
    render(<ChipsList items={mockItems} />)

    expect(screen.getByText('Tag 1')).toBeInTheDocument()
    expect(screen.getByText('Tag 2')).toBeInTheDocument()
    expect(screen.getByText('Tag 3')).toBeInTheDocument()
  })

  it('mostra botão "+N" quando há overflow', () => {
    const manyItems: ChipItemData[] = Array.from({ length: 10 }, (_, i) => ({
      label: `Item muito longo ${i + 1}`,
      value: i,
    }))

    render(<ChipsList items={manyItems} maxLength={20} />)

    // Deve mostrar o botão de expandir
    const expandButton = screen.queryByText(/\+\d+/)
    expect(expandButton).toBeInTheDocument()
  })

  it('expande lista ao clicar no botão "mostrar mais"', async () => {
    const user = userEvent.setup()
    const manyItems: ChipItemData[] = Array.from({ length: 10 }, (_, i) => ({
      label: `Tag ${i + 1}`,
      value: i,
    }))

    render(<ChipsList items={manyItems} maxLength={15} />)

    // Verifica que alguns itens estão ocultos
    const expandButton = screen.getByText(/\+\d+/)
    expect(expandButton).toBeInTheDocument()

    // Clica para expandir
    await user.click(expandButton)

    // Verifica que o texto mudou para "Mostrar menos"
    expect(screen.getByText('Mostrar menos')).toBeInTheDocument()
  })

  it('renderiza todos os chips quando displayAllChips é true', () => {
    const manyItems: ChipItemData[] = Array.from({ length: 10 }, (_, i) => ({
      label: `Item ${i + 1}`,
      value: i,
    }))

    render(<ChipsList items={manyItems} displayAllChips={true} />)

    // Todos os itens devem estar visíveis
    manyItems.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    })

    // Não deve mostrar botão de expandir
    expect(screen.queryByText(/\+\d+/)).not.toBeInTheDocument()
  })

  it('chama onShowAll quando estado muda', async () => {
    const user = userEvent.setup()
    const handleShowAll = vi.fn()
    const manyItems: ChipItemData[] = Array.from({ length: 10 }, (_, i) => ({
      label: `Long tag ${i + 1}`,
      value: i,
    }))

    render(<ChipsList items={manyItems} maxLength={20} onShowAll={handleShowAll} />)

    const expandButton = screen.getByText(/\+\d+/)
    await user.click(expandButton)

    // onShowAll deve ter sido chamado
    expect(handleShowAll).toHaveBeenCalled()
  })
})
