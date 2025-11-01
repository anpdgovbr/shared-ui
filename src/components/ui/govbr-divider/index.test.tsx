import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRDivider } from './index'

describe('GovBRDivider', () => {
  it('deve renderizar sem erros', () => {
    const { container } = render(<GovBRDivider />)
    const divider = container.querySelector('hr')
    expect(divider).toBeInTheDocument()
  })

  it('deve renderizar com orientação vertical', () => {
    const { container } = render(<GovBRDivider orientation="vertical" />)
    // Com orientação vertical, o elemento é renderizado como div ao invés de hr
    const dividerElement = container.querySelector('.MuiDivider-root')
    expect(dividerElement).toBeInTheDocument()
  })

  it('deve renderizar com tamanho small', () => {
    const { container } = render(<GovBRDivider size="sm" />)
    const divider = container.querySelector('hr')
    expect(divider).toBeInTheDocument()
  })

  it('deve renderizar com tamanho large', () => {
    const { container } = render(<GovBRDivider size="lg" />)
    const divider = container.querySelector('hr')
    expect(divider).toBeInTheDocument()
  })

  it('deve renderizar com estilo tracejado', () => {
    const { container } = render(<GovBRDivider dashed />)
    const divider = container.querySelector('hr')
    expect(divider).toBeInTheDocument()
  })

  it('deve renderizar em modo estrito', () => {
    const { container } = render(<GovBRDivider strictgovbr />)
    const divider = container.querySelector('.br-divider')
    expect(divider).toBeInTheDocument()
  })

  it('deve renderizar em modo estrito com className customizado', () => {
    const { container } = render(<GovBRDivider strictgovbr className="custom-divider" />)
    const divider = container.querySelector('.custom-divider')
    expect(divider).toBeInTheDocument()
  })
})
