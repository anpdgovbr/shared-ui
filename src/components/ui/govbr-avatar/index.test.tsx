'use client'
import '@testing-library/jest-dom'

import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { GovBRAvatar } from './index'
import type { GovBRAvatarMenuItem } from './types'

const mockMenuItems: GovBRAvatarMenuItem[] = [
  { label: 'Perfil', onClick: vi.fn() },
  { label: 'Configurações', onClick: vi.fn() },
  { label: 'Sair', onClick: vi.fn() },
]

describe('GovBRAvatar', () => {
  describe('MUI Mode', () => {
    it('should render with children', () => {
      render(<GovBRAvatar>L</GovBRAvatar>)
      expect(screen.getByText('L')).toBeInTheDocument()
    })

    it('should render with an image when src is provided', () => {
      render(<GovBRAvatar src="/fake-image.jpg" alt="Test Avatar" />)
      const img = screen.getByRole('img')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/fake-image.jpg')
    })

    it('should pass sx prop to MUI Avatar when no dropdown', () => {
      const { container } = render(<GovBRAvatar sx={{ backgroundColor: 'red' }}>A</GovBRAvatar>)
      // MUI Avatar root is the first child of the container
      expect(container.firstChild).toHaveStyle('background-color: rgb(255, 0, 0)')
    })

    it('should render dropdown with menu items', () => {
      render(
        <GovBRAvatar name="João" greetingText="Olá" menuItems={mockMenuItems}>
          J
        </GovBRAvatar>,
      )

      // O texto pode ser fragmentado em múltiplos nós (Olá, <strong>João</strong>),
      // então usamos regex para buscar de forma robusta.
      expect(screen.getByText(/Olá,\s*João/)).toBeInTheDocument()
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('should open menu when button is clicked', async () => {
      render(
        <GovBRAvatar name="João" menuItems={mockMenuItems}>
          J
        </GovBRAvatar>,
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
        expect(screen.getByText('Perfil')).toBeInTheDocument()
        expect(screen.getByText('Configurações')).toBeInTheDocument()
        expect(screen.getByText('Sair')).toBeInTheDocument()
      })
    })

    it('should call onClick when menu item is clicked', async () => {
      const onClickMock = vi.fn()
      const menuItemsWithMock: GovBRAvatarMenuItem[] = [
        { label: 'Test Item', onClick: onClickMock },
      ]

      render(
        <GovBRAvatar name="João" menuItems={menuItemsWithMock}>
          J
        </GovBRAvatar>,
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)

      await waitFor(() => {
        const menuItem = screen.getByText('Test Item')
        fireEvent.click(menuItem)
      })

      expect(onClickMock).toHaveBeenCalled()
    })
  })

  describe('Strict Mode', () => {
    it('should render with br-avatar class', () => {
      const { container } = render(<GovBRAvatar strictgovbr />)
      expect(container.firstChild).toHaveClass('br-avatar')
    })

    it('should render with letter', () => {
      render(<GovBRAvatar strictgovbr letter="A" />)
      // Usar container.querySelector para checar a estrutura .content
      expect(screen.getByText('A')).toBeInTheDocument()
      const content = document.querySelector('.content')
      expect(content).toBeInTheDocument()
      expect(content).toHaveTextContent('A')
    })

    it('should apply density class', () => {
      const { container } = render(<GovBRAvatar strictgovbr density="large" />)
      expect(container.firstChild).toHaveClass('large')
    })

    it('should have a title when tooltip is provided', () => {
      const { container } = render(<GovBRAvatar strictgovbr tooltip="Test Tooltip" />)
      expect(container.firstChild).toHaveAttribute('title', 'Test Tooltip')
    })

    it('should render dropdown with br-sign-in class when menuItems provided', () => {
      render(<GovBRAvatar strictgovbr letter="J" name="João" menuItems={mockMenuItems} />)

      expect(screen.getByRole('button')).toHaveClass('br-sign-in')
      expect(screen.getByText(/Olá,\s*João/)).toBeInTheDocument()
    })

    it('should render br-list with menu items in strict mode', () => {
      render(<GovBRAvatar strictgovbr letter="J" name="João" menuItems={mockMenuItems} />)

      const list = document.querySelector('.br-list')
      expect(list).toBeInTheDocument()
      expect(list).toHaveAttribute('role', 'menu')

      // Items should be present but hidden initially
      expect(screen.getByText('Perfil')).toBeInTheDocument()
      expect(screen.getByText('Configurações')).toBeInTheDocument()
      expect(screen.getByText('Sair')).toBeInTheDocument()
    })

    it('should show dropdown when clicked in strict mode', () => {
      render(<GovBRAvatar strictgovbr letter="J" name="João" menuItems={mockMenuItems} />)

      const button = screen.getByRole('button')
      fireEvent.click(button)

      const list = document.querySelector('.br-list')
      expect(list).not.toHaveAttribute('hidden')
    })

    it('should call menu item onClick in strict mode', () => {
      const onClickMock = vi.fn()
      const menuItemsWithMock: GovBRAvatarMenuItem[] = [
        { label: 'Test Item', onClick: onClickMock },
      ]

      render(<GovBRAvatar strictgovbr letter="J" name="João" menuItems={menuItemsWithMock} />)

      const button = screen.getByRole('button')
      fireEvent.click(button)

      const menuItem = screen.getByText('Test Item')
      fireEvent.click(menuItem)

      expect(onClickMock).toHaveBeenCalled()
    })

    it('should render simple avatar without dropdown when no menuItems', () => {
      const { container } = render(<GovBRAvatar strictgovbr letter="S" />)

      expect(container.firstChild).toHaveClass('br-avatar')
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
      expect(document.querySelector('.br-list')).not.toBeInTheDocument()
    })
  })

  describe('Dropdown Behavior', () => {
    it('should handle controlled open state', () => {
      const onOpenChange = vi.fn()

      render(
        <GovBRAvatar name="João" menuItems={mockMenuItems} open={true} onOpenChange={onOpenChange}>
          J
        </GovBRAvatar>,
      )

      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    it('should call onNavigate when provided', async () => {
      const onNavigate = vi.fn()
      const menuItemsWithHref: GovBRAvatarMenuItem[] = [{ label: 'Profile', href: '/profile' }]

      render(
        <GovBRAvatar name="João" menuItems={menuItemsWithHref} onNavigate={onNavigate}>
          J
        </GovBRAvatar>,
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)

      await waitFor(() => {
        const menuItem = screen.getByText('Profile')
        fireEvent.click(menuItem)
      })

      expect(onNavigate).toHaveBeenCalledWith(menuItemsWithHref[0])
    })

    it('should not render dropdown when menuItems is empty', () => {
      render(
        <GovBRAvatar name="João" menuItems={[]}>
          J
        </GovBRAvatar>,
      )

      // Should render simple avatar, not dropdown
      expect(screen.getByText('J')).toBeInTheDocument()
      expect(screen.queryByText('Olá, João')).not.toBeInTheDocument()
    })
  })
})
