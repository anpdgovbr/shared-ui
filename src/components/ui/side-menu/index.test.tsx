'use client'
import '@testing-library/jest-dom'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { SideMenu } from './index'
import type { SideMenuItem } from './types'

const mockItems: SideMenuItem[] = [
  {
    label: 'Visão Geral',
    href: '/dashboard',
  },
  {
    label: 'Relatórios',
    href: '/dashboard/report',
  },
  {
    label: 'Administração',
    onlyExpand: true,
    children: [
      {
        label: 'Usuários',
        href: '/dashboard/admin/users',
      },
      {
        label: 'Logs',
        href: '/dashboard/admin/logs',
      },
    ],
  },
]

describe('SideMenu', () => {
  it('destaca o item ativo com base na rota atual', () => {
    render(
      <SideMenu items={mockItems} currentPath="/dashboard/admin/users" open title="Dashboard" />,
    )

    const activeEntry = screen.getByText('Usuários').closest('.MuiListItemButton-root')
    expect(activeEntry).toHaveClass('Mui-selected')

    const parentEntry = screen.getByText('Administração').closest('.MuiListItemButton-root')
    expect(parentEntry).toHaveClass('Mui-selected')
  })

  it('chama onOpenChange quando o botão de toggle é clicado', () => {
    const handleToggle = vi.fn()
    render(
      <SideMenu
        items={mockItems}
        currentPath="/dashboard"
        open
        onOpenChange={handleToggle}
        title="Dashboard"
      />,
    )

    const toggleButton = screen.getByRole('button', { name: /recolher menu/i })
    fireEvent.click(toggleButton)
    expect(handleToggle).toHaveBeenCalledWith(false)
  })

  it('expande e colapsa submenus quando o menu está aberto', async () => {
    render(<SideMenu items={mockItems} currentPath="/dashboard" defaultOpen title="Dashboard" />)

    const parentButton = screen.getByText('Administração').closest('.MuiListItemButton-root')
    expect(parentButton).toBeInTheDocument()

    // submenu começa fechado, logo "Logs" não deve estar visível
    expect(screen.queryByText('Logs')).not.toBeInTheDocument()

    fireEvent.click(parentButton!)

    const submenuItem = screen.getByText('Logs')
    expect(submenuItem).toBeInTheDocument()

    fireEvent.click(parentButton!)

    // Aguarda a animação do Collapse completar e o elemento ser desmontado
    await waitFor(() => {
      expect(screen.queryByText('Logs')).not.toBeInTheDocument()
    })
  })
})
