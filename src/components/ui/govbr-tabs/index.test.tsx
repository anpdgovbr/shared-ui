import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRTabs } from './index'

describe('GovBRTabs', () => {
  const mockTabs = [
    { id: 1, label: 'Tab 1' },
    { id: 2, label: 'Tab 2' },
    { id: 3, label: 'Tab 3' },
  ]

  const mockChildren = [
    <div key="1">Conteúdo da Tab 1</div>,
    <div key="2">Conteúdo da Tab 2</div>,
    <div key="3">Conteúdo da Tab 3</div>,
  ]

  it('deve renderizar sem erros', () => {
    render(
      <GovBRTabs tabs={mockTabs} variant="text" strictgovbr={false}>
        {mockChildren}
      </GovBRTabs>,
    )
    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Tab 2')).toBeInTheDocument()
    expect(screen.getByText('Tab 3')).toBeInTheDocument()
  })

  it('deve renderizar com variant contained', () => {
    render(
      <GovBRTabs tabs={mockTabs} variant="contained" strictgovbr={false}>
        {mockChildren}
      </GovBRTabs>,
    )
    expect(screen.getByText('Tab 1')).toBeInTheDocument()
  })

  it('deve renderizar tabs com ícones e contadores', () => {
    const tabsComExtras = [
      { id: 1, label: 'Home', icon: <span>🏠</span>, counter: 5 },
      { id: 2, label: 'Settings', icon: <span>⚙️</span>, counter: 10 },
    ]
    render(
      <GovBRTabs tabs={tabsComExtras} variant="text" strictgovbr={false}>
        {mockChildren.slice(0, 2)}
      </GovBRTabs>,
    )
    expect(screen.getByText('🏠')).toBeInTheDocument()
    expect(screen.getByText('⚙️')).toBeInTheDocument()
  })

  it('deve renderizar em modo estrito', () => {
    const { container } = render(
      <GovBRTabs tabs={mockTabs} variant="text" strictgovbr>
        {mockChildren}
      </GovBRTabs>,
    )
    const strictElement = container.querySelector('.br-tab')
    expect(strictElement).toBeInTheDocument()
  })

  it('deve aplicar sx customizado', () => {
    render(
      <GovBRTabs tabs={mockTabs} variant="text" strictgovbr={false} sx={{ backgroundColor: 'red' }}>
        {mockChildren}
      </GovBRTabs>,
    )
    expect(screen.getByText('Tab 1')).toBeInTheDocument()
  })
})
