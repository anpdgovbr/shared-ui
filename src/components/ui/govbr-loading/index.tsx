'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import { useCallback, useEffect, useState } from 'react'

import type { LoadingAnimationProps } from './types'

/**
 * Número máximo de tentativas de recarregamento automático
 * antes de exibir a opção de retry manual.
 */
const MAX_RELOAD_ATTEMPTS = 3

// Skeleton loading para modais - SE ADAPTA AO CONTAINER
/**
 * SkeletonLoading
 *
 * Skeleton usado para indicar carregamento dentro de contêineres/modais.
 *
 * @param props.text - Texto de descrição exibido abaixo do indicador
 * @param props.progress - Progresso numérico (0-100). Quando fornecido, mostra estado determinate.
 * @param props.showProgress - Se true, exibe a porcentagem central dentro do indicador.
 */
function SkeletonLoading({
  text,
  progress,
  showProgress = true,
}: Readonly<{
  text: string
  progress?: number
  showProgress?: boolean
}>) {
  const hasProgress = typeof progress === 'number'
  const clampedProgress = hasProgress ? Math.max(0, Math.min(100, Math.round(progress))) : 0

  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(3px)',
        borderRadius: 'inherit',
        zIndex: 1400,
        minHeight: 120, // Altura mínima para não ficar muito pequeno
      }}
    >
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant={hasProgress ? 'determinate' : 'indeterminate'}
          value={hasProgress ? clampedProgress : undefined}
          size={48}
          thickness={4}
          sx={{
            color: 'primary.main',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
          }}
        />
        {hasProgress && showProgress && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={(theme) => ({
                fontWeight: 'bold',
                fontSize: '0.7rem',
                color: theme.palette.text.primary,
              })}
            >
              {clampedProgress}%
            </Typography>
          </Box>
        )}
      </Box>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          textAlign: 'center',
          color: 'text.primary',
          fontSize: '0.875rem',
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>
    </Box>
  )
}

// Strict Gov.br DS Loading - renderização HTML pura
/**
 * StrictGovBRLoading
 *
 * Versão que renderiza HTML puro com classes do Gov.br DS.
 * Utilizar quando for necessária fidelidade 100% ao CSS do Gov.br.
 *
 * @param props.size - Tamanho do componente ('small' | 'medium' | 'large')
 * @param props.progress - Progresso numérico (0-100) para barra de progresso
 * @param props.progressLabel - Label alternativa para accessibility/aria
 * @param props.className - Classes adicionais repassadas para o elemento
 * @param props.text - Texto descritivo usado como fallback para aria-label
 */
function StrictGovBRLoading({
  size = 'medium',
  progress,
  progressLabel,
  className,
  text,
}: Readonly<{
  size?: 'small' | 'medium' | 'large'
  progress?: number
  progressLabel?: string
  className?: string
  text?: string
}>) {
  const classes = `br-loading ${size !== 'medium' ? size : ''} ${className || ''}`.trim()

  // Loading com progresso (Gov.br DS)
  if (typeof progress === 'number') {
    const clampedProgress = Math.max(0, Math.min(100, Math.round(progress)))
    const ariaLabel = progressLabel || text || `carregando ${clampedProgress}%`

    return (
      <progress
        className={classes}
        data-progress={clampedProgress}
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel}
      >
        <div className="br-loading-mask full">
          <div className="br-loading-fill"></div>
        </div>
        <div className="br-loading-mask">
          <div className="br-loading-fill"></div>
        </div>
      </progress>
    )
  }

  // Loading indeterminado
  return <progress className={classes} aria-label={text || 'carregando'} />
}

// Componente de retry otimizado
/**
 * RetrySection
 *
 * Bloco de UI que apresenta o contador de tentativas e, quando aplicável,
 * o botão manual de retry após atingir o limite de tentativas automáticas.
 *
 * @param attempts - Número atual de tentativas já realizadas
 * @param autoRetry - Se true, indica que o retry é automático (sem botão manual)
 * @param onManualRetry - Callback para executar retry manual (ex: recarregar a página)
 */
