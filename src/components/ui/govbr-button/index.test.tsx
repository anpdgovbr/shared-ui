'use client'
import '@testing-library/jest-dom' // adiciona os matchers como toBeInTheDocument

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRButton } from './index'

describe('GovBRButton', () => {
  it('should render the button with the correct text', () => {
    render(<GovBRButton>Clique aqui</GovBRButton>)
    const buttonElement = screen.getByText(/Clique aqui/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('should not pass boolean `inverted` as DOM attribute in MUI mode', () => {
    const { container } = render(<GovBRButton inverted>Test</GovBRButton>)
    const btn = container.querySelector('button')
    // React should not render inverted as an attribute on the DOM button
    expect(btn).not.toHaveAttribute('inverted')
  })

  it("should accept variant='inverted' in MUI mode without DOM attribute leakage", () => {
    const { container } = render(<GovBRButton variant="inverted">Inv</GovBRButton>)
    const btn = container.querySelector('button')
    expect(btn).toBeTruthy()
    expect(btn).not.toHaveAttribute('inverted')
  })

  it('should show spinner and disable button when loading is true', () => {
    const { container } = render(<GovBRButton loading>Saving</GovBRButton>)
    // CircularProgress renders role='progressbar'
    const spinner = container.querySelector('[role="progressbar"]')
    expect(spinner).toBeTruthy()
    const btn = container.querySelector('button')
    expect(btn).toBeDisabled()
  })
})
