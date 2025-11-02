'use client'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { GovBRCookieBanner } from './index'

const baseTexts = {
  bannerMessage: 'Utilizamos cookies para melhorar sua experiência.',
  acceptAll: 'Aceitar todos',
  declineAll: 'Rejeitar',
  preferences: 'Gerenciar cookies',
  modalTitle: 'Preferências de cookies',
  modalIntro: 'Escolha quais categorias deseja permitir.',
  save: 'Salvar',
  necessaryAlwaysOn: 'Sempre ativo',
}

describe('GovBRCookieBanner', () => {
  it('renderiza mensagens e aciona callbacks de ação', () => {
    const acceptAll = vi.fn()
    const rejectAll = vi.fn()
    const openPreferences = vi.fn()

    render(
      <GovBRCookieBanner
        texts={baseTexts}
        onAcceptAll={acceptAll}
        onRejectAll={rejectAll}
        onOpenPreferences={openPreferences}
      />,
    )

    expect(
      screen.getByText(/utilizamos cookies para melhorar sua experiência\./i),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: baseTexts.preferences }))
    expect(openPreferences).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole('button', { name: baseTexts.declineAll }))
    expect(rejectAll).toHaveBeenCalledTimes(1)

    fireEvent.click(screen.getByRole('button', { name: baseTexts.acceptAll }))
    expect(acceptAll).toHaveBeenCalledTimes(1)
  })
})
