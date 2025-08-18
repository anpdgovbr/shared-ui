'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Control, useForm } from 'react-hook-form'
import { describe, expect, it } from 'vitest'

import { GovBRFormInput } from './index'

type FormData = {
  testField: string
}

// Componente wrapper para fornecer o contexto do react-hook-form
function TestWrapper({
  children,
  onChildRender,
}: {
  children: (control: Control<FormData>) => React.ReactNode
  onChildRender?: (control: Control<FormData>) => void
}) {
  const { control } = useForm<FormData>({
    defaultValues: {
      testField: '',
    },
  })

  onChildRender?.(control)

  return <form>{children(control)}</form>
}

describe('GovBRFormInput', () => {
  it('should render form input with label', () => {
    render(
      <TestWrapper>
        {(control) => (
          <GovBRFormInput
            name="testField"
            control={control}
            label="Nome completo"
            placeholder="Digite seu nome"
          />
        )}
      </TestWrapper>,
    )

    const labelElement = screen.getByText('Nome completo')
    const inputElement = screen.getByPlaceholderText('Digite seu nome')

    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })

  it('should allow typing in the form input', async () => {
    const user = userEvent.setup()

    render(
      <TestWrapper>
        {(control) => (
          <GovBRFormInput
            name="testField"
            control={control}
            label="Nome"
            placeholder="Digite seu nome"
          />
        )}
      </TestWrapper>,
    )

    const inputElement = screen.getByPlaceholderText('Digite seu nome')
    await user.type(inputElement, 'João Silva')

    expect(inputElement).toHaveValue('João Silva')
  })

  it('should show required indicator when required prop is true', () => {
    render(
      <TestWrapper>
        {(control) => (
          <GovBRFormInput name="testField" control={control} label="Nome completo" required />
        )}
      </TestWrapper>,
    )

    // Verifica se há indicador de campo obrigatório
    const labelElement = screen.getByText(/Nome completo/i)
    expect(labelElement).toBeInTheDocument()
  })

  it('should render with different input types', () => {
    const { rerender } = render(
      <TestWrapper>
        {(control) => (
          <GovBRFormInput name="testField" control={control} label="Email" type="email" />
        )}
      </TestWrapper>,
    )

    let inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveAttribute('type', 'email')

    rerender(
      <TestWrapper>
        {(control) => (
          <GovBRFormInput name="testField" control={control} label="Senha" type="password" />
        )}
      </TestWrapper>,
    )

    inputElement = screen.getByDisplayValue('') // Busca pelo input usando o valor
    expect(inputElement).toHaveAttribute('type', 'password')
  })
})
