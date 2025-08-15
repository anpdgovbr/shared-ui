'use client'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { GovBRInput } from './index'

describe('GovBRInput', () => {
  it('should render the input with label', () => {
    render(<GovBRInput id="test-input" label="Nome completo" placeholder="Digite seu nome" />)

    const labelElement = screen.getByText('Nome completo')
    const inputElement = screen.getByPlaceholderText('Digite seu nome')

    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })

  it('should allow typing in the input', async () => {
    const user = userEvent.setup()

    render(<GovBRInput id="test-input" label="Nome" placeholder="Digite seu nome" />)

    const inputElement = screen.getByPlaceholderText('Digite seu nome')
    await user.type(inputElement, 'João Silva')

    expect(inputElement).toHaveValue('João Silva')
  })

  it('should render as required when required prop is true', () => {
    render(<GovBRInput id="test-input" label="Nome completo" required />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeRequired()
  })
})
