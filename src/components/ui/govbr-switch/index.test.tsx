'use client'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { GovBRSwitch } from './index'

describe('GovBRSwitch', () => {
  it('should render switch with label', () => {
    render(
      <GovBRSwitch
        id="test-switch"
        label="Ativar notificações"
        checked={false}
        onChange={() => {}}
      />,
    )

    const labelElement = screen.getByText('Ativar notificações')
    const switchElement = screen.getByRole('switch') // MUI Switch usa role="switch"

    expect(labelElement).toBeInTheDocument()
    expect(switchElement).toBeInTheDocument()
  })

  it('should toggle when clicked', async () => {
    const user = userEvent.setup()
    const mockOnChange = vi.fn()

    render(
      <GovBRSwitch
        id="test-switch"
        label="Ativar notificações"
        checked={false}
        onChange={mockOnChange}
      />,
    )

    const switchElement = screen.getByRole('switch')

    expect(switchElement).not.toBeChecked()

    await user.click(switchElement)
    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when disabled prop is true', () => {
    render(
      <GovBRSwitch
        id="test-switch"
        label="Switch desabilitado"
        checked={false}
        disabled
        onChange={() => {}}
      />,
    )

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeDisabled()
  })

  it('should be checked when checked prop is true', () => {
    render(<GovBRSwitch id="test-switch" label="Switch ativado" checked onChange={() => {}} />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeChecked()
  })

  it('should render different sizes', () => {
    const { rerender } = render(
      <GovBRSwitch
        id="test-switch"
        label="Switch pequeno"
        size="small"
        checked={false}
        onChange={() => {}}
      />,
    )

    let switchElement = screen.getByRole('switch')
    expect(switchElement).toBeInTheDocument()

    rerender(
      <GovBRSwitch
        id="test-switch"
        label="Switch grande"
        size="large"
        checked={false}
        onChange={() => {}}
      />,
    )

    switchElement = screen.getByRole('switch')
    expect(switchElement).toBeInTheDocument()
  })
})
