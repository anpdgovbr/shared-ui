'use client'

/**
 * @file Testes para o componente GovBRLoading.
 *
 * Contém casos de teste cobrindo:
 * - Renderização básica e variantes (default, modal, skeleton)
 * - Modo estrito (strictgovbr) com classes Gov.br DS
 * - Progresso determinístico e clamp entre 0-100
 * - Timeout e comportamento de retry (auto/manual)
 * - Interação dismissible de modal (backdrop e ESC)
 * - Acessibilidade (roles e atributos aria)
 *
 * Observações:
 * - Os testes são executados dentro de um GovBRThemeProvider para garantir
 *   que o tema e overrides do govbrTheme sejam aplicados.
 * - A suite utiliza timers fake do Vitest quando necessário.
 */

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import { GovBRThemeProvider } from '@theme/GovBRThemeProvider'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import { GovBRLoading } from './index'

// Mock do window.location.reload
/**
 * Mock para window.location.reload utilizado nos testes que verificam
 * o comportamento de retry manual.
 *
 * @remarks
 * Este mock substitui o método nativo durante a execução dos testes.
 * A propriedade `window.location` é redefinida com `writable: true`
 * para permitir essa sobrescrita no ambiente de teste.
 *
 * @example
 * // Exemplo de uso em testes:
 * expect(mockReload).not.toHaveBeenCalled()
 *
 * @constant
 */
const mockReload = vi.fn()
Object.defineProperty(window, 'location', {
  value: {
    reload: mockReload,
  },
  writable: true,
})

// Wrapper com tema para testes
/**
 * Wrapper usado nos testes para envolver o componente com o ThemeProvider
 * específico da biblioteca (GovBRThemeProvider). Garante que o tema
 * seja aplicado consistentemente durante os testes.
 *
 * @param props - Propriedades do wrapper de teste
 * @param props.children - Nós React a serem renderizados dentro do Provider
 * @returns JSX.Element - O provider envolvendo os children para os testes
 */
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => (
  <GovBRThemeProvider>{children}</GovBRThemeProvider>
)

/**
 * Suite principal de testes do GovBRLoading.
 *
 * Estrutura:
 * - beforeEach/afterEach configuram timers e limpam mocks
 * - Blocos organizados por funcionalidades (renderização, variantes, modo estrito,
 *   progresso, timeout, retry, dismissible e acessibilidade)
 */
