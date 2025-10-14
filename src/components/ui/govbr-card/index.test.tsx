'use client'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { GovBRCard } from './index'

describe('GovBRCard', () => {
  // ===== TESTES BÁSICOS =====
  describe('Renderização Básica', () => {
    it('should render card with children content', () => {
      render(
        <GovBRCard>
          <p>Card content</p>
        </GovBRCard>,
      )

      const content = screen.getByText('Card content')
      expect(content).toBeInTheDocument()
    })

    it('should apply custom className', () => {
      const { container } = render(
        <GovBRCard className="custom-card">
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.custom-card')
      expect(card).toBeInTheDocument()
    })
  })

  // ===== MODO PADRÃO (MUI) =====
  describe('Modo Padrão (MUI)', () => {
    it('should render MUI Card when strictgovbr is false', () => {
      const { container } = render(
        <GovBRCard strictgovbr={false}>
          <p>MUI Card</p>
        </GovBRCard>,
      )

      // MUI Card usa classes específicas
      const muiCard = container.querySelector('.MuiCard-root')
      expect(muiCard).toBeInTheDocument()
    })

    it('should render title in CardHeader when provided', () => {
      render(
        <GovBRCard title="Card Title">
          <p>Content</p>
        </GovBRCard>,
      )

      const title = screen.getByText('Card Title')
      expect(title).toBeInTheDocument()
    })

    it('should render subheader when provided', () => {
      render(
        <GovBRCard title="Title" subheader="This is a subheader">
          <p>Content</p>
        </GovBRCard>,
      )

      const subheader = screen.getByText('This is a subheader')
      expect(subheader).toBeInTheDocument()
    })

    it('should render avatar when provided', () => {
      render(
        <GovBRCard title="Title" avatar={<div data-testid="avatar">A</div>}>
          <p>Content</p>
        </GovBRCard>,
      )

      const avatar = screen.getByTestId('avatar')
      expect(avatar).toBeInTheDocument()
    })

    it('should render action in CardHeader when provided', () => {
      render(
        <GovBRCard title="Title" action={<button>Action</button>}>
          <p>Content</p>
        </GovBRCard>,
      )

      const action = screen.getByRole('button', { name: 'Action' })
      expect(action).toBeInTheDocument()
    })

    it('should render footer actions when provided', () => {
      render(
        <GovBRCard footer={<button>Footer Action</button>}>
          <p>Content</p>
        </GovBRCard>,
      )

      const footerAction = screen.getByRole('button', { name: 'Footer Action' })
      expect(footerAction).toBeInTheDocument()
    })

    it('should render image when image prop is provided', () => {
      render(
        <GovBRCard image="/test-image.jpg" imageAlt="Test Image">
          <p>Content</p>
        </GovBRCard>,
      )

      const image = screen.getByAltText('Test Image')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/test-image.jpg')
    })

    it('should apply custom imageHeight', () => {
      const { container } = render(
        <GovBRCard image="/test.jpg" imageHeight={200}>
          <p>Content</p>
        </GovBRCard>,
      )

      const media = container.querySelector('.MuiCardMedia-root')
      expect(media).toHaveStyle({ height: '200px' })
    })
  })

  // ===== EXPANDABLE CONTENT =====
  describe('Expandable Content', () => {
    it('should render expandable content when expanded is true', () => {
      render(
        <GovBRCard expanded={true} expandableContent={<p>Expandable section</p>}>
          <p>Main content</p>
        </GovBRCard>,
      )

      const expandableContent = screen.getByText('Expandable section')
      expect(expandableContent).toBeInTheDocument()
    })

    it('should not render expandable content when expanded is false', () => {
      render(
        <GovBRCard expanded={false} expandableContent={<p>Expandable</p>}>
          <p>Content</p>
        </GovBRCard>,
      )

      const expandableContent = screen.queryByText('Expandable')
      expect(expandableContent).not.toBeInTheDocument()
    })

    it('should toggle expansion state with controlled mode', () => {
      const { rerender } = render(
        <GovBRCard expanded={false} expandableContent={<p>Expandable content</p>}>
          <p>Content</p>
        </GovBRCard>,
      )

      // Não deve estar visível quando collapsed
      expect(screen.queryByText('Expandable content')).not.toBeInTheDocument()

      // Deve estar visível quando expandido
      rerender(
        <GovBRCard expanded={true} expandableContent={<p>Expandable content</p>}>
          <p>Content</p>
        </GovBRCard>,
      )

      expect(screen.getByText('Expandable content')).toBeInTheDocument()
    })
  })

  // ===== MODO ESTRITO (GOV.BR DS) =====
  describe('Modo Estrito (Gov.br DS)', () => {
    it('should render strict mode with br-card class', () => {
      const { container } = render(
        <GovBRCard strictgovbr>
          <p>Strict mode card</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.br-card')
      expect(card).toBeInTheDocument()
    })

    it('should render header in strict mode', () => {
      render(
        <GovBRCard strictgovbr header="Card Header">
          <p>Content</p>
        </GovBRCard>,
      )

      const header = screen.getByText('Card Header')
      expect(header).toBeInTheDocument()
    })

    it('should render cardContent in strict mode', () => {
      render(
        <GovBRCard strictgovbr cardContent="This is the card content">
          <p>Children</p>
        </GovBRCard>,
      )

      const content = screen.getByText('This is the card content')
      expect(content).toBeInTheDocument()
    })

    it('should render footer in strict mode', () => {
      render(
        <GovBRCard strictgovbr footer="Card Footer">
          <p>Content</p>
        </GovBRCard>,
      )

      const footer = screen.getByText('Card Footer')
      expect(footer).toBeInTheDocument()
    })

    it('should apply hover class when hover prop is true', () => {
      const { container } = render(
        <GovBRCard strictgovbr hover>
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.hover')
      expect(card).toBeInTheDocument()
    })

    it('should apply disabled class when disabled prop is true', () => {
      const { container } = render(
        <GovBRCard strictgovbr disabled>
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.disabled')
      expect(card).toBeInTheDocument()
    })

    it('should not render MUI classes in strict mode', () => {
      const { container } = render(
        <GovBRCard strictgovbr>
          <p>Strict Card</p>
        </GovBRCard>,
      )

      const muiCard = container.querySelector('.MuiCard-root')
      expect(muiCard).not.toBeInTheDocument()
    })
  })

  // ===== PROPS FORWARDING =====
  describe('Props Forwarding', () => {
    it('should forward data attributes', () => {
      const { container } = render(
        <GovBRCard data-testid="custom-card">
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('[data-testid="custom-card"]')
      expect(card).toBeInTheDocument()
    })

    it('should forward MUI variant prop in default mode', () => {
      const { container } = render(
        <GovBRCard variant="outlined">
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.MuiCard-root')
      // MUI aplica variant no Paper, não diretamente no Card
      expect(card).toHaveClass('MuiPaper-outlined')
    })

    it('should forward elevation prop in default mode', () => {
      const { container } = render(
        <GovBRCard elevation={8}>
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.MuiCard-root')
      // MUI aplica classes de elevação
      expect(card).toHaveClass('MuiPaper-elevation8')
    })
  })

  // ===== ACCESSIBILITY =====
  describe('Acessibilidade', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(
        <GovBRCard title="Accessible Card">
          <p>Content</p>
        </GovBRCard>,
      )

      // Verifica se a estrutura HTML é semântica
      const card = container.firstChild
      expect(card).toBeInTheDocument()
    })

    it('should support aria-label', () => {
      const { container } = render(
        <GovBRCard aria-label="Custom card label">
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('[aria-label="Custom card label"]')
      expect(card).toBeInTheDocument()
    })
  })

  // ===== EDGE CASES =====
  describe('Edge Cases', () => {
    it('should render without any props except children', () => {
      render(
        <GovBRCard>
          <p>Minimal card</p>
        </GovBRCard>,
      )

      const content = screen.getByText('Minimal card')
      expect(content).toBeInTheDocument()
    })

    it('should handle empty children', () => {
      const { container } = render(<GovBRCard />)

      const card = container.querySelector('.MuiCard-root')
      expect(card).toBeInTheDocument()
    })

    it('should handle complex nested content', () => {
      render(
        <GovBRCard>
          <div>
            <p>Paragraph 1</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </GovBRCard>,
      )

      expect(screen.getByText('Paragraph 1')).toBeInTheDocument()
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })

    it('should render title without affecting children content', () => {
      render(
        <GovBRCard title="Card Title" cardContent={<p>Card content text</p>}>
          <p>This will not render</p>
        </GovBRCard>,
      )

      expect(screen.getByText('Card Title')).toBeInTheDocument()
      expect(screen.getByText('Card content text')).toBeInTheDocument()
      expect(screen.queryByText('This will not render')).not.toBeInTheDocument()
    })
  })

  // ===== PROPS ESPECÍFICAS =====
  describe('Props Específicas', () => {
    it('should apply maxWidth when provided', () => {
      const { container } = render(
        <GovBRCard maxWidth="400px">
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.MuiCard-root')
      expect(card).toHaveStyle({ maxWidth: '400px' })
    })

    it('should apply fixedHeight class in strict mode', () => {
      const { container } = render(
        <GovBRCard strictgovbr fixedHeight>
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.h-fixed')
      expect(card).toBeInTheDocument()
    })

    it('should support id prop for identification', () => {
      const { container } = render(
        <GovBRCard id="card-123">
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('#card-123')
      expect(card).toBeInTheDocument()
    })

    it('should apply disabled class in strict mode', () => {
      const { container } = render(
        <GovBRCard strictgovbr disabled>
          <p>Content</p>
        </GovBRCard>,
      )

      const card = container.querySelector('.disabled')
      expect(card).toBeInTheDocument()
      expect(card).toHaveAttribute('aria-hidden', 'true')
    })
  })
})
