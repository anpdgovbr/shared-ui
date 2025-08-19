'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRAvatar } from './index'

describe('GovBRAvatar', () => {
  describe('MUI Mode', () => {
    it('should render with children', () => {
      render(<GovBRAvatar>L</GovBRAvatar>)
      expect(screen.getByText('L')).toBeInTheDocument()
    })

    it('should render with an image when src is provided', () => {
      render(<GovBRAvatar src="/fake-image.jpg" alt="Test Avatar" />)
      const img = screen.getByRole('img')
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', '/fake-image.jpg')
    })

    it('should pass sx prop to MUI Avatar', () => {
      const { container } = render(<GovBRAvatar sx={{ backgroundColor: 'red' }}>A</GovBRAvatar>)
      // MUI Avatar root is the first child of the container
      expect(container.firstChild).toHaveStyle('background-color: rgb(255, 0, 0)')
    })
  })

  describe('Strict Mode', () => {
    it('should render with br-avatar class', () => {
      const { container } = render(<GovBRAvatar strictgovbr />)
      expect(container.firstChild).toHaveClass('br-avatar')
    })

    it('should render with letter', () => {
      render(<GovBRAvatar strictgovbr letter="A" />)
      expect(screen.getByText('A')).toBeInTheDocument()
      expect(screen.getByText('A')).toHaveClass('letter')
    })

    it('should apply density class', () => {
      const { container } = render(<GovBRAvatar strictgovbr density="large" />)
      expect(container.firstChild).toHaveClass('large')
    })

    it('should have a title when tooltip is provided', () => {
      const { container } = render(<GovBRAvatar strictgovbr tooltip="Test Tooltip" />)
      expect(container.firstChild).toHaveAttribute('title', 'Test Tooltip')
    })
  })
})
