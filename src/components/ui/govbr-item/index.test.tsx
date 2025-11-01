import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRItem } from './index'

describe('GovBRItem', () => {
  it('deve renderizar sem erros', () => {
    const { container } = render(<GovBRItem>Item de teste</GovBRItem>)
    expect(container.textContent).toContain('Item de teste')
  })

  it('deve renderizar no estado active', () => {
    const { container } = render(<GovBRItem estado="active">Item ativo</GovBRItem>)
    expect(container.textContent).toContain('Item ativo')
  })

  it('deve renderizar no estado disabled', () => {
    const { container } = render(<GovBRItem estado="disabled">Item desabilitado</GovBRItem>)
    expect(container.textContent).toContain('Item desabilitado')
  })

  it('deve renderizar no estado selected', () => {
    const { container } = render(<GovBRItem estado="selected">Item selecionado</GovBRItem>)
    expect(container.textContent).toContain('Item selecionado')
  })

  it('deve renderizar com divider', () => {
    const { container } = render(<GovBRItem divider>Item com divisor</GovBRItem>)
    expect(container.textContent).toContain('Item com divisor')
  })

  it('deve renderizar em modo estrito', () => {
    const { container } = render(<GovBRItem strictgovbr>Item estrito</GovBRItem>)
    expect(container.textContent).toContain('Item estrito')
  })

  it('deve aplicar sx customizado', () => {
    const { container } = render(
      <GovBRItem sx={{ backgroundColor: 'red' }}>Item customizado</GovBRItem>,
    )
    expect(container.textContent).toContain('Item customizado')
  })
})
