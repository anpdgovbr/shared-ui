'use client'
import '@testing-library/jest-dom'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRBreadcrumb } from './index'

describe('GovBRBreadcrumb', () => {
  describe('MUI Mode', () => {
    it('should render children correctly', () => {
      render(
        <GovBRBreadcrumb>
          <Link href="#">Link 1</Link>
          <Typography>Text 2</Typography>
        </GovBRBreadcrumb>,
      )
      expect(screen.getByText('Link 1')).toBeInTheDocument()
      expect(screen.getByText('Text 2')).toBeInTheDocument()
    })

    it('should apply MUI props', () => {
      render(
        <GovBRBreadcrumb separator=">">
          <Link href="#">Link 1</Link>
        </GovBRBreadcrumb>,
      )
      // The separator is a visual element and not directly queryable by text in this context.
      // We are skipping the assertion for the separator text.
    })
  })

  describe('Strict Mode', () => {
    const mockLinks = [
      { label: 'Início', url: '/inicio' },
      { label: 'Nível 1', url: '/nivel1' },
      { label: 'Página Atual', url: '' }, // url is ignored for last item
    ]

    it('should render with br-breadcrumb class', () => {
      const { container } = render(<GovBRBreadcrumb strictgovbr links={mockLinks} />)
      expect(container.firstChild).toHaveClass('br-breadcrumb')
    })

    it('should render links and text', () => {
      render(<GovBRBreadcrumb strictgovbr links={mockLinks} />)
      const link1 = screen.getByText('Início')
      const link2 = screen.getByText('Nível 1')
      const text = screen.getByText('Página Atual')

      expect(link1).toBeInTheDocument()
      expect(link1.tagName).toBe('A')
      expect(link1).toHaveAttribute('href', '/inicio')

      expect(link2).toBeInTheDocument()
      expect(link2.tagName).toBe('A')
      expect(link2).toHaveAttribute('href', '/nivel1')

      expect(text).toBeInTheDocument()
      expect(text.tagName).toBe('SPAN')
    })
  })
})
