'use client'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { GovBRBreadcrumb } from './index'

describe('GovBRBreadcrumb', () => {
  const mockNavigate = vi.fn()

  it('should render breadcrumb items', () => {
    const items = [
      { label: 'Início', href: '/' },
      { label: 'Cidadão', href: '/cidadao' },
      { label: 'Consultas' }, // Página atual (sem href)
    ]

    render(<GovBRBreadcrumb items={items} onNavigate={mockNavigate} />)

    expect(screen.getByText('Início')).toBeInTheDocument()
    expect(screen.getByText('Cidadão')).toBeInTheDocument()
    expect(screen.getByText('Consultas')).toBeInTheDocument()
  })

  it('should call onNavigate when clickable item is clicked', async () => {
    const user = userEvent.setup()
    const items = [{ label: 'Início', href: '/' }, { label: 'Página Atual' }]

    render(<GovBRBreadcrumb items={items} onNavigate={mockNavigate} />)

    const homeLink = screen.getByText('Início')
    await user.click(homeLink)

    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('should not call onNavigate for current page (no href)', async () => {
    const user = userEvent.setup()
    const items = [
      { label: 'Início', href: '/' },
      { label: 'Página Atual' }, // Sem href
    ]

    render(<GovBRBreadcrumb items={items} onNavigate={mockNavigate} />)

    const currentPage = screen.getByText('Página Atual')
    await user.click(currentPage)

    // onNavigate não deve ser chamado para página atual
    expect(mockNavigate).not.toHaveBeenCalledWith(undefined)
  })

  it('should render with custom className', () => {
    const items = [{ label: 'Teste' }]

    render(
      <GovBRBreadcrumb items={items} onNavigate={mockNavigate} className="custom-breadcrumb" />,
    )

    const breadcrumbElement = screen.getByRole('navigation')
    expect(breadcrumbElement).toHaveClass('custom-breadcrumb')
  })
})
