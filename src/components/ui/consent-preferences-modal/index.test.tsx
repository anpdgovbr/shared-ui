'use client'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { GovBRCookiePreferencesModal } from './index'

const consentTexts = {
  bannerMessage: 'Mensagem',
  acceptAll: 'Aceitar todos',
  declineAll: 'Rejeitar todos',
  preferences: 'Gerenciar',
  modalTitle: 'Preferências de cookies',
  modalIntro: 'Selecione as categorias.',
  save: 'Salvar preferências',
  necessaryAlwaysOn: 'Sempre ativo',
  accept: 'Ativar',
  reject: 'Desativar',
}

describe('GovBRCookiePreferencesModal', () => {
  it('permite atualizar preferências e salvar alterações', () => {
    const setPreferences = vi.fn()
    const closePreferences = vi.fn()

    render(
      <GovBRCookiePreferencesModal
        preferences={{ necessary: true, analytics: false }}
        setPreferences={setPreferences}
        closePreferences={closePreferences}
        isModalOpen
        texts={consentTexts}
        categoriesMetadata={[
          {
            id: 'analytics',
            label: 'Cookies analíticos',
            description: 'Mede o uso do site.',
            required: false,
          },
        ]}
      />,
    )

    expect(screen.getByText('Cookies analíticos')).toBeInTheDocument()

    const switches = screen.getAllByRole('switch')
    expect(switches).toHaveLength(2)

    fireEvent.click(switches[1])

    fireEvent.click(screen.getByRole('button', { name: /salvar preferências/i }))

    expect(setPreferences).toHaveBeenCalledWith({ necessary: true, analytics: true })
    expect(closePreferences).toHaveBeenCalledTimes(1)
  })
})
