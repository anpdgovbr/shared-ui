'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { GovBRSwitch } from './index'

describe('GovBRSwitch', () => {
  describe('MUI Mode', () => {
    it('should render a MUI switch with a label', () => {
      render(<GovBRSwitch label="MUI Switch" />)
      expect(screen.getByText('MUI Switch')).toBeInTheDocument()
      expect(screen.getByRole('switch')).toHaveClass('MuiSwitch-input')
    })

    it('should toggle when clicked', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<GovBRSwitch label="Click me" onChange={mockOnChange} />)

      const switchElement = screen.getByRole('switch')
      await user.click(switchElement)
      expect(mockOnChange).toHaveBeenCalledTimes(1)
    })

    it('should be disabled', () => {
      render(<GovBRSwitch label="Disabled" disabled />)
      const switchElement = screen.getByRole('switch')
      expect(switchElement).toBeDisabled()
    })

    it('should accept switchProps', () => {
      render(<GovBRSwitch label="Small" switchProps={{ size: 'small' }} />)
      const switchElement = screen.getByRole('switch')
      // MUI adds a size class to the parent span of the input
      expect(switchElement.closest('.MuiSwitch-root')).toHaveClass('MuiSwitch-sizeSmall')
    })
  })

  describe('Strict Mode', () => {
    it('should render with br-switch class', () => {
      const { container } = render(<GovBRSwitch strictgovbr label="Strict Switch" />)
      expect(container.firstChild).toHaveClass('br-switch')
    })

    it('should render a native checkbox with a label', () => {
      render(<GovBRSwitch strictgovbr label="Strict Label" id="strict-switch" />)
      expect(screen.getByText('Strict Label')).toBeInTheDocument()
      const input = screen.getByRole('checkbox')
      expect(input).toBeInTheDocument()
      expect(input).toHaveAttribute('id', 'strict-switch')
    })

    it('should toggle native checkbox', async () => {
      const user = userEvent.setup()
      const mockOnChange = vi.fn()
      render(<GovBRSwitch strictgovbr label="Click me strict" onChange={mockOnChange} />)

      const switchElement = screen.getByRole('checkbox') // Changed from 'switch' to 'checkbox'
      await user.click(switchElement)
      expect(mockOnChange).toHaveBeenCalledTimes(1)
    })
  })
})
