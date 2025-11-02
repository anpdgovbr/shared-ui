'use client'
import '@testing-library/jest-dom'

import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { ToasterProvider, useToaster } from './index'

function TestComponent() {
  const { show } = useToaster()
  return (
    <button onClick={() => show({ message: 'Operação concluída', severity: 'success' })}>
      Notificar
    </button>
  )
}

describe('Toaster', () => {
  it('exibe mensagem quando show é chamado', () => {
    render(
      <ToasterProvider>
        <TestComponent />
      </ToasterProvider>,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Notificar' }))
    expect(screen.getByText('Operação concluída')).toBeInTheDocument()
  })
})
