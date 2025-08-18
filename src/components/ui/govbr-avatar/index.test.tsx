'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { GovBRAvatar } from './index'

describe('GovBRAvatar', () => {
  const mockNavigate = vi.fn()

  it('should render avatar with name', () => {
    render(<GovBRAvatar name="João Silva" menuItems={[]} onNavigate={mockNavigate} />)

    const avatarElement = screen.getByText('JS') // Iniciais do nome
    expect(avatarElement).toBeInTheDocument()
  })

  it('should render avatar with image when src is provided', () => {
    render(
      <GovBRAvatar
        name="João Silva"
        src="https://example.com/avatar.jpg"
        alt="Avatar do João"
        menuItems={[]}
        onNavigate={mockNavigate}
      />,
    )

    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute('src', 'https://example.com/avatar.jpg')
    expect(imageElement).toHaveAttribute('alt', 'Avatar do João')
  })

  it('should open menu when clicked', async () => {
    const user = userEvent.setup()
    const menuItems = [
      { label: 'Perfil', href: '/profile' },
      { label: 'Sair', href: '/logout' },
    ]

    render(<GovBRAvatar name="João Silva" menuItems={menuItems} onNavigate={mockNavigate} />)

    const avatarButton = screen.getByRole('button')
    await user.click(avatarButton)

    // Verifica se os itens do menu apareceram
    expect(screen.getByText('Perfil')).toBeInTheDocument()
    expect(screen.getByText('Sair')).toBeInTheDocument()
  })

  it('should call onNavigate when menu item is clicked', async () => {
    const user = userEvent.setup()
    const menuItems = [{ label: 'Perfil', href: '/profile' }]

    render(<GovBRAvatar name="João Silva" menuItems={menuItems} onNavigate={mockNavigate} />)

    // Abrir menu
    const avatarButton = screen.getByRole('button')
    await user.click(avatarButton)

    // Clicar no item do menu
    const profileLink = screen.getByText('Perfil')
    await user.click(profileLink)

    expect(mockNavigate).toHaveBeenCalledWith('/profile')
  })
})