function RetrySection({
  attempts,
  autoRetry,
  onManualRetry,
}: Readonly<{
  attempts: number
  autoRetry: boolean
  onManualRetry: () => void
}>) {
  if (attempts === 0) return null

  return (
    <>
      <Typography
        variant="caption"
        sx={(theme) => ({
          mt: 1,
          textAlign: 'center',
          color: theme.palette.error.main,
        })}
      >
        Tentativa {attempts} de {MAX_RELOAD_ATTEMPTS}
      </Typography>
      {!autoRetry && attempts >= MAX_RELOAD_ATTEMPTS && (
        <Button
          variant="outlined"
          size="small"
          onClick={onManualRetry}
          sx={(theme) => ({
            mt: 2,
            borderRadius: theme.shape.borderRadius,
            textTransform: 'none',
            fontSize: '0.875rem',
          })}
        >
          Tentar novamente
        </Button>
      )}
    </>
  )
}

// Componente de loading otimizado
/**
 * LoadingContent
 *
 * Conteúdo principal do indicador de carregamento no modo padrão (MUI).
 * Exibe CircularProgress (com ou sem progresso), texto descritivo e
 * seção de retry quando configurada.
 *
 * @param props.text - Texto que descreve o estado de carregamento
 * @param props.attempts - Número de tentativas de reload já ocorridas
 * @param props.autoRetry - Se true, tentativa automática de reload está habilitada
 * @param props.enableRetryFeedback - Se true, apresenta feedback visual de tentativas
 * @param props.onManualRetry - Callback disparado ao acionar retry manual
 * @param props.progress - Progresso numérico (0-100) opcional
 * @param props.showProgress - Se true, exibe a porcentagem sobre o indicador
 */
function LoadingContent({
  text,
  attempts,
  autoRetry,
  enableRetryFeedback,
  onManualRetry,
  progress,
  showProgress,
}: Readonly<{
  text: string
  attempts: number
  autoRetry: boolean
  enableRetryFeedback: boolean
  onManualRetry: () => void
  progress?: number
  showProgress?: boolean
}>) {
  const hasProgress = typeof progress === 'number'
  const clampedProgress = hasProgress ? Math.max(0, Math.min(100, Math.round(progress))) : 0

  return (
    <>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant={hasProgress ? 'determinate' : 'indeterminate'}
          value={hasProgress ? clampedProgress : undefined}
          size={60}
          thickness={3.6}
          sx={{
            color: 'primary.main',
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          }}
        />
        {hasProgress && showProgress && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="caption"
              component="div"
              sx={(theme) => ({
                fontWeight: 'bold',
                fontSize: '0.75rem',
                color: theme.palette.text.secondary,
              })}
            >
              {clampedProgress}%
            </Typography>
          </Box>
        )}
      </Box>
      <Typography
        variant="body2"
        sx={{
          mt: 2,
          textAlign: 'center',
          color: 'text.secondary',
          fontSize: '0.875rem',
        }}
      >
        {text}
      </Typography>
      {enableRetryFeedback && (
        <RetrySection attempts={attempts} autoRetry={autoRetry} onManualRetry={onManualRetry} />
      )}
    </>
  )
}

/**
 * GovBRLoading
 *
 * Componente principal de carregamento da biblioteca shared-ui.
 *
 * Funcionalidades:
 * - Suporta modo padrão (MUI) e modo estrito (HTML puro Gov.br DS) via `strictgovbr`.
 * - Variantes: 'default' (centro da tela), 'modal' (overlay) e 'skeleton' (adaptável ao container).
 * - Suporte a progresso determinístico (0-100), exibição de porcentagem e retries automáticos/manuais.
 * - Opções de acessibilidade: aria-live, aria-modal e labels para progressbar.
 * - Pode ser dismissible (fechar ao clicar no backdrop) e aceitar ESC para dismiss (configurável).
 *
 * @param props.text - Texto exibido abaixo do indicador (padrão: 'Carregando...')
 * @param props.timeout - Tempo (ms) antes de disparar onTimeout ou tentativa de retry
 * @param props.onTimeout - Callback executado quando o tempo expira e enableRetryFeedback=false
 * @param props.isVisible - Controla visibilidade do componente
 * @param props.autoRetry - Se true, tenta recarregar a página automaticamente ao timeout
 * @param props.enableRetryFeedback - Se true, mostra contador de tentativas e comportamento incremental
 * @param props.variant - 'default' | 'modal' | 'skeleton'
 * @param props.dismissible - Se true, permite fechar clicando no backdrop (aplica-se à variante modal)
 * @param props.onDismiss - Callback chamado quando o loading é dismissado
 * @param props.disableEscapeKeyDown - Se true, desabilita fechar com tecla ESC
 * @param props.strictgovbr - Se true, renderiza StrictGovBRLoading (HTML puro)
 * @param props.size - Tamanho usado no modo strictgovbr ('small'|'medium'|'large')
 * @param props.progress - Progresso atual (0-100) exibido quando aplicável
 * @param props.showProgress - Se true, exibe porcentagem no indicador
 * @param props.progressLabel - Texto alternativo para aria quando estiver usando progresso
 * @param props.className - Classes adicionais repassadas ao modo strictgovbr
 *
 * @returns JSX.Element | null
 */
