'use client'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { GovBRCheckbox } from './index'

describe('GovBRCheckbox', () => {
  it('should render the checkbox with label', () => {
    render(<GovBRCheckbox id="test-checkbox" label="Li e aceito os termos de uso" />)

    const labelElement = screen.getByText('Li e aceito os termos de uso')
    const checkboxElement = screen.getByRole('checkbox')

    expect(labelElement).toBeInTheDocument()
    expect(checkboxElement).toBeInTheDocument()
  })

  it('should toggle when clicked', async () => {
    const user = userEvent.setup()

    render(<GovBRCheckbox id="test-checkbox" label="Aceitar termos" />)

    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).not.toBeChecked()

    await user.click(checkboxElement)
    expect(checkboxElement).toBeChecked()

    await user.click(checkboxElement)
    expect(checkboxElement).not.toBeChecked()
  })

  it('should be disabled when disabled prop is true', () => {
    render(<GovBRCheckbox id="test-checkbox" label="Checkbox desabilitado" disabled />)

    const checkboxElement = screen.getByRole('checkbox')
    expect(checkboxElement).toBeDisabled()
  })
})