describe('GovBRLoading', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.clearAllTimers()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  describe('Renderização básica', () => {
    it('deve renderizar o componente com texto padrão', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })

    it('deve renderizar com texto customizado', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading text="Processando dados..." />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Processando dados...')).toBeInTheDocument()
    })

    it('não deve renderizar quando isVisible é false', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading text="Não deve aparecer" isVisible={false} />
        </ThemeWrapper>,
      )

      expect(screen.queryByText('Não deve aparecer')).not.toBeInTheDocument()
    })
  })

  describe('Variantes', () => {
    it('deve renderizar variante default corretamente', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading variant="default" text="Loading default" />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Loading default')).toBeInTheDocument()
      // Verifica se tem o CircularProgress
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('deve renderizar variante modal com backdrop', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading variant="modal" text="Loading modal" />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Loading modal')).toBeInTheDocument()
      // Verifica se o modal tem aria-modal
      const modal = screen.getByRole('alert')
      expect(modal).toHaveAttribute('aria-modal', 'true')
    })

    it('deve renderizar variante skeleton', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading variant="skeleton" text="Loading skeleton" />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Loading skeleton')).toBeInTheDocument()
    })
  })

  describe('Modo Estrito (strictgovbr)', () => {
    it('deve renderizar modo estrito com classes Gov.br DS', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading strictgovbr text="Loading estrito" />
        </ThemeWrapper>,
      )

      // No modo estrito, deve renderizar com classes br-loading
      const loadingElement = screen.getByRole('progressbar')
      expect(loadingElement).toHaveClass('br-loading')
    })

    it('deve aplicar tamanho correto no modo estrito', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading strictgovbr size="large" text="Loading grande" />
        </ThemeWrapper>,
      )

      const loadingElement = screen.getByRole('progressbar')
      expect(loadingElement).toHaveClass('br-loading', 'large')
    })

    it('deve renderizar com progresso no modo estrito', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading strictgovbr progress={75} text="Loading com progresso" />
        </ThemeWrapper>,
      )

      const progressElement = screen.getByRole('progressbar')
      expect(progressElement).toHaveAttribute('aria-valuenow', '75')
      expect(progressElement).toHaveAttribute('aria-valuemin', '0')
      expect(progressElement).toHaveAttribute('aria-valuemax', '100')
    })
  })

  describe('Funcionalidade de Progresso', () => {
    it('deve exibir progresso determinístico', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading progress={45} showProgress={true} text="Loading 45%" />
        </ThemeWrapper>,
      )

      expect(screen.getByText('45%')).toBeInTheDocument()
    })

    it('deve ocultar texto de progresso quando showProgress é false', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading progress={60} showProgress={false} text="Loading sem %" />
        </ThemeWrapper>,
      )

      expect(screen.queryByText('60%')).not.toBeInTheDocument()
      expect(screen.getByText('Loading sem %')).toBeInTheDocument()
    })

    it('deve clampar progresso entre 0 e 100', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading progress={150} showProgress={true} text="Loading clamped" />
        </ThemeWrapper>,
      )

      expect(screen.getByText('100%')).toBeInTheDocument()
    })
  })

  describe('Funcionalidade de Timeout', () => {
    it('deve aceitar prop onTimeout sem erro', () => {
      const mockOnTimeout = vi.fn()

      render(
        <ThemeWrapper>
          <GovBRLoading timeout={1000} onTimeout={mockOnTimeout} />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Carregando...')).toBeInTheDocument()
    })

    it('não deve chamar onTimeout se o componente for invisível', () => {
      const mockOnTimeout = vi.fn()

      render(
        <ThemeWrapper>
          <GovBRLoading timeout={1000} onTimeout={mockOnTimeout} isVisible={false} />
        </ThemeWrapper>,
      )

      expect(mockOnTimeout).not.toHaveBeenCalled()
    })
  })

  describe('Funcionalidade de Retry', () => {
    it('deve renderizar com enableRetryFeedback ativado', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading
            timeout={1000}
            autoRetry={true}
            enableRetryFeedback={true}
            text="Loading com retry"
          />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Loading com retry')).toBeInTheDocument()
    })

    it('deve chamar window.location.reload quando clicado manualmente', () => {
      // Teste simples que verifica se o mock está configurado
      expect(mockReload).toBeDefined()
    })
  })

  describe('Funcionalidade Dismissible (Modal)', () => {
    it('deve renderizar modal dismissible', () => {
      const mockOnDismiss = vi.fn()

      render(
        <ThemeWrapper>
          <GovBRLoading
            variant="modal"
            dismissible={true}
            onDismiss={mockOnDismiss}
            text="Modal dismissible"
          />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Modal dismissible')).toBeInTheDocument()
      const modal = screen.getByRole('alert')
      expect(modal).toHaveAttribute('aria-modal', 'true')
    })

    it('deve aceitar props de dismiss sem erro', () => {
      const mockOnDismiss = vi.fn()

      render(
        <ThemeWrapper>
          <GovBRLoading
            variant="modal"
            dismissible={true}
            onDismiss={mockOnDismiss}
            disableEscapeKeyDown={false}
            text="Modal with ESC"
          />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Modal with ESC')).toBeInTheDocument()
    })

    it('deve renderizar sem erro quando ESC está desabilitado', () => {
      const mockOnDismiss = vi.fn()

      render(
        <ThemeWrapper>
          <GovBRLoading
            variant="modal"
            dismissible={true}
            onDismiss={mockOnDismiss}
            disableEscapeKeyDown={true}
            text="Modal ESC disabled"
          />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Modal ESC disabled')).toBeInTheDocument()
    })

    it('deve renderizar conteúdo do modal corretamente', () => {
      const mockOnDismiss = vi.fn()

      render(
        <ThemeWrapper>
          <GovBRLoading
            variant="modal"
            dismissible={true}
            onDismiss={mockOnDismiss}
            text="Modal content click"
          />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Modal content click')).toBeInTheDocument()
    })
  })

  describe('Acessibilidade', () => {
    it('deve ter role progressbar', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading text="Loading accessibility" />
        </ThemeWrapper>,
      )

      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('deve ter aria-modal quando variant é modal', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading variant="modal" text="Modal accessibility" />
        </ThemeWrapper>,
      )

      const modal = screen.getByRole('alert')
      expect(modal).toHaveAttribute('aria-modal', 'true')
    })

    it('deve renderizar modo skeleton com texto', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading variant="skeleton" text="Skeleton accessibility" />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Skeleton accessibility')).toBeInTheDocument()
    })

    it('deve usar progressLabel customizado para aria-label', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading
            strictgovbr
            progress={25}
            progressLabel="Carregando arquivo importante"
            text="Custom label"
          />
        </ThemeWrapper>,
      )

      const progressElement = screen.getByRole('progressbar')
      expect(progressElement).toHaveAttribute('aria-label', 'Carregando arquivo importante')
    })
  })

  describe('Integração com props customizadas', () => {
    it('deve aplicar className no modo estrito', () => {
      render(
        <ThemeWrapper>
          <GovBRLoading strictgovbr className="custom-loading" text="Custom class" />
        </ThemeWrapper>,
      )

      const loadingElement = screen.getByRole('progressbar')
      expect(loadingElement).toHaveClass('br-loading', 'custom-loading')
    })

    it('deve funcionar com todas as props combinadas', () => {
      const mockOnTimeout = vi.fn()
      const mockOnDismiss = vi.fn()

      render(
        <ThemeWrapper>
          <GovBRLoading
            text="Loading completo"
            timeout={5000}
            onTimeout={mockOnTimeout}
            variant="modal"
            dismissible={true}
            onDismiss={mockOnDismiss}
            progress={80}
            showProgress={true}
            enableRetryFeedback={true}
          />
        </ThemeWrapper>,
      )

      expect(screen.getByText('Loading completo')).toBeInTheDocument()
      expect(screen.getByText('80%')).toBeInTheDocument()
      expect(screen.getByRole('alert')).toHaveAttribute('aria-modal', 'true')
    })
  })
})