export function GovBRLoading({
  text = 'Carregando...',
  timeout = 4000,
  onTimeout,
  isVisible = true,
  autoRetry = false,
  enableRetryFeedback = false,
  variant = 'default',
  dismissible = false,
  onDismiss,
  disableEscapeKeyDown = false,
  strictgovbr = false,
  size = 'medium',
  progress,
  showProgress = true,
  progressLabel,
  className,
}: Readonly<LoadingAnimationProps>) {
  const [reloadAttempts, setReloadAttempts] = useState(0)

  const handleManualRetry = useCallback(() => {
    window.location.reload()
  }, [])

  // Handle backdrop click to dismiss modal (memoized)
  const handleBackdropClick = useCallback(() => {
    if (dismissible && onDismiss) {
      onDismiss()
    }
  }, [dismissible, onDismiss])

  useEffect(() => {
    if (!isVisible || reloadAttempts >= MAX_RELOAD_ATTEMPTS) return

    const timer = setTimeout(() => {
      if (!navigator.onLine) return

      if (enableRetryFeedback) {
        const next = reloadAttempts + 1
        setReloadAttempts(next)
        if (autoRetry && next <= MAX_RELOAD_ATTEMPTS) {
          setTimeout(() => window.location.reload(), 1000)
        }
      } else if (onTimeout) {
        onTimeout()
      } else if (autoRetry) {
        window.location.reload()
      }
    }, timeout)

    return () => clearTimeout(timer)
  }, [timeout, autoRetry, onTimeout, isVisible, reloadAttempts, enableRetryFeedback])

  // Handle ESC key press to dismiss modal
  useEffect(() => {
    if (!isVisible || !dismissible || disableEscapeKeyDown) return

    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && onDismiss) {
        onDismiss()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => document.removeEventListener('keydown', handleEscapeKey)
  }, [isVisible, dismissible, disableEscapeKeyDown, onDismiss])

  if (!isVisible) return null

  // Modo Estrito: Renderização HTML pura com classes Gov.br DS
  if (strictgovbr) {
    return (
      <StrictGovBRLoading
        size={size}
        progress={progress}
        progressLabel={progressLabel}
        className={className}
        text={text}
      />
    )
  }

  const commonProps = {
    text,
    attempts: reloadAttempts,
    autoRetry,
    enableRetryFeedback,
    onManualRetry: handleManualRetry,
    progress,
    showProgress,
  }

  // Variante skeleton - se adapta ao container pai
  if (variant === 'skeleton') {
    return <SkeletonLoading text={text} progress={progress} showProgress={showProgress} />
  }

  // Variante modal - overlay simples e elegante
  if (variant === 'modal') {
    return (
      <Dialog
        open={isVisible}
        onClose={dismissible ? handleBackdropClick : undefined}
        disableEscapeKeyDown={!dismissible || disableEscapeKeyDown}
        aria-modal="true"
        aria-label={dismissible ? 'Clique fora para cancelar' : undefined}
        slotProps={{
          backdrop: {
            sx: {
              bgcolor: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(3px)',
              cursor: dismissible ? 'pointer' : 'default',
            },
          },
          paper: {
            sx: (theme) => ({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: 3,
              borderRadius: theme.shape.borderRadius,
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
              minWidth: 200,
              maxWidth: '300px',
              animation: 'slideUp 0.3s ease-out',
              '@keyframes slideUp': {
                from: { opacity: 0, transform: 'translateY(10px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }),
          },
        }}
      >
        <LoadingContent {...commonProps} />
      </Dialog>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
      role="alert"
      aria-live="assertive"
    >
      <LoadingContent {...commonProps} />
    </Box>
  )
}
