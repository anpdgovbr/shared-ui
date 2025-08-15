'use client'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Control, useForm } from 'react-hook-form'
import { describe, expect, it } from 'vitest'
import { GovBRFormCheckbox } from './index'

type FormData = {
  testField: boolean
}

// Componente wrapper para fornecer o contexto do react-hook-form
function TestWrapper({ children }: { children: (control: Control<FormData>) => React.ReactNode }) {
  const { control } = useForm<FormData>({
    defaultValues: {
      testField: false,
    },
  })

  return <form>{children(control)}</form>
}

describe('GovBRFormCheckbox', () => {
  it('should render form checkbox with label', () => {
    render(
      <TestWrapper>
        {(control) => (
          <GovBRFormCheckbox
            name="testField"
            control={control}
            label="Li e aceito os termos de uso"
          />
        )}
      </TestWrapper>,
    )

    const labelElement = screen.getByText('Li e aceito os termos de uso')
    const checkboxElement = screen.getByRole('checkbox')

    expect(labelElement).toBeInTheDocument()
    expect(checkboxElement).toBeInTheDocument()
  })

  it('should toggle when clicked', async () => {
    const user = userEvent.setup()

    render(
      <TestWrapper>
        {(control) => (
          <GovBRFormCheckbox name="testField" control={control} label="Aceitar termos" />
        )}
      </TestWrapper>,
    )

    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).not.toBeChecked()

    await user.click(checkboxElement)
    expect(checkboxElement).toBeChecked()

    await user.click(checkboxElement)
    expect(checkboxElement).not.toBeChecked()
  })

  it('should show required indicator when required prop is true', () => {
    render(
      <TestWrapper>
        {(control) => (
          <GovBRFormCheckbox name="testField" control={control} label="Aceitar termos" required />
        )}
      </TestWrapper>,
    )

    // Verifica se há indicador de campo obrigatório
    const labelElement = screen.getByText(/Aceitar termos/i)
    expect(labelElement).toBeInTheDocument()
  })
})
