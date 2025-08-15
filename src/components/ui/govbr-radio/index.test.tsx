'use client'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { GovBRRadio } from './index'

describe('GovBRRadio', () => {
  it('should render the radio button with label', () => {
    render(<GovBRRadio name="gender" value="M" label="Masculino" />)

    const labelElement = screen.getByText('Masculino')
    const radioElement = screen.getByRole('radio')

    expect(labelElement).toBeInTheDocument()
    expect(radioElement).toBeInTheDocument()
  })

  it('should be selectable when clicked', async () => {
    const user = userEvent.setup()

    render(<GovBRRadio name="gender" value="M" label="Masculino" />)

    const radioElement = screen.getByRole('radio')

    expect(radioElement).not.toBeChecked()

    await user.click(radioElement)
    expect(radioElement).toBeChecked()
  })

  it('should have correct name and value attributes', () => {
    render(<GovBRRadio name="test-group" value="test-value" label="Test Label" />)

    const radioElement = screen.getByRole('radio')

    expect(radioElement).toHaveAttribute('name', 'test-group')
    expect(radioElement).toHaveAttribute('value', 'test-value')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<GovBRRadio name="gender" value="M" label="Masculino" disabled />)

    const radioElement = screen.getByRole('radio')
    expect(radioElement).toBeDisabled()
  })
})
