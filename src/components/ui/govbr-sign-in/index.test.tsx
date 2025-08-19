'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { GovBRSignIn } from './index'

describe('GovBRSignIn', () => {
  it('should render the sign-in button with default text', () => {
    render(<GovBRSignIn onClick={() => {}} />)
    const button = screen.getByRole('button', { name: /Entrar com gov.br/i })
    expect(button).toBeInTheDocument()
  })

  it("should call onClick with 'govbr' when clicked", async () => {
    const user = userEvent.setup()
    const mockOnClick = vi.fn()
    render(<GovBRSignIn onClick={mockOnClick} />)

    const button = screen.getByRole('button')
    await user.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
    expect(mockOnClick).toHaveBeenCalledWith('govbr')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<GovBRSignIn onClick={() => {}} disabled />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('should render in strict mode when strictgovbr is true', () => {
    // This test checks if the button is a native <button> (strict mode)
    // instead of a MUI button, which has a different DOM structure.
    render(<GovBRSignIn onClick={() => {}} strictgovbr />)
    const button = screen.getByRole('button')
    // A native button rendered by our strict mode logic will be a direct child
    expect(button.tagName).toBe('BUTTON')
    // It should have the br-button class
    expect(button).toHaveClass('br-button')
  })

  it('should render in MUI mode by default', () => {
    render(<GovBRSignIn onClick={() => {}} />)
    const button = screen.getByRole('button')
    // A MUI button will not be a direct child and will have MUI classes
    expect(button.tagName).toBe('BUTTON')
    expect(button).toHaveClass('MuiButton-root')
  })
})
