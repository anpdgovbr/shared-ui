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
})
